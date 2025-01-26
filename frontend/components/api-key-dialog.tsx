import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ApiKeyDialogProps {
  isOpen: boolean
  onClose: () => void
  onSave: (apiKeys: Record<string, string>) => void
  apiKeys: Record<string, string>
  isAuthenticated: boolean
}

export function ApiKeyDialog({ isOpen, onClose, onSave, apiKeys, isAuthenticated }: ApiKeyDialogProps) {
  const [keys, setKeys] = useState(apiKeys)
  const { toast } = useToast()

  useEffect(() => {
    setKeys(apiKeys)
  }, [apiKeys])

  const handleSave = async () => {
    if (isAuthenticated) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/api-keys`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ apiKeys: keys }),
        })

        if (!response.ok) {
          throw new Error("Failed to save API keys")
        }

        toast({
          title: "Success",
          description: "API keys saved successfully",
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to save API keys",
          variant: "destructive",
        })
      }
    } else {
      localStorage.setItem("guestApiKeys", JSON.stringify(keys))
      toast({
        title: "Success",
        description: "API keys saved locally",
      })
    }

    onSave(keys)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">Enter API Keys</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="openai" className="text-white">
              OpenAI API Key
            </Label>
            <Input
              id="openai"
              type="password"
              value={keys.openai}
              onChange={(e) => setKeys({ ...keys, openai: e.target.value })}
              className="bg-white/5 border-white/10 text-white"
              placeholder="sk-..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="anthropic" className="text-white">
              Anthropic API Key
            </Label>
            <Input
              id="anthropic"
              type="password"
              value={keys.anthropic}
              onChange={(e) => setKeys({ ...keys, anthropic: e.target.value })}
              className="bg-white/5 border-white/10 text-white"
              placeholder="sk-ant-..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="deepseek" className="text-white">
              DeepSeek API Key
            </Label>
            <Input
              id="deepseek"
              type="password"
              value={keys.deepseek}
              onChange={(e) => setKeys({ ...keys, deepseek: e.target.value })}
              className="bg-white/5 border-white/10 text-white"
              placeholder="sk-..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="w-full bg-white/5 hover:bg-white/10 text-white border-0">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

