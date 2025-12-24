"use client";

import { Button } from "@/components/ui/button";

export default function ProfileHelpContent({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-[#f6f2ee] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Let us help you create your successful profile
        </h1>

        {/* Bullet Points */}
        <ul className="space-y-3 text-sm text-gray-700 mb-10 list-disc pl-5">
          <li>
            Take your time in creating your profile so it’s exactly as you want
            it to be.
          </li>
          <li>
            Add credibility by linking out to your relevant professional
            networks.
          </li>
          <li>
            Accurately describe your professional skills to help you get more
            work.
          </li>
          <li>
            Put a face to your name! Upload a profile picture that clearly shows
            your face.
          </li>
          <li>
            To keep our community secure for everyone, we may ask you to verify
            your ID.
          </li>
        </ul>

        {/* Button */}
        <Button className="bg-[#ff6b57] hover:bg-[#ff6b57]/90 px-10" onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
