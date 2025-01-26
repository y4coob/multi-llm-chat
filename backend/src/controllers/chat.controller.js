const OpenAI = require("openai")
const { Anthropic } = require("@anthropic-ai/sdk")

exports.chatWithModel = async (req, res) => {
  const { model, message, apiKey } = req.body

  if (!apiKey) {
    return res.status(400).json({
      error: "API key is required",
      code: "missing_api_key",
    })
  }

  try {
    let response

    if (model.startsWith("gpt")) {
      const openai = new OpenAI({ apiKey })
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        })
        response = completion.choices[0].message.content
      } catch (error) {
        if (error.code === "insufficient_quota") {
          return res.status(402).json({
            error:
              "Your OpenAI API key has exceeded its quota. Please check your billing details or use a different API key.",
            code: "insufficient_quota",
          })
        }
        throw error
      }
    } else if (model.startsWith("claude")) {
      const anthropic = new Anthropic({ apiKey })
      const completion = await anthropic.completions.create({
        model: "claude-2",
        prompt: `Human: ${message}\n\nAssistant:`,
        max_tokens_to_sample: 1000,
      })
      response = completion.completion
    } else if (model.startsWith("deepseek")) {
      try {
        const deepseek = new OpenAI({
          baseURL: "https://api.deepseek.com",
          apiKey: apiKey,
        })

        const completion = await deepseek.chat.completions.create({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
          ],
        })

        response = completion.choices[0].message.content
      } catch (error) {
        if (error.status === 401) {
          return res.status(401).json({
            error: "Invalid DeepSeek API key",
            code: "invalid_api_key",
          })
        }
        if (error.status === 429) {
          return res.status(429).json({
            error: "DeepSeek API rate limit exceeded",
            code: "rate_limit",
          })
        }
        throw error
      }
    } else {
      return res.status(400).json({
        error: "Unsupported model",
        code: "unsupported_model",
      })
    }

    res.json({ response })
  } catch (error) {
    console.error("Error in chat controller:", error)

    if (error.status === 401) {
      return res.status(401).json({
        error: "Invalid API key. Please check your API key and try again.",
        code: "invalid_api_key",
      })
    }

    if (error.status === 429) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
        code: "rate_limit",
      })
    }

    res.status(500).json({
      error: "An error occurred while processing your request. Please try again.",
      code: "internal_error",
      details: error.message,
    })
  }
}

