import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

interface ChatWindowProps {
  selectedModels: string[]
  apiKeys: Record<string, string>
}

interface Message {
  role: "user" | "assistant"
  content: string
  model?: string
}

export function ChatWindow({ selectedModels, apiKeys }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          prompt: input,
          models: selectedModels,
          apiKeys,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch response")
      }

      const data = await response.json()
      const newMessages: Message[] = data.map(({ model, content }: { model: string; content: string }) => ({
        role: "assistant",
        model,
        content,
      }))

      setMessages([...messages, userMessage, ...newMessages])
    } catch (error) {
      console.error("Error:", error)
      setError("An error occurred while fetching the response. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px]">
      <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
            {message.role === "assistant" && (
              <Card>
                <CardHeader>
                  <CardTitle>{message.model}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{message.content}</p>
                </CardContent>
              </Card>
            )}
            {message.role === "user" && (
              <div className="bg-primary text-primary-foreground p-2 rounded-md inline-block">{message.content}</div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center items-center">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
        </Button>
      </form>
    </div>
  )
}

