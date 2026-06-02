
import { cn } from "@/lib/utils";

export default function BlurTitle({ children, className }) {
  return <div className={cn(className)}>{children}</div>;
}
