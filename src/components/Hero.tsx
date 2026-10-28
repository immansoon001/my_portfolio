"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, GraduationCap } from "lucide-react";

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full pt-12 sm:pt-20 md:pt-28 pb-12 sm:pb-20 md:pb-28 flex flex-col items-start"
      id="hero"
    >
      <div className="w-full max-w-4xl flex flex-col items-start z-10">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low/80 border border-outline-variant/60 backdrop-blur-md mb-4 sm:mb-6"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary shadow-[0_0_8px_rgba(84,216,232,0.8)]" />
          </span>
          <span className="text-xs font-code-inline text-on-surface-variant">
            Available for roles &amp; projects
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-4 sm:mb-6 w-full"
        >
          <div className="absolute -left-6 -top-10 w-72 h-44 bg-primary-container/15 blur-3xl rounded-full pointer-events-none -z-10" />
          <h1 className="font-display-hero text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-on-surface leading-[1.1] font-bold">
            Full Stack Developer &amp;{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary-container via-primary-fixed to-secondary bg-clip-text text-transparent">
              MERN Specialist.
            </span>
          </h1>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light"
        >
          Building clean, responsive web applications with React, Node.js, Express, and MongoDB. Computer Science student at GEC Bilaspur.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-6 sm:mb-10 w-full sm:w-auto"
        >
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "work")}
            className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-label-md text-sm sm:text-base bg-primary-container text-on-primary-container font-semibold transition-all duration-300 hover:bg-primary-fixed hover:shadow-[0_0_30px_rgba(167,139,250,0.55)] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(167,139,250,0.3)] cursor-pointer min-h-[46px]"
          >
            <span>Explore Work</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "experience")}
            className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-label-md text-sm sm:text-base bg-surface-container-low/90 border border-outline-variant/60 text-on-surface hover:text-secondary transition-all duration-300 hover:bg-surface-container hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(84,216,232,0.18)] active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm shadow-sm cursor-pointer min-h-[46px]"
          >
            <span>Credentials</span>
            <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:text-secondary transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="group px-5 py-3 sm:py-3.5 rounded-full font-label-md text-sm sm:text-base text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[46px] border border-outline-variant/40 sm:border-transparent text-center"
          >
            <span>Let&apos;s Talk</span>
          </a>
        </motion.div>

        {/* Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-3 text-on-surface-variant text-xs font-code-inline border-t border-outline-variant/60 w-full max-w-xl"
        >
          <div className="flex items-center gap-1.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
            <span>Raipur, India</span>
          </div>
          <span className="text-outline-variant">•</span>
          <div className="flex items-center gap-1.5 py-1">
            <GraduationCap className="w-3.5 h-3.5 text-primary" />
            <span>B.Tech CSE (Top 10%)</span>
          </div>
          <span className="text-outline-variant hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 py-1">
            <span className="text-primary-container font-medium">Stack:</span>
            <span>MERN &amp; Next.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
