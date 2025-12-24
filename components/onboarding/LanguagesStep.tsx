"use client"

import { Button } from "@/components/ui/button"
import { useOnboardingStore } from "@/app/store/onboarding.store"
import { LanguageRow } from "./LanguageRow"

export default function LanguagesStep({
  onNext,
}: {
  onNext: () => void
}) {
  const languages = useOnboardingStore((s) => s.languages)
  const addLanguage = useOnboardingStore((s) => s.addLanguage)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold">
        Looking good. Next, tell us which languages you speak.
      </h1>

      <p className="text-sm text-muted-foreground max-w-xl mt-2">
        Niom is global, so people are often interested to know what
        languages you speak.
      </p>

      <div className="mt-8 w-full max-w-2xl bg-white rounded-lg border p-6 space-y-6 text-left">
        <div className="space-y-4">
          {languages.map((lang) => (
            <LanguageRow key={lang.id} lang={lang} />
          ))}
        </div>

        <button
          onClick={addLanguage}
          className="mt-2 text-sm text-[#ff6b57] border border-[#ff6b57] rounded px-3 py-1 hover:bg-[#ff6b57]/10"
        >
          + Add More Language
        </button>
      </div>

      <Button
        className="mt-8 bg-[#ff6b57]"
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  )
}

