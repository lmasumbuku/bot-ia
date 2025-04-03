import * as dasha from "@dasha.ai/sdk";

export const startCall = async () => {
  const app = await dasha.deploy("./app");

  await app.start({ concurrency: 1 });

  const conv = app.createConversation({
    endpoint: "sip:reg-cc49f68b-4724-4fd3-ab68-321274a4cfa8@sip.us.dasha.ai"
  });

  const result = await conv.execute();
  console.log(result.output);

  await app.stop();
  app.dispose();
};

// Lancement manuel si on veut exécuter directement ce fichier
if (import.meta.url === `file://${process.argv[1]}`) {
  startCall().catch(console.error);
}
