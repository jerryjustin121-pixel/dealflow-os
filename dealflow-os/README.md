# DealFlow OS

AI revenue recovery platform for real estate brokerages — score leads, prioritize follow-ups, and generate outreach.

## Quick start

```bash
cd dealflow-os
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- **Dashboard** — priority leads, pipeline metrics, AI insights
- **Leads** — AI-scored lead queue sorted by close probability
- **Lead detail** — re-score leads and generate follow-up messages
- **CSV import** — upload lead databases with automatic scoring on import
- **CRM modules** — deals, contacts, companies, tasks, calendar, reports

## Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | No | Enables AI scoring and follow-up generation (heuristic fallback without it) |
| `DATABASE_URL` | No | PostgreSQL for Prisma persistence |

## Database (optional)

```bash
npx prisma migrate dev
npm run prisma:seed
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint
