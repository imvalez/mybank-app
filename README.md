# MyBank App

MyBank App is a portfolio home-banking simulation built with a React frontend and an Express backend.
It focuses on practical UX features (privacy mode, quick transfer flow, movement filtering, CSV export) and a simple API layer suitable for learning full-stack fundamentals.

## Tech stack

- Frontend: React, React Router, Vite
- Backend: Node.js, Express
- Data layer: local JSON file (`backend/db.json`)

## Features

- account overview with balance visibility toggle
- transfers with immediate balance and movement updates
- movement filtering and CSV export
- language toggle (IT/EN) and theme toggle

## Project structure

```text
mybank-app/
├─ src/                 # React application
├─ backend/             # Express API and JSON datastore
├─ .env.example         # Frontend environment template
└─ .github/workflows/   # CI workflow
```

## Requirements

- Node.js 20+ (LTS recommended)
- npm 10+

## Local development

Run backend:

```bash
cd backend
npm ci
npm start
```

Run frontend (new terminal):

```bash
npm ci
npm run dev
```

Frontend: `http://localhost:5173`
Backend API: `http://localhost:3000/api`

## Environment variables

Create `.env` in repository root from `.env.example`:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

## Quality checks

Frontend:

```bash
npm run lint
npm run build
```

Backend:

```bash
cd backend
npm test
```

## Security and privacy notes

- no production credentials are stored in this repository
- demo account data is synthetic and not tied to real users
- report vulnerabilities via `SECURITY.md`

## Open source

- License: MIT (`LICENSE`)
- Contributing guide: `CONTRIBUTING.md`
- Code of conduct: `CODE_OF_CONDUCT.md`
- Changelog: `CHANGELOG.md`

Maintainer: @valbot
