"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  max = 100,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { max?: number }) {
  const percentage = max ? ((value || 0) / max) * 100 : value || 0;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-zinc-800/50 relative h-6 w-full overflow-hidden rounded-full border border-zinc-700/50 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-gradient-to-r from-lime-600 via-lime-500 to-lime-400 h-full w-full flex-1 transition-all duration-1000 ease-out relative overflow-hidden"
        style={{
          transform: `translateX(-${100 - Math.min(percentage, 100)}%)`,
        }}
      >
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </ProgressPrimitive.Indicator>

      {/* Progress glow effect */}
      <div
        className="absolute top-0 h-full bg-lime-500/20 rounded-full blur-sm transition-all duration-1000"
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
    </ProgressPrimitive.Root>
  );
}
export { Progress };
