// "use client"

// import { useState } from "react"
// import { LuBriefcase, LuPackage } from "react-icons/lu"
// import { Button } from "@/components/ui/button"
// import clsx from "clsx"

// type WorkPreference = "marketplace" | "packages"

// export default function WorkPreferences({ onNext }: { onNext: () => void }) {
//   const [preference, setPreference] = useState<WorkPreference | null>(null)

//   const isSelected = (value: WorkPreference) => preference === value

//   const cardBase =
//     "w-full max-w-sm cursor-pointer rounded-lg border p-6 transition-all"
//   const activeCard = "border-primary shadow-sm"
//   const inactiveCard = "border-border hover:border-primary/50"

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center  p-4">
//       {/* Heading */}
//       <div className="text-center mb-8 max-w-xl">
//         <h1 className="text-2xl font-semibold">
//           And how would you like to work?
//         </h1>
//         <p className="text-sm text-muted-foreground mt-1">
//           Choose the option that best describes how you want to get work on Niom.
//           You can always change this later.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="flex gap-4 flex-col sm:flex-row">
//         {/* Marketplace */}
//         <label
//           className={clsx(
//             cardBase,
//             isSelected("marketplace") ? activeCard : inactiveCard
//           )}
//         >
//           <input
//             type="radio"
//             name="workPreference"
//             value="marketplace"
//             className="hidden"
//             checked={isSelected("marketplace")}
//             onChange={() => setPreference("marketplace")}
//           />

//           <div className="flex items-center justify-between mb-4">
//             <LuBriefcase
//               size={40}
//               className="rounded-full bg-accent p-2 text-muted-foreground"
//             />

//             <SelectionDot active={isSelected("marketplace")} />
//           </div>

//           <h2 className="font-medium">
//             I&apos;d like to find opportunities myself
//           </h2>
//           <p className="text-sm text-muted-foreground mt-1">
//             Browse jobs on the Talent Marketplace™, bid on them, or get invited
//             directly by clients.
//           </p>
//         </label>

//         {/* Packages */}
//         <label
//           className={clsx(
//             cardBase,
//             isSelected("packages") ? activeCard : inactiveCard
//           )}
//         >
//           <input
//             type="radio"
//             name="workPreference"
//             value="packages"
//             className="hidden"
//             checked={isSelected("packages")}
//             onChange={() => setPreference("packages")}
//           />

//           <div className="flex items-center justify-between mb-4">
//             <LuPackage
//               size={40}
//               className="rounded-full bg-accent p-2 text-muted-foreground"
//             />

//             <SelectionDot active={isSelected("packages")} />
//           </div>

//           <h2 className="font-medium">
//             I&apos;d like to package up my work for clients to buy
//           </h2>
//           <p className="text-sm text-muted-foreground mt-1">
//             Define services with prices and timelines and sell them directly
//             through the Project Catalog™.
//           </p>
//         </label>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-col items-center gap-4 mt-8">
//         <button className="text-sm text-primary hover:underline">
//           Skip for now
//         </button>

//         <Button
//           size="lg"
//           disabled={!preference}
//           className="px-10" 
//           onClick={onNext}
//         >
//           Continue
//         </Button>
//       </div>
//     </div>
//   )
// }

// /* -------------------------------------------------------------------------- */
// /*                             Selection Dot                                  */
// /* -------------------------------------------------------------------------- */

// function SelectionDot({ active }: { active: boolean }) {
//   return (
//     <span
//       className={clsx(
//         "h-4 w-4 rounded-full border flex items-center justify-center",
//         active
//           ? "border-primary bg-primary"
//           : "border-border"
//       )}
//     >
//       {active && <span className="h-2 w-2 rounded-full bg-background" />}
//     </span>
//   )
// }




// "use client"

// import { LuBriefcase, LuPackage } from "react-icons/lu"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import {
//   RadioGroup,
//   RadioGroupItem,
// } from "@/components/ui/radio-group"
// import clsx from "clsx"
// import { useOnboardingStore } from "@/app/store/onboarding.store"

// export default function WorkPreferences({ onNext }: { onNext: () => void }) {
//   const preference = useOnboardingStore((s) => s.workPreference)
//   const setPreference = useOnboardingStore((s) => s.setWorkPreference)

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4">
//       {/* Heading */}
//       <div className="text-center mb-10 max-w-xl">
//         <h1 className="text-2xl font-semibold">
//           And how would you like to work?
//         </h1>
//         <p className="text-sm text-muted-foreground mt-1">
//           Choose the option that best describes how you want to get work on Niom.
//           You can always change this later.
//         </p>
//       </div>

