"use client";

import { useLanguage } from "@/components/LanguageProvider";

const floatingSquares = [
  { top: "18%", left: "12%", size: "4.5rem", opacity: 0.45 },
  { top: "32%", left: "30%", size: "3.25rem", opacity: 0.4 },
  { top: "48%", left: "18%", size: "3rem", opacity: 0.35 },
  { top: "22%", right: "26%", size: "5rem", opacity: 0.4 },
  { top: "40%", right: "12%", size: "3.75rem", opacity: 0.35 },
  { top: "58%", right: "24%", size: "2.75rem", opacity: 0.3 },
];

export default function Home() {
  const { translations } = useLanguage();
  const { home } = translations;

  const websiteHref = home.contact.website.startsWith("http")
    ? home.contact.website
    : `https://${home.contact.website}`;
  const phoneHref = `tel:${home.contact.phone.replace(/[^+\d]/g, "")}`;
  const emailHref = `mailto:${home.contact.email}`;

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#162065] via-[#3154a0] to-[#95c0ff] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_65%)]" />
        {floatingSquares.map((square, index) => (
          <span
            key={`${square.top}-${square.left ?? square.right}-${index}`}
            className="pointer-events-none absolute rounded-2xl bg-white/60 blur-[2px]"
            style={{
              top: square.top,
              left: square.left,
              right: square.right,
              width: square.size,
              height: square.size,
              opacity: square.opacity,
            }}
            aria-hidden
          />
        ))}
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white sm:items-end sm:text-right">
          <h1 className="text-3xl font-semibold tracking-[0.5em] drop-shadow-sm sm:text-5xl sm:tracking-[0.6em]">
            {home.banner.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            {home.banner.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-lg sm:rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.6),_transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="relative flex h-full min-h-[220px] items-end justify-start p-6 sm:min-h-[260px]">
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-black/20 backdrop-blur sm:px-5 sm:text-xs">
                NEOSEN
              </div>
            </div>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:space-y-6 sm:text-base">
            {home.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-xs leading-relaxed text-slate-600 shadow-inner sm:rounded-[2.5rem] sm:p-8 sm:text-sm">
              <p className="text-sm font-semibold text-slate-900 sm:text-base">{home.contact.invite}</p>
              <dl className="mt-5 space-y-4 sm:mt-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <dt className="font-medium text-slate-900">{home.contact.websiteLabel}</dt>
                  <dd>
                    <a
                      href={websiteHref}
                      className="break-words text-emerald-600 underline-offset-2 hover:text-emerald-500 hover:underline"
                    >
                      {home.contact.website}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <dt className="font-medium text-slate-900">{home.contact.emailLabel}</dt>
                  <dd>
                    <a
                      href={emailHref}
                      className="text-emerald-600 underline-offset-2 hover:text-emerald-500 hover:underline"
                    >
                      {home.contact.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <dt className="font-medium text-slate-900">{home.contact.phoneLabel}</dt>
                  <dd>
                    <a
                      href={phoneHref}
                      className="text-emerald-600 underline-offset-2 hover:text-emerald-500 hover:underline"
                    >
                      {home.contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
