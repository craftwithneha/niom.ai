import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export function SocialAuth() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Button variant="outline" className="gap-2">
        <FaLinkedin className="text-[#c22f0a]" />
        Continue with LinkedIn
      </Button>

      <Button variant="outline" className="gap-2">
        <FcGoogle />
        Continue with Google
      </Button>
    </div>
  )
}
