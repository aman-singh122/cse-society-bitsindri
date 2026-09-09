"use client";

import React from "react";

interface TechMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  variant?: "default" | "subtle" | "dark" | "bordered";
  className?: string;
}

export default function TechMarquee({
  items,
  direction = "left",
  speed = 35,
  variant = "default",
  className = "",
}: TechMarqueeProps) {
  // Duplicate array 4 times for smooth seamless loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  const variantStyles = {
    default: "border-y border-black/10 bg-[#f5f3ee] text-[#141413]",
    subtle: "border-y border-black/5 bg-[#faf9f6]/60 text-neutral-600",
    dark: "border-y border-white/10 bg-[#141413] text-[#f5f3ee]",
    bordered: "border-y border-black/15 bg-transparent text-[#141413]",
  };

  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`marquee-container relative w-full overflow-hidden py-4 select-none ${variantStyles[variant]} ${className}`}
      style={{ ["--marquee-duration" as any]: `${speed}s` }}
    >
      <div className="flex w-max items-center">
        <div className={`flex shrink-0 items-center gap-8 ${animClass}`}>
          {marqueeItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
                {item}
              </span>
              <span
                className={`text-xs ${
                  variant === "dark" ? "text-white/30" : "text-black/25"
                }`}
              >
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}