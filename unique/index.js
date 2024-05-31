import Sdk from "@unique-nft/sdk";
import { Sr25519Account } from "@unique-nft/sr25519";
import fs from 'fs';

async function main() {
  try {
    // Read the address and mnemonic from defaultAccount.json
    const accountData = JSON.parse(fs.readFileSync('defaultAccount.json', 'utf-8'));
    const address = accountData.address;
    const mnemonic = accountData.mnemonic;

    // Log the mnemonic and address for debugging
    console.log("Address:", address);
    console.log("Mnemonic:", mnemonic);

    // Create the account from the mnemonic
    const account = Sr25519Account.fromUri(mnemonic);

    // Log the account object for debugging
    console.log("Account created", account);

    const sdk = new Sdk({
      baseUrl: "https://rest.unique.network/opal/v1",
      signer: account.signer,
    });

    ////////////////////////////////////
    // Create collection - quick simple way
    ////////////////////////////////////
    const { parsed, error } = await sdk.collection.create.submitWaitResult({
      address,
      name: "Test collection",
      description: "My test collection",
      tokenPrefix: "TST",
    });

    if (error) {
      console.log("Create collection error:", error);
      process.exit();
    }

    const collectionId = parsed?.collectionId;
    console.log(`Collection created. Id: ${collectionId}`);

    ////////////////////////////////////
    // Burn token (commented out)
    ////////////////////////////////////
    /*
    const burnResult = await sdk.token.burn.submitWaitResult({
      address,
      collectionId,
      tokenId: 2,
    });
    const tokenIdBurned = burnResult.parsed?.tokenId;
    console.log(`Burned token ${tokenIdBurned} in collection ${collectionId}`);
    */

    ////////////////////////////////////
    // Mint token (commented out)
    ////////////////////////////////////
    /*
    const result = await sdk.token.create.submitWaitResult({
      address,
      collectionId,
      data: {
        image: {
          ipfsCid: "QmcAcH4F9HYQtpqKHxBFwGvkfKb8qckXj2YWUrcc8yd24G/image1.png",
        },
        name: {
          _: "My token",
        },
        description: {
          _: "Sample token",
        },
      },
    });

    const tokenId = result.parsed?.tokenId;

    console.log(`Created token ${tokenId} in collection ${collectionId}`);
    */
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main().catch((error) => {
  console.error("Unhandled error:", error);
});