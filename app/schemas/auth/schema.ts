// import { z } from "zod"

// export const loginSchema = z.object({
//   email: z.string().email("Invalid email"),
//   password: z.string().min(8, "Minimum 8 characters"),
//   remember: z.boolean().optional(),
// })

// export const signupSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Invalid email"),
//   password: z.string().min(8, "Minimum 8 characters"),
//   country: z.string().min(1, "Country is required"),
// })




import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Enter email")
    .refine(
      (val) => z.string().email().safeParse(val).success,
      { message: "Invalid email" }
    ),

  password: z.string().min(8, "Minimum 8 characters"),
  remember: z.boolean().optional(),
});

export const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
  country: z.string().min(1, "Country is required"),
});
