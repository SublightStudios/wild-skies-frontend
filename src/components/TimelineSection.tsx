"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelinePhase {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const timelinePhases: TimelinePhase[] = [
  {
    id: "phase1",
    title: "Phase 1",
    description: "Long phase 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "current",
  },
  {
    id: "phase2",
    title: "Phase 2",
    description: "Long phase 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "upcoming",
  },
  {
    id: "phase3",
    title: "Phase 3",
    description: "Long phase 3 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "upcoming",
  },
  {
    id: "phase4",
    title: "Phase 4",
    description: "Long phase 4 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "upcoming",
  },
  {
    id: "phase5",
    title: "Phase 5",
    description: "Long phase 5 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "upcoming",
  },
];

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      className="py-20 px-4 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ws-dark via-ws-darker to-ws-dark" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Development <span className="text-ws-accent">Timeline</span>
          </h2>
          <p className="text-ws-muted max-w-2xl mx-auto">
            Follow our journey as we build Wild Skies piece by piece.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-ws-muted/20 -translate-y-1/2 hidden md:block" />

          {/* Glowing progress line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-ws-accent -translate-y-1/2 hidden md:block glow-line"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "50%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {timelinePhases.map((phase, index) => {
              const isTop = index % 2 === 0;
              const isCompleted = phase.status === "completed";
              const isCurrent = phase.status === "current";

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`flex-1 flex flex-col items-center ${isTop ? "md:flex-col" : "md:flex-col-reverse"
                    }`}
                >
                  {/* Content Card */}
                  <div
                    className={`relative bg-ws-card/50 rounded-xl p-4 border transition-all max-w-xs ${isCurrent
                        ? "border-ws-accent shadow-glow"
                        : isCompleted
                          ? "border-ws-accent/40"
                          : "border-ws-muted/20"
                      } ${isTop ? "md:mb-8" : "md:mt-8"}`}
                  >
                    <h3
                      className={`text-lg font-bold mb-2 ${isCurrent
                          ? "text-ws-accent"
                          : isCompleted
                            ? "text-ws-glow"
                            : "text-ws-muted"
                        }`}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-sm text-ws-text/80 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Status badge */}
                    {isCurrent && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-ws-accent text-ws-darker text-xs font-bold rounded-full">
                        CURRENT
                      </div>
                    )}

                    {/* Connector line to dot (mobile hidden) */}
                    <div
                      className={`hidden md:block absolute left-1/2 w-0.5 h-6 -translate-x-1/2 ${isCompleted || isCurrent ? "bg-ws-accent/50" : "bg-ws-muted/30"
                        } ${isTop ? "-bottom-6" : "-top-6"}`}
                    />
                  </div>

                  {/* Dot on timeline */}
                  <div
                    className={`relative w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all hidden md:flex ${isCurrent
                        ? "border-ws-accent bg-ws-accent glow-dot-active"
                        : isCompleted
                          ? "border-ws-accent bg-ws-accent/30 glow-dot"
                          : "border-ws-muted/50 bg-ws-card"
                      }`}
                  >
                    {isCompleted && (
                      <svg
                        className="w-3 h-3 text-ws-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Mobile indicator */}
                  <div
                    className={`md:hidden w-4 h-4 rounded-full my-2 ${isCurrent
                        ? "bg-ws-accent glow-dot-active"
                        : isCompleted
                          ? "bg-ws-accent/60 glow-dot"
                          : "bg-ws-muted/30"
                      }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-ws-muted/60 text-sm mt-16"
        >
          Development timeline is subject to change. Follow us on Discord for the latest updates.
        </motion.p>
      </div>
    </section>
  );
}
