"use client"

import { Experience } from "@/app/schemas/experience.schema"
import { Pencil, Trash, Folder } from "lucide-react"
import { useOnboardingStore } from "@/app/store/onboarding.store"

type Props = {
  exp: Experience
  onEdit: () => void
}

export function ExperienceCard({ exp, onEdit }: Props) {
  const removeExperience = useOnboardingStore((s) => s.removeExperience)

  return (
    <div className="relative w-64 rounded-xl border border-gray-200 bg-white shadow-md p-4 transition hover:shadow-lg hover:scale-[1.02]">
      {/* Top-left icon */}
      <div className="absolute top-2 left-2 text-orange-500">
        <Folder size={20} />
      </div>

      {/* Top-right actions */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={onEdit}
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => removeExperience(exp.id)}
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          <Trash size={16} />
        </button>
      </div>

      {/* Experience Info */}
      <div className="mt-6 space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
        <p className="text-sm text-gray-500">{exp.company}</p>
        <p className="text-xs text-gray-400">
          {exp.startYear} – {exp.currentlyWorking ? "Present" : exp.endYear}
        </p>
        {exp.location && (
          <p className="text-xs text-gray-400">{exp.location}</p>
        )}
        {exp.description && (
          <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
        )}
      </div>
    </div>
  )
}
