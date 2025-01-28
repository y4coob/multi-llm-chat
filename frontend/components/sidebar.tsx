import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Settings } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const models = [
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", provider: "openai" },
  { id: "claude-2", name: "Claude 2", provider: "anthropic" },
  { id: "deepseek-chat", name: "DeepSeek Chat", provider: "deepseek" },
]

interface SidebarProps {
  selectedModels: string[]
  onSelectModels: (models: string[]) => void
  onLogout: () => void
  isAuthenticated: boolean
  apiKeys: Record<string, string>
  onOpenSettings: () => void
}

export function Sidebar({
  selectedModels,
  onSelectModels,
  onLogout,
  isAuthenticated,
  apiKeys,
  onOpenSettings,
}: SidebarProps) {
  const handleModelToggle = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      onSelectModels(selectedModels.filter((id) => id !== modelId))
    } else {
      onSelectModels([...selectedModels, modelId])
    }
  }

  return (
    <div className="w-64 bg-black p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-white">Multi-LLM Chat</h1>
      <ScrollArea className="flex-1">
        <div className="space-y-4">
          {models.map((model) => {
            const hasApiKey = !!apiKeys[model.provider]
            return (
              <div key={model.id} className="flex items-start space-x-3">
                <Checkbox
                  id={model.id}
                  checked={selectedModels.includes(model.id)}
                  onCheckedChange={() => handleModelToggle(model.id)}
                  disabled={!hasApiKey}
                  className="mt-1"
                />
                <div className="space-y-1">
                  <Label
                    htmlFor={model.id}
                    className={`text-sm font-medium ${hasApiKey ? "text-white" : "text-white/50"}`}
                  >
                    {model.name}
                  </Label>
                  {!hasApiKey && <p className="text-xs text-white/50">API key required</p>}
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>
      <div className="mt-4 space-y-2">
        <Button
          onClick={onOpenSettings}
          variant="ghost"
          className="w-full bg-white/5 text-white hover:bg-white/10 transition-colors duration-200"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        {isAuthenticated && (
          <Button
            onClick={onLogout}
            variant="ghost"
            className="w-full bg-white/5 text-white hover:bg-white/10 transition-colors duration-200"
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  )
}

