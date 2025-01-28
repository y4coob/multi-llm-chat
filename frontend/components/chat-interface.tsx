"use client"

import { useState, useRef, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { AIInputWithLoading } from "@/components/ui/ai-input-with-loading"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Message {
  role: "user" | "assistant" | "error"
  content: string
  error?: {
    code: string
    message: string
  }
}

interface ChatThread {
  model: string
  messages: Message[]
}

interface ChatInterfaceProps {
  selectedModels: string[]
  apiKeys: Record<string, string>
}

export function ChatInterface({ selectedModels, apiKeys }: ChatInterfaceProps) {
  const [chatThreads, setChatThreads] = useState<ChatThread[]>([])
  const { toast } = useToast()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setChatThreads((prevThreads) => {
      const newThreads = selectedModels.map((model) => {
        const existingThread = prevThreads.find((thread) => thread.model === model)
        return existingThread || { model, messages: [] }
      })
      return newThreads
    })
  }, [selectedModels])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, []) // Updated useEffect dependency

  const handleSubmit = async (input: string) => {
    if (!input.trim()) return
    if (selectedModels.length === 0) {
      toast({
        title: "No model selected",
        description: "Please select at least one model from the sidebar.",
        variant: "destructive",
      })
      return
    }

    // Add user message to all chat threads
    setChatThreads((prevThreads) =>
      prevThreads.map((thread) => ({
        ...thread,
        messages: [...thread.messages, { role: "user", content: input }],
      })),
    )

    // Send request to each selected model
    const modelRequests = selectedModels.map(async (model) => {
      const provider = getProviderFromModel(model)
      if (!apiKeys[provider]) {
        return {
          model,
          error: {
            code: "missing_api_key",
            message: `Please set up your ${provider.toUpperCase()} API key in settings.`,
          },
        }
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            model: model,
            message: input,
            apiKey: apiKeys[provider],
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw {
            message: data.error,
            code: data.code,
          }
        }

        return { model, response: data.response }
      } catch (error: any) {
        return {
          model,
          error: {
            code: error.code || "unknown_error",
            message: getErrorMessage(error.code) || error.message,
          },
        }
      }
    })

    // Wait for all requests to complete
    const results = await Promise.all(modelRequests)

    // Update chat threads with responses or errors
    setChatThreads((prevThreads) =>
      prevThreads.map((thread) => {
        const result = results.find((r) => r.model === thread.model)
        if (result) {
          if ("response" in result) {
            return {
              ...thread,
              messages: [...thread.messages, { role: "assistant", content: result.response }],
            }
          } else if ("error" in result) {
            return {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  role: "error",
                  content: result.error.message,
                  error: result.error,
                },
              ],
            }
          }
        }
        return thread
      }),
    )
  }

  const getErrorMessage = (code: string): string => {
    const errorMessages: Record<string, string> = {
      insufficient_quota:
        "Your API key has exceeded its quota. Please check your billing details or use a different API key.",
      invalid_api_key: "Invalid API key. Please check your API key and try again.",
      rate_limit: "Too many requests. Please try again later.",
      not_implemented: "This model is not implemented yet.",
      unsupported_model: "This model is not supported.",
      missing_api_key: "Please provide an API key for this model.",
    }
    return errorMessages[code] || "An unexpected error occurred. Please try again."
  }

  const getProviderFromModel = (model: string): string => {
    if (model.startsWith("gpt")) return "openai"
    if (model.startsWith("claude")) return "anthropic"
    if (model.startsWith("deepseek")) return "deepseek"
    return ""
  }

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <Tabs defaultValue={selectedModels[0]} className="flex-1 flex flex-col">
        <TabsList className="bg-gray-800 border-b border-gray-700">
          {selectedModels.map((model) => (
            <TabsTrigger
              key={model}
              value={model}
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-700"
            >
              {model}
            </TabsTrigger>
          ))}
        </TabsList>
        {chatThreads.map((thread) => (
          <TabsContent key={thread.model} value={thread.model} className="flex-1 flex flex-col overflow-hidden p-4">
            <ScrollArea className="flex-1">
              <div className="max-w-2xl mx-auto space-y-4">
                {thread.messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "error"
                          ? "bg-red-900/50 w-full"
                          : message.role === "user"
                            ? "bg-blue-600 ml-auto"
                            : "bg-gray-700"
                      } ${message.role !== "error" ? "max-w-[75%] break-words" : ""}`}
                    >
                      {message.role === "error" ? (
                        <Alert variant="destructive" className="border-0 bg-transparent">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{message.content}</AlertDescription>
                        </Alert>
                      ) : (
                        <p className="text-sm text-white">{message.content}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
      <div className="border-t border-gray-700 p-4">
        <AIInputWithLoading
          onSubmit={handleSubmit}
          loadingDuration={3000}
          placeholder="Type a message..."
          className="max-w-2xl mx-auto"
          minHeight={56}
          maxHeight={200}
        />
      </div>
    </div>
  )
}

