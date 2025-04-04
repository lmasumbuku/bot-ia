import express from "express";
import cors from "cors";
import { startCall } from "./index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Dasha vocal bot is running ✅");
});

app.post("/start-call", async (req, res) => {
  try {
    await startCall();
    res.json({ message: "Appel lancé avec succès 📞" });
  } catch (err) {
    console.error("Erreur dans /start-call :", err);
    res.status(500).json({ error: "Erreur", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`✅ API prête sur http://localhost:${port}`);
});
