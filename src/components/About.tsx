"use client";

import React from "react";
import { Layout, Database, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function About() {
  return (
    <section className="w-full py-12 sm:py-20" id="about">
      <SpotlightCard
        spotlightColor="rgba(167, 139, 250, 0.18)"
        className="rounded-3xl bg-surface-container-low p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-sm border border-outline-variant/40 hover:border-primary-container/40 transition-colors duration-500"
      >
        {/* Subtle glow within about panel */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-container/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header & Meta Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(84,216,232,0.8)]" />
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold">
                BACKGROUND &amp; PHILOSOPHY
              </span>
            </div>

            {/* Quick Stat Pill */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-xs font-code-inline text-on-surface-variant flex-wrap">
              <span className="flex items-center gap-1.5 text-secondary">
                <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                <span>B.Tech CSE Top 10%</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-primary">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Raipur, India</span>
              </span>
            </div>
          </div>

          <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl text-on-surface tracking-tight mb-3 sm:mb-4 font-bold">
            About Me.
          </h2>

          <p className="font-body-lg text-xs sm:text-sm md:text-base text-on-surface-variant font-light leading-relaxed max-w-3xl mb-6 sm:mb-8">
            I am a Computer Science student at GEC Bilaspur (Top 10%) and a certified MERN stack developer. I build straightforward web applications that solve real needs—like AI tools for resume analysis and platforms for live video interviews. My philosophy is simple: write clean code, keep it fast, and make the app easy for anyone to use.
          </p>

          {/* 3 Core Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest/50 sm:bg-surface-container-lowest/30 border border-outline-variant/30 hover:border-primary-container/40 transition-all duration-300 hover:bg-surface-container-high/40 group">
              <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <Layout className="w-4 h-4" />
              </div>
              <div className="font-headline-md text-sm sm:text-base text-primary font-semibold mb-1">
                MERN Stack
              </div>
              <div className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                React frontends with Node.js, Express, and MongoDB backends.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest/50 sm:bg-surface-container-lowest/30 border border-outline-variant/30 hover:border-secondary/40 transition-all duration-300 hover:bg-surface-container-high/40 group">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="font-headline-md text-sm sm:text-base text-secondary font-semibold mb-1">
                AI Features
              </div>
              <div className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                Useful AI integrations for document review and smart automation.
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest/50 sm:bg-surface-container-lowest/30 border border-outline-variant/30 hover:border-primary-fixed/40 transition-all duration-300 hover:bg-surface-container-high/40 group">
              <div className="w-8 h-8 rounded-lg bg-primary-fixed/10 flex items-center justify-center text-primary-fixed mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <Database className="w-4 h-4" />
              </div>
              <div className="font-headline-md text-sm sm:text-base text-primary-fixed font-semibold mb-1">
                Real-Time Web
              </div>
              <div className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                Live video calling, interactive chat, and authentication.
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
