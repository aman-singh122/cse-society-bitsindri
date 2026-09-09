"use client";

import React, { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  text: string;
  top: string;
  left: string;
  size: string;
  opacity: number;
  rotation: string;
  delay: string;
  direction: "slow" | "reverse";
  hideOnMobile?: boolean;
}

const elementsConfig: Omit<FloatingElement, "id">[] = [
  { text: "{ }", top: "12%", left: "8%", size: "text-2xl sm:text-4xl", opacity: 0.18, rotation: "-6deg", delay: "0s", direction: "slow" },
  { text: "</>", top: "22%", left: "82%", size: "text-3xl sm:text-5xl", opacity: 0.16, rotation: "12deg", delay: "1.5s", direction: "reverse" },
  { text: "01", top: "45%", left: "91%", size: "text-xl sm:text-3xl", opacity: 0.2, rotation: "0deg", delay: "0.8s", direction: "slow" },
  { text: "λ", top: "68%", left: "5%", size: "text-3xl sm:text-5xl", opacity: 0.15, rotation: "-15deg", delay: "2s", direction: "reverse" },
  { text: "AI / ML", top: "78%", left: "85%", size: "text-xs sm:text-sm", opacity: 0.25, rotation: "4deg", delay: "3s", direction: "slow" },
  { text: "C++", top: "35%", left: "12%", size: "text-xs sm:text-sm", opacity: 0.22, rotation: "8deg", delay: "1.2s", direction: "reverse", hideOnMobile: true },
  { text: "SQL", top: "58%", left: "88%", size: "text-xs sm:text-sm", opacity: 0.18, rotation: "-10deg", delay: "2.5s", direction: "slow", hideOnMobile: true },
  { text: "Git", top: "15%", left: "70%", size: "text-xs sm:text-sm", opacity: 0.2, rotation: "-4deg", delay: "0.4s", direction: "slow", hideOnMobile: true },
  { text: "1010", top: "82%", left: "22%", size: "text-xs sm:text-sm", opacity: 0.15, rotation: "0deg", delay: "3.2s", direction: "reverse", hideOnMobile: true },
  { text: "SYSTEMS", top: "28%", left: "48%", size: "text-[10px] sm:text-xs", opacity: 0.14, rotation: "0deg", delay: "4s", direction: "slow", hideOnMobile: true },
];

export default function FloatingTechElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {elementsConfig.map((el, i) => (
        <div
          key={i}
          className={`absolute font-mono font-medium text-[#141413] transition-transform duration-700 ${
            el.direction === "slow" ? "animate-float-slow" : "animate-float-reverse"
          } ${el.hideOnMobile ? "hidden md:block" : "block"}`}
          style={{
            top: el.top,
            left: el.left,
            opacity: el.opacity,
            transform: `rotate(${el.rotation})`,
            animationDelay: el.delay,
          }}
        >
          <span className={el.size}>{el.text}</span>
        </div>
      ))}
    </div>
  );
}
