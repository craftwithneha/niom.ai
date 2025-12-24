"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

import { useOnboardingStore } from "@/app/store/onboarding.store"
import { CertificationCard } from "./CertificationCard"
import { AddCertificationDialog } from "./AddCertificationDialog"
import { Certification } from "@/app/schemas/certification.schema"

export default function CertificationStep({
  onNext,
}: {
  onNext: () => void
}) {
  const certifications = useOnboardingStore((s) => s.certifications)

  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState<Certification | null>(null)

  const hasData = certifications.length > 0

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold">
        Great! Add a certification to showcase your skills.
      </h1>

      <p className="text-sm text-muted-foreground max-w-xl mt-2">
        Show your credibility by highlighting your certifications.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            onEdit={() => {
              setEdit(cert)
              setOpen(true)
            }}
          />
        ))}

        <button
          onClick={() => {
            setEdit(null)
            setOpen(true)
          }}
          className="w-72 h-40 border-2 border-dashed border-orange-300 rounded-lg flex flex-col items-center justify-center text-orange-500 hover:bg-orange-50"
        >
          <div className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
            <Plus />
          </div>
          <span className="mt-3 font-medium">
            {hasData ? "Add More" : "Add Certification"}
          </span>
        </button>
      </div>

      <div className="mt-6 flex gap-6 items-center">
        {!hasData && (
          <button
            className="text-sm text-orange-500 hover:underline"
            onClick={onNext}
          >
            Skip for Now
          </button>
        )}

        <Button className="bg-[#ff6b57]" onClick={onNext}>
          Continue
        </Button>
      </div>

      <AddCertificationDialog
        open={open}
        onClose={() => setOpen(false)}
        initialData={edit ?? undefined}
      />
    </div>
  )
}
