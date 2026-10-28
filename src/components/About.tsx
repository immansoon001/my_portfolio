"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layout, Database, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function About() {
  return (
    <section className="w-full py-12 sm:py-20" id="about">
      <SpotlightCard
        spotlightColor="rgba(167, 139, 250, 0.18)"
        className="rounded-3xl bg-surface-container-low p-4 sm:p-8 md:p-14 relative overflow-hidden shadow-sm border border-outline-variant/40 hover:border-primary-container/40 transition-colors duration-500"
      >
        {/* Subtle glow within about panel */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-container/15 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Column A: Editorial Portrait & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-lowest p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02] group"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg09LPVevabOu9YgiWsqSkxRJBynQNwz2r2OVoH-ww2NYEQMgodP1boIc8-ljYlaeu64Tf5qVBCr0K0AvKqKa5gkeIxOvo-lQxAIRqAw88TPa3JsTkpjRTh0dtFgDyd-Z8W2kvIaOK6PEWeiFzPAdLoBPpw7X7bAY82ZEKmq6aAo3xdCtYmof-Fv934ja_yAScCbf6Sf5F_DNTuPIcfKGj24lYol9lgIzLOmO_0Au6"
                  alt="Mansoon Patel — Full Stack Developer"
                  fill
                  className="object-cover grayscale contrast-125 opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-on-surface">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-headline-md text-xs sm:text-base font-semibold tracking-tight">
                      Mansoon Patel
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-code-inline text-secondary font-medium tracking-wide">
                    FULL STACK DEV
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stat Pill */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-code-inline text-on-surface-variant">
              <span className="flex items-center gap-1 text-secondary">
                <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                <span>B.Tech CSE Top 10%</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-primary">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Raipur, India</span>
              </span>
            </div>
          </div>

          {/* Column B: Short, Confident Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary block mb-2 sm:mb-3 font-semibold">
              BACKGROUND &amp; PHILOSOPHY
            </span>

            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-on-surface tracking-tight mb-3 sm:mb-4 font-bold">
              Building impactful software with modern tools.
            </h2>

            <blockquote className="font-headline-lg text-base sm:text-lg md:text-xl text-on-surface font-light leading-snug tracking-tight mb-4 sm:mb-5 border-l-2 border-primary-container pl-3 sm:pl-4 text-primary-fixed">
              &ldquo;Full Stack Developer combining rigorous Computer Science foundations with production MERN stack craftsmanship and applied AI.&rdquo;
            </blockquote>

            <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant font-light leading-relaxed max-w-xl mb-5 sm:mb-6">
              Currently pursuing a B.Tech in Computer Science Engineering at Government Engineering College, Bilaspur (ranked among the top 10% of the batch). Certified in MERN Stack and Artificial Intelligence, I architect end-to-end web applications that bridge responsive React frontends with high-throughput Express/Node backends and scalable MongoDB data models.
            </p>

            {/* 3 Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest/50 sm:bg-surface-container-lowest/30 border border-outline-variant/30 hover:border-primary-container/40 transition-all duration-300 hover:bg-surface-container-high/40 group">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                  <Layout className="w-4 h-4" />
                </div>
                <div className="font-headline-md text-xs sm:text-sm text-primary font-semibold mb-1">
                  MERN Stack
                </div>
                <div className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant leading-snug font-light">
                  React, Node.js, Express, MongoDB with clean architectural patterns
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest/50 sm:bg-surface-container-lowest/30 border border-outline-variant/30 hover:border-secondary/40 transition-all duration-300 hover:bg-surface-container-high/40 group">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-2 transition-transform duration-300 group-hover:scale-110">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-headline-md text-xs sm:text-sm text-secondary font-semibold mb-1">
                  AI &amp; Automation
                </div>
                <div className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant leading-snug font-light">
                  GenAI integrations, scikit-learn models, and Puppeteer document parsing
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest/50 sm:bg-surface-container-lowest/30 border border-outline-variant/30 hover:border-primary-fixed/40 transition-all duration-300 hover:bg-surface-container-high/40 group">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed mb-2 transition-transform duration-300 group-hover:scale-110">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-headline-md text-xs sm:text-sm text-primary-fixed font-semibold mb-1">
                  Real-Time &amp; APIs
                </div>
                <div className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant leading-snug font-light">
                  WebRTC video calls, RESTful APIs, and Clerk authentication flows
                </div>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
