import { NextResponse } from "next/server"
import OpenAI from "openai"
import Anthropic from "@anthropic-ai/sdk"

export async function POST(req: Request) {
  const { model, message, apiKey } = await req.json()

  try {
    let response

    if (model.startsWith("gpt")) {
      const openai = new OpenAI({ apiKey })
      const completion = await openai.chat.completions.create({
        model,
        messages: [{ role: "user", content: message }],
      })
      response = completion.choices[0].message.content
    } else if (model.startsWith("claude")) {
      const anthropic = new Anthropic({ apiKey })
      const completion = await anthropic.completions.create({
        model,
        prompt: `Human: ${message}\n\nAssistant:`,
        max_tokens_to_sample: 1000,
      })
      response = completion.completion
    } else if (model.startsWith("deepseek")) {
      // Implement DeepSeek API call here
      // For now, we'll return a placeholder response
      response = "DeepSeek API integration not implemented yet."
    } else {
      throw new Error("Unsupported model")
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to get response from the model" }, { status: 500 })
  }
}

