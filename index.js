import * as dasha from "@dasha.ai/sdk";

export const startCall = async () => {
  const apiKey = process.env.DASHA_API_KEY;
  console.log("Clé API Dasha détectée :", apiKey);

  const app = await dasha.deploy("./app", {
    apiKey: apiKey,
    baseUrl: "https://app.us.dasha.ai" // INDISPENSABLE POUR RENDER
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
