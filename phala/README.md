> [!IMPORTANT]  
> @Watson, your curl command, turn it in fetch
> `curl https://agents.phala.network/ipfs/QmZrPRvmC4FqLfmjqRnWi2XsPJq1TmtNpQd5zs3qYXg6rH/0 -v`

# Phala

This is the Phala folder.
It contains the http server that runs on the phala network. 

## Files of Intrest

- [index.ts](./src/index.ts) This file contains the http Server. It is the main file.

## How?

The Http Server has a get request.
If the get request is called, it calls an Api.
The Api called meshy. You find more of meshy in our [ai promting folder](../aiprompt/). This folder contains a nice cli, to get the gist of it. 
The meshy api receives a string and throws a 3D Model back.
This will take a while.
After its finsihed we throw a JSON File with a link to the 3D Model back.
On Subscan, we can obsverve our compution. 

## Rephrase

The glorious to describe it is:
We created an AI Agent to generate 3D Model based on User Inputer. Did you ever need a 3D Designer. I hope not. They are expensive. Now, with our Ai Agent, you safe money. 

