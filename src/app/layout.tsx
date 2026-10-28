import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healing by Ali — Personal Training & Recovery Services",
  description:
    "Professional personal training, recovery, and therapeutic massage services by Ali Diakite. Strength & conditioning, cupping therapy, Muscle Stimulation Therapy (EMS), and more in Stone Mountain, GA.",
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
      className={`${cormorant.variable} ${jost.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
