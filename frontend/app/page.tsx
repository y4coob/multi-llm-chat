"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChatInterface } from "@/components/chat-interface"
import { Sidebar } from "@/components/sidebar"
import { useToast } from "@/hooks/use-toast"
import { ApiKeyDialog } from "@/components/api-key-dialog"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false)
  const [apiKeys, setApiKeys] = useState<Record<string, string>>({
    openai: "",
    anthropic: "",
    deepseek: "",
  })
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token)

    if (token) {
      fetchApiKeys()
    } else {
      const guestApiKeys = localStorage.getItem("guestApiKeys")
      if (guestApiKeys) {
        setApiKeys(JSON.parse(guestApiKeys))
      }
    }
  }, [])

  const fetchApiKeys = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/api-keys`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setApiKeys(data.apiKeys)
      }
    } catch (error) {
      console.error("Failed to fetch API keys:", error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    router.push("/")
  }

  const handleApiKeySave = (newApiKeys: Record<string, string>) => {
    setApiKeys(newApiKeys)
    setShowApiKeyDialog(false)
  }

  return (
    <div className="flex h-screen bg-black text-white">
      {isAuthenticated || (!isAuthenticated && Object.values(apiKeys).some((key) => key !== "")) ? (
        <>
          <Sidebar
            selectedModels={selectedModels}
            onSelectModels={setSelectedModels}
            onLogout={handleLogout}
            isAuthenticated={isAuthenticated}
            apiKeys={apiKeys}
            onOpenSettings={() => setShowApiKeyDialog(true)}
          />
          <main className="flex-1 flex flex-col overflow-hidden">
            <ChatInterface selectedModels={selectedModels} apiKeys={apiKeys} />
          </main>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full bg-black">
          <div className="w-full max-w-sm space-y-8 px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-8">Welcome to Multi-LLM Chat</h1>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => router.push("/login")}
                className="w-full h-12 bg-white/5 hover:bg-white/10 text-white border-0 rounded-xl text-lg font-medium transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/register")}
                className="w-full h-12 bg-white/5 hover:bg-white/10 text-white border-0 rounded-xl text-lg font-medium transition-colors"
              >
                Register
              </button>
              <button
                onClick={() => setShowApiKeyDialog(true)}
                className="w-full h-12 text-white/70 hover:text-white hover:bg-white/5 rounded-xl text-lg font-medium transition-colors"
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      )}
      <ApiKeyDialog
        isOpen={showApiKeyDialog}
        onClose={() => setShowApiKeyDialog(false)}
        onSave={handleApiKeySave}
        apiKeys={apiKeys}
        isAuthenticated={isAuthenticated}
      />
    </div>
  )
}

