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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#29313f] via-[#374155] to-[#4c5770] text-white shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-white/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center gap-4"
            aria-label={`${translations.brand.name} home`}
          >
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded border border-white/40 bg-white/10 text-2xl font-bold tracking-[0.4em] text-white shadow-inner">
                  N
                </div>
                <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.6em] text-white/90">
                  {translations.brand.name}
                </span>
              </div>
            </div>
          </Link>
          <div className="flex flex-col items-end text-right text-[11px] leading-4 text-white/80 sm:max-w-xl">
            {strapline ? (
              <p className="flex flex-wrap items-baseline justify-end gap-1 font-medium text-white">
                {highlightLetter && (
                  <span className="text-lg font-semibold text-amber-200">{highlightLetter}</span>
                )}
                <span>{straplineRest}</span>
              </p>
            ) : null}
            {legacyHeader.emphasis ? (
              <p className="mt-1 tracking-[0.35em] text-amber-200">
                {legacyHeader.emphasis}
              </p>
            ) : null}
            {legacyHeader.company ? (
              <p className="tracking-[0.35em] text-white/90">{legacyHeader.company}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.35em]">
            {languages.map((item, index) => (
              <div key={item.code} className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleLanguageSelect(item.code)}
                  className={`transition-colors ${
                    language === item.code
                      ? "text-amber-200"
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-pressed={language === item.code}
                >
                  {item.label}
                </button>
                {index < languages.length - 1 ? (
                  <span aria-hidden="true" className="mx-3 text-white/40">
                    |
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em]">
            {menuItems.map((item, index) => {
              const isActive = activeKey === item.key;
              return (
                <div key={item.key} className="flex items-center">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3 py-1.5 transition-colors ${
                      isActive
                        ? "border border-white/40 bg-white/15 text-white shadow-inner"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {translations.nav[item.key]}
                  </Link>
                  {index < menuItems.length - 1 ? (
                    <span aria-hidden="true" className="mx-3 text-white/30">
                      |
                    </span>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
