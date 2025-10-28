"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export const menuItems = [
  { key: "home", href: "/" },
  { key: "capabilities", href: "/capabilities" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const { language, translations, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeKey = useMemo(() => {
    const matched = menuItems.find((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.href);
    });
    return matched?.key ?? menuItems[0].key;
  }, [pathname]);

  const legacyHeader = translations.legacyHeader ?? {};
  const strapline = legacyHeader.strapline ?? "";
  const highlightLetter = strapline.charAt(0);
  const straplineRest = strapline.slice(1);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, language]);

  const handleLanguageSelect = (code) => {
    if (language !== code) {
      setLanguage(code);
    }
  };

  const languages = [
    { code: "th", label: "THAI" },
    { code: "en", label: "ENG" },
  ];

  const renderMenuItems = (isInline = false) => (
    <ul
      className={`${
        isInline
          ? "flex flex-1 flex-wrap items-center justify-end gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 md:gap-3 lg:gap-4"
          : "space-y-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80"
      }`}
    >
      {menuItems.map((item) => {
        const isActive = activeKey === item.key;
        const isAction = item.key === "contact";
        return (
          <li key={item.key}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex items-center justify-center px-3 py-2 transition-all duration-200 ${
                isAction
                  ? isActive
                    ? "rounded-full bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 text-slate-900 shadow-lg shadow-amber-500/30"
                    : "rounded-full border border-amber-200/40 bg-white/5 text-amber-200 hover:border-amber-200 hover:bg-amber-200 hover:text-slate-900"
                  : isActive
                  ? "border-b-2 border-amber-200 text-white"
                  : "hover:text-white"
              }`}
            >
              {translations.nav[item.key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#1d2330] via-[#222a3a] to-[#2f3a4f] text-white shadow-lg">
      <div className="mx-auto w-full max-w-6xl px-4 pb-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <Link
              href="/"
              className="flex flex-1 items-center gap-4 sm:gap-6"
              aria-label={`${translations.brand.name} home`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/40 bg-white/10 text-lg font-bold tracking-[0.45em] text-white shadow-inner sm:h-16 sm:w-16 sm:text-2xl">
                  N
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/80 sm:text-[12px]">
                    {translations.brand.name}
                  </span>
                  {legacyHeader.company ? (
                    <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-white/60 sm:text-[10px]">
                      {legacyHeader.company}
                    </span>
                  ) : null}
                </div>
              </div>
              {strapline ? (
                <div className="ml-auto hidden flex-col items-end text-[10px] leading-4 text-white/80 sm:flex">
                  <p className="flex flex-wrap items-baseline gap-1 text-right font-medium text-white">
                    {highlightLetter && (
                      <span className="text-base font-semibold text-amber-200 sm:text-lg">{highlightLetter}</span>
                    )}
                    <span>{straplineRest}</span>
                  </p>
                  {legacyHeader.emphasis ? (
                    <p className="tracking-[0.4em] text-amber-200">{legacyHeader.emphasis}</p>
                  ) : null}
                </div>
              ) : null}
            </Link>
            {strapline ? (
              <div className="basis-full text-center text-[10px] leading-4 text-white/80 sm:hidden">
                <p className="flex justify-center gap-1 text-white">
                  {highlightLetter ? (
                    <span className="font-semibold text-amber-200">{highlightLetter}</span>
                  ) : null}
                  <span className="uppercase tracking-[0.35em]">{straplineRest}</span>
                </p>
                {legacyHeader.emphasis ? (
                  <p className="mt-1 uppercase tracking-[0.4em] text-amber-200">{legacyHeader.emphasis}</p>
                ) : null}
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 sm:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="relative inline-block h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 origin-center rounded-full bg-current transition-transform duration-300 ease-in-out transform ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-6 origin-center rounded-full bg-current transition-transform duration-300 ease-in-out transform ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="hidden items-center justify-between gap-4 sm:flex">
            <div className="flex items-center gap-4 text-[11px] font-semibold tracking-[0.35em] text-white/60">
              {languages.map((item, index) => (
                <div key={item.code} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleLanguageSelect(item.code)}
                    className={`transition-colors ${
                      language === item.code ? "text-amber-200" : "hover:text-white"
                    }`}
                    aria-pressed={language === item.code}
                  >
                    {item.label}
                  </button>
                  {index < languages.length - 1 ? (
                    <span aria-hidden="true" className="mx-3 text-white/30">
                      |
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
            {renderMenuItems(true)}
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
      <div
        id="mobile-menu"
        className={`sm:hidden transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[480px]" : "max-h-0"
        } overflow-hidden bg-[#1f2736] shadow-inner shadow-black/40`}
      >
        <div className="space-y-6 px-5 pb-6 pt-5">
          <div className="flex items-center justify-center gap-5 text-[11px] font-semibold tracking-[0.35em] text-white/60">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => handleLanguageSelect(item.code)}
                className={`transition-colors ${
                  language === item.code ? "text-amber-200" : "hover:text-white"
                }`}
                aria-pressed={language === item.code}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="h-px w-full bg-white/10" aria-hidden="true" />
          {renderMenuItems(false)}
        </div>
      </div>
    </header>
  );
}
