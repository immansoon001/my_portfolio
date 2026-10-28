"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Cpu,
  Terminal,
  Sparkles,
  Boxes,
} from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "ai" | "languages" | "tools";
  categoryLabel: string;
  description: string;
  colorClass: string;
  badge: string;
  icon: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  {
    name: "React.js",
    category: "frontend",
    categoryLabel: "Frontend Library",
    badge: "Core Framework",
    description: "Component lifecycle, custom hooks, virtual DOM optimization, state management, and responsive UI craft.",
    colorClass: "text-secondary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" fill="currentColor" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Full-Stack Framework",
    badge: "App Router & SSR",
    description: "Server Components (RSC), Turbopack, static site generation, API endpoints, and optimized performance.",
    colorClass: "text-primary-fixed",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.88 18.066l-5.632-7.39v7.39H10.5V8.58h1.838l5.88 7.734v-7.734H20v9.486h-2.12zM8.58 18.066H6.84V8.58h1.74v9.486z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "backend",
    categoryLabel: "Runtime Environment",
    badge: "Asynchronous Backend",
    description: "Event-driven runtime, non-blocking I/O microservices, stream handling, and server-side processing.",
    colorClass: "text-primary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 12l9-5M12 12v10M12 12L3 7" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    category: "backend",
    categoryLabel: "Backend Server Framework",
    badge: "RESTful Architecture",
    description: "Clean middleware routing, auth pipelines, error handlers, rate limiting, and RESTful API endpoints.",
    colorClass: "text-on-surface-variant group-hover:text-primary",
    icon: <span className="font-headline-md text-lg font-bold tracking-tighter">ex</span>,
  },
  {
    name: "MongoDB",
    category: "database",
    categoryLabel: "NoSQL Database",
    badge: "Document Database",
    description: "JSON-like document modeling, high-availability indexing, aggregation pipelines, and cloud cluster deployment.",
    colorClass: "text-secondary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2s-6 5.5-6 11c0 3.5 2.5 7 6 9 3.5-2 6-5.5 6-9 0-5.5-6-11-6-11z" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    name: "Mongoose",
    category: "database",
    categoryLabel: "ODM Library",
    badge: "Schema Validation",
    description: "Strict schema definition, virtual getters, pre/post middleware hooks, and relationship population.",
    colorClass: "text-primary-container",
    icon: <Database className="w-6 h-6" />,
  },
  {
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Typed JavaScript",
    badge: "Type Safety",
    description: "Static typing, generics, interfaces, strict compiler rules, and scalable enterprise codebase hygiene.",
    colorClass: "text-secondary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect height="18" rx="3" width="18" x="3" y="3" />
        <path d="M7 10h6M10 10v6M14 16c1 0 2-.5 2-1.5s-1-1.5-2-1.5 2-.5 2-1.5-1-1.5-2-1.5" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "languages",
    categoryLabel: "Core Language",
    badge: "ES6+ Standards",
    description: "Modern asynchronous syntax, closures, event loop, Promises, DOM manipulation, and dynamic programming.",
    colorClass: "text-tertiary-fixed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect height="18" rx="3" width="18" x="3" y="3" />
        <path d="M16 8v8a2 2 0 0 1-2 2h-1" />
        <path d="M8 15a2 2 0 0 0 3-1.5c0-2-3-1.5-3-3.5a2 2 0 0 1 3.5-1" />
      </svg>
    ),
  },
  {
    name: "GenAI & LLMs",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    badge: "AI Workflows",
    description: "Integrating intelligent LLM prompts, structured outputs with Zod, contextual career evaluation, and automated Q&A.",
    colorClass: "text-secondary",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    name: "Python",
    category: "languages",
    categoryLabel: "Programming Language",
    badge: "Scripting & ML",
    description: "Clean syntax, algorithmic problem solving, machine learning scripting, data structures, and automation.",
    colorClass: "text-primary-fixed",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.82v.825H3.88s-3.88.44-3.88 5.706c0 5.265 3.39 5.088 3.39 5.088h2.025v-2.844s-.11-3.39 3.33-3.39h5.72v-.825H8.745V7.42h8.99s2.545.188 2.545-2.656c0-2.844-2.545-2.656-2.545-2.656l-5.82-.016h.004zM8.56 1.48a.825.825 0 110 1.65.825.825 0 010-1.65zm3.526 22.52c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.82v-.825h8.145s3.88-.44 3.88-5.706c0-5.265-3.39-5.088-3.39-5.088h-2.025v2.844s.11 3.39-3.33 3.39h-5.72v.825h5.72v2.536h-8.99s-2.545-.188-2.545 2.656c0 2.844 2.545 2.656 2.545 2.656l5.82.016h-.004zm3.354-1.48a.825.825 0 110-1.65.825.825 0 010 1.65z" />
      </svg>
    ),
  },
  {
    name: "scikit-learn",
    category: "ai",
    categoryLabel: "Machine Learning",
    badge: "Predictive Models",
    description: "Data preprocessing, regression, classification algorithms, feature engineering, and predictive pipelines.",
    colorClass: "text-tertiary-fixed",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    name: "C++",
    category: "languages",
    categoryLabel: "Systems Language",
    badge: "Core DSA",
    description: "Object-oriented programming, manual memory understanding, STL algorithms, and competitive coding logic.",
    colorClass: "text-secondary",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Version Control & CI",
    badge: "Collaboration",
    description: "Branching strategies, pull requests, merge conflict resolution, code reviews, and remote versioning.",
    colorClass: "text-primary-fixed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="10" r="3" />
        <path d="M6 9v6M6 12l10-2" />
      </svg>
    ),
  },
  {
    name: "Postman",
    category: "tools",
    categoryLabel: "API Testing & Docs",
    badge: "Testing & Debugging",
    description: "REST API automated testing, endpoint simulation, request authorization headers, and schema verification.",
    colorClass: "text-secondary",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    name: "VS Code",
    category: "tools",
    categoryLabel: "Development Environment",
    badge: "Daily Driver",
    description: "Advanced debugging, linting with ESLint, snippets, Tailwind CSS intellisense, and Git workflow integration.",
    colorClass: "text-primary",
    icon: <Boxes className="w-6 h-6" />,
  },
];

