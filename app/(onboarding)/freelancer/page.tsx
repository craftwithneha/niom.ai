"use client"

import { useOnboardingStore } from "@/app/store/onboarding.store"
import OnboardingHeader from "@/components/onboarding/OnboardingHeader"

import RoleCard from "@/app/features/onboarding/steps/RoleCard"
import ProfileIntroStep from "@/app/features/onboarding/steps/ProfileIntroStep"
import ProfileHelpContent from "@/app/features/onboarding/steps/ProfileHelpContent"
import CommunityRulesContent from "@/app/features/onboarding/steps/CommunityRulesContent"
import WorkPreferences from "@/app/features/onboarding/steps/WorkPreferenceStep"
import ImportOptionCard from "@/components/onboarding/ImportOptionsCard"
import IndustrySelection from "@/components/onboarding/IndustrySelection"
import SkillsSelection from "@/app/features/onboarding/steps/SkillsSection"
import ToolsAndTechnologies from "@/app/features/onboarding/steps/ToolsAndTechnologies"
import ExperienceStep from "@/components/onboarding/ExperienceStep"
import EducationStep from "@/components/onboarding/EducationStep"
import CertificationStep from "@/components/onboarding/CertificationStep"
import LanguagesStep from "@/components/onboarding/LanguagesStep"
import ReviewProfileStep from "@/components/onboarding/profile/ReviewProfileStep"
import ProfileInformationStep from "@/app/features/onboarding/steps/ProfileInformationStep"



export default function Page() {
  const currentStep = useOnboardingStore((s) => s.currentStep)
  const totalSteps = useOnboardingStore((s) => s.totalSteps)
  const getStepIndex = useOnboardingStore((s) => s.getStepIndex)
const next = useOnboardingStore((s) => s.next)
  const back = useOnboardingStore((s) => s.back)

  const stepIndex = getStepIndex()

  return (
    <div className="min-h-screen bg-[#f6f2ee]">
      <OnboardingHeader
        currentStep={stepIndex}
        totalSteps={totalSteps}
        onBack={back}
      />

      {currentStep === "role" && <RoleCard onNext={next} />}
      {currentStep === "profile-intro" && <ProfileIntroStep onNext={next} />}
      {currentStep === "profile-help" && <ProfileHelpContent onNext={next} />}
      {currentStep === "community-rules" && (
        <CommunityRulesContent onNext={next} />
      )}
      {currentStep === "work-preferences" && <WorkPreferences onNext={next} />}
      {currentStep === "import-profile" && <ImportOptionCard onNext={next} />}
      {currentStep === "industry" && <IndustrySelection onNext={next} />}
      {currentStep === "skills" && <SkillsSelection onNext={next} />}
      {currentStep === "tools" && <ToolsAndTechnologies onNext={next} />}
      {currentStep === "experience" && <ExperienceStep onNext={next}/>}
      {currentStep === "education" && <EducationStep onNext={next}/>}
      {currentStep === "certification" && <CertificationStep onNext={next}/>}
      {currentStep === "language" && <LanguagesStep onNext={next}/>}
      {currentStep === "profile" && <ProfileInformationStep onNext={next}/>}
      {currentStep === "reviewprofile" && <ReviewProfileStep onNext={next}/>}
      {/* {currentStep === "profile" && <ProfileInformationStep onNext={next}/> } */}
     
     

    </div>
  )
}
