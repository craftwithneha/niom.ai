"use client";

import { Button } from "@/components/ui/button";

export default function CommunityRulesContent({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-[#f6f2ee] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Text */}
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Your success on niom is important to us. Avoid the following to keep in
          line with our community standards:
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-sm text-gray-700 mb-10 list-disc pl-5">
          <li>
            Providing any misleading or inaccurate information about your
            identity.
          </li>
          <li>Opening duplicate accounts.</li>
          <li>Soliciting other community members for work on niom.</li>
          <li>
            Requesting to take communication outside of this platform.
          </li>
        </ul>

        {/* Button */}
  <Button
  type="button"
  className="bg-[#ff6b57] px-10"
  onClick={onNext}
>
  Get Started
</Button>


      </div>
    </div>
  );
}
