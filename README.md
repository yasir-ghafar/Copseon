# Copseon

Team collaboration and project management. Workspace → teams → projects → tasks, with multi-view boards and realtime updates.

A *copse* is a grove of trees that grow together. **Copseon** is that idea as a product: the team grows as a group, not from a command deck.

**Tagline:** Grow the work together.

## Product

| | |
|---|---|
| **Name** | Copseon (always the full word — never shorten to Copse) |
| **Say** | KOP-see-on |
| **Hierarchy** | Workspace → Team (optional) → Project → Task → Sub-task |
| **Views** | List, Board, Calendar, Timeline, plus Inbox and command palette |

See [docs/PRODUCT.md](docs/PRODUCT.md) for brand rules, [docs/BRAND.md](docs/BRAND.md) for logo and color, and [docs/SRS.md](docs/SRS.md) for the requirements snapshot.

## Stack

- **Runtime:** Node.js (ESM) + TypeScript
- **API:** Express
- **ORM / DB:** Prisma 7 + PostgreSQL (`@prisma/adapter-pg`)

## Setup

```bash
cp .env.example .env
# set DATABASE_URL to your Postgres instance
npm install
npx prisma migrate dev --name init
npm run dev
```

Binds to `0.0.0.0:$PORT` (default `3000`).

### Scripts

| Script | |
|---|---|
| `npm run dev` | TypeScript watch server (`tsx`) |
| `npm run build` | Compile to `dist/` |
| `npm start` | Run compiled `dist/index.js` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run prisma:generate` | Regenerate Prisma Client |
| `npm run prisma:migrate` | Create/apply migrations |
| `npm run prisma:studio` | Open Prisma Studio |

### API (current stub)

| Method | Path | |
|---|---|---|
| `GET` | `/` | `{ "name": "Copseon", "message": "Copseon API", "status": "ok" }` |
| `GET` | `/health` | Checks Postgres connectivity |

### Prisma layout

- Schema: `prisma/schema.prisma` (core hierarchy: users → workspaces → teams → projects → tasks)
- Config: `prisma.config.ts` (datasource URL from `DATABASE_URL`)
- Client: `src/lib/prisma.ts` (singleton + `PrismaPg` adapter)
- Generated client: `src/generated/prisma` (gitignored; created by `prisma generate`)
