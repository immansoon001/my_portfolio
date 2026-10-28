"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Copy, Send, Sparkles, Phone, MapPin, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";
import { SpotlightCard } from "./SpotlightCard";

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

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const emailAddress = "patelmansoon@gmail.com";
  const phoneNumber = "+91-8770800270";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#a78bfa", "#cebdff", "#54d8e8", "#f8e454"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);

    try {
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#54d8e8", "#a78bfa"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#a78bfa", "#54d8e8", "#cebdff"],
        });
      } catch {
        // ignore
      }
      setTimeout(() => {
        setSentSuccess(false);
        setShowDirectForm(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }, 1200);
  };

  return (
    <section className="w-full pt-20 pb-28" id="contact">
      <SpotlightCard
        spotlightColor="rgba(167, 139, 250, 0.25)"
        className="relative w-full rounded-3xl bg-surface-container-low p-8 sm:p-12 md:p-16 flex flex-col items-center text-center overflow-hidden shadow-2xl border border-outline-variant/40 hover:border-primary-container/40 transition-colors duration-500"
      >
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-container/20 blur-[130px] rounded-full pointer-events-none" />

        {/* Label Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container mb-6 hover:border-secondary/40 transition-colors border border-outline-variant/40 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
            GET IN TOUCH
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-headline-xl text-3xl sm:text-5xl md:text-6xl text-on-surface tracking-tight max-w-2xl mb-4 leading-tight font-bold">
          Let&apos;s build something great.
        </h2>

        {/* Subtitle */}
        <p className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl mb-8 font-light">
          Have an opportunity, internship, contract project, or full-time role? I&apos;d love to connect and discuss how I can contribute.
        </p>

        {/* Main Action Pills: Email, Phone, GitHub, LinkedIn */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-10 w-full mb-6">
          {/* Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded-full font-label-md text-sm sm:text-base bg-primary-container text-on-primary-container font-semibold transition-all duration-300 hover:bg-primary-fixed hover:shadow-[0_0_30px_rgba(167,139,250,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2.5 group min-h-[48px] shadow-[0_0_20px_rgba(167,139,250,0.3)] cursor-pointer"
            title="Click to copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-on-primary-container" />
                <span>Copied: {emailAddress}</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{emailAddress}</span>
                <Copy className="w-3.5 h-3.5 opacity-60 ml-0.5" />
              </>
            )}
          </button>

          {/* Phone Button */}
          <button
            type="button"
            onClick={handleCopyPhone}
            className="px-5 py-3.5 rounded-full font-label-md text-sm sm:text-base bg-surface-container-high text-on-surface hover:text-secondary transition-all duration-300 hover:bg-surface-container hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 shadow-sm group min-h-[48px] border border-outline-variant/60 cursor-pointer"
            title="Click to copy phone number"
          >
            {copiedPhone ? (
              <>
                <Check className="w-4 h-4 text-secondary" />
                <span>Copied: {phoneNumber}</span>
              </>
            ) : (
              <>
                <Phone className="w-4 h-4 text-secondary transition-transform duration-300 group-hover:scale-110" />
                <span>{phoneNumber}</span>
                <Copy className="w-3.5 h-3.5 opacity-60 ml-0.5" />
              </>
            )}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/immansoon001"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-full font-label-md text-sm sm:text-base bg-surface-container text-on-surface hover:text-primary transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 shadow-sm group min-h-[48px] border border-outline-variant/60"
          >
            <GithubIcon className="w-4 h-4 fill-currentColor transition-transform duration-300 group-hover:scale-110" />
            <span>immansoon001</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/mansoon-patel-a48aa0296"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-full font-label-md text-sm sm:text-base bg-surface-container text-on-surface hover:text-secondary transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 shadow-sm group min-h-[48px] border border-outline-variant/60"
          >
            <LinkedInIcon className="w-4 h-4 fill-currentColor transition-transform duration-300 group-hover:scale-110" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Quick Message Dropdown Option */}
        <div className="z-10 mt-2">
          {!showDirectForm ? (
            <button
              onClick={() => setShowDirectForm(true)}
              className="text-xs font-code-inline text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4 cursor-pointer"
            >
              Or send a fast message directly from here →
            </button>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmitMessage}
              className="w-full max-w-md mx-auto text-left bg-surface-container-lowest/90 border border-outline-variant/70 rounded-2xl p-5 shadow-2xl mt-4"
            >
              {sentSuccess ? (
                <div className="text-center py-6">
                  <Sparkles className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h4 className="font-headline-md text-base text-on-surface font-semibold">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Thank you! Mansoon will get back to you promptly at patelmansoon@gmail.com.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Direct Message to Mansoon
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowDirectForm(false)}
                      className="text-xs text-on-surface-variant hover:text-on-surface cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-surface-container border border-outline-variant/60 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-surface-container border border-outline-variant/60 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container"
                    />
                    <textarea
                      required
                      rows={3}
                      placeholder="Opportunity details, project scope, or query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-surface-container border border-outline-variant/60 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-2.5 rounded-xl bg-primary-container text-on-primary-container font-semibold text-xs transition-colors hover:bg-primary-fixed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSending ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </motion.form>
          )}
        </div>
      </SpotlightCard>
    </section>
  );
}
