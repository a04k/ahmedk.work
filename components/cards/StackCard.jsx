import { Briefcase } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/cards/Card"
import SvgLogos from "./SvgLogos"

function StackCard({ className }) {
  return (
    <Card className={cn(className, "overflow-hidden")}>
      <Card.Pill icon={Briefcase} className="mb-3">
        Stack
      </Card.Pill>
      <div className="flex flex-row">
        <SvgLogos className="w-full" />
      </div>
    </Card>
  )
}

export default StackCard
export { StackCard }
