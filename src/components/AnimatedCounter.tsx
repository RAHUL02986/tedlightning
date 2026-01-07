"use client";

import { useCountUp } from "../hooks/useCountUp"; // ✅ must use curly braces for named export

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { displayValue, elementRef } = useCountUp({ end, duration, suffix, prefix });

  return (
    <div ref={elementRef} className="text-center lg:text-left">
      <div className="text-4xl lg:text-5xl font-extralight text-foreground mb-2">
        {displayValue}
      </div>
      <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
