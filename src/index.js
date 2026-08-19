import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "Copseon",
    message: "Copseon API",
    status: "ok",
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
