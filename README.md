# Beauty by Linh

Lashes studio website built with React + Vite + TypeScript.

## What is included

- Multi-page SPA experience with React Router (`/`, `/tjenester`, `/priser`, `/galleri`, `/vippeextensions`)
- Booking modal (Timma iframe)
- Stripe Payment Link support on the pricing page (optional)
- Supabase contact capture from footer form (optional)
- Deployment-ready SPA rewrites for Vercel (`vercel.json`)

## Local development

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
npm run preview
```

## Environment setup

Copy `.env.example` to `.env.local` and fill in values you want to enable.

```bash
cp .env.example .env.local
```

### Stripe (optional)

The pricing page can show direct deposit checkout buttons using Stripe Payment Links.

- `VITE_STRIPE_PAYMENT_LINK_NEW_SET`
- `VITE_STRIPE_PAYMENT_LINK_REFILL`
- `VITE_STRIPE_PAYMENT_LINK_LIFT`

If these are empty, the UI falls back to standard booking text.

### Supabase contact form (optional)

Footer form will insert submissions into Supabase when these are set:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_CONTACT_TABLE` (default: `contact_messages`)

If not configured, the form falls back to opening a pre-filled `mailto:` draft.

Apply the table/policy SQL from:

- `supabase/contact_messages.sql`

## Deploy (Vercel)

1. Build passes locally:

```bash
npm run build
```

2. Deploy preview:

```bash
vercel deploy
```

3. Deploy production (only when ready):

```bash
vercel deploy --prod
```

The project includes `vercel.json` SPA rewrite rules so route refreshes continue to work.
