"use client"

import { Linkedin, Upload, FileText } from "lucide-react"

type Props = {
  onNext: () => void
}

export default function ImportOptionCard({ onNext }: Props) {
  return (
    <div className="min-h-screen bg-[#f6f2ee] flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-2xl font-semibold mb-2">
          How would you like to tell us about yourself?
        </h1>

        <p className="text-sm text-muted-foreground mb-8">
          We need to get a sense of your education, experience and skills.
          It’s quickest to import your information – you can edit before
          your profile goes live.
        </p>

        <div className="space-y-4">
          {/* LinkedIn */}
          <OptionButton
            icon={<Linkedin size={18} />}
            label="Import from LinkedIn"
          />

          {/* Resume */}
          <OptionButton
            icon={<Upload size={18} />}
            label="Upload your Resume"
          />

          {/* Manual → NEXT STEP */}
          <OptionButton
            icon={<FileText size={18} />}
            label="Fill out Manually"
            active
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Reusable Option Button                                              */
/* ------------------------------------------------------------------ */

function OptionButton({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition
        ${active
          ? "border-[#ff6b57] text-[#ff6b57] shadow-sm"
          : "border-border bg-white hover:bg-accent"
        }
      `}
    >
      {icon}
      {label}
    </button>
  )
}
