import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ApiKeyInputProps {
  apiKeys: Record<string, string>
  onApiKeyChange: (newApiKeys: Record<string, string>) => void
}

export function ApiKeyInput({ apiKeys, onApiKeyChange }: ApiKeyInputProps) {
  return (
    <div className="grid gap-4">
      {Object.entries(apiKeys).map(([provider, key]) => (
        <div key={provider} className="grid gap-2">
          <Label htmlFor={`${provider}-api-key`}>{provider.charAt(0).toUpperCase() + provider.slice(1)} API Key</Label>
          <Input
            id={`${provider}-api-key`}
            type="password"
            value={key}
            onChange={(e) => onApiKeyChange({ ...apiKeys, [provider]: e.target.value })}
            placeholder={`Enter your ${provider} API key`}
          />
        </div>
      ))}
    </div>
  )
}

