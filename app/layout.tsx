import type { Metadata } from "next";
import "./globals.css";
import WorldBackground from "../components/WorldBackground";
import Mascot from "../components/Mascot";
import AudioController from "../components/AudioController";
import SoundNotice from "../components/SoundNotice";

export const metadata: Metadata = {
  title: "Pranaya Widi Ramadhan — Web · Mobile · Robotics · AI",
  description:
    "Portofolio Pranaya Widi Ramadhan (Pran) — Web Developer, Mobile Developer, Robotics Engineer, dan AI Enthusiast dari SMK Wirawasta Cimahi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts as plain <link> tags (not next/font) — keeps this
            compatible with the .babelrc fallback used to avoid the SWC
            binary issue. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/2.44.0/iconfont/tabler-icons.min.css"
        />
      </head>
      <body className="font-sans">
        <SoundNotice />
        <WorldBackground />
        {children}
        <Mascot />
        <AudioController />
      </body>
    </html>
  );
}
