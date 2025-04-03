import * as dasha from "@dasha.ai/sdk"; // Import the Dasha SDK

const main = async () => {
  const app = await dasha.deploy("./app");  // Deploy the Dasha application from the specified path

  try{
    await app.start({ concurrency: 1 });  // Start the app with a concurrency of 1 (one conversation at a time)

    const conv = app.createConversation({ endpoint: "maisonpasta" });  // Create a new conversation with the specified endpoint
    
    const result = await conv.execute();

    console.log(result.output);

    await app.stop();
    app.dispose();
  }
  catch(e) { throw e; }
}

main().catch(e=>console.log(e));
