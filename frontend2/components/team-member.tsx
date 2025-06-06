import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  name: string
  role: string
  imageUrl: string
}

export default function TeamMember({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h4 className="font-bold text-lg text-white">{name}</h4>
      <p className="text-white/70 mb-3">{role}</p>
      <div className="flex justify-center gap-2">
        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </div>
    </div>
  )
}
