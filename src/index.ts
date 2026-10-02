import "dotenv/config";
import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "Copseon",
    message: "Copseon API",
    status: "ok",
  });
});

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "healthy", database: "connected" });
  } catch {
    res.status(503).json({ status: "unhealthy", database: "disconnected" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
