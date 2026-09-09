"use client";

import React, { useState } from "react";

interface InteractiveRowProps {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  linkHref?: string;
  defaultExpanded?: boolean;
}

export default function InteractiveRow({
  number,
  title,
  subtitle,
  description,
  tags,
  defaultExpanded = false,
}: InteractiveRowProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer border-b border-black/15 py-7 transition-all duration-300 hover:border-black hover:bg-black/[0.015] sm:py-9"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        {/* Left header */}
        <div className="flex items-baseline gap-6 sm:gap-10">
          <span className="font-mono text-sm tracking-[0.2em] text-neutral-400 group-hover:text-black transition-colors">
            {number}
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-medium tracking-tight text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
              {title}
            </h3>
            {subtitle && (
              <span className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Right Arrow & indicator */}
        <div className="flex items-center gap-4 self-end md:self-center">
          <span className="font-mono text-xs text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden sm:inline-block">
            EXPLORE
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Expandable detail content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-3xl pt-2 pl-0 sm:pl-[4.5rem]">
            <p className="text-sm leading-7 text-neutral-600 sm:text-base">
              {description}
            </p>

            {tags && tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black/10 bg-[#faf9f6] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
