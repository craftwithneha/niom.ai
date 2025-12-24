// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { loginSchema } from "../../app/schemas/auth/schema"
// import { useRouter } from "next/navigation"
// import { z } from "zod"

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"

// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import Link from "next/link"
// import { SocialAuth } from "../../components/auth/social-auth"


// type LoginValues = z.infer<typeof loginSchema>

// export function LoginForm() {
//   const form = useForm<LoginValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       remember: false,
//     },
//   })

//   const router = useRouter()

//   function onSubmit(values: LoginValues) {
//     console.log(values)
//   }

//   return (
//     <div className="rounded-xl bg-background p-6 shadow">
//       <h1 className="text-2xl font-semibold mb-1">Log in</h1>
//       <p className="text-sm text-muted-foreground mb-6">
//         Welcome back to Niom
//       </p>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="neha@example.com" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input type="password" placeholder="********" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="flex items-center justify-between text-sm">
//             <FormField
//               control={form.control}
//               name="remember"
//               render={({ field }) => (
//                 <div className="flex items-center gap-2">
//                   <Checkbox
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                   />
//                   <span>Keep me logged in</span>
//                 </div>
//               )}
//             />

//             <Link href="#" className="text-primary hover:underline">
//               Forgot Password?
//             </Link>
//           </div>

//           <Button className="w-full" size="lg"
//           onClick={() => router.push("/freelancer") }>
//             Continue
//           </Button>

//           <div className="text-center text-xs text-muted-foreground">
//             OR CONTINUE WITH
//           </div>

//           <SocialAuth />

//           <p className="text-center text-sm">
//             Don’t have an account?{" "}
//             <Link href="/signup" className="text-primary underline">
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </Form>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { loginSchema } from "@/app/schemas/auth/schema"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { SocialAuth } from "@/components/auth/social-auth"

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  function onSubmit(values: LoginValues) {
    console.log(values)
    router.push("/freelancer")
  }


  if (!mounted) return null

  return (
    <div className="rounded-xl bg-background p-6 shadow">
      <h1 className="mb-1 text-2xl font-semibold">Log in</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Welcome back to Niom
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="neha@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="********"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember me */}
          <div className="flex items-center justify-between text-sm">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">
                    Keep me logged in
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link href="#" className="text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Continue
          </Button>

          <div className="text-center text-xs text-muted-foreground">
            OR CONTINUE WITH
          </div>

          <SocialAuth />

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-primary underline">
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  )
}
