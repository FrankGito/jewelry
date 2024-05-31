import { Sr25519Account } from "@unique-nft/sr25519";

// Generate a new mnemonic
const mnemonic = Sr25519Account.generateMnemonic();
const account = Sr25519Account.fromUri(mnemonic);

// Get the public key
const publicKey = account.publicKey.toString('hex');

// Manually create the keyfile structure
const keyfile = {
  encoded: account.publicKey, // Use the public key as an example (for simplicity)
  encoding: {
    content: ["sr25519", "ed25519"],
    type: ["sr25519"],
    version: "3"
  },
  address: account.address,
  meta: {
    name: "my_test_account"
  }
};

// Print the account details
console.log({
  mnemonic: mnemonic,
  publicKey: `0x${publicKey}`,
  keyfile: keyfile
});