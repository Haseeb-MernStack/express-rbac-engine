# express-rbac-engine

Minimal Express RBAC (role-based access control) example.

## Prerequisites

- Node.js 16+ installed
- A MongoDB connection (local or hosted)

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Start the app:

```bash
npm start
```

4. API example

- Health: `GET /` or `GET /health`
- Demo protected route: `GET /demo` (requires authentication + appropriate role)

## Environment variables

See `.env.example` for required variables and default suggestions.

## Notes

- Add users and roles via your DB or a seeding script so RBAC middleware has roles to check.
- For production, ensure `JWT_SECRET` is a strong secret and use HTTPS.
