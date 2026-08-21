import { cn } from "@/lib/utils";

export function Pill({ className, children, icon }) {
  const IconComponent = icon;
  return (
    <div
      className={cn(
        // Lightweight surface instead of .box-gen: pills always sit inside a
        // glass Card, so a nested backdrop-filter doubles the blur cost for an
        // imperceptible visual difference.
        "inline-flex items-center h-8 gap-2 px-3 text-sm leading-5 whitespace-nowrap rounded-2xl border border-white/10 bg-white/5 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
        className,
      )}
    >
      {IconComponent && <IconComponent className="flex-shrink-0 w-4 h-4" />}
      <span className="truncate">{children}</span>
    </div>
  );
}

// Export both default and named for compatibility
export default Pill;
