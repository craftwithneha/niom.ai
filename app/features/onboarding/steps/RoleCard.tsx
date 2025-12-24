// "use client"

// import { useState } from "react"
// import { LuBriefcaseBusiness, LuUserRound } from "react-icons/lu"
// import { Button } from "@/components/ui/button"
// import clsx from "clsx"

// export default function RoleCard({ onNext }: { onNext: () => void }) {
//   const [role, setRole] = useState<"business" | "freelancer">("freelancer")

//   const cardBase =
//     "w-full max-w-sm cursor-pointer rounded-lg border p-6 transition-all"
//   const activeCard = "border-primary shadow-sm"
//   const inactiveCard = "border-border hover:border-primary/50"

//   const radioBase =
//     "h-4 w-4 rounded-full border flex items-center justify-center"
//   const radioActive = "border-primary bg-primary"
//   const radioInactive = "border-border"

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center  p-4">
//       {/* Heading */}
//       <div className="text-center mb-8">
//         <h1 className="text-2xl font-semibold">
//           How will you use Niom?
//         </h1>
//         <p className="text-sm text-muted-foreground mt-1">
//           You can work as both roles from one account and switch anytime you want
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="flex gap-4 flex-col sm:flex-row">
//         {/* Business */}
//         <label
//           className={clsx(
//             cardBase,
//             role === "business" ? activeCard : inactiveCard
//           )}
//         >
//           <input
//             type="radio"
//             name="role"
//             value="business"
//             className="hidden"
//             checked={role === "business"}
//             onChange={() => setRole("business")}
//           />

//           <div className="flex items-center justify-between mb-4">
//             <LuBriefcaseBusiness
//               size={40}
//               className="rounded-full bg-accent p-2 text-muted-foreground"
//             />

//             <span
//               className={clsx(
//                 radioBase,
//                 role === "business" ? radioActive : radioInactive
//               )}
//             >
//               {role === "business" && (
//                 <span className="h-2 w-2 rounded-full bg-background" />
//               )}
//             </span>
//           </div>

//           <h2 className="font-medium">I&apos;m a Business</h2>
//           <p className="text-sm text-muted-foreground mt-1">
//             Create projects and hire trusted talent.
//           </p>
//         </label>

//         {/* Freelancer */}
//         <label
//           className={clsx(
//             cardBase,
//             role === "freelancer" ? activeCard : inactiveCard
//           )}
//         >
//           <input
//             type="radio"
//             name="role"
//             value="freelancer"
//             className="hidden"
//             checked={role === "freelancer"}
//             onChange={() => setRole("freelancer")}
//           />

//           <div className="flex items-center justify-between mb-4">
//             <LuUserRound
//               size={40}
//               className="rounded-full bg-accent p-2 text-muted-foreground"
//             />

//             <span
//               className={clsx(
//                 radioBase,
//                 role === "freelancer" ? radioActive : radioInactive
//               )}
//             >
//               {role === "freelancer" && (
//                 <span className="h-2 w-2 rounded-full bg-background" />
//               )}
//             </span>
//           </div>

//           <h2 className="font-medium">I&apos;m a Freelancer</h2>
//           <p className="text-sm text-muted-foreground mt-1">
//             Highlight your skills and connect with ethical projects.
//           </p>
//         </label>
//       </div>

//       {/* Continue Button */}
//       <Button size="lg" className="mt-8 px-10" onClick={onNext}>
//         Continue
//       </Button>
//     </div>
//   )
// }




"use client"

import { LuBriefcaseBusiness, LuUserRound } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { useOnboardingStore } from "@/app/store/onboarding.store"
import clsx from "clsx"

export default function RoleCard({ onNext }: { onNext: () => void }) {
  const role = useOnboardingStore((s) => s.role)
  const setRole = useOnboardingStore((s) => s.setRole)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">
          How will you use Niom?
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          You can work as both roles from one account and switch anytime you want
        </p>
      </div>

      {/* Radio Group */}
      <RadioGroup
        value={role ?? undefined}
        onValueChange={(value) =>
          setRole(value as "business" | "freelancer")
        }
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* Business */}
        <Card
          className={clsx(
            "w-full max-w-sm cursor-pointer transition-all",
            role === "business"
              ? "border-primary shadow-sm"
              : "hover:border-primary/50"
          )}
          onClick={() => setRole("business")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <LuBriefcaseBusiness
              size={40}
              className="rounded-full bg-accent p-2 text-muted-foreground"
            />
            <RadioGroupItem value="business" />
          </CardHeader>

          <CardContent>
            <CardTitle className="text-base">
              I&apos;m a Business
            </CardTitle>
            <CardDescription className="mt-1">
              Create projects and hire trusted talent.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Freelancer */}
        <Card
          className={clsx(
            "w-full max-w-sm cursor-pointer transition-all",
            role === "freelancer"
              ? "border-primary shadow-sm"
              : "hover:border-primary/50"
          )}
          onClick={() => setRole("freelancer")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <LuUserRound
              size={40}
              className="rounded-full bg-accent p-2 text-muted-foreground"
            />
            <RadioGroupItem value="freelancer" />
          </CardHeader>

          <CardContent>
            <CardTitle className="text-base">
              I&apos;m a Freelancer
            </CardTitle>
            <CardDescription className="mt-1">
              Highlight your skills and connect with ethical projects.
            </CardDescription>
          </CardContent>
        </Card>
      </RadioGroup>

      {/* Continue */}
      <Button
        size="lg"
        className="mt-10 px-10"
        disabled={!role}
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  )
}
