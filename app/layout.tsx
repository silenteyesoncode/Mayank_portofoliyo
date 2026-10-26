import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Kumar — Software Engineer, AI Applications",
  description:
    "Software engineer with production experience in mobile engineering, real-time systems, and geospatial APIs. Building AI-powered applications using OpenAI, Firebase, and React Native.",
  keywords: [
    "Mayank Kumar",
    "Software Engineer",
    "AI Engineer",
    "React Native",
    "Full-Stack",
    "OpenAI",
    "Firebase",
    "Spring Boot",
    "Delhi",
    "India",
  ],
  authors: [{ name: "Mayank Kumar", url: "https://silenteyesoncode.com" }],
  creator: "Mayank Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://silenteyesoncode.com",
    title: "Mayank Kumar — Software Engineer, AI Applications",
    description:
      "Software engineer with production experience in mobile engineering, real-time systems, and geospatial APIs. Building AI-powered applications.",
    siteName: "Mayank Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Kumar — Software Engineer, AI Applications",
    description:
      "Software engineer with production experience in mobile engineering, real-time systems, and geospatial APIs. Building AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
