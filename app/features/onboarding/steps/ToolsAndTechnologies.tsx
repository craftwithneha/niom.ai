"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ChipInput } from "@/components/onboarding/ChipInput"
import { useOnboardingStore } from "@/app/store/onboarding.store"

const SUGGESTED_TOOLS = [
  "Figma",
  "Photoshop",
  "GitHub",
  "Slack",
  "VS Code",
  "Notion",
  "ChatGPT",
  "Jira",
]

const SUGGESTED_TECH = [
  "JavaScript",
  "Agentic AI",
  "OpenAI API",
  "Python",
  "Flutter",
  "AWS",
  "Django",
  "React",
  "Node.js",
]

export default function ToolsAndTechnologies({
  onNext,
}: {
  onNext: () => void
}) {
  const {
    tools,
    toolsLevel,
    technologies,
    technologiesLevel,
    addTool,
    removeTool,
    setToolsLevel,
    addTechnology,
    removeTechnology,
    setTechnologiesLevel,
  } = useOnboardingStore()

  return (
    <div className="min-h-screen bg-[#f6f2ee] flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-2">
        Show the tools and technologies you use best
      </h1>

      <p className="text-sm text-muted-foreground text-center max-w-xl mb-8">
        Let people know which software, platforms, and technologies you excel in.
        Highlight the tools that make your work efficient and effective.
      </p>

      <Card className="w-full max-w-xl shadow-sm">
        <CardContent className="p-6 space-y-8">
          {/* TOOLS */}
          <section>
            <p className="text-sm font-medium mb-2">Your Tools</p>

            <ChipInput
              values={tools}
              onAdd={addTool}
              onRemove={removeTool}
              placeholder="Select tools here"
            />

            <div className="flex justify-end mt-2">
              <Select
                value={toolsLevel || "" }
                onValueChange={(v) =>
                  setToolsLevel(v as "beginner" | "intermediate" | "expert")
                }
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="My level is" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="flex flex-wrap gap-2 mt-3">
              {SUGGESTED_TOOLS.map((tool) => (
                <button
                  key={tool}
                  onClick={() => addTool(tool)}
                  className="rounded-full border px-3 py-1 text-sm hover:bg-accent"
                >
                  + {tool}
                </button>
              ))}
            </div>
          </section>

          {/* TECHNOLOGIES */}
          <section>
            <p className="text-sm font-medium mb-2">Your Technologies</p>

            <ChipInput
              values={technologies}
              onAdd={addTechnology}
              onRemove={removeTechnology}
              placeholder="Select technologies here"
            />

            <div className="flex justify-end mt-2">
              <Select
                value={technologiesLevel || ""}
                onValueChange={(v) =>
                  setTechnologiesLevel(
                    v as "beginner" | "intermediate" | "expert"
                  )
                }
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="My level is" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="flex flex-wrap gap-2 mt-3">
              {SUGGESTED_TECH.map((tech) => (
                <button
                  key={tech}
                  onClick={() => addTechnology(tech)}
                  className="rounded-full border px-3 py-1 text-sm hover:bg-accent"
                >
                  + {tech}
                </button>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Continue */}
      <Button
        className="mt-8 bg-[#ff6b57] px-10"
        disabled={tools.length === 0 && technologies.length === 0}
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  )
}
