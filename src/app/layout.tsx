import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healing by Ali — Personal Training & Recovery Services",
  description:
    "Professional personal training, recovery, and therapeutic massage services by Ali Diakite. Strength & conditioning, cupping therapy, STEM therapy, and more in Stone Mountain, GA.",
  keywords: [
    "personal training",
    "recovery",
    "therapeutic massage",
    "cupping therapy",
    "Stone Mountain GA",
    "Healing by Ali",
    "Ali Diakite",
    "strength and conditioning",
    "mobility training",
    "workout plans",
  ],
  openGraph: {
    title: "Healing by Ali — Personal Training & Recovery Services",
    description:
      "Move better. Feel better. Perform at your best. Professional training and recovery services by Ali Diakite.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
