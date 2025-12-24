import { z } from "zod"

export const certificationSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Certification name is required"),
  organization: z.string().min(2, "Issuing organization is required"),
  issueYear: z.string().min(4, "Issue year is required"),
})

export type Certification = z.infer<typeof certificationSchema>
