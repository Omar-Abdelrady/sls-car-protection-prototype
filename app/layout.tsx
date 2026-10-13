import type { Metadata } from "next";
import { Cairo, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/locale-toggle";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
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
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${manrope.variable}`}>
      <body>
        <LocaleProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
