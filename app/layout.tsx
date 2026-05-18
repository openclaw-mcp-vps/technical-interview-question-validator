import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Question Validator — Bias-Free Hiring",
  description: "AI-powered analysis of coding interview questions for gender and cultural bias, difficulty calibration, and role relevance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9d6e4c9f-8e6c-4263-aebd-f1509a8d6685"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