//       {/* Radio Group */}
//       <RadioGroup
//         value={preference ?? undefined}
//         onValueChange={(value) =>
//           setPreference(value as "marketplace" | "packages")
//         }
//         className="flex flex-col sm:flex-row gap-4"
//       >
//         {/* Marketplace */}
//         <Card
//           className={clsx(
//             "w-full max-w-sm cursor-pointer transition-all",
//             preference === "marketplace"
//               ? "border-primary shadow-sm"
//               : "hover:border-primary/50"
//           )}
//           onClick={() => setPreference("marketplace")}
//         >
//           <CardHeader className="flex flex-row items-center justify-between space-y-0">
//             <LuBriefcase
//               size={40}
//               className="rounded-full bg-accent p-2 text-muted-foreground"
//             />
//             <RadioGroupItem value="marketplace" />
//           </CardHeader>

//           <CardContent>
//             <CardTitle className="text-base">
//               I&apos;d like to find opportunities myself
//             </CardTitle>
//             <CardDescription className="mt-1">
//               Browse jobs on the Talent Marketplace™, bid on them, or get invited
//               directly by clients.
//             </CardDescription>
//           </CardContent>
//         </Card>

//         {/* Packages */}
//         <Card
//           className={clsx(
//             "w-full max-w-sm cursor-pointer transition-all",
//             preference === "packages"
//               ? "border-primary shadow-sm"
//               : "hover:border-primary/50"
//           )}
//           onClick={() => setPreference("packages")}
//         >
//           <CardHeader className="flex flex-row items-center justify-between space-y-0">
//             <LuPackage
//               size={40}
//               className="rounded-full bg-accent p-2 text-muted-foreground"
//             />
//             <RadioGroupItem value="packages" />
//           </CardHeader>

//           <CardContent>
//             <CardTitle className="text-base">
//               I&apos;d like to package up my work for clients to buy
//             </CardTitle>
//             <CardDescription className="mt-1">
//               Define services with prices and timelines and sell them directly
//               through the Project Catalog™.
//             </CardDescription>
//           </CardContent>
//         </Card>
//       </RadioGroup>

//       {/* Actions */}
//       <div className="flex flex-col items-center gap-4 mt-10">
//         <button
//           type="button"
//           className="text-sm text-primary hover:underline"
//           onClick={() => {
//             setPreference(null)
//             onNext()
//           }}
//         >
//           Skip for now
//         </button>

//         <Button
//           size="lg"
//           className="px-10"
//           disabled={!preference}
//           onClick={onNext}
//         >
//           Continue
//         </Button>
//       </div>
//     </div>
//   )
// }


"use client"

import { LuBriefcase, LuPackage } from "react-icons/lu"
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
import { Label } from "@/components/ui/label"
import clsx from "clsx"
import { useOnboardingStore } from "@/app/store/onboarding.store"
import type { WorkPreference } from "@/app/store/onboarding.store"

export default function WorkPreferences({ onNext }: { onNext: () => void }) {
  const preference = useOnboardingStore((s) => s.workPreference)
  const setPreference = useOnboardingStore((s) => s.setWorkPreference)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Heading */}
      <div className="text-center mb-10 max-w-xl">
        <h1 className="text-2xl font-semibold">
          And how would you like to work?
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Choose the option that best describes how you want to get work on Niom.
        </p>
      </div>

      {/* Radio Group */}
      <RadioGroup
        value={preference}
        onValueChange={(value) =>
          setPreference(value as WorkPreference)
        }
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* Marketplace */}
        <Label htmlFor="marketplace" className="cursor-pointer">
          <Card
            className={clsx(
              "w-full max-w-sm transition-all border-2",
              preference === "marketplace"
                ? "border-primary shadow-sm"
                : "hover:border-primary/50"
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <LuBriefcase
                size={40}
                className="rounded-full bg-accent p-2 text-muted-foreground"
              />
              <RadioGroupItem id="marketplace" value="marketplace" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-base">
                I&apos;d like to find opportunities myself
              </CardTitle>
              <CardDescription className="mt-1">
                Browse jobs, bid on them, or get invited by clients.
              </CardDescription>
            </CardContent>
          </Card>
        </Label>

        {/* Packages */}
        <Label htmlFor="packages" className="cursor-pointer">
          <Card
            className={clsx(
              "w-full max-w-sm transition-all border-2",
              preference === "packages"
                ? "border-primary shadow-sm"
                : "hover:border-primary/50"
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <LuPackage
                size={40}
                className="rounded-full bg-accent p-2 text-muted-foreground"
              />
              <RadioGroupItem id="packages" value="packages" />
            </CardHeader>

            <CardContent>
              <CardTitle className="text-base">
                I&apos;d like to package up my work
              </CardTitle>
              <CardDescription className="mt-1">
                Create services with fixed prices and timelines.
              </CardDescription>
            </CardContent>
          </Card>
        </Label>
      </RadioGroup>

      {/* Actions */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <button
          type="button"
          className="text-sm text-primary hover:underline"
          onClick={() => {
            setPreference("") // ✅ null ki jagah
            onNext()
          }}
        >
          Skip for now
        </button>

        <Button
          size="lg"
          className="px-10"
          disabled={!preference}
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
