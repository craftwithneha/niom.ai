"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "../../app/schemas/auth/schema"
import { z } from "zod"

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
import Link from "next/link"
import { SocialAuth } from "./social-auth"
import { useRouter } from "next/navigation"

type SignupValues = z.infer<typeof signupSchema>

export function SignupForm() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      country: "",
    },
  })
   const router = useRouter()

  function onSubmit(values: SignupValues) {
    console.log(values)
  }

  return (
    <div className="rounded-xl bg-background p-6 shadow">
      <h1 className="text-2xl font-semibold mb-1">Sign up</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Create your Niom account
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Neha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="neha@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Pakistan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" size="lg" onClick={()=> router.push("/freelancer")}>
            Create my Account
          </Button>
    
 
          <div className="text-center text-xs text-muted-foreground">
            OR CONTINUE WITH
          </div>
   
          <SocialAuth />

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  )
}
