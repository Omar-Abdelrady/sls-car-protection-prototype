"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "ar" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isArabic: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, isArabic: locale === "ar" }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  const nextLocale = locale === "ar" ? "en" : "ar";
  return (
    <button
      className="locale-toggle"
      type="button"
      aria-label={nextLocale === "en" ? "English" : "العربية"}
      onClick={() => setLocale(nextLocale)}
    >
      <span className={locale === "ar" ? "is-active" : ""}>ع</span>
      <i aria-hidden="true">/</i>
      <span className={locale === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}
