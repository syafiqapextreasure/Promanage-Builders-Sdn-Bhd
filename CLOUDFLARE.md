# Cloudflare Workers deployment

This Next.js app uses the OpenNext Cloudflare adapter. The Worker name and WORKER_SELF_REFERENCE service must both be `promanage-builders`.

## Cloudflare Git build settings

- Build command: `npm run build:cloudflare`
- Deploy command: `npm run deploy:cloudflare`
- Worker name: `promanage-builders`

Install dependencies using `npm ci`. Commit package-lock.json when dependencies change.

The existing deploy command `npx wrangler deploy` is also supported: the Wrangler build hook runs the OpenNext build before uploading. If retaining it, the separate build command may be left blank to avoid building twice.

For local preview run `npm run preview:cloudflare`. For a manual deployment, run `npm run build:cloudflare` followed by `npm run deploy:cloudflare` after authenticating with Cloudflare.

Do not commit .dev.vars, Cloudflare API tokens, or build output.

## Google Analytics 4

Analytics is inactive until a real Measurement ID is configured. No ID is fabricated.
Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the web stream's `G-...` ID in the Worker's
Settings > Build > Build variables and secrets, then rebuild/redeploy. This is a
Next.js build-time public variable; adding only a runtime Worker binding will not
update the client bundle. Alternatively, maintain the public ID as the fallback
in `lib/analytics.ts` and publish through the existing Git workflow.

Create the GA4 property for `https://promanagebuilders.com`, with Malaysia time
zone and MYR currency. Create a Web data stream. In Enhanced measurement:

- Keep Page views on, including Page changes based on browser history events.
- Keep Scrolls on if wanted.
- Turn Outbound clicks off. The site sends its own contact events without link
  URLs; WhatsApp URLs can contain enquiry text, which must not reach Analytics.
- Turn Form interactions and Site search off. No enquiry text or form values
  are sent by the custom tracking implementation.

Do not install another GA4 tag or GTM container on top of this implementation.
Initial page views and browser-history navigation use GA4's automatic measurement
only, so there is no competing manual page-view handler. Scripts are enabled only
on the public company domain, and load after the page becomes interactive.

Custom event names: `whatsapp_click`, `phone_click`, `email_click`,
`directions_click`. They include only `contact_source` (`link` or `enquiry_form`)
and the current page path, plus the destination Measurement ID. These measure
contact intent, not confirmed messages, enquiries or sales. Google Signals and
advertising personalisation signals are disabled in this basic setup.

After activation, open the public site and use Realtime/DebugView to confirm
initial and navigated `page_view` events, then a contact event. WhatsApp tests can
open a draft; do not send it. Standard reports can take 24-48 hours to populate.
Keep the client's account ownership and reporting access with the client.
