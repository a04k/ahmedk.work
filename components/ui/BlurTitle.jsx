"use client";

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
        isLoaded
          ? "blur-none opacity-100 translate-y-0"
          : "blur-sm opacity-0 translate-y-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
