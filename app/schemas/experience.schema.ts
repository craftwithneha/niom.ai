import { z } from "zod"

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string().min(2),
  company: z.string().min(2),
  location: z.string().optional(),
  country: z.string().optional(),
  startYear: z.string(),
  endYear: z.string().optional(),
  currentlyWorking: z.boolean().optional(),
  description: z.string().optional(),
})

export type Experience = z.infer<typeof experienceSchema>
