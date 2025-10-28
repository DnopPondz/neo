"use client";

import { useLanguage } from "@/components/LanguageProvider";

const decorativeGradient =
  "absolute inset-0 -z-10 overflow-hidden rounded-[3rem] bg-slate-950";

export default function Home() {
  const { translations } = useLanguage();
  const { brand, hero, sections } = translations;

  return (
    <div className="space-y-24 pb-24">
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pt-24 lg:px-8">
        <div className="relative isolate rounded-[3rem] border border-slate-800 bg-slate-900 px-8 py-16 shadow-2xl sm:px-12 lg:px-16 lg:py-20">
          <div className={decorativeGradient}>
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-70" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8 text-slate-100">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                {hero.eyebrow}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  {hero.primaryCta}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-emerald-300/80 hover:text-emerald-200"
                >
                  {hero.secondaryCta}
                </a>
              </div>
              <div className="grid gap-6 pt-6 sm:grid-cols-3">
                {hero.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-inner"
                  >
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
                  <div className="space-y-4 text-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                      {brand.tagline}
                    </p>
                    <h2 className="text-2xl font-semibold text-white">{brand.name} Platform</h2>
                    <ul className="space-y-3 text-sm leading-6">
                      {hero.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-lg font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-[0.6rem] uppercase tracking-[0.25em]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8" id="partners">
        <div className="rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl lg:p-16">
          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {sections.partners.title}
            </p>
            <p className="text-lg text-slate-600">{sections.partners.description}</p>
            <div className="mt-10 grid grid-cols-2 items-center gap-6 text-sm font-semibold text-slate-500 sm:grid-cols-3 lg:grid-cols-5">
              {sections.partners.logos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-4 shadow-sm"
                >
                  <span className="tracking-[0.3em]">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8" id="solutions">
        <div className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                {sections.solutions.title}
              </h2>
              <p className="text-base text-slate-600">{sections.solutions.description}</p>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
              {brand.slogan}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {sections.solutions.items.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col justify-between gap-6 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                    {brand.name}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <span>→</span>
                  <span>{hero.primaryCta}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500">{sections.solutions.footnote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8" id="platform">
        <div className="rounded-[3rem] border border-slate-200 bg-slate-900 text-slate-100 shadow-2xl">
          <div className="grid gap-10 px-8 py-12 lg:grid-cols-[1fr_1.2fr] lg:px-16 lg:py-16">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                {sections.platform.title}
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{sections.platform.description}</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{brand.tagline}</p>
            </div>
            <div className="grid gap-6">
              {sections.platform.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-inner"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                        {pillar.summary}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-200">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8" id="industries">
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {sections.industries.title}
            </h2>
            <p className="text-base text-slate-600">{sections.industries.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sections.industries.sectors.map((sector) => (
              <div
                key={sector.title}
                className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">{sector.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{sector.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8" id="insights">
        <div className="rounded-[3rem] border border-slate-200 bg-slate-50 p-10 shadow-xl lg:p-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                {sections.resources.title}
              </h2>
              <p className="text-base text-slate-600">{sections.resources.description}</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sections.resources.articles.map((article) => (
              <article
                key={article.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  {article.category}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900">{article.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{article.summary}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <span>→</span>
                  <span>{hero.primaryCta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8" id="contact">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-900 text-slate-100 shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.25),_transparent_65%)]" />
          <div className="grid gap-10 px-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                {sections.contact.title}
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {sections.contact.description}
              </h2>
              <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    {sections.contact.phoneLabel}
                  </p>
                  {translations.footer.contactNumbers.map((number) => (
                    <p key={number} className="mt-3 text-base font-semibold text-white">
                      {number}
                    </p>
                  ))}
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    {sections.contact.emailLabel}
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    {translations.footer.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                {sections.contact.addressLabel}
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                {translations.footer.addressLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {translations.footer.hoursTitle}
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                {translations.footer.hours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
