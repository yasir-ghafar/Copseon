# Copseon

Team collaboration and project management. Workspace → teams → projects → tasks, with multi-view boards and realtime updates.

A *copse* is a grove of trees that grow together. **Copseon** is that idea as a product: the team grows as a group, not from a command deck.

**Tagline:** Grow the work together.

## Product

| | |
|---|---|
| **Name** | Copseon |
| **Hierarchy** | Workspace → Team (optional) → Project → Task → Sub-task |
| **Views** | List, Board, Calendar, Timeline, plus Inbox and command palette |

## API (current stub)

```bash
cp .env.example .env
# set DATABASE_URL to your Postgres instance
npm install
npx prisma migrate dev --name init
npm run dev
```

Binds to `0.0.0.0:$PORT` (default `3000`).
