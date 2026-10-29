import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#131315",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansoon Patel — Full Stack Developer & MERN Specialist",
  description:
    "Portfolio of Mansoon Patel, Full Stack Developer and B.Tech Computer Science student specializing in React.js, Node.js, Express, MongoDB, Next.js, and GenAI.",
  keywords: [
    "Mansoon Patel",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "GenAI",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Mansoon Patel", url: "https://github.com/immansoon001" }],
  openGraph: {
    title: "Mansoon Patel — Full Stack Developer & MERN Specialist",
    description:
      "Turning ideas into scalable digital experiences with React, Node.js, Express, MongoDB, and applied GenAI.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} dark scroll-smooth`}
    >
      <body className="bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
