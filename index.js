import * as dasha from "@dasha.ai/sdk";

export const startCall = async () => {
  const DASHA_API_KEY = process.env.DASHA_API_KEY;

  console.log("Clé API Dasha détectée :", DASHA_API_KEY);

  const app = await dasha.deploy("./app", {
    apiKey: DASHA_API_KEY, // ici on passe l'API Key directement
    baseUrl: "https://app.us.dasha.ai"
  });

  try {
    await app.start({ concurrency: 1 });

    const conv = app.createConversation({ endpoint: "maisonpasta" });

    const result = await conv.execute();
    console.log(result.output);

    await app.stop();
    app.dispose();
  } catch (e) {
    console.error("Erreur dans startCall():", e);
    throw e;
  }
};
