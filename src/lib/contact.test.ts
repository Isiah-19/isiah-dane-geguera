import assert from 'node:assert/strict';
import test from 'node:test';
import { enquiryEmailLink, formEndpoint, submitEnquiry, type Enquiry } from './contact';

const example: Enquiry = {
  name: '  Portfolio QA  ', email: ' client@example.com ', website: '',
  project: '  I would like a website redesign.  ',
};

test('an accepted enquiry includes every field and a usable reply-to address', async () => {
  let called = false;
  const request: typeof fetch = async (url, options) => {
    called = true;
    assert.equal(url, formEndpoint);
    assert.equal(options?.method, 'POST');
    const body = JSON.parse(String(options?.body));
    assert.equal(body.name, 'Portfolio QA');
    assert.equal(body.email, 'client@example.com');
    assert.equal(body._replyto, body.email);
    assert.equal(body.website, 'Not yet');
    assert.equal(body.project, 'I would like a website redesign.');
    assert.equal(body._url, 'https://isiah-dane-geguera.vercel.app/');
    assert.equal(body._honey, '');
    assert.ok(options?.signal);
    return Response.json({ success: 'true' });
  };
  await submitEnquiry(example, request);
  assert.equal(called, true);
});

test('HTTP 200 with an activation error or missing acceptance never shows success', async () => {
  for (const body of [{ success: 'false', message: 'This form needs activation' }, { success: false }, { success: 'pending' }, {}, null]) {
    await assert.rejects(submitEnquiry(example, async () => Response.json(body)), /could not be confirmed/);
  }
});

test('HTTP errors, invalid JSON, and connection failure preserve the retry path', async () => {
  for (const request of [
    async () => new Response('Unavailable', { status: 503 }),
    async () => new Response('<html>Error</html>', { status: 200 }),
    async () => { throw new TypeError('Network unavailable'); },
    async () => { throw new DOMException('Timeout', 'AbortError'); },
  ]) {
    await assert.rejects(submitEnquiry(example, request), /details are still here/);
  }
});

test('invalid details are rejected before making a request', async () => {
  let requests = 0;
  const request: typeof fetch = async () => { requests++; return Response.json({ success: true }); };
  for (const changes of [{ name: '   ' }, { email: 'invalid' }, { project: '\n ' }, { website: 'javascript:alert(1)' }]) {
    await assert.rejects(submitEnquiry({ ...example, ...changes }, request));
  }
  assert.equal(requests, 0);
});

test('the email fallback retains the project and contact details', () => {
  const url = new URL(enquiryEmailLink({ ...example, website: 'https://example.com/' }));
  assert.equal(url.pathname, 'igeguera@gmail.com');
  const body = url.searchParams.get('body') || '';
  assert.match(body, /Portfolio QA/);
  assert.match(body, /client@example\.com/);
  assert.match(body, /https:\/\/example\.com\//);
  assert.match(body, /I would like a website redesign\./);
});
