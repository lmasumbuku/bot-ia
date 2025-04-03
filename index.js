import * as dasha from "@dasha.ai/sdk";

export const startCall = async () => {
  console.log("Clé API Dasha détectée :", process.env.DASHA_API_KEY);

  dasha.configure({
    apiKey: process.env.DASHA_API_KEY,
    baseUrl: "https://app.us.dasha.ai"
  });

  const app = await dasha.deploy("./app");

  try {
    await app.start({ concurrency: 1 });

    const conv = app.createConversation({
      endpoint: "maisonpasta",
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
