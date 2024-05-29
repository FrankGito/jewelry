import { Request, Response, route } from './httpSupport'
import { renderHtml } from './uiSupport'

import OpenAI from 'openai'

async function GET(req: Request): Promise<Response> {
  const secret = req.queries?.key ?? '';
  const openaiApiKey = req.secret?.openaiApiKey as string;
  const openai = new OpenAI({ apiKey: openaiApiKey })
  const openAiModel = (req.queries.openAiModel) ? req.queries.openAiModel[0] : 'gpt-4o';
  // const query = req.queries.chatQuery[0] as string;
  const queryFrank = "Hello ChatGPT. You are a file writer. You are writing .stl file. Stl is a 3D File format. I want to have a .stl file. That is a 3d file format. The stl file should represent a cube. Can you write me a cube.stl file, that I am able to download or to copy. Dont give me instruction I want the file. Thank you very much. Only give text. utf-8 format. only plain text. Thank you"

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `${queryFrank}` }],
    model: `${openAiModel}`,
  });

  return new Response(renderHtml(completion.choices[0].message.content as string))
}

async function POST(req: Request): Promise<Response> {
  const secret = req.queries?.key ?? '';
  const openaiApiKey = req.secret?.openaiApiKey as string;
  const openai = new OpenAI({ apiKey: openaiApiKey })
  const openAiModel = (req.queries.openAiModel) ? req.queries.openAiModel[0] : 'gpt-4o';
  const query = req.queries.chatQuery[0] as string;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `${query}` }],
    model: `${openAiModel}`,
  });

  return new Response(renderHtml(completion.choices[0].message.content as string))
}

export default async function main(request: string) {
  return await route({ GET, POST }, request)
}
