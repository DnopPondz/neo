"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "แพ็กเกจโซลูชันพลังงาน",
    detailCta: "ดูรายละเอียด",
    modal: {
      closeAria: "ปิดหน้าต่างรายละเอียดโซลูชัน",
      highlightsTitle: "สิ่งที่โดดเด่น",
      applicationsTitle: "เหมาะสำหรับ",
    },
    catalog: [
      {
        id: "fastcharge-core",
        name: "FastCharge Core",
        target: "เครือข่ายชาร์จ DC ความเร็วสูง",
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(15,23,42,0.9))",
        summary:
          "สถานีชาร์จแบบโมดูลาร์รองรับกำลัง 75-350kW ปรับโหลดอัตโนมัติและดูแลง่าย",
        details: {
          description:
            "เหมาะสำหรับผู้ให้บริการสถานีชาร์จและผู้ค้าปลีกที่ต้องการขยายเครือข่ายอย่างรวดเร็วพร้อมความพร้อมใช้งานสูง",
          highlights: [
            "รองรับมาตรฐาน CCS, CHAdeMO, GB/T",
            "โมดูลกำลังสลับได้ ลดเวลาหยุดซ่อม",
            "ติดตามสถานะผ่านแดชบอร์ดแบบเรียลไทม์",
          ],
          applications: [
            "เครือข่ายชาร์จสาธารณะ",
            "สถานีบริการน้ำมัน",
            "ศูนย์การค้า",
          ],
        },
      },
      {
        id: "gridflex-storage",
        name: "GridFlex Storage",
        target: "ระบบกักเก็บพลังงานเมกะวัตต์",
        gradient: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(15,23,42,0.9))",
        summary:
          "แพลตฟอร์มแบตเตอรี่พร้อมระบบ BMS และซอฟต์แวร์ AI สำหรับ peak shaving และการซื้อขายพลังงาน",
        details: {
          description:
            "ตอบโจทย์โรงงานและผู้ดูแลโครงสร้างพื้นฐานที่ต้องการควบคุมค่าไฟและสร้างความยืดหยุ่นให้โครงข่าย",
          highlights: [
            "โมดูล 1MW ขยายได้ตามการใช้งาน",
            "ระบบป้องกันหลายชั้นและการตรวจสอบ 24/7",
            "เชื่อมต่อพลังงานหมุนเวียนได้อย่างไร้รอยต่อ",
          ],
          applications: [
            "โรงงานอุตสาหกรรม",
            "ศูนย์ข้อมูล",
            "สนามบิน/ท่าเรือ",
          ],
        },
      },
      {
        id: "fleet-orchestrator",
        name: "Fleet Orchestrator",
        target: "ฟลีตยานยนต์ไฟฟ้า",
        gradient: "linear-gradient(135deg, rgba(129,140,248,0.25), rgba(15,23,42,0.9))",
        summary:
          "ซอฟต์แวร์รวมสถานะรถ สถานี และการวางแผนเส้นทางพร้อมการคาดการณ์พลังงาน",
        details: {
          description:
            "ช่วยผู้ให้บริการขนส่งและโลจิสติกส์บริหารรอบวิ่งและตารางการชาร์จเพื่อเพิ่มเวลาวิ่งและลดต้นทุน",
          highlights: [
            "วิเคราะห์ข้อมูลแบบเรียลไทม์",
            "ตั้งกฎการชาร์จตามลำดับความสำคัญ",
            "ระบบแจ้งเตือนและคำสั่งระยะไกล",
          ],
          applications: [
            "ขนส่งสาธารณะ",
            "คลังสินค้า",
            "รถบริการและเดลิเวอรี",
          ],
        },
      },
      {
        id: "site-intelligence",
        name: "Site Intelligence",
        target: "การวิเคราะห์และออกแบบไซต์",
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(15,23,42,0.9))",
        summary:
          "บริการสำรวจสถานที่ด้วยดาต้าและจำลองโหลดพลังงานก่อนติดตั้งจริง",
        details: {
          description:
            "ทำงานร่วมกับทีมวิศวกร Neosen เพื่อประเมินความพร้อมของพื้นที่และออกแบบระบบให้เหมาะสมที่สุด",
          highlights: [
            "สำรวจด้วยดาต้าจาก LIDAR และ IoT",
            "จำลองโหลดและ ROI ล่วงหน้า",
            "รายงานครบชุดสำหรับการอนุมัติโครงการ",
          ],
          applications: [
            "โครงการเมืองอัจฉริยะ",
            "คอมเพล็กซ์เชิงพาณิชย์",
            "ฟลีทองค์กร",
          ],
        },
      },
    ],
    serviceIntro: {
      title: "บริการเสริมเพื่อความสำเร็จ",
      description:
        "แพ็กเกจทุกตัวสามารถเพิ่มบริการระดับพรีเมียมเพื่อให้การดำเนินงานราบรื่นตั้งแต่เริ่มโครงการจนถึงหลังติดตั้ง",
    },
    serviceAddOns: [
      {
        title: "Project Delivery",
        description: "จัดการงานก่อสร้างและการติดตั้งพร้อมทีม PM ที่ประสานงานกับหน่วยงานท้องถิ่น",
      },
      {
        title: "Managed Operations",
        description: "ศูนย์ปฏิบัติการ 24/7 เฝ้าระวังและรายงาน KPI รายสัปดาห์",
      },
      {
        title: "Training & Enablement",
        description: "คอร์สอบรมสำหรับวิศวกรและทีมบริการลูกค้าในสถานที่",
      },
    ],
    contactCta: "เริ่มต้นวางแผนโครงการ",
    insightsCta: "อ่านบทความล่าสุด",
  },
  en: {
    heroHeading: "Energy solution packages",
    detailCta: "View details",
    modal: {
      closeAria: "Close solution detail window",
      highlightsTitle: "What stands out",
      applicationsTitle: "Best suited for",
    },
    catalog: [
      {
        id: "fastcharge-core",
        name: "FastCharge Core",
        target: "High-power DC charging networks",
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(15,23,42,0.9))",
        summary:
          "Modular charging cabinets delivering 75-350kW with dynamic load control and rapid serviceability.",
        details: {
          description:
            "Designed for charge-point operators and retailers scaling public charging with uncompromised uptime.",
          highlights: [
            "Supports CCS, CHAdeMO, and GB/T",
            "Hot-swappable power modules minimise downtime",
            "Real-time health monitoring via Neosen dashboards",
          ],
          applications: [
            "Public charging networks",
            "Fuel & convenience hubs",
            "Retail destinations",
          ],
        },
      },
      {
        id: "gridflex-storage",
        name: "GridFlex Storage",
        target: "Megawatt-scale energy storage",
        gradient: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(15,23,42,0.9))",
        summary:
          "Battery systems with advanced BMS and AI-driven optimisation for peak shaving and energy trading.",
        details: {
          description:
            "Ideal for industrial facilities and infrastructure operators seeking resilience and cost optimisation.",
          highlights: [
            "Scalable 1MW blocks configured to your load",
            "Multi-layer safety and 24/7 monitoring",
            "Seamless integration with on-site renewables",
          ],
          applications: [
            "Industrial plants",
            "Data centres",
            "Airports & ports",
          ],
        },
      },
      {
        id: "fleet-orchestrator",
        name: "Fleet Orchestrator",
        target: "Electric fleet operations",
        gradient: "linear-gradient(135deg, rgba(129,140,248,0.25), rgba(15,23,42,0.9))",
        summary:
          "Unified software for vehicles, chargers, route planning, and predictive energy scheduling.",
        details: {
          description:
            "Empowers transit and logistics providers to maximise vehicle availability and reduce operating costs.",
          highlights: [
            "Live analytics across every asset",
            "Policy-driven charging prioritisation",
            "Remote command and alerting workflows",
          ],
          applications: [
            "Public transit",
            "Warehousing & logistics",
            "Service & delivery fleets",
          ],
        },
      },
      {
        id: "site-intelligence",
        name: "Site Intelligence",
        target: "Site analysis & design",
        gradient: "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(15,23,42,0.9))",
        summary:
          "Data-led site surveys with energy load simulations before ground is broken.",
        details: {
          description:
            "Partner with Neosen engineers to evaluate readiness, plan grid upgrades, and secure stakeholder approval.",
          highlights: [
            "LIDAR and IoT-assisted site assessments",
            "Scenario modelling for load and ROI",
            "Comprehensive reports for permits and financing",
          ],
          applications: [
            "Smart-city programmes",
            "Commercial complexes",
            "Enterprise fleet campuses",
          ],
        },
      },
    ],
    serviceIntro: {
      title: "Add-on services for success",
      description:
        "Extend every package with premium services that keep your deployment on schedule and performing from day one.",
    },
    serviceAddOns: [
      {
        title: "Project delivery",
        description: "Construction and installation managed by dedicated PM teams aligned with local authorities.",
      },
      {
        title: "Managed operations",
        description: "24/7 operations centre providing monitoring, alerts, and weekly KPI reviews.",
      },
      {
        title: "Training & enablement",
        description: "On-site courses for engineering and customer teams tailored to your workflows.",
      },
    ],
    contactCta: "Start planning your project",
    insightsCta: "Read the latest insights",
  },
};

