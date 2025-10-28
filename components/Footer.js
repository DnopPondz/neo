"use client";

import Link from "next/link";
import { Fragment } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { translations } = useLanguage();
  const { footer } = translations;

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-center sm:gap-6">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.65rem] uppercase tracking-[0.5em] text-emerald-200 sm:text-xs sm:tracking-[0.6em]"
          aria-label={footer.linkGroupLabel}
        >
          {footer.links.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && <span aria-hidden className="text-emerald-300/60">|</span>}
              <Link
                href={link.href}
                className="transition-colors hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                {link.label}
              </Link>
            </Fragment>
          ))}
        </nav>
        <div className="h-px w-20 bg-emerald-400/40" aria-hidden />
        <p className="text-sm text-slate-200 sm:text-base">{footer.addressLine}</p>
        <p className="text-xs text-slate-300 sm:text-sm">{footer.contactLine}</p>
        <p className="text-xs text-slate-500">{footer.copyrightLine}</p>
      </div>
    </footer>
  );
}
