import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/locale-toggle";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SLS | Protect Your Dream",
  description: "Premium paint protection film and detailing in Sheikh Zayed.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${manrope.variable}`}>
      <body>
        <LocaleProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
