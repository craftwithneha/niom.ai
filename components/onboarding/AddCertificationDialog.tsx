// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { nanoid } from "nanoid"

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// import {
//   certificationSchema,
//   Certification,
// } from "@/app/schemas/certification.schema"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// type Props = {
//   open: boolean
//   onClose: () => void
//   initialData?: Certification
// }

// export function AddCertificationDialog({
//   open,
//   onClose,
//   initialData,
// }: Props) {
//   const add = useOnboardingStore((s) => s.addCertification)
//   const update = useOnboardingStore((s) => s.updateCertification)

//   const form = useForm<Certification>({
//     resolver: zodResolver(certificationSchema),
//     defaultValues:
//       initialData ?? {
//         id: nanoid(),
//         name: "",
//         organization: "",
//         issueYear: "",
//       },
//   })

//   function onSubmit(values: Certification) {
//     initialData ? update(values) : add(values)
//     onClose()
//   }

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>
//             {initialData ? "Edit Certification" : "Add Certification Details"}
//           </DialogTitle>
//         </DialogHeader>

//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-4"
//         >
//           <Input
//             placeholder="Certification Name"
//             {...form.register("name")}
//           />

//           <Input
//             placeholder="Issuing Organization"
//             {...form.register("organization")}
//           />

//           <Input
//             placeholder="Issue Year"
//             {...form.register("issueYear")}
//           />

//           <div className="flex justify-end gap-2">
//             <Button variant="ghost" type="button" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit" className="bg-[#ff6b57]">
//               Save
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }


"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { nanoid } from "nanoid"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { certificationSchema, Certification } from "@/app/schemas/certification.schema"
import { useOnboardingStore } from "@/app/store/onboarding.store"

type Props = {
  open: boolean
  onClose: () => void
  initialData?: Certification
}

export function AddCertificationDialog({ open, onClose, initialData }: Props) {
  const add = useOnboardingStore((s) => s.addCertification)
  const update = useOnboardingStore((s) => s.updateCertification)

  const form = useForm<Certification>({
    resolver: zodResolver(certificationSchema),
    defaultValues:
      initialData ?? {
        id: nanoid(),
        name: "",
        organization: "",
        issueYear: "",
      },
  })

  function onSubmit(values: Certification) {
    initialData ? update(values) : add(values)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md"
        aria-describedby="certification-dialog-description"
      >
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Certification" : "Add Certification Details"}
          </DialogTitle>
          <DialogDescription
            className="text-sm text-muted-foreground"
          >
            Fill in your certification information
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Certification Name" {...form.register("name")} />
          <Input placeholder="Issuing Organization" {...form.register("organization")} />
          <Input placeholder="Issue Year" {...form.register("issueYear")} />

          <div className="flex justify-end gap-2">
            <Button variant="ghost" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-[#ff6b57]">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
