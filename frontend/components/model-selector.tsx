import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const models = [
  { id: "gpt-4", name: "GPT-4" },
  { id: "claude-2", name: "Claude 2" },
  { id: "deepseek-chat", name: "DeepSeek Chat" },
]

interface ModelSelectorProps {
  selectedModels: string[]
  onSelectModel: (models: string[]) => void
}

export function ModelSelector({ selectedModels, onSelectModel }: ModelSelectorProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {models.map((model) => (
        <div key={model.id} className="flex items-center space-x-2">
          <Checkbox
            id={model.id}
            checked={selectedModels.includes(model.id)}
            onCheckedChange={(checked) => {
              if (checked) {
                onSelectModel([...selectedModels, model.id])
              } else {
                onSelectModel(selectedModels.filter((id) => id !== model.id))
              }
            }}
          />
          <Label htmlFor={model.id}>{model.name}</Label>
        </div>
      ))}
    </div>
  )
}

