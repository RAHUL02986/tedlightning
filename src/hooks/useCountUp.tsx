"use client"; // optional for client-side hooks

import { useEffect, useRef, useState } from "react";

interface UseCountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

// ✅ Named export (curly braces required when importing)
export function useCountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: UseCountUpProps) {
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start >= end) {
        setDisplayValue(`${prefix}${end}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, prefix, suffix]);

  return { displayValue, elementRef };
}
