# Portfolio contact delivery

- Recipient: `igeguera@gmail.com`
- WhatsApp: `+63 977 265 5441` (`09772655441` locally)
- Current delivery: the visitor's email app, with all form details prefilled.
- Prepared direct delivery: FormSubmit's browser AJAX endpoint. This is **disabled** until the owner approves sharing their recipient address and visitors' enquiry details with FormSubmit. No API key or mailbox password is stored in this repository.
- Fields: name, email, optional website, and project details. The visitor's email is used as Reply-To.

## One-time activation

After the owner approves FormSubmit, enable `directEmailEnabled` in `src/lib/contact.ts` and submit one clearly labelled setup test. FormSubmit sends an activation email to the recipient above. Open that email and click **Activate Form**; check Spam if it is missing. The site cannot confirm mailbox ownership on your behalf. The initial activation test was blocked by automatic approval review; no successful delivery has been verified.

The form uses the production portfolio URL as `_url`, including in previews, so activation is tied to the intended site. Until the provider explicitly reports acceptance, the interface shows an error and preserves entered details. Visitors can send those details through their email app or use WhatsApp instead.

After activation, submit one new test and verify the message reaches the inbox with every field and a working Reply-To address. A successful API response confirms provider acceptance, not inbox delivery. No delivery guarantee or automatic response to the visitor is shown.

## Verification

Run `node --import tsx --test src/lib/contact.test.ts`, `npm run lint`, and `npm run build`.
Check the form at desktop and phone widths, required-field validation, pending and error states, successful submission after activation, Escape dismissal, and return focus to the opening button. The hidden `_honey` field supplements the provider's spam filtering; the form does not disable provider CAPTCHA settings.

References: https://formsubmit.co/documentation and https://formsubmit.co/help
