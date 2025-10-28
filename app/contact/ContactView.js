"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "เริ่มต้นโครงการพลังงานกับ Neosen",
    contactSectionTitle: "คุยกับผู้เชี่ยวชาญ",
    contactChannels: [
      {
        label: "ฝ่ายขายโครงการ",
        phones: ["+66 (0)2 123 4567"],
        email: "hello@neosen.com",
      },
      {
        label: "ศูนย์ปฏิบัติการ 24/7",
        phones: ["+66 (0)2 123 4568"],
        email: "support@neosen.com",
      },
    ],
    projectPrepTitle: "ข้อมูลที่ช่วยให้เราเริ่มได้เร็ว",
    projectPrepDescription:
      "บอกจำนวนสถานีหรือความต้องการพลังงาน, ตำแหน่งไซต์, เส้นตาย และบริการเสริมที่ต้องการ เพื่อให้ทีมสามารถออกแบบสโคปและเสนอแผนได้แม่นยำ",
    visitInfo: [
      {
        title: "สำนักงานใหญ่",
        detail: "อาคารคิวเฮาส์ ลุมพินี ชั้น 22 กรุงเทพมหานคร 10120",
      },
      {
        title: "เวลาทำการ",
        detail: "จันทร์-ศุกร์ 09:00-18:00 น. (ซัพพอร์ตฉุกเฉินตลอด 24 ชม.)",
      },
      {
        title: "ช่องทางออนไลน์",
        detail: "LinkedIn: @neosen | Twitter/X: @neosen",
      },
    ],
    mapCta: "ดูแผนที่สำนักงาน",
    resourcesTitle: "เตรียมทีมของคุณให้พร้อม",
    resourcesDescription:
      "รับคู่มือสำรวจไซต์และเช็กลิสต์การเปลี่ยนผ่านสู่ระบบชาร์จไฟฟ้าที่เราใช้กับลูกค้าทั่วโลก",
    resourcesLink: "ดาวน์โหลดชุดเตรียมความพร้อม",
    formTitle: "รับคู่มือและเช็กลิสต์",
    formDescription:
      "กรอกอีเมลเพื่อรับไฟล์ PDF และอัปเดตล่าสุดเกี่ยวกับการออกแบบโครงสร้างพื้นฐานพลังงาน",
    emailLabel: "อีเมลธุรกิจ",
    emailPlaceholder: "you@company.com",
    submitLabel: "รับคู่มือ",
  },
  en: {
    heroHeading: "Kick-start your energy project with Neosen",
    contactSectionTitle: "Speak with a specialist",
    contactChannels: [
      {
        label: "Project sales",
        phones: ["+1 (415) 555-0182"],
        email: "hello@neosen.com",
      },
      {
        label: "24/7 operations centre",
        phones: ["+1 (415) 555-0199"],
        email: "support@neosen.com",
      },
    ],
    projectPrepTitle: "What helps us move fast",
    projectPrepDescription:
      "Share the number of sites or required capacity, target go-live date, and any managed services you need so we can scope the right plan.",
    visitInfo: [
      {
        title: "Headquarters",
        detail: "88 Market Street, Suite 2400, San Francisco, CA 94105 USA",
      },
      {
        title: "Office hours",
        detail: "Monday–Friday 9:00-18:00 (Emergency support 24/7)",
      },
      {
        title: "Digital channels",
        detail: "LinkedIn: @neosen | Twitter/X: @neosen",
      },
    ],
    mapCta: "View office map",
    resourcesTitle: "Prepare your team",
    resourcesDescription:
      "Access our site-readiness toolkit and EV transition checklist used with leading operators worldwide.",
    resourcesLink: "Download the readiness kit",
    formTitle: "Get the toolkit",
    formDescription:
      "Drop your work email to receive the PDF bundle and ongoing insights on intelligent energy design.",
    emailLabel: "Work email",
    emailPlaceholder: "you@company.com",
    submitLabel: "Send the kit",
  },
};

export default function ContactView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];

  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-4 text-center text-slate-100">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{sections.contact.title}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{copy.heroHeading}</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">{sections.contact.description}</p>
        </header>

        <section className="grid gap-6 rounded-[3rem] border border-white/10 bg-slate-900/70 p-12 shadow-2xl lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-slate-100">
            <h2 className="text-2xl font-semibold text-white">{copy.contactSectionTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.contactChannels.map((channel) => (
                <div key={channel.label} className="rounded-3xl border border-emerald-400/20 bg-slate-950/70 p-6 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{channel.label}</p>
                  <ul className="mt-3 space-y-2 text-slate-100">
                    {channel.phones.map((phone) => (
                      <li key={phone}>{phone}</li>
                    ))}
                  </ul>
                  <p className="mt-3 font-medium text-emerald-200">{channel.email}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-dashed border-emerald-400/50 p-6 text-sm text-slate-200">
              <p className="font-semibold text-emerald-200">{copy.projectPrepTitle}</p>
              <p className="mt-2">{copy.projectPrepDescription}</p>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-white">Neosen Offices</h2>
            <ul className="space-y-4">
              {copy.visitInfo.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{item.title}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
            <Link
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-emerald-300"
            >
              {copy.mapCta}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-[3rem] border border-emerald-300/30 bg-emerald-400/10 p-12 shadow-inner lg:grid-cols-2">
          <div className="space-y-4 text-slate-100">
            <h2 className="text-2xl font-semibold text-white">{copy.resourcesTitle}</h2>
            <p className="text-base text-slate-200">{copy.resourcesDescription}</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-200"
            >
              {copy.resourcesLink}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="rounded-3xl border border-white/20 bg-slate-900/70 p-8 text-slate-100">
            <h3 className="text-lg font-semibold text-white">{copy.formTitle}</h3>
            <p className="mt-3 text-sm text-slate-200">{copy.formDescription}</p>
            <form className="mt-6 space-y-3">
              <label className="block text-sm font-medium text-slate-200" htmlFor="contact-email">
                {copy.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder={copy.emailPlaceholder}
                className="w-full rounded-full border border-emerald-400/40 bg-slate-950/60 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-emerald-300"
              />
              <button
                type="button"
                className="w-full rounded-full bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-900 shadow transition hover:bg-emerald-300"
              >
                {copy.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
