"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useOnboardingStore } from "@/app/store/onboarding.store"
import { Language } from "@/app/types/language"

export function LanguageRow({ lang }: { lang: Language }) {
  const update = useOnboardingStore((s) => s.updateLanguage)
  const remove = useOnboardingStore((s) => s.removeLanguage)

  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <Input
        placeholder="Add language here"
        value={lang.name}
        onChange={(e) => update(lang.id, "name", e.target.value)}
      />

      <div className="flex items-center gap-2">
        <Select
          value={lang.level}
          onValueChange={(v: string) => update(lang.id, "level", v as Language["level"])}
        >
          <SelectTrigger>
            <SelectValue placeholder="My level is" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="conversational">Conversational</SelectItem>
            <SelectItem value="fluent">Fluent</SelectItem>
            <SelectItem value="native">Native</SelectItem>
          </SelectContent>
        </Select>

        {lang.name !== "English" && (
          <button
            onClick={() => remove(lang.id)}
            className="text-muted-foreground hover:text-destructive"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
