"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const INDUSTRIES = [
    "Information Technology",
    "Software Development",
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science & Analytics",

    "Digital Marketing",
    "E-commerce",
    "Finance & Fintech",
    "Healthcare",
    "Education & EdTech",
    "Real Estate",

    "Supply Chain & Logistics",
    "Manufacturing",
    "Retail",
    "Telecommunications",
    "Automotive",
    "Gaming",
];

export default function IndustrySelection({ onNext }: { onNext: () => void }) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleIndustry = (industry: string) => {
        setSelected((prev) =>
            prev.includes(industry)
                ? prev.filter((i) => i !== industry)
                : prev.length < 3
                    ? [...prev, industry]
                    : prev
        );
    };

    return (
        <div className="min-h-screen bg-[#f6f2ee] flex items-start justify-center px-4 pt-20">
            <div className="w-full max-w-4xl">
                {/* Heading */}
                <h1 className="text-2xl font-semibold text-center mb-2">
                    Let us know where you’ve gained real-world experience.
                </h1>

                <p className="text-sm text-muted-foreground text-center mb-8">
                    Choosing your industry helps us tailor better suggestions for your
                    skills and projects.
                </p>

                <Separator />

                {/* Selection */}
                <div className="pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                        Now select 1 to 3 specialties
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3">
                        {INDUSTRIES.map((industry) => (
                            <label
                                key={industry}
                                className="flex items-center gap-2 text-sm cursor-pointer"
                            >
                                <Checkbox
                                    checked={selected.includes(industry)}
                                    onCheckedChange={() => toggleIndustry(industry)}
                                    className="
          border-muted-foreground/40
          data-[state=checked]:border-[#ff6b57]
          data-[state=checked]:bg-[#ff6b57]
        "
                                />
                                {industry}
                            </label>
                        ))}
                    </div>



                </div>
                <Separator className="mt-4" />

                <Button className="mt-4 bg-[#ff6b57] hover:bg-[#ff6b57]/90 px-4 cursor-pointer">
                    + Add More
                </Button>

                {/* Continue */}
                <div className="flex justify-center mt-12">
                    <Button
                        disabled={selected.length === 0}
                        onClick={onNext}
                    >
                        Continue
                    </Button>

                </div>
            </div>
        </div>
    );
}
