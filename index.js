import * as dasha from "@dasha.ai/sdk";

// Fonction principale pour démarrer l’appel Dasha
export const startCall = async () => {
  console.log("Clé API Dasha détectée ?", process.env.DASHA_API_KEY);

  const app = await dasha.deploy("./app", {
    apiKey: process.env.DASHA_API_KEY // ✅ Injecté depuis Render
  });

  try {
    await app.start({ concurrency: 1 });

    const conv = app.createConversation({
      endpoint: "maisonpasta" // ✅ Ton endpoint logique
    });

    const result = await conv.execute();

    console.log("Résultat de l'appel vocal :", result.output);

    await app.stop();
    app.dispose();
  } catch (e) {
    console.error("Erreur dans startCall():", e);
    throw e;
  }
};
