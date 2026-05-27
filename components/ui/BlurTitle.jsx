
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BlurTitle({ children, className, delay = 0 }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "transition-all duration-1000 ease-out",
        className,
      )}
      style={
        isLoaded
          ? { opacity: 1 }
          : {
              filter: "blur(4px)",
              opacity: 0,
              transform: "translateY(1rem)",
            }
      }
    >
      {children}
    </div>
  );
}
