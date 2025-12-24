// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Plus } from "lucide-react"

// import { useOnboardingStore } from "@/app/store/onboarding.store"
// import { Education } from "@/app/schemas/education.schema"

// import { EducationCard } from "./EducationCard"
// import { AddEducationDialog } from "./AddEducationDialog"

// export default function EducationStep({
//   onNext,
// }: {
//   onNext: () => void
// }) {
//   const educations = useOnboardingStore((s) => s.educations)

//   const [open, setOpen] = useState(false)
//   const [edit, setEdit] = useState<Education | null>(null)

//   const hasEducation = educations.length > 0

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
//       <h1 className="text-2xl font-semibold">
//         Clients like to know what you know – add your education here.
//       </h1>

//       <p className="text-sm text-muted-foreground max-w-xl mt-2">
//         You don’t have to have a degree. Adding any relevant education helps.
//       </p>

//       <div className="flex gap-4 mt-8 flex-wrap justify-center">
//         {educations.map((edu) => (
//           <EducationCard
//             key={edu.id}
//             edu={edu}
//             onEdit={() => {
//               setEdit(edu)
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
//             {hasEducation ? "Add More" : "Add Education"}
//           </p>
//         </button>
//       </div>

//       <div className="flex gap-6 mt-6">
//         {!hasEducation && (
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

//       <AddEducationDialog
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
import { Education } from "@/app/schemas/education.schema"

import { EducationCard } from "./EducationCard"
import { AddEducationDialog } from "./AddEducationDialog"

export default function EducationStep({
  onNext,
}: {
  onNext: () => void
}) {
  const educations = useOnboardingStore((s) => s.educations)

  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState<Education | null>(null)

  const hasEducation = educations.length > 0

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold">
        Clients like to know what you know – add your education here.
      </h1>

      <p className="text-sm text-muted-foreground max-w-xl mt-2">
        You don’t have to have a degree. Adding any relevant education helps.
      </p>

      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {educations.map((edu) => (
          <EducationCard
            key={edu.id}
            edu={edu}
            onEdit={() => {
              setEdit(edu)
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
            {hasEducation ? "Add More" : "Add Education"}
          </p>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        {!hasEducation && (
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

      <AddEducationDialog
        open={open}
        onClose={() => setOpen(false)}
        initialData={edit ?? undefined}
      />
    </div>
  )
}
