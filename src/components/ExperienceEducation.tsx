"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Code2,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  badge: string;
  description: string[];
  skills: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  honor: string;
  highlights: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  iconColor: string;
  tag: string;
}

interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  badge: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Rays IT PVT LTD",
    role: "Web Development Trainee",
    period: "22nd June 2025 – 31st July 2025",
    location: "Raipur, India",
    type: "Industry Training",
    badge: "MERN Stack Specialist",
    description: [
      "Completed comprehensive MERN Stack training with rigorous hands-on experience across React.js, Node.js, Express.js, and MongoDB.",
      "Engineered responsive, production-ready web applications and strengthened full-stack software architecture principles.",
      "Mastered RESTful API structuring, MongoDB data modeling with Mongoose, state management, and modern component lifecycles.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
];

const EDUCATIONS: EducationItem[] = [
  {
    institution: "Government Engineering College, Bilaspur",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2023 – Currently Pursuing",
    location: "Chhattisgarh, India",
    honor: "Top 10% of Batch",
    highlights: [
      "Specializing in Data Structures, Algorithms, Computer Architecture, and Modern Web Systems.",
      "Consistently ranked among the top 10% academic performers in the engineering department.",
      "Active participant in technical symposiums, coding challenges, and collegiate entrepreneurship cell.",
    ],
  },
  {
    institution: "Monnet DAV Public School, Raipur",
    degree: "Senior Secondary Education (12th) Science - PCM",
    period: "Completed 2023",
    location: "Chhattisgarh, India",
    honor: "Top 5% of Batch (88%)",
    highlights: [
      "Graduated with 88% aggregate in Physics, Chemistry, and Mathematics.",
      "Developed a solid foundation in computational thinking, analytical calculus, and logic formulation.",
    ],
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "MERN Stack Developer Certification",
    issuer: "RAYS IT PVT LTD",
    date: "August 2025",
    iconColor: "text-secondary",
    tag: "Full-Stack Development",
  },
  {
    title: "Artificial Intelligence Course Certification",
    issuer: "RAYS IT PVT LTD",
    date: "August 2026",
    iconColor: "text-primary-container",
    tag: "Applied AI & ML",
  },
  {
    title: "Introduction to Microsoft 365 Copilot",
    issuer: "Microsoft",
    date: "June 2026",
    iconColor: "text-secondary",
    tag: "Enterprise Copilot",
  },
  {
    title: "Use AI for Everyday Tasks",
    issuer: "Microsoft",
    date: "June 2026",
    iconColor: "text-primary-fixed",
    tag: "AI Productivity",
  },
  {
    title: "Introduction to AI Concepts Badges",
    issuer: "Microsoft",
    date: "July 2026",
    iconColor: "text-tertiary-fixed",
    tag: "AI Fundamentals",
  },
];

const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Google Cloud Study Jam (2025–26)",
    organization: "Google Cloud",
    period: "2025 – 2026",
    description:
      "Successfully completed 19 Google Cloud Skills Boost labs, achieved Arcade Game Level 3, and earned official Google Cloud merchandise and badge recognition.",
    badge: "19 Labs • Level 3 Arcade",
  },
  {
    title: "Technical Lead — E-Cell CGIT Bilaspur",
    organization: "NIC, IIT Bombay",
    period: "Leadership Tenured",
    description:
      "Spearheaded technical activities, web workflows, and student innovation drives under the National Entrepreneurship Challenge, IIT Bombay.",
    badge: "Campus Leadership",
  },
  {
    title: "Xcelerate Hackathon 2026",
    organization: "IIIT New Raipur",
    period: "2026",
    description:
      "Collaborated in a high-intensity hackathon sprint to engineer innovative, tech-driven software solutions addressing real-world operational challenges.",
    badge: "Hackathon Finalist",
  },
  {
    title: "Unstop Prediction League 2026",
    organization: "Unstop",
    period: "2026",
    description:
      "Completed algorithmic and analytical challenges with high ranking and earned exclusive Unstop engineering merchandise recognition.",
    badge: "Top Ranked",
  },
];

