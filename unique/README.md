# Unique Network

This folder contains our Unique Expermintentaion.
The goal is to have a cli which takes the following input:
```json
{
  thumbmail: "link to a preview image",
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
2. `pnpm run cli`

## TODO
- [ ] create collection on unique
- [ ] mint empty token
- [ ] mint non empty token
- [ ] use cli and pass token to to tokencreation
