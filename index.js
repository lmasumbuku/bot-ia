import * as dasha from "@dasha.ai/cli-sdk"; // Note le bon SDK
import path from "path";
import { fileURLToPath } from "url";

// Pour compatibilité ESModules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const startCall = async () => {
  console.log("Clé API Dasha détectée :", process.env.DASHA_API_KEY);

  const app = await dasha.deploy(path.join(__dirname, "app"), {
    apiKey: process.env.DASHA_API_KEY,
    account: {
      id: "bd8e15c9-17e3-428a-b915-71cc044acca0" // <-- Ton vrai Dasha account ID
    }
  });

  try {
    await app.start({ concurrency: 1 });

    const conv = app.createConversation({
      endpoint: "maisonpasta"
    });

    const result = await conv.execute();
    console.log(result.output);

    await app.stop();
    app.dispose();
  } catch (e) {
    console.error("Erreur dans startCall():", e);
    throw e;
  }
};
