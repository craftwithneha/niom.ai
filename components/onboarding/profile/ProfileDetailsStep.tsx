// "use client"

// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// export default function ProfileDetailsStep({ onNext }: { onNext: () => void }) {
//   const { profile, address, portfolio } = useOnboardingStore()
//   const updateProfile = useOnboardingStore((s) => s.updateProfile)
//   const updateAddress = useOnboardingStore((s) => s.updateAddress)
//   const updatePortfolio = useOnboardingStore((s) => s.updatePortfolio)

//   return (
//     <div className="min-h-screen flex justify-center px-4">
//       <div className="w-full max-w-3xl bg-white p-6 rounded-lg border">
//         <h2 className="text-lg font-semibold mb-4">
//           Personal Information
//         </h2>

//         <div className="grid grid-cols-2 gap-4">
//           <Input
//             placeholder="First Name"
//             value={profile.firstName}
//             onChange={(e) =>
//               updateProfile({ firstName: e.target.value })
//             }
//           />
//           <Input
//             placeholder="Last Name"
//             value={profile.lastName}
//             onChange={(e) =>
//               updateProfile({ lastName: e.target.value })
//             }
//           />
//           <Input
//             placeholder="Username"
//             value={profile.username}
//             onChange={(e) =>
//               updateProfile({ username: e.target.value })
//             }
//           />
//           <Input
//             type="date"
//             value={profile.dob}
//             onChange={(e) =>
//               updateProfile({ dob: e.target.value })
//             }
//           />
//           <Input
//             placeholder="Email"
//             value={profile.email}
//             onChange={(e) =>
//               updateProfile({ email: e.target.value })
//             }
//           />
//           <Input
//             placeholder="Phone"
//             value={profile.phone}
//             onChange={(e) =>
//               updateProfile({ phone: e.target.value })
//             }
//           />
//         </div>

//         <Textarea
//           className="mt-4"
//           placeholder="Tell us about yourself"
//           value={profile.bio}
//           onChange={(e) =>
//             updateProfile({ bio: e.target.value })
//           }
//         />

//         <h2 className="text-lg font-semibold mt-8 mb-4">
//           Address Information
//         </h2>

//         <div className="grid grid-cols-2 gap-4">
//           <Input
//             placeholder="Country"
//             value={address.country}
//             onChange={(e) =>
//               updateAddress({ country: e.target.value })
//             }
//           />
//           <Input
//             placeholder="City"
//             value={address.city}
//             onChange={(e) =>
//               updateAddress({ city: e.target.value })
//             }
//           />
//           <Input
//             placeholder="State"
//             value={address.state}
//             onChange={(e) =>
//               updateAddress({ state: e.target.value })
//             }
//           />
//           <Input
//             placeholder="Zip Code"
//             value={address.zip}
//             onChange={(e) =>
//               updateAddress({ zip: e.target.value })
//             }
//           />
//         </div>

//         <h2 className="text-lg font-semibold mt-8 mb-4">
//           Portfolio (Optional)
//         </h2>

//         <Input
//           placeholder="LinkedIn Profile"
//           value={portfolio.linkedin}
//           onChange={(e) =>
//             updatePortfolio({ linkedin: e.target.value })
//           }
//         />

//         <Input
//           className="mt-3"
//           placeholder="Personal Website"
//           value={portfolio.website}
//           onChange={(e) =>
//             updatePortfolio({ website: e.target.value })
//           }
//         />

//         <Button
//           className="mt-8 bg-[#ff6b57]"
//           onClick={onNext}
//         >
//           Review your Profile
//         </Button>
//       </div>
//     </div>
//   )
// }