function ProductModal({ product, onClose, labels }) {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-4xl border border-white/20 bg-slate-900/95 text-slate-100 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:bg-white/20"
          aria-label={labels.closeAria}
        >
          ×
        </button>
        <div className="grid gap-8 p-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              {product.target}
            </p>
            <h3 id="product-title" className="text-3xl font-semibold text-white">
              {product.name}
            </h3>
            <p className="text-base text-slate-200">{product.details.description}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100/80">
                {labels.highlightsTitle}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {product.details.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-[10px] font-bold text-emerald-200">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100/80">
                {labels.applicationsTitle}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-emerald-200">
                {product.details.applications.map((useCase) => (
                  <li
                    key={useCase}
                    className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setSelectedProduct(null);
  }, [language]);

  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-5 text-center text-slate-100">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            {sections.products.title}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {copy.heroHeading}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
            {sections.products.description}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {copy.catalog.map((product) => (
            <article
              key={product.id}
              className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 p-10 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-emerald-500/30"
              style={{
                backgroundImage: product.gradient,
              }}
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {product.target}
                </p>
                <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
                <p className="text-sm leading-6 text-slate-100/90">{product.summary}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-semibold text-emerald-200">{copy.detailCta}</span>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-emerald-300"
                >
                  {copy.detailCta}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[3rem] border border-emerald-300/30 bg-emerald-400/10 p-12 shadow-inner lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 text-slate-100">
            <h2 className="text-3xl font-semibold text-white">{copy.serviceIntro.title}</h2>
            <p className="text-base text-slate-200">{copy.serviceIntro.description}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-emerald-200">
              <span>Neosen Services</span>
              <span>24/7 Operations</span>
              <span>Global Delivery</span>
            </div>
          </div>
          <div className="grid gap-4 text-slate-100 md:grid-cols-3">
            {copy.serviceAddOns.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-white/20 bg-slate-900/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-6 text-slate-200">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col items-center justify-center gap-4 rounded-[3rem] border border-white/10 bg-slate-900/70 p-10 text-center text-slate-100">
          <p className="text-xl font-semibold">{sections.products.ctaHeadline}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-300"
            >
              {copy.contactCta}
            </a>
            <a
              href="/blog"
              className="rounded-full border border-emerald-300/60 px-6 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-200"
            >
              {copy.insightsCta}
            </a>
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        labels={copy.modal}
      />
    </div>
  );
}
