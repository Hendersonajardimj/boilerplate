# TypeScript Fullstack Boilerplate

This repository provides a minimal setup for a React web client and an Express API server written in TypeScript. Prisma is included for PostgreSQL database access.

## Structure

```
my-ts-fullstack-boilerplate/
├─ apps/
│  ├─ web/                 # React client (Vite + TypeScript)
│  └─ api/                 # Express server (TypeScript)
├─ prisma/                 # Prisma schema and migrations
├─ docker/                 # Dockerfile(s) and docker-compose.yml
├─ .github/workflows/      # continuous integration + deployment
├─ packages/               # optional shared code (e.g. ui components)
├─ .env.example            # environment variables template
├─ package.json            # defines workspaces + scripts
├─ tsconfig.base.json      # shared compiler options
```

## Getting Started

Install dependencies for all workspaces and start both the client and server in development mode:

```bash
npm install
npm run dev
```

To build the production bundles:

```bash
npm run build
```

Each app can be run individually using `npm --workspace <path> run dev`.

## Environment Variables

Copy `.env.example` to `.env` and adjust the values for your local setup.

## Prisma

Prisma is configured with PostgreSQL by default. Update `prisma/schema.prisma` if you wish to change the database provider.

