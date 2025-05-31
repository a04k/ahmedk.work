import { cn } from "@/lib/utils"

export function Pill({ className, children, icon }) {
  const IconComponent = icon
  return (
    <div
      className={cn(
        "inline-flex items-center h-8 gap-2 px-3 text-sm leading-5 whitespace-nowrap box-gen rounded-2xl",
        className,
      )}
    >
      {IconComponent && <IconComponent className="flex-shrink-0 w-4 h-4" />}
      <span className="truncate">{children}</span>
    </div>
  )
}

// Export both default and named for compatibility
export default Pill
