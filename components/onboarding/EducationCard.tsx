// "use client"

// import { Education } from "@/app/schemas/education.schema"
// import { Pencil, Trash, GraduationCap } from "lucide-react"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// type Props = {
//   edu: Education
//   onEdit: () => void
// }

// export function EducationCard({ edu, onEdit }: Props) {
//   const removeEducation = useOnboardingStore(
//     (s) => s.removeEducation
//   )

//   return (
//     <div className="border rounded-lg p-4 w-64 flex justify-between bg-white">
//       <div>
//         <div className="flex items-center gap-2 mb-1">
//           <GraduationCap className="text-orange-500" size={18} />
//           <h3 className="font-medium">{edu.school}</h3>
//         </div>

//         <p className="text-sm text-muted-foreground">
//           {edu.degree}
//           {edu.field && `, ${edu.field}`}
//         </p>

//         <p className="text-xs text-muted-foreground">
//           {edu.startYear} –{" "}
//           {edu.currentlyStudying ? "Present" : edu.endYear}
//         </p>
//       </div>

//       <div className="flex gap-2">
//         <button onClick={onEdit}>
//           <Pencil size={16} />
//         </button>
//         <button onClick={() => removeEducation(edu.id)}>
//           <Trash size={16} />
//         </button>
//       </div>
//     </div>
//   )
// }



"use client"

import { Education } from "@/app/schemas/education.schema"
import { Pencil, Trash, GraduationCap } from "lucide-react"
import { useOnboardingStore } from "@/app/store/onboarding.store"

type Props = {
  edu: Education
  onEdit: () => void
}

export function EducationCard({ edu, onEdit }: Props) {
  const removeEducation = useOnboardingStore((s) => s.removeEducation)

  return (
    <div className="relative w-64 rounded-xl border border-gray-200 bg-white shadow-md p-4 transition hover:shadow-lg hover:scale-[1.02]">
      {/* Top-left icon */}
      <div className="absolute top-2 left-2 text-orange-500">
        <GraduationCap size={20} />
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
          onClick={() => removeEducation(edu.id)}
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          <Trash size={16} />
        </button>
      </div>

      {/* Education Info */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
        <p className="text-sm text-gray-500">
          {edu.degree}
          {edu.field && `, ${edu.field}`}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {edu.startYear} – {edu.currentlyStudying ? "Present" : edu.endYear}
        </p>
      </div>
    </div>
  )
}
