// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { profileSchema, Profile } from "@/app/schemas/profile.schema"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

// export default function ProfileForm({ onNext }: { onNext: () => void }) {
//   const setProfile = useOnboardingStore((s) => s.setProfile)

//   const form = useForm<Profile>({
//     resolver: zodResolver(profileSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       username: "",
//       dob: "",
//       email: "",
//       phone: "",
//       about: "",
//       country: "",
//       city: "",
//       state: "",
//       street: "",
//       postalCode: "",
//       linkedin: "",
//       website: "",
//     },
//   })

//   function onSubmit(values: Profile) {
//     setProfile(values)
//     onNext()
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#f6f2ee] p-6">
//       <Card className="w-full max-w-4xl p-6">
//         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-6"
//         >
//           {/* Names */}
//           <div className="grid grid-cols-2 gap-4">
//             <Input placeholder="First Name" {...form.register("firstName")} />
//             <Input placeholder="Last Name" {...form.register("lastName")} />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <Input placeholder="Username" {...form.register("username")} />
//             <Input type="date" {...form.register("dob")} />
//           </div>

//           <Input placeholder="Email" {...form.register("email")} />
//           <Input placeholder="Phone" {...form.register("phone")} />

//           <Textarea
//             placeholder="Tell us about yourself"
//             {...form.register("about")}
//           />

//           <h3 className="font-medium">Address Information</h3>

//           <div className="grid grid-cols-2 gap-4">
//             <Input placeholder="Country" {...form.register("country")} />
//             <Input placeholder="City" {...form.register("city")} />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <Input placeholder="State" {...form.register("state")} />
//             <Input placeholder="Postal Code" {...form.register("postalCode")} />
//           </div>

//           <Input placeholder="Street Address" {...form.register("street")} />

//           <h3 className="font-medium">Portfolio (Optional)</h3>

//           <Input placeholder="LinkedIn URL" {...form.register("linkedin")} />
//           <Input placeholder="Website URL" {...form.register("website")} />

//           <div className="flex justify-center">
//             <Button className="bg-[#ff6b57] px-8">
//               Review Profile
//             </Button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   )
// }
