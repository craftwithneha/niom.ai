"use client";

import { Button } from "@/components/ui/button";

export default function ProfileIntroContent({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-[#f6f2ee] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          All you need is setup your profile to get started.
        </h1>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            className="px-6"
          >
            Explore niom
          </Button>

          <Button className="px-6 --button-primary hover:bg-[#ff6b57]/90" onClick={onNext}>
            Complete my profile
          </Button>
        </div>
      </div>
    </div>
  );
}