export function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications" | "achievements">(
    "experience"
  );

  return (
    <section className="w-full pt-16 pb-24" id="experience">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(84,216,232,0.8)]" />
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold">
              TRAJECTORY & CREDENTIALS
            </span>
          </div>
          <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl text-on-surface tracking-tight">
            Experience &amp; Education.
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl font-light">
            Verified academic rigor, professional MERN industry training, Microsoft certifications, and hackathon milestones.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center bg-surface-container-low/90 border border-outline-variant/60 p-1.5 rounded-full text-xs font-label-md overflow-x-auto shadow-sm">
          {[
            { id: "experience", label: "Experience", icon: Briefcase },
            { id: "education", label: "Education", icon: GraduationCap },
            { id: "certifications", label: "Certifications", icon: Award },
            { id: "achievements", label: "Achievements", icon: Trophy },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content */}
      <AnimatePresence mode="wait">
        {/* 1. EXPERIENCE TAB */}
        {activeTab === "experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-6"
          >
            {EXPERIENCES.map((item, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(167, 139, 250, 0.2)"
                className="p-6 sm:p-8 md:p-10 border border-outline-variant/50 hover:border-primary-container/60 transition-all duration-500 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Role & Meta */}
                  <div className="lg:w-2/5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary text-[11px] font-code-inline border border-secondary/30 mb-3">
                      <Briefcase className="w-3 h-3 text-secondary" />
                      <span>{item.type}</span>
                    </div>

                    <h3 className="font-headline-xl text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-1">
                      {item.role}
                    </h3>
                    <h4 className="font-headline-md text-base sm:text-lg text-primary-fixed font-semibold mb-4">
                      {item.company}
                    </h4>

                    <div className="flex flex-col gap-2 text-xs font-code-inline text-on-surface-variant mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/60 text-xs font-medium text-secondary">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Right Column: Key Learnings & Stack */}
                  <div className="lg:w-3/5 lg:border-l lg:border-outline-variant/50 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <h5 className="font-label-sm text-xs uppercase tracking-widest text-primary-fixed mb-4 font-semibold">
                        Key Responsibilities &amp; Impact
                      </h5>
                      <ul className="space-y-3 mb-6">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-sm text-on-surface-variant leading-relaxed font-light">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-wider text-outline block mb-2 font-medium">
                        Skills Applied
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-code-inline text-on-surface"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        )}

        {/* 2. EDUCATION TAB */}
        {activeTab === "education" && (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            id="education"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {EDUCATIONS.map((edu, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(84, 216, 232, 0.15)"
                className="p-6 sm:p-8 flex flex-col justify-between border border-outline-variant/50 hover:border-secondary/50 transition-all duration-500 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-[11px] font-code-inline font-medium">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{edu.honor}</span>
                    </span>
                    <span className="text-xs font-code-inline text-on-surface-variant flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <h3 className="font-headline-xl text-xl sm:text-2xl font-bold text-on-surface tracking-tight mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="font-headline-md text-sm sm:text-base text-primary-container font-semibold mb-3">
                    {edu.institution}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-outline mb-5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-variant/40 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-code-inline text-on-surface-variant">Academic Track</span>
                  <span className="text-xs font-semibold text-secondary">Verified Record</span>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        )}

        {/* 3. CERTIFICATIONS TAB */}
        {activeTab === "certifications" && (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(167, 139, 250, 0.16)"
                className="p-5 sm:p-6 flex flex-col justify-between border border-outline-variant/50 hover:border-primary-container/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-surface-container-high border border-outline-variant/60 text-[10px] font-code-inline text-secondary">
                      {cert.tag}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-secondary/80" />
                  </div>

                  <h4 className="font-headline-md text-base sm:text-lg font-bold text-on-surface mb-2 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-primary font-semibold mb-4">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-code-inline text-on-surface-variant">
                  <span>{cert.date}</span>
                  <span className="text-secondary font-medium">Certified</span>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        )}

        {/* 4. ACHIEVEMENTS TAB */}
        {activeTab === "achievements" && (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {ACHIEVEMENTS.map((ach, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(84, 216, 232, 0.18)"
                className="p-6 sm:p-7 border border-outline-variant/50 hover:border-secondary/60 transition-all duration-500 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface-container text-secondary text-[11px] font-code-inline border border-secondary/30">
                      {ach.badge}
                    </span>
                  </div>

                  <h4 className="font-headline-xl text-lg sm:text-xl font-bold text-on-surface mb-1">
                    {ach.title}
                  </h4>
                  <span className="font-label-md text-xs text-primary font-semibold block mb-3">
                    {ach.organization} • {ach.period}
                  </span>

                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-code-inline text-outline">
                  <span>Recognition &amp; Merit</span>
                  <span className="text-secondary font-medium">★ Verified Milestone</span>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
