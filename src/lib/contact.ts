export const emailAddress = 'igeguera@gmail.com';
export const emailLink = `mailto:${emailAddress}?subject=Let%E2%80%99s%20talk%20about%20my%20website`;
export const whatsappNumber = '+63 977 265 5441';
export const whatsappLink = 'https://wa.me/639772655441';
export const portfolioUrl = 'https://isiah-dane-geguera.vercel.app/';
export const formEndpoint = `https://formsubmit.co/ajax/${emailAddress}`;
// Keep delivery through the visitor's email app until the owner approves FormSubmit.
export const directEmailEnabled = false;

export type Enquiry = {
  name: string;
  email: string;
  website: string;
  project: string;
  honey?: string;
};

const unavailable = 'Your enquiry could not be confirmed. Your details are still here — please try again, or send them using the email link below.';

export function enquiryEmailLink(enquiry: Enquiry) {
  const body = `Hi Isiah,\n\nI'm ${enquiry.name.trim()}.\nEmail: ${enquiry.email.trim()}\nCurrent website: ${enquiry.website.trim() || 'Not yet'}\n\n${enquiry.project.trim()}\n\nThanks,\n${enquiry.name.trim()}`;
  return `mailto:${emailAddress}?subject=${encodeURIComponent('New portfolio enquiry')}&body=${encodeURIComponent(body)}`;
}

// The recipient is fixed. Only show success when the provider explicitly accepts it.
export async function submitEnquiry(enquiry: Enquiry, request: typeof fetch = fetch) {
  const name = enquiry.name.trim();
  const email = enquiry.email.trim();
  const website = enquiry.website.trim();
  const project = enquiry.project.trim();
  if (!name || name.length > 100 || !project || project.length > 3000 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Please enter your name, a valid email address, and a few details about your project.');
  }
  if (website && (website.length > 500 || !/^https?:\/\//i.test(website))) {
    throw new Error('Please use a website address starting with https:// or http://.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await request(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        name, email, website: website || 'Not yet', project,
        _replyto: email,
        _subject: 'New portfolio enquiry | Isiah Dane Geguera',
        _template: 'table',
        _url: portfolioUrl,
        _honey: enquiry.honey || '',
      }),
    });
    if (!response.ok) throw new Error(unavailable);
    const result: unknown = await response.json();
    if (!result || typeof result !== 'object' || !('success' in result) || (result.success !== true && result.success !== 'true')) {
      throw new Error(unavailable);
    }
  } catch {
    throw new Error(unavailable);
  } finally {
    clearTimeout(timeout);
  }
}
