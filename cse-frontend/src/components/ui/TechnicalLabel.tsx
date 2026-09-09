import React from "react";

interface TechnicalLabelProps {
  index?: string;
  title: string;
  category?: string;
  className?: string;
  dark?: boolean;
}

export default function TechnicalLabel({
  index,
  title,
  category,
  className = "",
  dark = false,
}: TechnicalLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-xs ${
        dark ? "text-white/60" : "text-neutral-500"
      } ${className}`}
    >
      {index && (
        <span className={dark ? "text-white/40" : "text-neutral-400"}>
          {index}
        </span>
      )}

      {index && <span className={`h-px w-6 ${dark ? "bg-white/20" : "bg-black/20"}`} />}

      <span className="font-semibold uppercase tracking-[0.24em]">
        {title}
      </span>

      {category && (
        <>
          <span className={dark ? "text-white/30" : "text-black/20"}>/</span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-75">
            {category}
          </span>
        </>
      )}
    </div>
  );
}
