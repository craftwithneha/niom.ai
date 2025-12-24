// "use client";

// import { useState } from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";

// const SUGGESTED_SKILLS = [
//   "Brand Development",
//   "Branding",
//   "Branding & Marketing",
//   "Construction Document Preparation",
//   "Logo Design",
//   "Specifications",
// ];

// export default function SkillsSelection({ onNext }: { onNext: () => void }) {
//   const [skills, setSkills] = useState<string[]>([]);

//   const addSkill = (skill: string) => {
//     if (skills.length >= 15 || skills.includes(skill)) return;
//     setSkills((prev) => [...prev, skill]);
//   };

//   return (
//     <div className="min-h-screen bg-[#f6f2ee] flex flex-col items-center justify-center px-4">
//       {/* Heading */}
//       <h1 className="text-2xl font-semibold mb-2">
//         Nearly there! What work are you here to do?
//       </h1>

//       <p className="text-sm text-muted-foreground text-center max-w-xl mb-8">
//         Your skills show clients what you can offer, and help us choose which
//         jobs to recommend to you. Add or remove the ones we’ve suggested, or
//         start typing to pick more. It’s up to you.
//       </p>

//       {/* Card */}
//       <Card className="w-full max-w-xl shadow-sm">
//         <CardContent className="p-6 space-y-6">
//           {/* Inputs */}
//           <div>
//             <p className="text-sm font-medium mb-2">Your Skills</p>

//             <div className="flex gap-3">
//               <Input
//                 placeholder="Enter Skills here"
//                 className="flex-1"
//               />

//               <Select>
//                 <SelectTrigger className="w-40">
//                   <SelectValue placeholder="My level is" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="beginner">Beginner</SelectItem>
//                   <SelectItem value="intermediate">Intermediate</SelectItem>
//                   <SelectItem value="expert">Expert</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <p className="text-xs text-muted-foreground text-right mt-1">
//               Max 15 Skills
//             </p>
//           </div>

//           {/* Suggested Skills */}
//           <div>
//             <p className="text-sm font-medium mb-3">
//               Suggested skills
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {SUGGESTED_SKILLS.map((skill) => (
//                 <button
//                   key={skill}
//                   onClick={() => addSkill(skill)}
//                   className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm hover:bg-accent transition"
//                 >
//                   <span className="text-lg leading-none">+</span>
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Continue */}
//     <Button
//   className="mt-8 bg-[#ff6b57]"
//   onClick={onNext}
// >
//   Continue
// </Button>

//     </div>
//   );
// }



"use client"

import { X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useOnboardingStore } from "@/app/store/onboarding.store"
import { Badge } from "@/components/ui/badge"

const SUGGESTED_SKILLS = [
  "Brand Development",
  "Branding",
  "Branding & Marketing",
  "Construction Document Preparation",
  "Logo Design",
  "Specifications",
]

export default function SkillsSelection({ onNext }: { onNext: () => void }) {
  const skills = useOnboardingStore((s) => s.skills)
  const addSkill = useOnboardingStore((s) => s.addSkill)
  const removeSkill = useOnboardingStore((s) => s.removeSkill)
  const skillLevel = useOnboardingStore((s) => s.skillLevel)
  const setSkillLevel = useOnboardingStore((s) => s.setSkillLevel)

  return (
    <div className="min-h-screen bg-[#f6f2ee] flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-2">
        Nearly there! What work are you here to do?
      </h1>

      <p className="text-sm text-muted-foreground text-center max-w-xl mb-8">
        Your skills show clients what you can offer, and help us choose which
        jobs to recommend to you. Add or remove the ones we’ve suggested, or
        start typing to pick more. It’s up to you.
      </p>

      {/* Card */}
      <Card className="w-full max-w-xl shadow-sm">
        <CardContent className="p-6 space-y-6">
          {/* Skills Input */}
          <div>
            <p className="text-sm font-medium mb-2">Your Skills</p>

          {/* Skills Input + Level */}
{/* Skills Input + Level (Pure shadcn) */}
<div className="flex items-start gap-3">
  {/* Skills input */}
  <div className="flex-1">
    <div className="flex flex-wrap items-center gap-2 rounded-md border">
      {skills.map((skill) => (
        <Badge
                  key={skill}
          variant="secondary"
          className="flex items-center gap-1 pr-1"
        >
          {skill}
          <button
            onClick={() => removeSkill(skill)}
            className="ml-1 rounded-sm hover:bg-muted"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}

      <Input
        placeholder="Enter skills here"
        className="border-0 p-2 shadow-none focus-visible:ring-0 flex-1 min-w-30"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            const value = e.currentTarget.value.trim()
            if (value) {
              addSkill(value)
              e.currentTarget.value = ""
            }
          }
        }}
      />
    </div>
  </div>

  {/* Level select */}
  <Select
    value={skillLevel || "" }
    onValueChange={(v) =>
      setSkillLevel(v as "beginner" | "intermediate" | "expert")
    }
  >
    <SelectTrigger className="w-37.5">
      <SelectValue placeholder="My level is" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="beginner">Beginner</SelectItem>
      <SelectItem value="intermediate">Intermediate</SelectItem>
      <SelectItem value="expert">Expert</SelectItem>
    </SelectContent>
  </Select>
</div>

          </div>

          {/* Suggested skills */}
          <div>
            <p className="text-sm font-medium mb-3">
              Suggested skills
            </p>

            <div className="flex flex-wrap gap-2">
              {SUGGESTED_SKILLS.map((skill) => (
                <button
                  key={skill}
                  onClick={() => addSkill(skill)}
                  className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm hover:bg-accent transition"
                >
                  <span className="text-lg leading-none">+</span>
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Continue */}
      <Button
        className="mt-8 bg-[#ff6b57] px-10"
        disabled={skills.length === 0}
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  )
}
