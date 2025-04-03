import * as dasha from "@dasha.ai/sdk";

export const startCall = async () => {
  const app = await dasha.deploy("./app", {
    apiKey: process.env.DASHA_API_KEY, // Clé API injectée via Render
  });

  try {
    await app.start({ concurrency: 1 });

    const conv = app.createConversation({
      endpoint: "maisonpasta", // Nom logique de ton endpoint
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
