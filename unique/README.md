# Unique Network

This folder contains our Unique Expermintentaion.
The goal is to have a cli which takes the following input:
```json
{
  thumbnail: "link to a preview image",
  model: "link to a glb file",
  robonomics: "transaction hash that production is started",
  phala: "transaction hash of finalized computiation of 3d creation"
}
```
and throws out the following output
```
https://uniquescan.com/HASHTONFT
```

This cli script builds the base for a succesfull integration on the Frontend.

## Quickstart

1. `pnpm install`
2. `node index.js`

## TODO
- [x] create default account
- [x] create collection on unique
- [x] mint empty token
- [ ] mint non empty token
- [ ] use cli and pass token to tokencreation

## Iteration 1
Created a default account for test minting on opal  
Created a test collection with id: 2869  
Minted a test NFT to collection 2869 with token id: 1
https://uniquescan.io/opal/tokens/2869/1
