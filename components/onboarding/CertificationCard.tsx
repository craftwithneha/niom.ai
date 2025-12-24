// "use client"

// import { Certification } from "@/app/schemas/certification.schema"
// import { Pencil, Trash } from "lucide-react"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// export function CertificationCard({
//   cert,
//   onEdit,
// }: {
//   cert: Certification
//   onEdit: () => void
// }) {
//   const remove = useOnboardingStore((s) => s.removeCertification)

//   return (
//     <div className="w-72 rounded-lg border bg-white p-4 flex justify-between">
//       <div>
//         <h3 className="font-medium">{cert.name}</h3>
//         <p className="text-sm text-muted-foreground">
//           {cert.organization}
//         </p>
//         <p className="text-xs text-muted-foreground">
//           Issued {cert.issueYear}
//         </p>
//       </div>

//       <div className="flex gap-2">
//         <button onClick={onEdit}>
//           <Pencil size={16} />
//         </button>
//         <button onClick={() => remove(cert.id)}>
//           <Trash size={16} />
//         </button>
//       </div>
//     </div>
//   )
// }



"use client"

import { Certification } from "@/app/schemas/certification.schema"
import { Pencil, Trash, Award } from "lucide-react"
import { useOnboardingStore } from "@/app/store/onboarding.store"

export function CertificationCard({
  cert,
  onEdit,
}: {
  cert: Certification
  onEdit: () => void
}) {
  const remove = useOnboardingStore((s) => s.removeCertification)

  return (
    <div className="relative w-72 rounded-xl border border-gray-200 bg-white shadow-sm p-4">
      {/* Top icons */}
      <div className="absolute top-2 left-2 text-orange-500">
        <Award size={20} />
      </div>
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={onEdit}
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => remove(cert.id)}
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          <Trash size={16} />
        </button>
      </div>

      {/* Certification Info */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
        <p className="text-sm text-gray-500">{cert.organization}</p>
        <p className="text-xs text-gray-400 mt-1">Issued {cert.issueYear}</p>
      </div>
    </div>
  )
}
