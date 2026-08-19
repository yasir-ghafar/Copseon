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

## API (current stub)

```bash
npm install
npm run dev
```

Binds to `0.0.0.0:$PORT` (default `3000`).

| Method | Path | |
|---|---|---|
| `GET` | `/` | `{ "name": "Copseon", "message": "Copseon API", "status": "ok" }` |
| `GET` | `/health` | `{ "status": "healthy" }` |
