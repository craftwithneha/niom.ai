// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Plus } from "lucide-react"

// import { useOnboardingStore } from "@/app/store/onboarding.store"
// import { Experience } from "@/app/schemas/experience.schema"

// import { ExperienceCard } from "./ExperienceCard"
// import { AddExperienceDialog } from "./AddExperienceDialog"

// export default function ExperienceStep({
//   onNext,
// }: {
//   onNext: () => void
// }) {
//   const experiences = useOnboardingStore((s) => s.experiences)

//   const [open, setOpen] = useState(false)
//   const [edit, setEdit] = useState<Experience | null>(null)

//   const hasExperience = experiences.length > 0

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
//       <h1 className="text-2xl font-semibold">
//         If you have relevant work experience, add it here.
//       </h1>

//       <p className="text-sm text-muted-foreground max-w-xl mt-2">
//         Freelancers who add experience are twice as likely to win work.
//       </p>

//       <div className="flex gap-4 mt-8 flex-wrap justify-center">
//         {experiences.map((exp) => (
//           <ExperienceCard
//             key={exp.id}
//             exp={exp}
//             onEdit={() => {
//               setEdit(exp)
//               setOpen(true)
//             }}
//           />
//         ))}

//         <button
//           onClick={() => {
//             setEdit(null)
//             setOpen(true)
//           }}
//           className="border-2 border-dashed border-orange-300 rounded-lg w-64 h-32 flex flex-col items-center justify-center hover:bg-orange-50"
//         >
//           <div className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
//             <Plus />
//           </div>
//           <p className="mt-2 font-medium">
//             {hasExperience ? "Add More" : "Add Experience"}
//           </p>
//         </button>
//       </div>

//       <div className="flex gap-6 mt-6">
//         {!hasExperience && (
//           <button
//             onClick={onNext}
//             className="text-sm text-orange-500 hover:underline"
//           >
//             Skip for now
//           </button>
//         )}

//         <Button className="bg-orange-500 px-6" onClick={onNext}>
//           Continue
//         </Button>
//       </div>

//       <AddExperienceDialog
//         open={open}
//         onClose={() => setOpen(false)}
//         initialData={edit ?? undefined}
//       />
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

import { useOnboardingStore } from "@/app/store/onboarding.store"
import { Experience } from "@/app/schemas/experience.schema"

import { ExperienceCard } from "./ExperienceCard"
import { AddExperienceDialog } from "./AddExperienceDialog"

export default function ExperienceStep({
  onNext,
}: {
  onNext: () => void
}) {
  const experiences = useOnboardingStore((s) => s.experiences)

  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState<Experience | null>(null)

  const hasExperience = experiences.length > 0

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold">
        If you have relevant work experience, add it here.
      </h1>

      <p className="text-sm text-muted-foreground max-w-xl mt-2">
        Freelancers who add experience are twice as likely to win work.
      </p>

      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            onEdit={() => {
              setEdit(exp)
              setOpen(true)
            }}
          />
        ))}

        {/* Add More Card */}
        <div
          onClick={() => {
            setEdit(null)
            setOpen(true)
          }}
          className="relative w-64 rounded-xl border border-dashed border-orange-300 bg-white shadow-md p-4 flex flex-col items-center justify-center cursor-pointer transition hover:bg-orange-50 hover:shadow-lg hover:scale-[1.02]"
        >
          <div className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
            <Plus size={20} />
          </div>
          <p className="mt-2 font-medium text-gray-700">
            {hasExperience ? "Add More" : "Add Experience"}
          </p>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        {!hasExperience && (
          <button
            onClick={onNext}
            className="text-sm text-orange-500 hover:underline"
          >
            Skip for now
          </button>
        )}

        <Button className="bg-orange-500 px-6" onClick={onNext}>
          Continue
        </Button>
      </div>

      <AddExperienceDialog
        open={open}
        onClose={() => setOpen(false)}
        initialData={edit ?? undefined}
      />
    </div>
  )
}
