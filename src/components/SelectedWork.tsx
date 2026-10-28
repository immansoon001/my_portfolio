"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Activity,
  X,
  CheckCircle2,
  Video,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  category: "ai" | "webrtc" | "all";
  caseStudy: {
    problem: string;
    architecture: string;
    highlights: string[];
    benchmark: string;
  };
}

const PROJECTS: Project[] = [
  {
    id: "resume-xpert",
    title: "AI Mock interview & ResumeXpert",
    subtitle: "Autonomous Career Preparation & Intelligent Resume Evaluation Engine",
    metric: "94% ATS Match • GenAI Roadmaps • Zod Validated",
    description:
      "Architected a full stack career prep platform that analyzes resumes, calculates job matching scores, identifies skill gaps, and generates personalized questions + learning roadmaps. Helps job seekers close skill gaps with actionable feedback.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "GenAI", "Puppeteer", "Zod", "Tailwind CSS"],
    imageUrl: "/projects/resume-xpert.png",
    githubUrl: "https://github.com/immansoon001/Resume-Xpert",
    liveUrl: "https://resume-xpert-eight.vercel.app/",
    category: "ai",
    caseStudy: {
      problem:
        "Job seekers struggle with generic interview prep, missing actionable feedback on ATS compatibility, resume-job match scores, and customized question simulation.",
      architecture:
        "Engineered a distributed full-stack architecture using Express.js and MongoDB with Puppeteer for automated document scraping and parsing, Zod for strict runtime schema validation, and GenAI models for dynamic question and roadmap generation.",
      highlights: [
        "Automated ATS resume parsing and keyword gap analysis with instant match score calculation",
        "Personalized mock interview question synthesis powered by GenAI with custom evaluation rubrics",
        "Dynamic learning roadmap generator that recommends structured steps to bridge candidate skill deficits",
        "End-to-end type safety and validated schema ingestion utilizing Zod and Puppeteer",
      ],
      benchmark: "Dramatically streamlines career prep with actionable, quantifiable AI feedback.",
    },
  },
  {
    id: "hire-bridge",
    title: "Hire-Bridge",
    subtitle: "Virtual Technical Interview Platform with WebRTC Video & Live Code Sandbox",
    metric: "Low-Latency WebRTC • Live Piston Sandbox • Clerk Auth",
    description:
      "Built a recruiting platform with video conferencing for interviews, coding rounds, real-time chat, and candidate overload management using MERN and WebRTC. Integrated Clerk for authentication and Piston API for automated code analysis during coding rounds.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Clerk Auth", "Piston API", "Socket.io"],
    imageUrl: "/projects/hire-bridge.png",
    githubUrl: "https://github.com/immansoon001/Hire-Bridge-1",
    liveUrl: "https://vercel.com/immansoon001s-projects/hire-bridge-1-ju3z",
    category: "webrtc",
    caseStudy: {
      problem:
        "Technical hiring workflows are heavily fragmented—interviewers juggle separate video call software, unshared local code editors, and chaotic candidate queue scheduling.",
      architecture:
        "Engineered a low-latency WebRTC mesh for peer-to-peer audio/video streaming, backed by a Node.js/Socket.io signaling layer, containerized Piston API sandbox for instant multi-language compilation, and Clerk for role-based candidate & recruiter auth.",
      highlights: [
        "Browser-based multi-language code runner backed by Piston API with real-time test case verification",
        "Low-latency WebRTC peer video/audio calling with in-session collaborative chat",
        "Role-based candidate queue management preventing recruiter overload and interview delays",
        "Secure authentication and session isolation integrated via Clerk Auth",
      ],
      benchmark: "Enables seamless virtual technical interviews and instant code evaluation for recruiters.",
    },
  },
];

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "webrtc">("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full pt-16 pb-28" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(84,216,232,0.8)]" />
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold">
              FEATURED WORK
            </span>
          </div>
          <h2 className="font-headline-xl text-2xl sm:text-4xl md:text-5xl text-on-surface tracking-tight font-bold">
            Featured Projects.
          </h2>
          <p className="font-body-md text-xs sm:text-base text-on-surface-variant mt-1.5 sm:mt-2 max-w-2xl font-light">
            Full-stack web applications built with the MERN stack, AI features, and modern APIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 max-w-full">

          <div className="flex items-center bg-surface-container-low/80 border border-outline-variant/60 p-1 rounded-full text-xs font-label-md overflow-x-auto no-scrollbar max-w-full flex-nowrap">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "GenAI & Career" },
              { id: "webrtc", label: "WebRTC & Real-time" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as typeof activeFilter)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap flex-shrink-0 text-xs ${activeFilter === f.id
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Project 1: AI Mock interview & ResumeXpert */}
        {filteredProjects.find((p) => p.id === "resume-xpert") && (
          <SpotlightCard
            spotlightColor="rgba(167, 139, 250, 0.22)"
            className="group p-4 sm:p-7 md:p-9 lg:p-10 shadow-sm hover:shadow-[0_0_35px_rgba(167,139,250,0.18)] hover:border-primary-container/60 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-container/0 to-transparent group-hover:via-primary-container/70 transition-all duration-500" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
              {/* Copy & Info */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-surface-container text-secondary text-[10px] sm:text-[11px] font-code-inline border border-secondary/30 mb-3 sm:mb-4 transition-colors group-hover:border-secondary/50 max-w-full">
                    <Bot className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span className="truncate">{PROJECTS[0].metric}</span>
                  </div>

                  <h3 className="font-headline-xl text-xl sm:text-2xl md:text-3xl font-bold text-on-surface tracking-tight mb-1.5 sm:mb-2 transition-colors group-hover:text-primary-fixed">
                    {PROJECTS[0].title}
                  </h3>

                  <p className="font-headline-md text-xs sm:text-sm md:text-base text-primary font-medium mb-3 sm:mb-4 leading-snug">
                    {PROJECTS[0].subtitle}
                  </p>

                  <p className="font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant font-light leading-relaxed mb-4 sm:mb-6">
                    {PROJECTS[0].description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {PROJECTS[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-[11px] sm:text-xs font-code-inline text-on-surface transition-colors hover:border-primary-container/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 pt-4 border-t border-outline-variant/60 w-full flex-wrap">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="px-3.5 sm:px-4 py-2 rounded-full font-label-md text-xs bg-primary-container text-on-primary-container font-semibold transition-all duration-300 hover:bg-primary-fixed hover:shadow-[0_0_20px_rgba(167,139,250,0.4)] active:scale-95 flex items-center justify-center gap-1.5 group/btn min-h-[38px] cursor-pointer flex-1 sm:flex-initial"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a
                    href={PROJECTS[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-full font-label-md text-xs bg-surface-container text-on-surface hover:text-primary transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/60 active:scale-95 flex items-center justify-center gap-1.5 group/btn min-h-[38px] flex-1 sm:flex-initial"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <a
                    href={PROJECTS[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-full font-label-md text-xs bg-surface-container text-on-surface hover:text-primary transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/60 active:scale-95 flex items-center justify-center gap-1.5 group/btn min-h-[38px] flex-1 sm:flex-initial"
                  >
                    <GithubIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:scale-110" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Project Preview */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setSelectedProject(PROJECTS[0])}
                  className="interactive-preview rounded-2xl bg-surface-container-lowest border border-outline-variant/70 overflow-hidden shadow-2xl cursor-pointer relative aspect-[16/9]"
                >
                  <Image
                    src={PROJECTS[0].imageUrl}
                    alt={PROJECTS[0].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        )}

        {/* Project 2: Hire-Bridge */}
        {filteredProjects.find((p) => p.id === "hire-bridge") && (
          <SpotlightCard
            spotlightColor="rgba(84, 216, 232, 0.2)"
            className="group p-4 sm:p-7 md:p-9 lg:p-10 shadow-sm hover:shadow-[0_0_35px_rgba(84,216,232,0.18)] hover:border-secondary/60 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/0 to-transparent group-hover:via-secondary/70 transition-all duration-500" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
              {/* Copy & Info */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-surface-container text-secondary text-[10px] sm:text-[11px] font-code-inline border border-secondary/30 mb-3 sm:mb-4 transition-colors group-hover:border-secondary/50 max-w-full">
                    <Video className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span className="truncate">{PROJECTS[1].metric}</span>
                  </div>

                  <h3 className="font-headline-xl text-xl sm:text-2xl md:text-3xl font-bold text-on-surface tracking-tight mb-1.5 sm:mb-2 transition-colors group-hover:text-secondary-fixed">
                    {PROJECTS[1].title}
                  </h3>

                  <p className="font-headline-md text-xs sm:text-sm md:text-base text-secondary font-medium mb-3 sm:mb-4 leading-snug">
                    {PROJECTS[1].subtitle}
                  </p>

                  <p className="font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant font-light leading-relaxed mb-4 sm:mb-6">
                    {PROJECTS[1].description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {PROJECTS[1].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-[11px] sm:text-xs font-code-inline text-on-surface transition-colors hover:border-secondary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col xs:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 pt-4 border-t border-outline-variant/60 w-full flex-wrap">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(PROJECTS[1])}
                    className="px-3.5 sm:px-4 py-2 rounded-full font-label-md text-xs bg-secondary text-on-secondary font-semibold transition-all duration-300 hover:bg-secondary-fixed hover:shadow-[0_0_20px_rgba(84,216,232,0.4)] active:scale-95 flex items-center justify-center gap-1.5 group/btn min-h-[38px] cursor-pointer flex-1 sm:flex-initial"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a
                    href={PROJECTS[1].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-full font-label-md text-xs bg-surface-container text-on-surface hover:text-secondary transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/60 active:scale-95 flex items-center justify-center gap-1.5 group/btn min-h-[38px] flex-1 sm:flex-initial"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <a
                    href={PROJECTS[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-full font-label-md text-xs bg-surface-container text-on-surface hover:text-secondary transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/60 active:scale-95 flex items-center justify-center gap-1.5 group/btn min-h-[38px] flex-1 sm:flex-initial"
                  >
                    <GithubIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:scale-110" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Project Preview */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="interactive-preview rounded-2xl bg-surface-container-lowest border border-outline-variant/70 overflow-hidden shadow-2xl cursor-pointer relative aspect-[16/9]"
                >
                  <Image
                    src={PROJECTS[1].imageUrl}
                    alt={PROJECTS[1].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        )}
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-surface-container border border-outline-variant p-4 sm:p-7 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-secondary text-xs font-code-inline border border-secondary/30 mb-3 max-w-[calc(100%-48px)] truncate">
                <Activity className="w-3 h-3 text-secondary flex-shrink-0" />
                <span className="truncate">{selectedProject.metric}</span>
              </div>

              <h3 className="font-headline-xl text-xl sm:text-2xl md:text-3xl text-on-surface font-bold mb-1 pr-10">
                {selectedProject.title}
              </h3>
              <p className="text-primary font-medium text-xs sm:text-sm md:text-base mb-5">
                {selectedProject.subtitle}
              </p>

              {/* Image Preview */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-outline-variant/60 mb-5 bg-surface-container-lowest">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Case Study Details */}
              <div className="space-y-3.5 mb-5">
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-primary uppercase tracking-wider block mb-1">
                    Engineering Challenge &amp; Problem
                  </span>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-secondary uppercase tracking-wider block mb-1">
                    System Architecture &amp; Implementation
                  </span>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                    {selectedProject.caseStudy.architecture}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-on-surface uppercase tracking-wider block mb-2">
                    Key Performance Highlights
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                    {selectedProject.caseStudy.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 font-light">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-outline-variant/40 text-xs font-code-inline text-primary">
                    ★ {selectedProject.caseStudy.benchmark}
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-5">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider block mb-2 font-medium">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-surface-container-high border border-outline-variant/60 text-[11px] sm:text-xs font-code-inline text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Modal Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-3 border-t border-outline-variant/60 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface cursor-pointer border border-outline-variant/40 sm:border-transparent text-center"
                >
                  Close
                </button>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-semibold bg-surface-container text-on-surface hover:text-primary border border-outline-variant/60 transition-colors flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-primary-container text-on-primary-container hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
