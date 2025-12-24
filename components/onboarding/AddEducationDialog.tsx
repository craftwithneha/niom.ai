// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { nanoid } from "nanoid"

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"

// import {
//   educationSchema,
//   Education,
// } from "@/app/schemas/education.schema"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// type Props = {
//   open: boolean
//   onClose: () => void
//   initialData?: Education
// }

// export function AddEducationDialog({
//   open,
//   onClose,
//   initialData,
// }: Props) {
//   const addEducation = useOnboardingStore(
//     (s) => s.addEducation
//   )
//   const updateEducation = useOnboardingStore(
//     (s) => s.updateEducation
//   )

//   const form = useForm<Education>({
//     resolver: zodResolver(educationSchema),
//     defaultValues:
//       initialData ?? {
//         id: nanoid(),
//         school: "",
//         degree: "",
//         field: "",
//         location: "",
//         startYear: "",
//         endYear: "",
//         currentlyStudying: false,
//       },
//   })

//   function onSubmit(values: Education) {
//     initialData ? updateEducation(values) : addEducation(values)
//     onClose()
//   }

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-xl">
//         <DialogHeader>
//           <DialogTitle>
//             {initialData ? "Edit Education" : "Add Education"}
//           </DialogTitle>
//         </DialogHeader>

//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-4"
//         >
//           <Input placeholder="School" {...form.register("school")} />
//           <Input placeholder="Degree" {...form.register("degree")} />
//           <Input placeholder="Field of Study" {...form.register("field")} />

//           <div className="flex gap-2">
//             <Input
//               placeholder="Start Year"
//               {...form.register("startYear")}
//             />
//             {!form.watch("currentlyStudying") && (
//               <Input
//                 placeholder="End Year"
//                 {...form.register("endYear")}
//               />
//             )}
//           </div>

//           <div className="flex items-center gap-2">
//             <Checkbox
//               checked={form.watch("currentlyStudying")}
//               onCheckedChange={(v) =>
//                 form.setValue("currentlyStudying", !!v)
//               }
//             />
//             <span>I am currently studying here</span>
//           </div>

//           <div className="flex justify-end gap-2">
//             <Button variant="ghost" type="button" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit" className="bg-orange-500">
//               Save
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }



"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import { educationSchema, Education } from "@/app/schemas/education.schema"
import { useOnboardingStore } from "@/app/store/onboarding.store"

type Props = {
  open: boolean
  onClose: () => void
  initialData?: Education
}

export function AddEducationDialog({ open, onClose, initialData }: Props) {
  const addEducation = useOnboardingStore((s) => s.addEducation)
  const updateEducation = useOnboardingStore((s) => s.updateEducation)

  const form = useForm<Education>({
    resolver: zodResolver(educationSchema),
    defaultValues:
      initialData ?? {
        id: nanoid(),
        school: "",
        degree: "",
        field: "",
        location: "",
        startYear: "",
        endYear: "",
        currentlyStudying: false,
      },
  })

  function onSubmit(values: Education) {
    initialData ? updateEducation(values) : addEducation(values)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-xl"
        aria-describedby="education-dialog-description"
      >
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Education" : "Add Education"}
          </DialogTitle>
          <DialogDescription
            className="text-sm text-muted-foreground"
          >
            Fill in your education details
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="School" {...form.register("school")} />
          <Input placeholder="Degree" {...form.register("degree")} />
          <Input placeholder="Field of Study" {...form.register("field")} />

          <div className="flex gap-2">
            <Input placeholder="Start Year" {...form.register("startYear")} />
            {!form.watch("currentlyStudying") && (
              <Input placeholder="End Year" {...form.register("endYear")} />
            )}
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={form.watch("currentlyStudying")}
              onCheckedChange={(v) =>
                form.setValue("currentlyStudying", !!v)
              }
            />
            <span>I am currently studying here</span>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="ghost" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-orange-500">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
