"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Radio, GraduationCap } from "lucide-react";

export function Hero() {
  const tiltWrapperRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Smooth mouse tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltWrapperRef.current) return;
    const rect = tiltWrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: x * 16,
      y: -y * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full pt-10 sm:pt-20 md:pt-28 pb-12 sm:pb-20 md:pb-32 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden"
      id="hero"
    >
      {/* Left Column: Text & CTAs */}
      <div className="w-full lg:w-3/5 flex flex-col items-start z-10">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-surface-container-low/80 border border-outline-variant/60 backdrop-blur-md shadow-[0_0_16px_rgba(84,216,232,0.08)] mb-4 sm:mb-6 hover:border-secondary/40 transition-colors duration-300 cursor-default max-w-full"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary shadow-[0_0_8px_rgba(84,216,232,0.8)]" />
          </span>
          <span className="font-label-sm text-[10px] sm:text-[11px] tracking-wider uppercase text-on-surface font-semibold truncate">
            Mansoon Patel • Full Stack Developer
          </span>
          <span className="text-outline-variant text-[10px] hidden xs:inline">•</span>
          <span className="font-label-sm text-[10px] sm:text-[11px] text-secondary tracking-normal font-medium">
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
          <h1 className="font-display-hero text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-on-surface leading-[1.14] sm:leading-[1.06] font-bold">
            Turning ideas into{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary-container via-primary-fixed to-secondary bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(167,139,250,0.45)] font-bold">
              digital experiences.
            </span>
          </h1>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body-lg text-xs sm:text-base md:text-lg text-on-surface-variant max-w-xl mb-6 sm:mb-9 leading-relaxed font-light"
        >
          Full Stack Developer with B.Tech in Computer Science and certified MERN Stack expertise. Specializing in high-performance web applications using React, Node.js, Express, MongoDB, and applied GenAI.
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

        {/* Tech & Telemetry Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3 text-on-surface-variant text-[11px] sm:text-xs font-code-inline border-t border-outline-variant/60 w-full max-w-xl"
        >
          <div className="flex items-center gap-1.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
            <span>Raipur, India</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 py-1">
            <GraduationCap className="w-3.5 h-3.5 text-primary" />
            <span>B.Tech CSE Top 10%</span>
          </div>
          <span className="text-outline-variant hidden sm:inline">/</span>
          <div className="flex items-center gap-1.5 py-1">
            <span className="text-primary-container font-medium">Stack:</span>
            <span>MERN, Next.js, GenAI</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Interactive 3D Orbit & Core Stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        ref={tiltWrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full lg:w-2/5 flex items-center justify-center relative min-h-[260px] sm:min-h-[400px] overflow-hidden sm:overflow-visible cursor-pointer select-none max-w-full"
        id="hero-tilt-wrapper"
        style={{ touchAction: "pan-y" }}
      >
        {/* Glow ambient background lights */}
        <div className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary-container/15 blur-[90px] sm:blur-[100px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute w-52 sm:w-72 h-52 sm:h-72 rounded-full bg-secondary/10 blur-[80px] sm:blur-[90px] pointer-events-none -z-10 -right-2 -bottom-4" />

        {/* 3D Stage with Mouse Tilt */}
        <div
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center transition-transform duration-200 ease-out"
          id="hero-3d-stage"
          style={{
            perspective: 1100,
            transform: `perspective(1100px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          }}
        >
          {/* Orbital Concentric 3D Rings */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none ambient-orbit"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(54deg) rotateZ(-26deg)",
            }}
          >
            {/* Outer Ring */}
            <div className="absolute w-[220px] sm:w-[320px] md:w-[340px] h-[220px] sm:h-[320px] md:h-[340px] rounded-full border border-primary-container/20 shadow-[0_0_30px_rgba(167,139,250,0.15)]" />

            {/* Middle Cyan Ring with Orbiting Node */}
            <div className="absolute w-[170px] sm:w-[250px] md:w-[270px] h-[170px] sm:h-[250px] md:h-[270px] rounded-full border border-secondary/30 bg-surface-container-low/20 backdrop-blur-sm shadow-[0_0_35px_rgba(84,216,232,0.12)] flex items-center justify-center">
              <span className="absolute top-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(84,216,232,0.9)]" />
            </div>

            {/* Inner Dashed Ring */}
            <div className="absolute w-[125px] sm:w-[180px] md:w-[200px] h-[125px] sm:h-[180px] md:h-[200px] rounded-full border border-outline-variant/60 border-dashed" />

            {/* Deep Violet Center Ring */}
            <div className="absolute w-[90px] sm:w-[135px] md:w-[150px] h-[90px] sm:h-[135px] md:h-[150px] rounded-full border border-primary-container/40 bg-surface-container/30 shadow-[inset_0_0_24px_rgba(167,139,250,0.25)]" />
          </div>

          {/* Central Floating Core */}
          <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(167,139,250,0.6)] floating-core">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-2xl relative overflow-hidden">
              <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-container via-primary to-secondary opacity-80 blur-xs" />
                <div className="absolute top-1 left-2 w-6 sm:w-10 h-5 sm:h-7 rounded-full bg-secondary-fixed/50 blur-sm" />
                <div className="relative w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-primary-fixed blur-xs shadow-[0_0_24px_rgba(255,255,255,0.9)]" />
              </div>
            </div>
          </div>

          {/* HUD Badges & Telemetry Overlays */}
          <div className="absolute top-1 sm:top-4 right-1 sm:right-0 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-surface-container-lowest/90 border border-outline-variant/60 text-[9px] sm:text-[10px] font-code-inline text-on-surface backdrop-blur-md shadow-lg flex items-center gap-1 sm:gap-1.5 z-20 hover:border-secondary/60 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-semibold">SYS.ACTIVE</span>
            <span className="text-outline-variant hidden xs:inline">•</span>
            <span className="text-on-surface-variant hidden xs:inline">21.2514°N</span>
          </div>

          <div className="absolute bottom-1 sm:bottom-4 left-1 sm:left-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-surface-container-lowest/90 border border-outline-variant/60 text-[10px] sm:text-[11px] font-code-inline text-primary-fixed backdrop-blur-md shadow-lg flex items-center gap-1.5 sm:gap-2 z-20 hover:border-primary-container/70 transition-colors">
            <span className="text-primary-container font-semibold">ROLE:</span>
            <span>MERN // FULL STACK</span>
          </div>

          <div className="absolute top-10 left-0 px-2 py-1 rounded bg-surface-container-lowest/80 border border-outline-variant/60 text-[9px] font-code-inline text-outline backdrop-blur-sm z-20 hidden sm:flex items-center gap-1">
            <Radio className="w-2.5 h-2.5 text-secondary" />
            <span>SYNC.99.98%</span>
          </div>

          <div className="absolute bottom-8 right-3 px-2 py-1 rounded bg-surface-container-lowest/80 border border-outline-variant/60 text-[10px] font-code-inline text-on-surface-variant backdrop-blur-sm z-20 hidden sm:flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary-container" />
            <span>TOP 10% B.TECH CSE</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
