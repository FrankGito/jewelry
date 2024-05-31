import { Request, Response, route } from "./httpSupport";
import { renderHtml } from "./uiSupport";

async function GET(req: Request): Promise<Response> {
  // Hardcode ApiKey && construct Header
  const api_key = "msy_71TlZfQPhg5RgkpwHIGeoXOsPEM36opN35Tx";
  // Its a nodeJS thing, hilrarious
  // const headers = new Headers({ Authorization: `Bearer ${api_key}` });

  // Declare upper scoped  taskId & modelUrl variable
  let taskId = "";
  let modelUrl = "";

  // Declare prompt input
  const prompt = "Penguin";

  // Prepare API Payload
  const payload = {
    mode: "preview",
    prompt,
    art_style: "realistic",
    negative_prompt: "low quality, low resolution, low poly, ugly",
  };

  try {
    /*********************************************/
    /******************CALL API*******************/
    /**https://docs.meshy.ai/api-text-to-3d-beta**/
    /*********************************************/

    const response = await fetch("https://api.meshy.ai/v2/text-to-3d", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api_key}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    taskId = data.result;

    const response2 = await fetch(`https://api.meshy.ai/v2/text-to-3d/${taskId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api_key}`
      },
    });

    const data2 = await response2.json();
    let status = data2.status;

    // Loop thruh waittime. If status is finsihed, get the glb file.
    while (status === "IN_PROGRESS") {
      const response = await fetch(`https://api.meshy.ai/v2/text-to-3d/${taskId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${api_key}`
        },
      });

      const data = await response.json();
      status = data.status;

      if (status === "SUCCEEDED") {
        const { model_urls, thumbnail_url } = data;
        if (model_urls && model_urls.glb) {
          modelUrl = model_urls.glb;
          // If Debug, do uncomment
          // console.log('glb Model URL:', model_urls.glb);
          // console.log('Thumbnail URL:', thumbnail_url);
        } else {
          console.log("glb Model URL not found in the response.");
        }
      } else if (status === "IN_PROGRESS") {
        // console.log("Please wait, the model is still being rendered.");
        // Wait for a few seconds before checking again
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } else {
        console.log(`Task status: ${status}`);
        break;
      }
    }
  } catch (error) {
    console.error(error);
  }
  // Return Link in Body
  return new Response(renderHtml(modelUrl as string));
}

export default async function main(request: string) {
  return await route({ GET }, request);
}
