import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { About } from "@/components/About";
import { Toolkit } from "@/components/Toolkit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating Navigation Pill */}
      <Navbar />

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-surface relative min-h-screen overflow-hidden">
        {/* Ambient Backdrop Lights */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-container/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[1800px] left-10 w-[600px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[3000px] right-10 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-20 left-1/4 w-[600px] h-[450px] bg-primary-container/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16">
          <div className="flex flex-col w-full text-on-surface">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Selected Work Section */}
            <SelectedWork />

            {/* 3. Experience & Education Credentials */}
            <ExperienceEducation />

            {/* 4. About Section */}
            <About />

            {/* 5. Toolkit Section */}
            <Toolkit />

            {/* 6. Contact Section */}
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
