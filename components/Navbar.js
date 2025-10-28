"use client";

import { useMemo } from "react";
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

  const handleLanguageSelect = (code) => {
    if (language !== code) {
      setLanguage(code);
    }
  };

  const languages = [
    { code: "th", label: "THAI" },
    { code: "en", label: "ENG" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#1d2330] via-[#222a3a] to-[#2f3a4f] text-white shadow-lg">
      <div className="mx-auto w-full max-w-6xl px-4 pb-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <Link
              href="/"
              className="flex items-end gap-5"
              aria-label={`${translations.brand.name} home`}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-white/40 bg-white/10 text-2xl font-bold tracking-[0.45em] text-white shadow-inner">
                  N
                </div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.6em] text-white/80">
                  {translations.brand.name}
                </span>
              </div>
              <div className="hidden h-16 w-px bg-white/15 sm:block" aria-hidden="true" />
              <div className="flex flex-col gap-1 text-[11px] leading-4 text-white/80">
                {strapline ? (
                  <p className="flex flex-wrap items-baseline gap-1 text-right font-medium text-white">
                    {highlightLetter && (
                      <span className="text-lg font-semibold text-amber-200">{highlightLetter}</span>
                    )}
                    <span>{straplineRest}</span>
                  </p>
                ) : null}
                {legacyHeader.emphasis ? (
                  <p className="text-right tracking-[0.4em] text-amber-200">
                    {legacyHeader.emphasis}
                  </p>
                ) : null}
                {legacyHeader.company ? (
                  <p className="text-right tracking-[0.4em] text-white/70">
                    {legacyHeader.company}
                  </p>
                ) : null}
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 text-[11px] font-semibold tracking-[0.35em] text-white/60">
              {languages.map((item, index) => (
                <div key={item.code} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleLanguageSelect(item.code)}
                    className={`transition-colors ${
                      language === item.code
                        ? "text-amber-200"
                        : "hover:text-white"
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
            <nav className="flex flex-1 flex-wrap items-center justify-end gap-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              {menuItems.map((item, index) => {
                const isActive = activeKey === item.key;
                const isAction = item.key === "contact";
                return (
                  <div key={item.key} className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`px-3 py-2 transition-all duration-200 ${
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
                    {index < menuItems.length - 1 ? (
                      <span aria-hidden="true" className="mx-4 hidden h-px w-8 bg-white/15 sm:block" />
                    ) : null}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
    </header>
  );
}
