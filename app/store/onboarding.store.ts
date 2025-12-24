import { create } from "zustand"
import { nanoid } from "nanoid"

import { ONBOARDING_STEPS, OnboardingStep } from "./onboarding.steps"

import { Experience } from "../schemas/experience.schema"
import { Education } from "../schemas/education.schema"
import { Certification } from "../schemas/certification.schema"
import { Language, LanguageLevel } from "../types/language"
import { Profile } from "../schemas/profile.schema"


                                  /*   TYPES   */


export type UserRole = "business" | "freelancer"
export type WorkPreference = "marketplace" | "packages"


export type SkillLevel = "beginner" | "intermediate" | "expert"
export type Level = "beginner" | "intermediate" | "expert"

type OnboardingStore = {
  /* STEP */
  currentStep: OnboardingStep
  totalSteps: number

  /* ROLE */
  role: UserRole | null
  setRole: (role: UserRole) => void

  /* WORK PREFERENCE */
workPreference: WorkPreference | ""
setWorkPreference: (preference: WorkPreference | "") => void


  /* SKILLS */
  skills: string[]
  skillLevel: SkillLevel | null
  addSkill: (skill: string) => void
  removeSkill: (skill: string) => void
  setSkillLevel: (level: SkillLevel) => void

  /* TOOLS & TECHNOLOGIES */
  tools: string[]
  toolsLevel: Level | null

  technologies: string[]
  technologiesLevel: Level | null

  addTool: (tool: string) => void
  removeTool: (tool: string) => void
  setToolsLevel: (level: Level) => void

  addTechnology: (tech: string) => void
  removeTechnology: (tech: string) => void
  setTechnologiesLevel: (level: Level) => void

  /* EXPERIENCE */
  experiences: Experience[]
  addExperience: (exp: Experience) => void
  updateExperience: (exp: Experience) => void
  removeExperience: (id: string) => void

  /* EDUCATION */
  educations: Education[]
  addEducation: (edu: Education) => void
  updateEducation: (edu: Education) => void
  removeEducation: (id: string) => void

  /* CERTIFICATIONS */
  certifications: Certification[]
  addCertification: (c: Certification) => void
  updateCertification: (c: Certification) => void
  removeCertification: (id: string) => void

  /* LANGUAGES */
  languages: Language[]
  addLanguage: () => void
  updateLanguage: <K extends keyof Language>(
    id: string,
    field: K,
    value: Language[K]
  ) => void
  removeLanguage: (id: string) => void

  /* PROFILE */
  profile: Profile | null
  setProfile: (data: Profile) => void

  /* SELECTOR */
  getStepIndex: () => number

  /* NAVIGATION */
  next: () => void
  back: () => void
  goTo: (step: OnboardingStep) => void
}


                                 /*     STORE    */


export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  /* STEP */
  currentStep: "role",
  totalSteps: ONBOARDING_STEPS.length,

  /* ROLE */
  role: "freelancer",
  setRole: (role) => set({ role }),

  /* WORK PREFERENCE */
  workPreference: "",
setWorkPreference: (preference) =>
  set({ workPreference: preference }),


  /* SKILLS */
  skills: [],
  skillLevel: null,

  addSkill: (skill) =>
    set((state) =>
      state.skills.includes(skill) || state.skills.length >= 15
        ? state
        : { skills: [...state.skills, skill] }
    ),

  removeSkill: (skill) =>
    set((state) => ({
      skills: state.skills.filter((s) => s !== skill),
    })),

  setSkillLevel: (level) => set({ skillLevel: level }),

  /* TOOLS */
  tools: [],
  toolsLevel: null,

  technologies: [],
  technologiesLevel: null,

  addTool: (tool) =>
    set((state) =>
      state.tools.includes(tool) || state.tools.length >= 15
        ? state
        : { tools: [...state.tools, tool] }
    ),

  removeTool: (tool) =>
    set((state) => ({
      tools: state.tools.filter((t) => t !== tool),
    })),

  setToolsLevel: (level) => set({ toolsLevel: level }),

  addTechnology: (tech) =>
    set((state) =>
      state.technologies.includes(tech) ||
      state.technologies.length >= 15
        ? state
        : { technologies: [...state.technologies, tech] }
    ),

  removeTechnology: (tech) =>
    set((state) => ({
      technologies: state.technologies.filter((t) => t !== tech),
    })),

  setTechnologiesLevel: (level) =>
    set({ technologiesLevel: level }),

  /* EXPERIENCE */
  experiences: [],

  addExperience: (exp) =>
    set((state) => ({
      experiences: [...state.experiences, exp],
    })),

  updateExperience: (exp) =>
    set((state) => ({
      experiences: state.experiences.map((e) =>
        e.id === exp.id ? exp : e
      ),
    })),

  removeExperience: (id) =>
    set((state) => ({
      experiences: state.experiences.filter((e) => e.id !== id),
    })),

  /* EDUCATION */
  educations: [],

  addEducation: (edu) =>
    set((state) => ({
      educations: [...state.educations, edu],
    })),

  updateEducation: (edu) =>
    set((state) => ({
      educations: state.educations.map((e) =>
        e.id === edu.id ? edu : e
      ),
    })),

  removeEducation: (id) =>
    set((state) => ({
      educations: state.educations.filter((e) => e.id !== id),
    })),

  /* CERTIFICATION */
  certifications: [],

  addCertification: (cert) =>
    set((state) => ({
      certifications: [...state.certifications, cert],
    })),

  updateCertification: (cert) =>
    set((state) => ({
      certifications: state.certifications.map((c) =>
        c.id === cert.id ? cert : c
      ),
    })),

  removeCertification: (id) =>
    set((state) => ({
      certifications: state.certifications.filter(
        (c) => c.id !== id
      ),
    })),

  /* LANGUAGES — default example */
  languages: [
    {
      id: nanoid(),
      name: "English",
      level: "conversational" as LanguageLevel,
    },
  ],

  addLanguage: () =>
    set((state) => ({
      languages: [
        ...state.languages,
        {
          id: nanoid(),
          name: "",
          level: "basic" as LanguageLevel,
        },
      ],
    })),

  updateLanguage: (id, field, value) =>
    set((state) => ({
      languages: state.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    })),

  removeLanguage: (id) =>
    set((state) => ({
      languages: state.languages.filter((l) => l.id !== id),
    })),

  /* PROFILE */
  profile: null,
  setProfile: (data) => set({ profile: data }),

  /* SELECTOR */
  getStepIndex: () =>
    ONBOARDING_STEPS.indexOf(get().currentStep),

  /* NAVIGATION */
  next: () => {
    const index = ONBOARDING_STEPS.indexOf(get().currentStep)
    if (index < ONBOARDING_STEPS.length - 1) {
      set({ currentStep: ONBOARDING_STEPS[index + 1] })
    }
  },

  back: () => {
    const index = ONBOARDING_STEPS.indexOf(get().currentStep)
    if (index > 0) {
      set({ currentStep: ONBOARDING_STEPS[index - 1] })
    }
  },

  goTo: (step) => set({ currentStep: step }),
}))
