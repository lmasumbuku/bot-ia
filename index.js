import * as dasha from "@dasha.ai/sdk";

export const startCall = async () => {
  // Affiche la clé API pour s'assurer qu'elle est bien détectée
  console.log("Clé API Dasha détectée :", process.env.DASHA_API_KEY);

  // Déploiement de l'application avec la clé API et le serveur cloud
  const app = await dasha.deploy("./app", {
    apiKey: process.env.DASHA_API_KEY,
    server: "app.us.dasha.ai", // 🔥 très important pour Render / cloud
  });

  try {
    // Démarrage de l’application Dasha
    await app.start({ concurrency: 1 });

    // Création et exécution de la conversation
    const conv = app.createConversation({
      endpoint: "maisonpasta", // nom logique défini dans ton projet Dasha
    });

    const result = await conv.execute();

    // Affiche le résultat de la conversation
    console.log(result.output);

    // Stop et libération des ressources
    await app.stop();
    app.dispose();
  } catch (e) {
    console.error("Erreur dans startCall():", e);
    throw e;
  }
};
