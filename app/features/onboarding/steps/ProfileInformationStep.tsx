// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { profileSchema, Profile } from "@/app/schemas/profile.schema"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"

// import { AvatarUpload } from "../../../../components/onboarding/profile/AvatarUpload"
// import { Separator } from "@/components/ui/separator"

// export default function ProfileInformationStep() {
//   const setProfile = useOnboardingStore((s) => s.setProfile)
//   const next = useOnboardingStore((s) => s.next)

//   const form = useForm<Profile>({
//     resolver: zodResolver(profileSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       username: "",
//       dateOfBirth: "",
//       email: "",
//       phone: "",
//       about: "",
//       country: "",
//       city: "",
//       state: "",
//       street: "",
//       zip: "",
//       linkedin: "",
//       website: "",
//       avatar: "",
//     },
//   })

//   function onSubmit(values: Profile) {
//     setProfile(values)
//     next()
//   }

//   return (
//     <div className="min-h-screen bg-[#f6f2ee] flex justify-center px-4">
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="w-full max-w-4xl mt-10"
//       >
//         <h1 className="text-3xl font-semibold text-center mb-3">
//           A few last details, then you can check and publish your profile.
//         </h1>

//         <p className="text-center text-muted-foreground mb-10">
//           A professional photo helps you build trust with clients.
//         </p>

//        <Card>
//   <CardContent className="p-8">
//     <div className="flex flex-col md:flex-row gap-10">

//       {/* LEFT SIDE – AVATAR */}
//       <div className="md:w-55 flex justify-center md:justify-start">
//         <AvatarUpload
//           value={form.watch("avatar")}
//           onChange={(v) => form.setValue("avatar", v)}
//         />
//       </div>

//       {/* RIGHT SIDE – FORM */}
//       <div className="flex-1 space-y-10">

//         {/* PERSONAL INFO */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//   <div className="space-y-1">
//     <Label>First Name *</Label>
//     <Input {...form.register("firstName")} />
//   </div>

//   <div className="space-y-1">
//     <Label>Last Name *</Label>
//     <Input {...form.register("lastName")} />
//   </div>

//   <div className="space-y-1">
//     <Label>Username *</Label>
//     <Input {...form.register("username")} />
//   </div>

//   <div className="space-y-1">
//     <Label>Date of Birth</Label>
//     <Input type="date" {...form.register("dateOfBirth")} />
//   </div>

//   <div className="space-y-1">
//     <Label>Email *</Label>
//     <Input {...form.register("email")} />
//   </div>

//   <div className="space-y-1">
//     <Label>Phone</Label>
//     <Input {...form.register("phone")} />
//   </div>



//   <div className="md:col-span-3 space-y-2">
//   <Label>About You *</Label>
//   <Textarea
//     rows={10}
//     className="resize-none min-h-36"
//     {...form.register("about")}
//   />
//   <p className="text-xs text-muted-foreground text-right">
//     At least 100 characters
//   </p>
// </div>


// </div>


//   <Separator/>

//         {/* ADDRESS */}
//    <div className="space-y-4">
//   <h3 className="font-medium">Address Information</h3>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//     <div className="space-y-1">
//       <Label>Country *</Label>
//       <Input {...form.register("country")} />
//     </div>

//     <div className="space-y-1">
//       <Label>City *</Label>
//       <Input {...form.register("city")} />
//     </div>

//     <div className="space-y-1">
//       <Label>State *</Label>
//       <Input {...form.register("state")} />
//     </div>

//     <div className="space-y-1">
//       <Label>ZIP / Postal Code *</Label>
//       <Input {...form.register("zip")} />
//     </div>

//     <div className="md:col-span-2 space-y-1">
//       <Label>Street Address *</Label>
//       <Input {...form.register("street")} />
//     </div>

//   </div>
// </div>

//  <Separator/>

//         {/* PORTFOLIO */}
//      <div className="space-y-4">
//   <h3 className="font-medium">Portfolio (Optional)</h3>

//   <div className="space-y-1">
//     <Label>LinkedIn Profile</Label>
//     <Input {...form.register("linkedin")} />
//   </div>

//   <div className="space-y-1">
//     <Label>Personal Website</Label>
//     <Input {...form.register("website")} />
//   </div>
// </div>


//       </div>
//     </div>
//   </CardContent>
// </Card>

//         <div className="flex justify-center mt-8">
//           <Button type="submit" className="bg-[#ff6b57] px-8">
//             Review your Profile
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }



"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { profileSchema, Profile } from "@/app/schemas/profile.schema"
import { useOnboardingStore } from "@/app/store/onboarding.store"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { AvatarUpload } from "../../../../components/onboarding/profile/AvatarUpload"
import { Separator } from "@/components/ui/separator"
interface HeaderProps {
    onNext: () => void
}

export default function ProfileInformationStep({onNext}: HeaderProps) {
    const setProfile = useOnboardingStore((s) => s.setProfile)
    const next = useOnboardingStore((s) => s.next)

    const form = useForm<Profile>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            dateOfBirth: "",
            email: "",
            phone: "",
            about: "",
            country: "",
            city: "",
            state: "",
            street: "",
            zip: "",
            linkedin: "",
            website: "",
            avatar: "",
        },
    })

    function onSubmit(values: Profile) {
        setProfile(values)
        next()
    }

    return (
        <div className="min-h-screen bg-[#f6f2ee] flex justify-center px-4">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-4xl mt-10"
            >
                <h1 className="text-3xl font-semibold text-center mb-3">
                    A few last details, then you can check and publish your profile.
                </h1>

                <p className="text-center text-muted-foreground mb-10">
                    A professional photo helps you build trust with clients.
                </p>

                <Card>
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-10">

                            {/* LEFT SIDE – AVATAR */}
                            <div className="md:w-55 flex justify-center md:justify-start">
                                <AvatarUpload
                                    value={form.watch("avatar")}
                                    onChange={(v) => form.setValue("avatar", v)}
                                />
                            </div>

                            {/* RIGHT SIDE – FORM */}
                            <div className="flex-1 space-y-10">

                                {/* PERSONAL INFO */}
                                <div className="space-y-4">
                                    <h3 className="font-medium text-lg">Personal Information</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <Label>First Name *</Label>
                                            <Input placeholder="Ex. Neha" {...form.register("firstName")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>Last Name *</Label>
                                            <Input placeholder="Ex. Fiaz" {...form.register("lastName")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>Username *</Label>
                                            <Input placeholder="Ex. neha.dev" {...form.register("username")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>Date of Birth</Label>
                                            <Input type="date" {...form.register("dateOfBirth")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>Email *</Label>
                                            <Input placeholder="Ex. neha@email.com" {...form.register("email")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>Phone</Label>
                                            <Input placeholder="Ex. +92 3XX XXXXXXX" {...form.register("phone")} />
                                        </div>

                                        <div className="md:col-span-2 space-y-2">
                                            <Label>About You *</Label>
                                            <Textarea
                                                rows={10}
                                                className="resize-none min-h-36"
                                                placeholder="Ex. Frontend developer with experience in React and Tailwind CSS"
                                                {...form.register("about")}
                                            />
                                            <p className="text-xs text-muted-foreground text-right">
                                                At least 100 characters
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Separator />

                                {/* ADDRESS */}
                                <div className="space-y-4">
                                    <h3 className="font-medium">Address Information</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        <div className="space-y-1">
                                            <Label>Country *</Label>
                                            <Input placeholder="Ex. Pakistan" {...form.register("country")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>City *</Label>
                                            <Input placeholder="Ex. Lahore" {...form.register("city")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>State *</Label>
                                            <Input placeholder="Ex. Punjab" {...form.register("state")} />
                                        </div>

                                        <div className="space-y-1">
                                            <Label>ZIP / Postal Code *</Label>
                                            <Input placeholder="Ex. 54000" {...form.register("zip")} />
                                        </div>

                                        <div className="md:col-span-2 space-y-1">
                                            <Label>Street Address *</Label>
                                            <Input
                                                placeholder="Ex. House 12, Street 5"
                                                {...form.register("street")}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <Separator />

                                {/* PORTFOLIO */}
                                <div className="space-y-4">
                                    <h3 className="font-medium">Portfolio (Optional)</h3>

                                    <div className="space-y-1">
                                        <Label>LinkedIn Profile</Label>
                                        <Input
                                            placeholder="Ex. linkedin.com/in/yourname"
                                            {...form.register("linkedin")}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <Label>Personal Website</Label>
                                        <Input
                                            placeholder="Ex. yourportfolio.com"
                                            {...form.register("website")}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-center mt-8">
                    <Button  type="submit" className="bg-[#ff6b57] px-8">
                        Review your Profile
                    </Button>
                </div>
            </form>
        </div>
    )
}
