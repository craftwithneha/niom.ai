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
// import { Textarea } from "@/components/ui/textarea"

// import {
//   experienceSchema,
//   Experience,
// } from "@/app/schemas/experience.schema"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// type Props = {
//   open: boolean
//   onClose: () => void
//   initialData?: Experience
// }

// export function AddExperienceDialog({
//   open,
//   onClose,
//   initialData,
// }: Props) {
//   const addExperience = useOnboardingStore(
//     (s) => s.addExperience
//   )
//   const updateExperience = useOnboardingStore(
//     (s) => s.updateExperience
//   )

//   const form = useForm<Experience>({
//     resolver: zodResolver(experienceSchema),
//     defaultValues:
//       initialData ?? {
//         id: nanoid(),
//         title: "",
//         company: "",
//         location: "",
//         country: "",
//         startYear: "",
//         endYear: "",
//         currentlyWorking: false,
//         description: "",
//       },
//   })

//   function onSubmit(values: Experience) {
//     initialData ? updateExperience(values) : addExperience(values)
//     onClose()
//   }

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-xl">
//         <DialogHeader>
//           <DialogTitle>
//             {initialData ? "Edit Work Experience" : "Add Work Experience"}
//           </DialogTitle>
//         </DialogHeader>

//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-4"
//         >
//           <Input placeholder="Title" {...form.register("title")} />
//           <Input placeholder="Company" {...form.register("company")} />
//           <Input placeholder="Location" {...form.register("location")} />

//           <div className="flex gap-2">
//             <Input
//               placeholder="Start Year"
//               {...form.register("startYear")}
//             />
//             {!form.watch("currentlyWorking") && (
//               <Input
//                 placeholder="End Year"
//                 {...form.register("endYear")}
//               />
//             )}
//           </div>

//           <div className="flex items-center gap-2">
//             <Checkbox
//               checked={form.watch("currentlyWorking")}
//               onCheckedChange={(v) =>
//                 form.setValue("currentlyWorking", !!v)
//               }
//             />
//             <span>I’m currently working in this role</span>
//           </div>

//           <Textarea
//             placeholder="Description"
//             {...form.register("description")}
//           />

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
import { Textarea } from "@/components/ui/textarea"

import { experienceSchema, Experience } from "@/app/schemas/experience.schema"
import { useOnboardingStore } from "@/app/store/onboarding.store"

type Props = {
  open: boolean
  onClose: () => void
  initialData?: Experience
}

export function AddExperienceDialog({ open, onClose, initialData }: Props) {
  const addExperience = useOnboardingStore((s) => s.addExperience)
  const updateExperience = useOnboardingStore((s) => s.updateExperience)

  const form = useForm<Experience>({
    resolver: zodResolver(experienceSchema),
    defaultValues:
      initialData ?? {
        id: nanoid(),
        title: "",
        company: "",
        location: "",
        country: "",
        startYear: "",
        endYear: "",
        currentlyWorking: false,
        description: "",
      },
  })

  function onSubmit(values: Experience) {
    initialData ? updateExperience(values) : addExperience(values)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Work Experience" : "Add Work Experience"}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Please fill in the details for your work experience.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Title" {...form.register("title")} />
          <Input placeholder="Company" {...form.register("company")} />
          <Input placeholder="Location" {...form.register("location")} />

          <div className="flex gap-2">
            <Input placeholder="Start Year" {...form.register("startYear")} />
            {!form.watch("currentlyWorking") && (
              <Input placeholder="End Year" {...form.register("endYear")} />
            )}
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={form.watch("currentlyWorking")}
              onCheckedChange={(v) => form.setValue("currentlyWorking", !!v)}
            />
            <span>I’m currently working in this role</span>
          </div>

          <Textarea placeholder="Description" {...form.register("description")} />

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
