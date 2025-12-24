"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera } from "lucide-react"
import Image from "next/image"

type Props = {
  value?: string
  onChange: (val: string) => void
}

export function AvatarUpload({ value, onChange }: Props) {
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => onChange(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28 rounded-full bg-muted overflow-hidden">
        {value ? (
          <Image src={value} alt="avatar" fill className="object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-muted-foreground">
            <Camera />
          </div>
        )}
      </div>

      <Label className="cursor-pointer text-sm text-primary border border-primary px-4 py-1 rounded-md">
        + Upload photo
        <Input type="file" hidden accept="image/*" onChange={handleFile} />
      </Label>
    </div>
  )
}
