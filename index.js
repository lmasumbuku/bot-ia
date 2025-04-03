import * as dasha from "@dasha.ai/sdk"; // Import the Dasha SDK

const main = async () => {
  const app = await dasha.deploy("./app"); // Déploie l'application Dasha à partir du dossier /app

  await app.publish(); // Rend l'application accessible pour Twilio / SIP

  console.log("✅ Application publiée. En attente d'un appel via Twilio ou webhook...");
};

main().catch((e) => console.error(e));
