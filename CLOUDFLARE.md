# Cloudflare Workers deployment

This Next.js app uses the OpenNext Cloudflare adapter. The Worker name and WORKER_SELF_REFERENCE service must both be `promanage-builders`.

## Cloudflare Git build settings

- Build command: `npm run build:cloudflare`
- Deploy command: `npm run deploy:cloudflare`
- Worker name: `promanage-builders`

Install dependencies using `npm ci`. Commit package-lock.json when dependencies change.

The tested framework/toolchain is Next.js 16.4.3, OpenNext Cloudflare 1.20.14,
and Wrangler 4.155.0. The lockfile is generated and validated with npm 10.9.2.
The build/dev scripts explicitly use Webpack to retain the existing Webpack
configuration. TypeScript build checks remain enabled. The legacy `eslint`
Next.js config key was removed for Next.js 16; linting is a separate npm script.

The existing deploy command `npx wrangler deploy` is also supported: the Wrangler build hook runs the OpenNext build before uploading. If retaining it, the separate build command may be left blank to avoid building twice.

For local preview run `npm run preview:cloudflare`. For a manual deployment, run `npm run build:cloudflare` followed by `npm run deploy:cloudflare` after authenticating with Cloudflare.

Do not commit .dev.vars, Cloudflare API tokens, or build output.

## Google Analytics 4

The site's configured Measurement ID is `G-NDK2HB83SK`, supplied by the owner.
It is the public fallback in `lib/analytics.ts`. To override it, set
`NEXT_PUBLIC_GA_MEASUREMENT_ID` to a web stream's `G-...` ID in the Worker's
Settings > Build > Build variables and secrets, then rebuild/redeploy. This is a
Next.js build-time public variable; adding only a runtime Worker binding will not
update the client bundle. An explicitly empty build variable disables tracking.
After changing the public fallback, publish through the existing Git workflow.

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

## Search indexing and maintenance video

The canonical origin is `https://promanagebuilders.com`. Middleware permanently
redirects HTTP page requests and the www/production workers.dev hosts to that
origin while preserving the path and query. Public assets can be served before
middleware by Cloudflare; enable the zone's Always Use HTTPS setting if HTTPS
enforcement is also wanted for every static asset request.

`/videos/building-maintenance` is the dedicated watch page. It has a prominent
server-rendered player, captions, a transcript, VideoObject metadata, and a video
entry in `/sitemap.xml`. Existing marketing/project pages can still embed the
same video; they are not intended to become video watch pages.

Only `/media/*.vtt` receives `X-Robots-Tag: noindex`. Cloudflare applies this from
`public/_headers`, which must remain in the generated `.open-next/assets`
directory. `next.config.ts` provides the equivalent header when Next serves
the caption file. Keep captions, the MP4 and thumbnail crawlable. Do not block
these resources in robots.txt or apply noindex to the MP4/thumbnail.

After deployment, resubmit the existing sitemap URL in Search Console. Inspect
the HTTPS watch page, run Test Live URL, then Request Indexing. HTTP duplicates,
permanent redirects and caption files do not need indexing requests. Recheck
the canonical HTTPS page if an alternate-URL report persists; successful
technical checks do not guarantee that Google will index a page or video.

`worker.mjs` delegates pages to the generated OpenNext worker and handles only
the maintenance MP4 before Workers Assets. `lib/serve-video.mjs` implements
single-byte Range requests (206/416), HEAD and If-Range validators, because the
asset service otherwise returns the full file for range requests. Other static
assets retain asset-first routing. Keep this handler scoped to this small video;
use a streaming media store for substantially larger video libraries.
