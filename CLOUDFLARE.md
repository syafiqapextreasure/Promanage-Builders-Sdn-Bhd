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
