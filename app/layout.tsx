import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Konx Construction Group PTY LTD | Perth Commercial Construction",
    template: "%s | Konx Construction Group",
  },
  description:
    "Perth's commercial construction specialists. Tilt panel repair, commercial fit out, and concrete works. Fast turnaround, free site assessments.",
  keywords: [
    "commercial construction Perth",
    "tilt panel repair Perth",
    "commercial fit out Perth",
    "concrete works Perth",
    "construction company Perth WA",
  ],
  authors: [{ name: "Konx Construction Group PTY LTD" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Konx Construction Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
