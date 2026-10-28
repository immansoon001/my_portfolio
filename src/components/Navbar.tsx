"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  FileText,
  CheckCircle2,
  ArrowUpRight,
  X,
  Menu,
  Phone,
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("work");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedResume, setCopiedResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "work", "experience", "about", "toolkit", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section === "hero" ? "work" : section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || showResumeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, showResumeModal]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyResumeText = () => {
    const fullText = `
Mansoon Patel - Full Stack Developer
Phone: +91-8770800270 | Email: patelmansoon@gmail.com
GitHub: https://github.com/immansoon001 | LinkedIn: https://www.linkedin.com/in/mansoon-patel-a48aa0296

PROFILE:
Full Stack Developer with B.Tech in Computer Science and MERN Stack certification; skilled in building responsive, scalable web applications using React, Node.js, Express, MongoDB, and basic machine learning with scikit-learn.

EDUCATION:
- Government Engineering College, Bilaspur: B.Tech in CSE (2023 - currently pursuing) | Top 10% of batch
- Monnet DAV Public School, Raipur: 12th Science-PCM (2023) | Top 5% of batch (88%)

SKILLS:
Technical: Javascript, MongoDB, Express.js, React.js, Node.js, Next.js, Typescript, GenAI, C++, python, scikit-learn
Tools: VS Code, Git & Github, Postman, Mongoose

EXPERIENCE:
- Rays IT PVT LTD (Raipur, India) - Web Development Trainee (22nd June'25 - 31st July'25)
  * Completed MERN Stack training with hands-on experience in React.js, Node.js, Express.js, and MongoDB.
  * Built responsive web applications and strengthened full-stack development skills.

PROJECTS:
1. AI Mock interview & ResumeXpert (MERN, AI, Puppeteer, Zod)
   * Architected a full stack career prep platform that analyzes resumes, calculates job matching scores, identifies skill gaps, and generates personalized questions + learning roadmap.
2. Hire-Bridge (MERN, WebRTC, Clerk Auth, Piston API)
   * Built a recruiting platform with video conferencing for interviews, coding rounds, real-time chat, and candidate overload management.

CERTIFICATIONS:
- MERN Stack Developer Certification by RAYS IT PVT LTD - Aug'25
- Artificial Intelligence Course Certification by RAYS IT PVT LTD - Aug'26
- Introduction to Microsoft 365 Copilot by Microsoft - June'26
- Use AI for everyday tasks by Microsoft - June'26
- Introduction to AI concepts Badges by Microsoft - July'26

ACHIEVEMENTS:
- Google Cloud Study Jam 2025-26: Completed 19 Labs, Arcade Game Level 3, and earned official merchandise.
- Technical Lead, E-Cell CGIT Bilaspur - NIC, IIT Bombay.
- Xcelerate Hackathon 2026 (IIIT New Raipur).
- Unstop Prediction League 2026.
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 3000);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-5 px-3 sm:px-4 md:px-6 pointer-events-none transition-all duration-300"
        id="main-header"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-4xl mx-auto h-13 sm:h-16 pointer-events-auto rounded-full px-3 sm:px-5 md:px-6 flex items-center justify-between border transition-all duration-300 ${
            isScrolled
              ? "bg-surface-container-lowest/95 border-outline-variant backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
              : "bg-surface-container-lowest/85 border-outline-variant/70 backdrop-blur-md shadow-[0_0_24px_rgba(0,0,0,0.6)]"
          }`}
          id="header-nav-container"
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Mansoon Patel - Home"
          >
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-surface-container border border-outline-variant group-hover:border-primary-container flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_rgba(167,139,250,0.15)] group-hover:scale-105 active:scale-95 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]">
              <span className="font-headline-md text-xs sm:text-sm text-primary font-semibold tracking-tighter transition-transform duration-300 group-hover:scale-105">
                MP
              </span>
            </div>
            <span className="hidden sm:inline-block font-label-md text-xs text-on-surface-variant font-medium tracking-tight group-hover:text-primary transition-colors">
              MANSOON PATEL
            </span>
          </a>

          {/* Desktop Navigation Pill Links (md and larger) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <nav className="flex items-center gap-1 lg:gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3 lg:px-4 py-1.5 rounded-full font-label-md text-xs sm:text-sm transition-all duration-300 active:scale-95 ${
                      isActive
                        ? "text-on-primary-container font-semibold"
                        : "text-on-surface-variant hover:text-primary hover:bg-surface-container/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-primary-container rounded-full shadow-[0_0_14px_rgba(167,139,250,0.35)] -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}

              <button
                type="button"
                onClick={() => setShowResumeModal(true)}
                className="px-3 py-1.5 rounded-full font-label-md text-xs sm:text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container/60 transition-all duration-300 active:scale-95 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </button>
            </nav>

            {/* Profile Avatar / Status Trigger (Desktop) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowStatusTooltip(!showStatusTooltip)}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(206,189,255,0.4)] cursor-pointer"
                title="Current Status: Available for hire"
                aria-label="View developer status"
              >
                <User className="w-4 h-4 text-on-primary" />
              </button>
            </div>
          </div>

          {/* Mobile Right Action Cluster (< md) */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            {/* Quick Resume Button on Mobile */}
            <button
              type="button"
              onClick={() => setShowResumeModal(true)}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/60 font-label-md text-[11px] sm:text-xs text-on-surface hover:text-primary flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-secondary" />
              <span>Resume</span>
            </button>

            {/* Status Avatar Button (Mobile) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowStatusTooltip(!showStatusTooltip)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center transition-transform active:scale-95 shadow-[0_0_10px_rgba(206,189,255,0.35)] cursor-pointer"
                aria-label="View developer status"
              >
                <User className="w-3.5 h-3.5 text-on-primary" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setShowStatusTooltip(false);
              }}
              className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant/80 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 cursor-pointer ml-0.5"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-primary" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Status Popover Tooltip (Responsive for Mobile & Desktop) */}
        <AnimatePresence>
          {showStatusTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto fixed sm:absolute right-4 sm:right-6 md:right-1/4 top-18 sm:top-20 w-[calc(100vw-32px)] max-w-xs sm:w-72 p-4 rounded-2xl bg-surface-container-high/95 border border-outline-variant shadow-2xl backdrop-blur-xl z-50 text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                    Active Now • Open to Work
                  </span>
                </div>
                <button
                  onClick={() => setShowStatusTooltip(false)}
                  className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
                  aria-label="Close tooltip"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-on-surface font-medium leading-snug mb-2">
                Full Stack Developer &amp; MERN Specialist open for internships and full-time opportunities.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant font-code-inline">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>React, Node, Express, MongoDB &amp; GenAI</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Dropdown Sheet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-auto mt-2 max-w-sm mx-auto rounded-3xl bg-surface-container-lowest/95 border border-outline-variant/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:hidden overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-outline-variant/40 px-2">
                <span className="text-[11px] font-code-inline text-secondary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Navigation Menu
                </span>
                <span className="text-[10px] font-code-inline text-outline">
                  Mansoon Patel
                </span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-label-md transition-colors active:scale-[0.98] ${
                        isActive
                          ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/70"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-on-primary-container" : "opacity-40"}`} />
                    </a>
                  );
                })}
              </nav>

              {/* Quick Resume CTA inside Mobile Menu */}
              <div className="pt-3 mt-2 border-t border-outline-variant/40 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowResumeModal(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-2xl bg-surface-container-high border border-outline-variant text-on-surface hover:text-primary font-label-md text-xs font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-secondary" />
                  <span>View Full Interactive Resume (CV)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </button>

                <div className="flex items-center justify-between px-2 pt-1 text-[11px] font-code-inline text-on-surface-variant">
                  <a
                    href="mailto:patelmansoon@gmail.com"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-primary" />
                    <span>Email</span>
                  </a>
                  <span>•</span>
                  <a
                    href="tel:+918770800270"
                    className="hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-secondary" />
                    <span>Call</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/immansoon001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/mansoon-patel-a48aa0296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full Interactive Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-surface-container border border-outline-variant p-4 sm:p-7 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                aria-label="Close resume modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Resume Header */}
              <div className="border-b border-outline-variant/60 pb-4 mb-4 pr-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-label-sm text-[10px] sm:text-[11px] uppercase tracking-wider text-secondary font-semibold">
                    OFFICIAL CURRICULUM VITAE
                  </span>
                </div>
                <h3 className="font-headline-xl text-xl sm:text-3xl text-on-surface font-bold">
                  Mansoon Patel
                </h3>
                <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">
                  Full Stack Developer • B.Tech CSE (Top 10% Batch) • MERN Certified
                </p>

                {/* Contact Pills */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2.5 text-xs font-code-inline text-on-surface-variant">
                  <a
                    href="tel:+918770800270"
                    className="flex items-center gap-1 hover:text-secondary transition-colors"
                  >
                    <Phone className="w-3 h-3 text-secondary" />
                    <span>+91-8770800270</span>
                  </a>
                  <span className="hidden xs:inline">•</span>
                  <a
                    href="mailto:patelmansoon@gmail.com"
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Mail className="w-3 h-3 text-primary" />
                    <span className="break-all">patelmansoon@gmail.com</span>
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-[11px] text-outline">Raipur, Chhattisgarh, India</span>
                </div>
              </div>

              {/* Profile Narrative */}
              <div className="mb-4 p-3 rounded-xl bg-surface-container-low border border-outline-variant/40">
                <span className="font-semibold text-[11px] text-primary uppercase tracking-wider block mb-1">
                  Profile Summary
                </span>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                  Full Stack Developer with B.Tech in Computer Science and MERN Stack certification; skilled in building responsive, scalable web applications using React, Node.js, Express, MongoDB, and basic machine learning with scikit-learn.
                </p>
              </div>

              {/* Resume Body Sections */}
              <div className="space-y-3.5 text-xs sm:text-sm text-on-surface-variant">
                {/* Education */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-secondary uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </span>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium text-on-surface text-xs sm:text-sm">
                        <span>Government Engineering College, Bilaspur</span>
                        <span className="text-[11px] font-code-inline text-secondary">2023 – Present</span>
                      </div>
                      <p className="text-[11px] text-primary-fixed mt-0.5">B.Tech in Computer Science Engineering • Among the top 10% of batch</p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/30">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium text-on-surface text-xs sm:text-sm">
                        <span>Monnet DAV Public School, Raipur</span>
                        <span className="text-[11px] font-code-inline text-on-surface-variant">Completed 2023</span>
                      </div>
                      <p className="text-[11px] text-primary-fixed mt-0.5">Senior Secondary Education (12th) Science-PCM • Top 5% of batch (88%)</p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-primary uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Industry Experience</span>
                  </span>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium text-on-surface text-xs sm:text-sm">
                      <span>Rays IT PVT LTD, Raipur</span>
                      <span className="text-[11px] font-code-inline text-secondary">June &apos;25 – July &apos;25</span>
                    </div>
                    <p className="text-[11px] text-secondary font-medium mt-0.5">Web Development Trainee (MERN Stack)</p>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-[11px] font-light">
                      <li>Completed MERN Stack training with hands-on experience in React.js, Node.js, Express.js, and MongoDB.</li>
                      <li>Built responsive web applications and strengthened full-stack development skills.</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-on-surface uppercase tracking-wider block mb-2">
                    Key Projects
                  </span>
                  <div className="space-y-2.5">
                    <div>
                      <h5 className="font-semibold text-on-surface text-xs sm:text-sm">
                        1. AI Mock interview &amp; ResumeXpert <span className="font-code-inline text-[10px] text-secondary font-normal">(MERN, GenAI, Puppeteer, Zod)</span>
                      </h5>
                      <p className="text-[11px] font-light leading-relaxed mt-0.5">
                        Architected full-stack career platform analyzing resumes, calculating job matching scores, identifying skill gaps, and generating personalized questions + roadmap.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/30">
                      <h5 className="font-semibold text-on-surface text-xs sm:text-sm">
                        2. Hire-Bridge <span className="font-code-inline text-[10px] text-secondary font-normal">(MERN, WebRTC, Clerk Auth, Piston API)</span>
                      </h5>
                      <p className="text-[11px] font-light leading-relaxed mt-0.5">
                        Recruiting platform with video conferencing for technical interviews, coding rounds, real-time chat, Clerk auth, and Piston API automated code analysis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-on-surface uppercase tracking-wider block mb-1">
                    Technical Skills &amp; Tools
                  </span>
                  <p className="text-xs font-code-inline text-primary-fixed mb-1 leading-relaxed">
                    <span className="text-secondary font-medium">Technical:</span> Javascript, MongoDB, Express.js, React.js, Node.js, Next.js, Typescript, GenAI, C++, python, scikit-learn
                  </p>
                  <p className="text-xs font-code-inline text-primary-fixed leading-relaxed">
                    <span className="text-secondary font-medium">Tools:</span> VS Code, Git &amp; Github, Postman, Mongoose
                  </p>
                </div>

                {/* Certifications & Achievements */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40">
                  <span className="font-semibold text-xs text-tertiary-fixed uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certifications &amp; Achievements</span>
                  </span>
                  <ul className="space-y-1 text-[11px] font-light">
                    <li>• MERN Stack Developer Certification by RAYS IT PVT LTD (Aug &apos;25)</li>
                    <li>• Microsoft Certifications: M365 Copilot, Use AI for everyday tasks, AI Concepts Badges</li>
                    <li>• Google Cloud Study Jam 2025–26 (19 Labs, Arcade Game Level 3, Official merchandise)</li>
                    <li>• Technical Lead, E-Cell CGIT Bilaspur - NIC, IIT Bombay</li>
                    <li>• Xcelerate Hackathon 2026 (IIIT New Raipur)</li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-outline-variant/60 mt-4">
                <button
                  type="button"
                  onClick={handleCopyResumeText}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold bg-surface-container-high text-on-surface hover:text-primary transition-colors flex items-center justify-center gap-1.5 border border-outline-variant/60 cursor-pointer"
                >
                  {copiedResume ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-secondary" />
                      <span>Copied Resume Plaintext</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Resume Text</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowResumeModal(false)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface cursor-pointer border border-outline-variant/40 sm:border-transparent text-center"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setShowResumeModal(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-semibold bg-primary-container text-on-primary-container hover:bg-primary-fixed transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <span>Contact Mansoon</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
