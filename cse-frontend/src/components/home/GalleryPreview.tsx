"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  Maximize2,
} from "lucide-react";

const galleryItems = [
  {
    id: "01",
    title: "Computer Science Laboratory Session",
    category: "LABORATORY",
    imagePath: "/images/gallery/lab_session.png",
    layout: "lg:col-span-8 lg:row-span-2",
    visual: "lab",
  },
  {
    id: "02",
    title: "Annual Hackathon & Problem Solving",
    category: "COMPETITION",
    layout: "lg:col-span-4",
    visual: "competition",
  },
  {
    id: "03",
    title: "Technical Masterclass & Bootcamps",
    category: "WORKSHOP",
    layout: "lg:col-span-5",
    visual: "workshop",
  },
  {
    id: "04",
    title: "Student Project Demos & Innovation",
    category: "SHOWCASE",
    layout: "lg:col-span-7",
    visual: "showcase",
  },
];

function TechnicalVisual({
  type,
}: {
  type: string;
}) {
  const labels = {
    competition: ["CODE", "TIME", "SCORE"],
    workshop: ["LEARN", "BUILD", "SHARE"],
    showcase: ["IDEA", "PROTOTYPE", "IMPACT"],
  };

  const current =
    labels[type as keyof typeof labels] ?? [
      "CSE",
      "BIT",
      "SINDRI",
    ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#181817] text-[#f5f3ee]">
      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Orbital geometry */}

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 animate-[spin_25s_linear_infinite]" />

      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />

      {/* Big word */}

      <div className="absolute bottom-5 left-6 select-none font-mono text-[clamp(3rem,7vw,7rem)] font-bold leading-none tracking-[-0.08em] text-white/[0.045]">
        {type === "competition"
          ? "CODE"
          : type === "workshop"
            ? "LEARN"
            : "BUILD"}
      </div>

      {/* Coordinates */}

      <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-white/40">
        CSE / SYSTEM
      </div>

      <div className="absolute right-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
        2026 / {type}
      </div>

      {/* Data nodes */}

      <div className="absolute bottom-8 right-8 flex gap-2">
        {current.map((item) => (
          <span
            key={item}
            className="border border-white/10 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GalleryPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative overflow-hidden
        border-b border-black/10
        bg-[#f5f3ee]
        px-5 py-20
        sm:px-7 sm:py-24
        lg:px-10 lg:py-28
        transition-all duration-1000
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
      `}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[9px] font-semibold tracking-[0.24em] text-neutral-400">
                09
              </span>

              <span className="h-px w-8 bg-black/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-500">
                CULTURE & MOMENTS
              </span>

              <span className="text-neutral-300">/</span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                GALLERY
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#141413]">
              Life inside{" "}
              <span className="text-black/25">
                the society.
              </span>
            </h2>
          </div>

          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2">
              <Camera
                size={14}
                strokeWidth={1.2}
                className="text-neutral-400"
              />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                VISUAL ARCHIVE
              </span>
            </div>

            <p className="font-mono text-[9px] leading-5 text-neutral-500">
              Moments of collaboration, coding,
              hackathons, workshops and technical
              presentations.
            </p>
          </div>
        </div>

        {/* Gallery */}

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[260px_260px]">
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`
                group relative overflow-hidden
                border border-black/10
                bg-[#171716]
                ${item.layout}
                transition-all duration-700
                hover:-translate-y-1
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)]
              `}
            >
              {/* Visual */}

              <div className="absolute inset-0">
                {"imagePath" in item && item.imagePath ? (
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="
                      object-cover
                      transition-transform duration-1000 ease-out
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <TechnicalVisual type={item.visual} />
                )}
              </div>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Top metadata */}

              <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                <span className="font-mono text-[8px] tracking-[0.2em] text-white/55">
                  {item.id}
                </span>

                <span className="border border-white/15 bg-black/10 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.18em] text-white/55 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Bottom */}

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="mb-2 font-mono text-[7px] uppercase tracking-[0.24em] text-white/45">
                      CSE / BIT SINDRI
                    </p>

                    <h3 className="max-w-xl text-xl font-medium leading-tight tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full border border-white/20
                      bg-black/10
                      text-white/70
                      backdrop-blur-sm
                      transition-all duration-500
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
              </div>

              {/* Scan line */}

              <div
                className="
                  absolute left-0 top-0
                  h-px w-0
                  bg-white/70
                  transition-all duration-1000
                  group-hover:w-full
                "
              />

              <div
                className="
                  pointer-events-none absolute
                  right-5 top-16
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              >
                <Maximize2
                  size={13}
                  strokeWidth={1}
                  className="text-white/35"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
            VISUAL ARCHIVE / 001 — 004
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
            MOMENTS / PEOPLE / PROCESS
          </span>
        </div>
      </div>
    </section>
  );
}