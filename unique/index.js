import Sdk from "@unique-nft/sdk";
import { Sr25519Account } from "@unique-nft/sr25519";
import fs from 'fs';

async function main() {
  try {
    // Read the address and mnemonic from defaultAccount.json
    const accountData = JSON.parse(fs.readFileSync('defaultAccount.json', 'utf-8'));
    const address = accountData.address;
    const mnemonic = accountData.mnemonic;

    // Create the account from the mnemonic
    const account = Sr25519Account.fromUri(mnemonic);

    const sdk = new Sdk({
      baseUrl: "https://rest.unique.network/opal/v1",
      signer: account.signer,
    });

    ////////////////////////////////////
    // Create collection with the correct schema
    ////////////////////////////////////
    const { parsed, error } = await sdk.collection.create.submitWaitResult({
      address,
      name: "Test collection",
      description: "My test collection",
      tokenPrefix: "TST",
      schema: {
        schemaName: "unique",
        schemaVersion: "1.0.0",
        attributesSchemaVersion: "1.0.0",
        attributesSchema: {
          0: {
            name: {
              _: "model"
            },
            type: "string"
          },
          1: {
            name: {
              _: "robonomics"
            },
            type: "string"
          },
          2: {
            name: {
              _: "phala"
            },
            type: "string"
          }
        },
        image: {
          urlTemplate: "{infix}",
          template: "{imagePreview}"
        },
        coverPicture: {
          urlInfix: "cover",
          template: "{imagePreview}"
        }
      }
    });

    if (error) {
      console.log("Create collection error:", error);
      process.exit();
    }

    const collectionId = parsed?.collectionId;
    console.log(`Collection created. Id: ${collectionId}`);

    ////////////////////////////////////
    // Mint token
    ////////////////////////////////////
    const nftData = {
      image: {
        url: "https://assets.meshy.ai/google-oauth2%7C110030252026118023658/tasks/018fcf6a-826f-72e0-b711-fd2bd340ad82/output/preview.png?Expires=4870713600&Signature=cc2eMf1HhEzBHyqcim0-ynPPqbYMDgneH97uWhrFk~kKlbBUUJvK~kQ6SpuR6Ui2UV59ez8xHxEgH9WwbNhYXXTAvZC0i1sciGWAYcEI9GNXJR~1FlFHuoOd1Uf7NSOYZim78sBAx18gLSN1bElOsU20OzEyI9nacI5apo74Cfu4BDJrv7s6Q8TzOiUIJcvRFKyYr2NxKH5tvMLv0SYEf4I0FGw-Sm-U9-x6b0upN9wbLKp~m6gqQ90NE7ZIzkoN~38uKni-Q9gK8g1-dyOXNFgqDplCxoOPwuVoqH1wnR0rffA7J06XyNT-gkFPNgBHySEb2gBg8S7-dYSOqL3M3Q__&Key-Pair-Id=KL5I0C8H7HX83"
      },
      attributes: {
        model: "https://assets.meshy.ai/google-oauth2%7C110030252026118023658/tasks/018fcf6a-826f-72e0-b711-fd2bd340ad82/output/model.glb?Expires=4870713600&Signature=d7M6H-bBq08GqGjxK8r2IcglwepeCuMyxdDZlxB4IfMg8v-6QvbuhuzILIIAkwgFCXx3q5NGyPmYfv4lAIy5Zi48kQm0lUBxgQ2R4gYVOFqHSLaJEjPQ4~5fGUKaHcAs~ngqxquJMAZUEAVtUf1kjlTe7Vx77D5MAZBOtZ0rR-lW94v6krlEjaxR6Y1U91-K7PhaM4KnLb1bURXwNa8H~W9Q9A5OGeMJOUbSbxWeg9jpSTlLAUe~wl7EQTqN1zcidVC-HiRTwgyTyXP6b1jpi9wvoWVQek3MjJ1F31-LcWH-pdTheHesv6uzMBacLzrgvFGAuktvmbIq5Zvk4JmyCw__&Key-Pair-Id=KL5I0C8H7HX83",
        robonomics: "pretend this is a transaction hash",
        phala: "pretend this is a transaction hash"
      }
    };

    console.log(`Minting NFT to collection ${collectionId}`);

    const result = await sdk.token.create.submitWaitResult({
      address,
      collectionId,
      data: nftData
    });

    const tokenId = result.parsed?.tokenId;

    console.log("Result", result);
    console.log(`Created token ${tokenId} in collection ${collectionId}`);
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main().catch((error) => {
  console.error("Unhandled error:", error);
});