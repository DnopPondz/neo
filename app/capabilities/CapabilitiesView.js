"use client";

import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "สถาปัตยกรรมพลังงานของ Neosen",
    heroDescription:
      "แพลตฟอร์มของเราเชื่อมต่อฮาร์ดแวร์ที่ได้รับการรับรองกับซอฟต์แวร์จัดการพลังงานและบริการดูแลเชิงรุก เพื่อให้โครงสร้างพื้นฐานของคุณพร้อมใช้งานตลอดเวลา",
    highlightBanner: "การออกแบบเพื่อความน่าเชื่อถือระดับอุตสาหกรรม",
    pillars: [
      {
        title: "ฮาร์ดแวร์ปลายทาง",
        description:
          "ชุดชาร์จและระบบกักเก็บพลังงานที่ประกอบด้วยโมดูลกำลังปรับได้ ระบบระบายความร้อน และเซ็นเซอร์ความปลอดภัยแบบเรียลไทม์",
        bullets: [
          "รองรับ CCS, CHAdeMO, GB/T และ AC Type 2",
          "โครงสร้าง IP65 พร้อมการป้องกันแรงสั่นสะเทือน",
          "อัปเดตเฟิร์มแวร์ผ่านคลาวด์อย่างปลอดภัย",
        ],
      },
      {
        title: "ซอฟต์แวร์จัดการพลังงาน",
        description:
          "แพลตฟอร์มที่รวมข้อมูลอุปกรณ์ การใช้งานของผู้ใช้ และข้อมูลจากโครงข่ายไฟฟ้าเพื่อตัดสินใจด้านพลังงานแบบอัตโนมัติ",
        bullets: [
          "แดชบอร์ดแบบเรียลไทม์และระบบเตือนภัย",
          "AI คาดการณ์โหลดและบริหารพลังงานสำรอง",
          "API สำหรับเชื่อมต่อ ERP, ระบบสมาชิก และการชำระเงิน",
        ],
      },
      {
        title: "บริการตลอดอายุโครงการ",
        description:
          "ทีมงานระดับภูมิภาคให้บริการตั้งแต่การออกแบบไซท์ งานก่อสร้าง ไปจนถึงการบำรุงรักษาและการฝึกอบรม",
        bullets: [
          "SLA ตอบสนองภายใน 4 ชั่วโมง",
          "บริการรีโมตซัพพอร์ตและเฝ้าระวัง 24/7",
          "การฝึกอบรมและการถ่ายทอดเทคโนโลยีให้ทีมลูกค้า",
        ],
      },
    ],
    systemLayersTitle: "เลเยอร์ของแพลตฟอร์ม",
    systemLayers: [
      {
        label: "Edge",
        summary: "อุปกรณ์ชาร์จและแบตเตอรี่",
        detail:
          "ฮาร์ดแวร์ที่ทนทานเชื่อมต่อกับระบบควบคุมของ Neosen เพื่อบันทึกข้อมูลและตอบสนองต่อคำสั่งได้ทันที",
      },
      {
        label: "Control",
        summary: "ศูนย์ควบคุมพลังงาน",
        detail:
          "ประมวลผลข้อมูลพลังงานแบบเรียลไทม์ ปรับโหลดโดยอัตโนมัติ และจัดการพลังงานสำรอง",
      },
      {
        label: "Cloud",
        summary: "บริการข้อมูลและ API",
        detail:
          "จัดเก็บข้อมูลเชิงลึก วิเคราะห์แนวโน้ม และเปิดเชื่อมต่อกับระบบของพันธมิตร",
      },
      {
        label: "Services",
        summary: "ศูนย์ปฏิบัติการ",
        detail:
          "ทีมผู้เชี่ยวชาญติดตามสถานะและส่งทีมงานลงพื้นที่ตาม SLA ที่กำหนด",
      },
    ],
  },
  en: {
    heroHeading: "Neosen platform architecture",
    heroDescription:
      "Our platform fuses certified edge hardware, adaptive energy software, and proactive lifecycle services to keep your infrastructure available around the clock.",
    highlightBanner: "Engineered for industrial-grade reliability",
    pillars: [
      {
        title: "Edge hardware",
        description:
          "Charging and energy-storage assemblies with adaptive power modules, thermal management, and real-time safety sensors.",
        bullets: [
          "Supports CCS, CHAdeMO, GB/T, and AC Type 2",
          "IP65 construction with vibration protection",
          "Secure over-the-air firmware updates",
        ],
      },
      {
        title: "Energy management software",
        description:
          "A unified platform combining device telemetry, user behaviour, and grid signals to automate energy decisions.",
        bullets: [
          "Real-time dashboards with actionable alerts",
          "AI-driven load forecasting and reserve orchestration",
          "Open APIs for ERP, loyalty, and payment integrations",
        ],
      },
      {
        title: "Lifecycle services",
        description:
          "Regional experts supporting site design, build-out, maintenance, and training with guaranteed response times.",
        bullets: [
          "Four-hour SLA with on-the-ground technicians",
          "24/7 remote monitoring and support centre",
          "Enablement programmes tailored to your teams",
        ],
      },
    ],
    systemLayersTitle: "Platform layers",
    systemLayers: [
      {
        label: "Edge",
        summary: "Chargers & storage",
        detail:
          "Ruggedised hardware connected to Neosen control units captures telemetry and executes commands instantly.",
      },
      {
        label: "Control",
        summary: "Energy control centre",
        detail:
          "Processes live energy data, automates load balancing, and manages backup resources.",
      },
      {
        label: "Cloud",
        summary: "Data & APIs",
        detail:
          "Delivers insights, trend analytics, and open interfaces for partner systems.",
      },
      {
        label: "Services",
        summary: "Operations hub",
        detail:
          "Experts monitor fleet status and dispatch field teams aligned to your SLAs.",
      },
    ],
  },
};

function PillarCard({ title, description, bullets }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <ul className="space-y-3 text-sm text-slate-600">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LayerCard({ label, summary, detail }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-slate-100 shadow-inner">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">{label}</p>
      <h4 className="mt-2 text-lg font-semibold text-white">{summary}</h4>
      <p className="mt-3 text-sm leading-6 text-slate-200">{detail}</p>
    </div>
  );
}

export default function CapabilitiesView() {
  const { language } = useLanguage();
  const copy = pageCopy[language];

  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-6 text-slate-100">
          <span className="inline-flex items-center rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            {copy.highlightBanner}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {copy.heroHeading}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-200">{copy.heroDescription}</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {copy.pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </section>

        <section className="rounded-[3rem] border border-slate-800 bg-slate-900 p-10 shadow-2xl lg:p-16">
          <div className="space-y-6 text-slate-100">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {copy.systemLayersTitle}
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Neosen Platform Stack</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {copy.systemLayers.map((layer) => (
              <LayerCard key={layer.label} {...layer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
