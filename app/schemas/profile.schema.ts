import { z } from "zod"

export const profileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z.string().min(3),
  dateOfBirth: z.string(),
  email: z.string().email(),
  phone: z.string().min(7),
  about: z.string().min(100),
  country: z.string(),
  city: z.string(),
  state: z.string(),
  street: z.string(),
  zip: z.string(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  avatar: z.string().optional(), // image url/base64
})

export type Profile = z.infer<typeof profileSchema>
