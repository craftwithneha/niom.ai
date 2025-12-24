// "use client"

// import { useOnboardingStore } from "@/app/store/onboarding.store"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// export default function ReviewProfile() {
//   const profile = useOnboardingStore((s) => s.profile)
//   const experiences = useOnboardingStore((s) => s.experiences)
//   const educations = useOnboardingStore((s) => s.educations)
//   const skills = useOnboardingStore((s) => s.skills)

//   if (!profile) return null

//   return (
//     <div className="min-h-screen bg-[#f6f2ee] flex justify-center p-6">
//       <Card className="w-full max-w-4xl p-6 space-y-6">
//         <h2 className="text-xl font-semibold">Review Profile</h2>

//         {/* About */}
//         <section>
//           <h3 className="font-medium">About Me</h3>
//           <p className="text-sm text-muted-foreground">{profile.about}</p>
//         </section>

//         {/* Skills */}
//         <section>
//           <h3 className="font-medium">Skills</h3>
//           <div className="flex flex-wrap gap-2">
//             {skills.map((s) => (
//               <span
//                 key={s}
//                 className="rounded-full bg-accent px-3 py-1 text-sm"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Experience */}
//         <section>
//           <h3 className="font-medium">Work History</h3>
//           {experiences.map((e) => (
//             <div key={e.id} className="text-sm">
//               <p className="font-medium">{e.title}</p>
//               <p className="text-muted-foreground">
//                 {e.company} • {e.startYear} –{" "}
//                 {e.currentlyWorking ? "Present" : e.endYear}
//               </p>
//             </div>
//           ))}
//         </section>

//         {/* Education */}
//         <section>
//           <h3 className="font-medium">Education</h3>
//           {educations.map((e) => (
//             <div key={e.id} className="text-sm">
//               <p className="font-medium">{e.institute}</p>
//               <p className="text-muted-foreground">
//                 {e.degree} ({e.startYear} – {e.endYear})
//               </p>
//             </div>
//           ))}
//         </section>

//         <div className="flex justify-center">
//           <Button className="bg-[#ff6b57] px-8">
//             Submit Profile
//           </Button>
//         </div>
//       </Card>
//     </div>
//   )
// }



"use client"

import Image from "next/image"
import { Pencil, Plus, MapPin, CheckCircle2 } from "lucide-react"
import { useState } from "react"

import { useOnboardingStore } from "@/app/store/onboarding.store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  onNext: () => void
}

export default function ReviewProfile({ onNext }: HeaderProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const profile = useOnboardingStore(s => s.profile)

  const skills = useOnboardingStore(s => s.skills)
  const tools = useOnboardingStore(s => s.tools)
  const technologies = useOnboardingStore(s => s.technologies)

  const experiences = useOnboardingStore(s => s.experiences)
  const educations = useOnboardingStore(s => s.educations)
  const languages = useOnboardingStore(s => s.languages)

  if (!profile) return null

  // 🔹 Handle Submit
  const handleSubmit = () => {
    setIsSubmitted(true)
    onNext()
  }

  // ------------------------------------------------------------------
  // 🎉 SUCCESS CARD AFTER SUBMISSION
  // ------------------------------------------------------------------
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f6f2ee] flex justify-center px-4 py-16">
        <Card className="max-w-lg w-full p-8 text-center shadow-lg border border-orange-200">

          <div className="flex justify-center mb-4">
            <CheckCircle2 className="text-green-600" size={48} />
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            Profile Submitted Successfully
          </h2>

          <p className="text-muted-foreground mb-6">
            Your profile is now ready — clients and community members can view it.
          </p>

          <div className="flex flex-col items-center gap-3 mb-6">

            <div className="relative h-20 w-20 rounded-full overflow-hidden border">
              {profile.avatar ? (
                <Image src={profile.avatar} alt="avatar" fill className="object-cover" />
              ) : (
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  <span className="text-2xl font-semibold">
                    {profile.firstName?.[0]}
                  </span>
                </div>
              )}
            </div>

            <p className="font-medium text-lg">
              {profile.firstName} {profile.lastName}
            </p>

            <p className="text-sm text-muted-foreground">@{profile.username}</p>
          </div>

          <Button className="bg-[#ff6b57] px-8">
            Continue
          </Button>
        </Card>
      </div>
    )
  }

  // ------------------------------------------------------------------
  // 🧾 REVIEW PROFILE SCREEN (existing layout)
  // ------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f6f2ee] flex justify-center px-4 py-10">
      <div className="w-full max-w-5xl">

        <h1 className="text-2xl font-semibold text-center mb-2">
          Review Profile
        </h1>

        <p className="text-center text-muted-foreground mb-8">
          A professional photo helps you build trust with your clients.
        </p>

        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">

            {/* LEFT PROFILE CARD */}
            <div className="border rounded-lg p-4 text-center space-y-4">

              <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden">
                {profile.avatar ? (
                  <Image src={profile.avatar} alt="Profile Avatar" fill className="object-cover" />
                ) : (
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <span className="text-xl font-medium">
                      {profile.firstName?.[0]}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <p className="font-medium">
                  {profile.firstName} {profile.lastName}
                </p>
                <p className="text-sm text-muted-foreground">
                  @{profile.username}
                </p>
              </div>

              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <MapPin size={14} />
                {profile.city}, {profile.country}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="space-y-6">

              <Section title="About Me">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {profile.about}
                </p>
              </Section>

              {(tools.length > 0 || technologies.length > 0) && (
                <Section title="Tools & Technologies">
                  <div className="flex flex-wrap gap-2">
                    {tools.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                    {technologies.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                  </div>
                </Section>
              )}

              {skills.length > 0 && (
                <Section title="Skills">
                  <div className="flex flex-wrap gap-2">
                    {skills.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
                  </div>
                </Section>
              )}

              <Section title="Work History" action={<Plus size={16} />}>
                {experiences.length > 0 ? (
                  <div className="space-y-3">
                    {experiences.map(exp => (
                      <div key={exp.id} className="border rounded-md p-3">
                        <p className="font-medium">{exp.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} • {exp.startYear} – {exp.currentlyWorking ? "Present" : exp.endYear}
                        </p>
                        {exp.location && (
                          <p className="text-xs text-muted-foreground">{exp.location}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No work history added yet
                  </p>
                )}
              </Section>

              <Section title="Educational History" action={<Plus size={16} />}>
                {educations.map(edu => (
                  <div key={edu.id} className="border rounded-md p-3">
                    <p className="font-medium">{edu.currentlyStudying}</p>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.startYear} – {edu.endYear}
                    </p>
                  </div>
                ))}
              </Section>

              <Section title="Languages">
                <div className="space-y-2">
                  {languages.map(lang => (
                    <p key={lang.id} className="text-sm">
                      {lang.name} — {lang.level}
                    </p>
                  ))}
                </div>
              </Section>

            </div>
          </div>
        </Card>

        <div className="flex justify-center mt-8">
          <Button onClick={handleSubmit}  className="bg-[#ff6b57] px-10">
            Submit Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
  action,
}: {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <button className="text-muted-foreground hover:text-primary">
          {action ?? <Pencil size={16} />}
        </button>
      </div>
      {children}
    </div>
  )
}