export function Toolkit() {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredStack =
    filterCategory === "all"
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === filterCategory);

  return (
    <section className="w-full py-12 sm:py-20" id="toolkit">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(84,216,232,0.8)]" />
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold">
              TECHNICAL PROFICIENCY
            </span>
          </div>
          <h2 className="font-headline-xl text-2xl sm:text-4xl md:text-5xl text-on-surface tracking-tight font-bold">
            My toolkit.
          </h2>
          <p className="font-body-md text-xs sm:text-base text-on-surface-variant mt-1.5 sm:mt-2 max-w-xl font-light">
            Verified technologies and developer tooling mastered across MERN stack development, GenAI integrations, and computer science engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="w-full sm:w-auto flex items-center bg-surface-container-low/90 border border-outline-variant/60 p-1 sm:p-1.5 rounded-full text-xs font-label-md overflow-x-auto no-scrollbar max-w-full flex-nowrap shadow-sm">
          {[
            { id: "all", label: "All" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "database", label: "Database" },
            { id: "ai", label: "AI & ML" },
            { id: "languages", label: "Languages" },
            { id: "tools", label: "Tools" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-2.5 sm:px-3 py-1 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0 text-xs ${
                filterCategory === cat.id
                  ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tech Cards */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4"
      >
        <AnimatePresence>
          {filteredStack.map((tech, index) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onClick={() => setActiveTech(tech)}
              className="group p-3.5 sm:p-5 rounded-2xl bg-surface-container-low hover:bg-surface-container hover:shadow-[0_0_24px_rgba(167,139,250,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 sm:gap-2.5 border border-outline-variant/30 hover:border-primary-container/50 cursor-pointer select-none"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center ${tech.colorClass} group-hover:scale-110 transition-transform duration-300 shadow-inner`}
              >
                {tech.icon}
              </div>
              <span className="font-headline-md text-xs sm:text-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-code-inline">
                {tech.badge}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Tech Item Quick Detail Popover */}
      <AnimatePresence>
        {activeTech && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-5 sm:mt-6 p-3.5 sm:p-5 rounded-2xl bg-surface-container border border-outline-variant/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-xl"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0 shadow-inner">
                {activeTech.icon}
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <h4 className="font-headline-md text-xs sm:text-base font-semibold text-on-surface">
                    {activeTech.name}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-code-inline">
                    {activeTech.categoryLabel}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-primary-fixed font-code-inline">
                    • {activeTech.badge}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1 max-w-2xl font-light leading-relaxed">
                  {activeTech.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTech(null)}
              className="text-xs px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface self-end sm:self-center transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
