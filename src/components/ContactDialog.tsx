import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, LoaderCircle, MessageCircle, Send, X } from 'lucide-react';
import { directEmailEnabled, emailAddress, emailLink, enquiryEmailLink, submitEnquiry, whatsappLink, whatsappNumber, type Enquiry } from '../lib/contact';
import './ContactDialog.css';

export default function ContactDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const confirmation = useRef<HTMLHeadingElement>(null);
  const pending = useRef(false);
  const [details, setDetails] = useState<Enquiry>({ name: '', email: '', website: '', project: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const sending = status === 'sending';

  useEffect(() => {
    const node = dialog.current;
    if (node && !node.open) node.showModal();
  }, []);
  useEffect(() => {
    if (status === 'success') confirmation.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    if (!directEmailEnabled) {
      window.location.href = enquiryEmailLink(details);
      return;
    }
    const form = new FormData(event.currentTarget);
    pending.current = true;
    setStatus('sending');
    setError('');
    try {
      await submitEnquiry({ ...details, honey: String(form.get('_honey') || '') });
      setStatus('success');
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Please try again, or contact me using the links below.');
      setStatus('error');
    } finally {
      pending.current = false;
    }
  }

  return <dialog ref={dialog} className="brief-dialog" aria-labelledby="brief-title" onClose={onClose} onCancel={event => {
    if (pending.current) event.preventDefault();
  }} onClick={event => {
    if (event.target !== dialog.current || pending.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  }}>
    <div className="brief-heading"><span className="eyebrow">LET’S START WITH YOUR IDEA</span><button className="icon-button" disabled={sending} onClick={onClose} aria-label="Close project enquiry"><X size={22} /></button></div>
    {status === 'success' ? <div className="enquiry-success" role="status">
      <span className="enquiry-success-icon"><Check size={25} /></span>
      <h2 id="brief-title" ref={confirmation} tabIndex={-1}>Thanks for<br /><em>getting in touch.</em></h2>
      <p>Your enquiry has been submitted. I’ll reply to <strong>{details.email.trim()}</strong> to talk through your project.</p>
      <button className="button button-primary" onClick={onClose}>Back to the portfolio <ArrowUpRight size={18} /></button>
    </div> : <>
      <h2 id="brief-title">What are you<br /><em>working on?</em></h2>
      <p>A few details are all we need to start a conversation.</p>
      <form onSubmit={onSubmit} aria-busy={sending} aria-describedby="enquiry-note">
        <fieldset disabled={sending} className="enquiry-fields">
          <div className="enquiry-person">
            <label>Your name<input required maxLength={100} name="name" autoComplete="name" value={details.name} onChange={event => setDetails({ ...details, name: event.target.value })} placeholder="What should I call you?" /></label>
            <label>Your email<input required type="email" maxLength={254} name="email" autoComplete="email" value={details.email} onChange={event => setDetails({ ...details, email: event.target.value })} placeholder="you@company.com" /></label>
          </div>
          <label>Current website <span>(optional)</span><input type="url" maxLength={500} name="website" autoComplete="url" placeholder="https://yourwebsite.com" value={details.website} onChange={event => setDetails({ ...details, website: event.target.value })} /></label>
          <label>Tell me about your project<textarea required maxLength={3000} name="project" rows={4} placeholder="A new website, a redesign, a little help with WordPress…" value={details.project} onChange={event => setDetails({ ...details, project: event.target.value })} /></label>
          <div className="enquiry-honey" aria-hidden="true"><label>Leave this field empty<input name="_honey" autoComplete="off" tabIndex={-1} /></label></div>
        </fieldset>
        {status === 'error' && <div className="enquiry-error" role="alert"><p>{error}</p><a href={enquiryEmailLink(details)}>Send these details by email <ArrowUpRight size={14} /></a></div>}
        <button className="button button-primary enquiry-submit" type="submit" disabled={sending}>{sending ? <>Sending your enquiry… <LoaderCircle size={18} className="enquiry-spinner" /></> : directEmailEnabled ? <>Send enquiry <Send size={17} /></> : <>Continue in email <ArrowUpRight size={18} /></>}</button>
        <p id="enquiry-note" className="form-note">{directEmailEnabled ? 'Your details are emailed to Isiah through FormSubmit so he can reply to your enquiry.' : 'Opens your email app with your details filled in. Nothing is sent until you send the email.'}</p>
      </form>
    </>}
    <div className="enquiry-alternatives">
      <a href={emailLink}>{emailAddress} <ArrowUpRight size={13} /></a>
      <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Chat on WhatsApp at ${whatsappNumber} (opens in a new tab)`}><MessageCircle size={15} /><span>WhatsApp · {whatsappNumber}</span><ArrowUpRight size={13} /></a>
    </div>
  </dialog>;
}
