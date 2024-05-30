# AI Prompt Experimentation
## Iteration 1
We asked ChatGPT the following:  
```md
Hello ChatGPT. You are a file writer. You are writing .stl file. Stl is a 3D File format. I want to have a .stl file. That is a 3d file format. The stl file should represent a cube. Can you write me a cube.stl file, that I am able to download or to copy. Dont give me instruction I want the file. Thank you very much.
```

The outcome was [cube.stl](./cube.stl)

## Iteration 2
We are using the Meshy.ai api to render 3d files from text prompts. We created a command line interface to prompt the api and receive a task ID for the rendering, as well as retrieve the glb file download from the task ID once the render is complete.  
For example, we entered:  
```
./cli.js create-task  
? Enter the prompt: a dolphin wearing a tophat
```  
and received the following task id:  
```
Task ID: 018fca32-2063-79fa-b2b7-7f4f1570d19a
```  
which we can then run the get-model request to receive the glb download link.  
```
./cli.js get-model 018fca32-2063-79fa-b2b7-7f4f1570d19a  
GLB Model URL: https://assets.meshy.ai/google-oauth2%7C110030252026118023658/tasks/018fca32-2063-79fa-b2b7-7f4f1570d19a/output/model.glb?Expires=4870627200&Signature=WIf5Gv0Y~jbtJJOQM0jjMuebdP8Hirk3FC5VnAYn4KQFr3Cr5GktquoS79qIP05FsHO7THnZoOhWBPGcipzO7Tr9mGRzypNbrZyysbZsFJQmqMBBwpT66-5FsiWAsUMTs7MZIb2t7IH2CrcdZ6DnJE2afm-d4tmFneBRk3nct5Z7bGM7iU8KsTTkvWwRFmXlwkGkmhJZFol8Zjpcih3CCf6KlLtUM0YfcnJXXLihuiW3z2iW156S2tq3UC0Cg3ZfIK9B1HnwtWHPpONQd4XucB9~JlZ8CTsQcb38dp76YJaORc6ShLvvBvqMuT2JkUjFKqozuqsNYXYQivscg0-hCQ__&Key-Pair-Id=KL5I0C8H7HX83
```
[glb file link](https://assets.meshy.ai/google-oauth2%7C110030252026118023658/tasks/018fca32-2063-79fa-b2b7-7f4f1570d19a/output/model.glb?Expires=4870627200&Signature=WIf5Gv0Y~jbtJJOQM0jjMuebdP8Hirk3FC5VnAYn4KQFr3Cr5GktquoS79qIP05FsHO7THnZoOhWBPGcipzO7Tr9mGRzypNbrZyysbZsFJQmqMBBwpT66-5FsiWAsUMTs7MZIb2t7IH2CrcdZ6DnJE2afm-d4tmFneBRk3nct5Z7bGM7iU8KsTTkvWwRFmXlwkGkmhJZFol8Zjpcih3CCf6KlLtUM0YfcnJXXLihuiW3z2iW156S2tq3UC0Cg3ZfIK9B1HnwtWHPpONQd4XucB9~JlZ8CTsQcb38dp76YJaORc6ShLvvBvqMuT2JkUjFKqozuqsNYXYQivscg0-hCQ__&Key-Pair-Id=KL5I0C8H7HX83)

Linux CLI commands:  
```
to make cli.js executable: chmod +x cli.js

to enter a prompt: ./cli.js create-task  
to retrieve a model: ./cli.js get-model <task-id>
```

Windows CLI commands:  
```
to enter a prompt: node ./cli.js create-task  
to retrieve a model: node ./cli.js get-model <task-id>
```