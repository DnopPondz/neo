"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "ติดต่อเรา",
    intro:
      "ส่งข้อความถึงทีม Neosen หรือใช้ช่องทางการติดต่อด้านล่างเพื่อพูดคุยกับเราได้ทันที",
    contactEmail: "info@neosen.com",
    contactAddress: [
      "44/1 หมู่ 7 ถนนภูชสมิงไพร",
      "ตำบลบางจาก อำเภอพระประแดง",
      "จังหวัดสมุทรปราการ 10130",
    ],
    contactPhones: ["02-7559961-2", "02-7559963"],
    formTitle: "กรอกข้อมูลเพื่อติดต่อทีมของเรา",
    formDescription:
      "เราจะติดต่อกลับพร้อมข้อมูลผลิตภัณฑ์และบริการที่เหมาะสมกับความต้องการของคุณ",
    formFields: [
      {
        name: "name",
        label: "กรุณาใส่ชื่อของท่าน",
        placeholder: "ชื่อ-นามสกุล",
        type: "text",
      },
      {
        name: "email",
        label: "อีเมล",
        placeholder: "you@example.com",
        type: "email",
      },
      {
        name: "subject",
        label: "หัวข้อข้อความ",
        placeholder: "หัวข้อที่ต้องการติดต่อ",
        type: "text",
      },
      {
        name: "message",
        label: "ข้อความของท่าน",
        placeholder: "พิมพ์ข้อความถึงทีม Neosen",
        type: "textarea",
      },
    ],
    submitLabel: "ส่ง",
    linkSectionTitle: "ลิงก์อ้างอิง",
    linkGroups: [
      {
        title: "Company Links",
        description:
          "สำหรับข้อมูลเกี่ยวกับบริษัทคู่ค้าจากหลากหลายอุตสาหกรรมที่เราร่วมงานด้วย",
        links: [
          {
            label: "www.techchrome.com",
            href: "http://www.techchrome.com",
          },
        ],
      },
      {
        title: "Technical Links",
        description:
          "สำหรับข้อมูลทางเทคนิคเพิ่มเติมจากเว็บไซต์ที่เราแนะนำ",
        links: [
          {
            label: "www.neosen.com",
            href: "http://www.neosen.com",
          },
        ],
      },
    ],
  },
  en: {
    heroHeading: "Contact Us",
    intro:
      "Send a message to the Neosen team or reach out directly through the channels below.",
    contactEmail: "info@neosen.com",
    contactAddress: [
      "44/1 Moo 7, Poochasamingprai Rd.",
      "Prapadang, Samuthprakarn",
      "10130",
    ],
    contactPhones: ["02-7559961-2", "02-7559963"],
    formTitle: "Share your details with our team",
    formDescription:
      "We will respond with product guidance and services tailored to your needs.",
    formFields: [
      {
        name: "name",
        label: "Your name",
        placeholder: "First and last name",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "you@example.com",
        type: "email",
      },
      {
        name: "subject",
        label: "Subject",
        placeholder: "How can we help?",
        type: "text",
      },
      {
        name: "message",
        label: "Message",
        placeholder: "Write your message for Neosen",
        type: "textarea",
      },
    ],
    submitLabel: "Send",
    linkSectionTitle: "Reference links",
    linkGroups: [
      {
        title: "Company Links",
        description:
          "For information about the companies and industries we collaborate with.",
        links: [
          {
            label: "www.techchrome.com",
            href: "http://www.techchrome.com",
          },
        ],
      },
      {
        title: "Technical Links",
        description:
          "For additional technical knowledge from trusted partners.",
        links: [
          {
            label: "www.neosen.com",
            href: "http://www.neosen.com",
          },
        ],
      },
    ],
  },
};

export default function ContactView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0c1337] via-[#142a5f] to-[#0a1129] py-20 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" aria-hidden />
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl space-y-16 px-6 lg:px-8">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            {sections.contact.title}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{copy.heroHeading}</h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-white/80">{copy.intro}</p>
        </header>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-emerald-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,179,237,0.18),_transparent_65%)]" aria-hidden />
            <div className="relative space-y-8">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-white">NEOSEN</h2>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
                  {sections.contact.addressLabel}
                </div>
                <address className="not-italic text-sm leading-6 text-slate-100/90">
                  {copy.contactAddress.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>

              <div className="grid gap-5 text-sm leading-6 text-slate-100/90 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                    {sections.contact.emailLabel}
                  </p>
                  <Link
                    href={`mailto:${copy.contactEmail}`}
                    className="inline-flex items-center gap-2 text-base font-semibold text-emerald-200 transition hover:text-emerald-100"
                  >
                    {copy.contactEmail}
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                    {sections.contact.phoneLabel}
                  </p>
                  <ul className="space-y-1">
                    {copy.contactPhones.map((phone) => (
                      <li key={phone}>
                        <Link
                          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                          className="text-base font-semibold text-white/90 transition hover:text-emerald-100"
                        >
                          {phone}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/30 bg-slate-950/60 p-10 shadow-xl shadow-emerald-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]" aria-hidden />
            <div className="relative space-y-6">
              <h2 className="text-2xl font-semibold text-white">{copy.formTitle}</h2>
              <p className="text-sm leading-6 text-white/70">{copy.formDescription}</p>
              <form className="space-y-5">
                {copy.formFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200" htmlFor={`contact-${field.name}`}>
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={`contact-${field.name}`}
                        rows={4}
                        placeholder={field.placeholder}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-300 focus:bg-slate-900/80"
                      />
                    ) : (
                      <input
                        id={`contact-${field.name}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 shadow-inner shadow-black/20 outline-none transition focus:border-emerald-300 focus:bg-slate-900/80"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 transition hover:from-emerald-300 hover:via-sky-300 hover:to-emerald-400"
                >
                  {copy.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-10 shadow-inner shadow-emerald-500/10">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.65),_transparent_45%),_url('/legacy/fasteners-pattern.svg')] bg-cover bg-center opacity-40" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-2">
            {copy.linkGroups.map((group) => (
              <div key={group.title} className="space-y-3 text-slate-100">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <p className="text-sm leading-6 text-white/70">{group.description}</p>
                <ul className="space-y-2 text-sm font-semibold text-emerald-200">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 underline-offset-4 hover:text-emerald-100 hover:underline"
                      >
                        {link.label}
                        <span aria-hidden>↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
