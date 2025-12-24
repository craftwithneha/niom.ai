"use client"

import { X } from "lucide-react"
import { Input } from "@/components/ui/input"

type Props = {
  values: string[]
  onAdd: (value: string) => void
  onRemove: (value: string) => void
  placeholder: string
}

export function ChipInput({
  values,
  onAdd,
  onRemove,
  placeholder,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 border rounded-md px-3 py-2">
      {values.map((value) => (
        <span
          key={value}
          className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs"
        >
          {value}
          <button onClick={() => onRemove(value)}>
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}

      <Input
        placeholder={placeholder}
        className="border-0 shadow-none focus-visible:ring-0 flex-1 min-w-30"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            const value = e.currentTarget.value.trim()
            if (value) {
              onAdd(value)
              e.currentTarget.value = ""
            }
          }
        }}
      />
    </div>
  )
}
