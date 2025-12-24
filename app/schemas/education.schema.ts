import { z } from "zod"

export const educationSchema = z.object({
  id: z.string(),
  school: z.string().min(2),
  degree: z.string().min(2),
  field: z.string().optional(),
  location: z.string().optional(),
  startYear: z.string(),
  endYear: z.string().optional(),
  currentlyStudying: z.boolean().optional(),
})

export type Education = z.infer<typeof educationSchema>
