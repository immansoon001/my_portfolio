"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/60 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram & Location/Time */}
        <div className="flex flex-wrap items-center gap-3">
          <div
            onClick={scrollToTop}
            className="w-7 h-7 rounded-lg bg-surface-container border border-outline-variant/70 flex items-center justify-center transition-transform hover:scale-105 duration-300 cursor-pointer shadow-sm"
          >
            <span className="font-headline-md text-xs text-primary font-semibold tracking-tight">
              MP
            </span>
          </div>
          <span className="font-label-md text-xs sm:text-sm text-on-surface tracking-tight font-medium">
            Mansoon Patel
          </span>
          <span className="text-outline-variant text-xs">•</span>
          <span className="text-[11px] font-code-inline text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Raipur: {currentTime || "12:00:00"} IST</span>
          </span>
        </div>

        {/* Center: Social Quick Links */}
        <div className="flex items-center gap-3 text-on-surface-variant">
          <a
            href="https://github.com/immansoon001"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface-container-low border border-outline-variant/40 hover:text-primary hover:border-primary-container/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mansoon-patel-a48aa0296"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface-container-low border border-outline-variant/40 hover:text-secondary hover:border-secondary/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:patelmansoon@gmail.com"
            className="p-2 rounded-full bg-surface-container-low border border-outline-variant/40 hover:text-primary hover:border-primary-container/60 transition-colors"
            aria-label="Email Mansoon"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back-to-Top */}
        <div className="flex items-center gap-4">
          <p className="font-body-sm text-xs text-on-surface-variant text-center sm:text-right font-light">
            © {new Date().getFullYear()} Mansoon Patel.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-surface-container-low border border-outline-variant/60 text-on-surface-variant hover:text-primary hover:border-primary-container/60 transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
