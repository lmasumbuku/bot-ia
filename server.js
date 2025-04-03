import express from "express";
import { startCall } from "./index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/start-call", async (req, res) => {
  try {
    await startCall();
    res.json({ message: "Appel lancé avec succès par Dasha" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`API prête sur http://localhost:${port}`);
});
