export const ONBOARDING_STEPS = [
  "role",
  "profile-intro",
  "profile-help",
  "community-rules",
  "work-preferences",
  "import-profile",
  "industry",
  "skills",
  "tools",
   "experience",  
   "education",
   "certification",
   "language",
   "profile",
   "reviewprofile",
] as const

export type OnboardingStep = typeof ONBOARDING_STEPS[number]
