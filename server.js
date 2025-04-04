import express from "express";
import cors from "cors";
import { startCall } from "./index.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route pour vérifier que le backend est en ligne
app.get("/", (req, res) => {
  res.send("✅ API Dasha vocal bot is running");
});

// Route pour démarrer l’appel vocal
app.post("/start-call", async (req, res) => {
  try {
    await startCall();
    res.status(200).json({ message: "Appel lancé avec succès par Dasha" });
  } catch (err) {
    console.error("Erreur dans /start-call :", err);
    res.status(500).json({ error: "Erreur", details: err.message });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`🚀 Serveur Express lancé sur le port ${port}`);
});
