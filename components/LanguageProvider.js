"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(undefined);

const translations = {
  th: {
    brand: {
      name: "NEOSEN",
      tagline: "โซลูชันพลังงานอัจฉริยะ",
      slogan: "ยกระดับระบบชาร์จและบริหารพลังงานสำหรับโลกการขนส่งไฟฟ้า",
    },
    legacyHeader: {
      strapline: "High information technologies for high success in your business.",
      emphasis: "THINK OF US",
      company: '"NEOSEN LIMITED"',
    },
    nav: {
      home: "หน้าแรก",
      about: "แพลตฟอร์ม",
      capabilities: "เทคโนโลยี",
      products: "โซลูชัน",
      news: "ข้อมูล",
      contact: "ติดต่อ",
    },
    hero: {
      eyebrow: "แพลตฟอร์มพลังงานอัจฉริยะ",
      headline: "ออกแบบระบบพลังงานเพื่อการเดินทางยุคถัดไป",
      description:
        "Neosen พัฒนาฮาร์ดแวร์และซอฟต์แวร์แบบครบวงจรสำหรับสถานีชาร์จ รถไฟฟ้า และโครงสร้างพื้นฐานพลังงานที่ต้องการความเสถียรสูง",
      primaryCta: "ดูโซลูชันทั้งหมด",
      secondaryCta: "ดาวน์โหลดสเปก",
      stats: [
        { label: "สถานีชาร์จที่ติดตั้ง", value: "150K+" },
        { label: "ประเทศที่ให้บริการ", value: "42" },
        { label: "ความพร้อมใช้งาน", value: "99.97%" },
      ],
      highlights: [
        "บริหารจัดการแบบเรียลไทม์ด้วยคลาวด์",
        "รองรับมาตรฐานความปลอดภัยระดับสากล",
        "บริการเฝ้าระวังและบำรุงรักษาตลอด 24 ชม.",
      ],
    },
    sections: {
      partners: {
        title: "ผู้ร่วมสร้างระบบพลังงานแห่งอนาคต",
        description:
          "องค์กรด้านพลังงาน การขนส่ง และค้าปลีกระดับโลกไว้วางใจโซลูชันของ Neosen ในการขยายเครือข่ายชาร์จและระบบจัดเก็บพลังงาน",
        logos: ["GridWorks", "MoveX", "Voltchain", "Aerolink", "UrbanFuel"],
      },
      solutions: {
        title: "โซลูชันที่ปรับให้เหมาะกับการใช้งาน",
        description:
          "ทุกแพ็กเกจประกอบด้วยฮาร์ดแวร์ที่ผ่านการรับรอง การจัดการพลังงานด้วย AI และบริการหลังการขายแบบครบวงจร",
        items: [
          {
            title: "สถานีชาร์จยานยนต์ไฟฟ้า",
            detail:
              "โมดูลาร์ DC fast charge พร้อมระบบ load balancing และการคิดค่าบริการแบบยืดหยุ่น",
          },
          {
            title: "คลังพลังงานสำหรับอุตสาหกรรม",
            detail:
              "ระบบกักเก็บพลังงานระดับเมกะวัตต์ ปรับสมดุลการใช้ไฟ ลดพีก และรองรับพลังงานหมุนเวียน",
          },
          {
            title: "แพลตฟอร์มจัดการฟลีท",
            detail:
              "แดชบอร์ดเดียวเห็นทุกสถานะรถและสถานี พร้อมการวิเคราะห์การใช้พลังงานเพื่อวางแผนปฏิบัติการ",
          },
        ],
        footnote: "ทุกโครงการเริ่มจากการออกแบบร่วมกับทีมวิศวกรผู้เชี่ยวชาญของ Neosen",
      },
      products: {
        title: "แพ็กเกจที่เลือกได้ตามเป้าหมาย",
        description:
          "เลือก FastCharge Core, GridFlex Storage, Fleet Orchestrator หรือ Site Intelligence เพื่อสร้างระบบพลังงานที่เหมาะกับคุณ",
        ctaHeadline: "พร้อมยกระดับโครงสร้างพลังงานของคุณหรือยัง?",
      },
      platform: {
        title: "สถาปัตยกรรมแพลตฟอร์มที่ยืดหยุ่น",
        description:
          "ผสานฮาร์ดแวร์ที่ทนทาน ซอฟต์แวร์ที่อัปเดตตลอดเวลา และบริการดูแลเชิงรุกเพื่อความพร้อมใช้งานสูงสุด",
        pillars: [
          {
            title: "ฮาร์ดแวร์พร้อมใช้งาน",
            summary: "มาตรฐาน IP65, รองรับ Plug & Charge, ปรับกำลังอัตโนมัติ",
            points: [
              "รองรับหัวชาร์จ CCS, CHAdeMO และ GB/T",
              "โครงสร้างอะลูมิเนียมกันการกัดกร่อน",
              "อัปเดตเฟิร์มแวร์ผ่านเครือข่ายได้ทันที",
            ],
          },
          {
            title: "ซอฟต์แวร์อัจฉริยะ",
            summary: "ระบบวิเคราะห์ข้อมูลพลังงานและคาดการณ์ล่วงหน้า",
            points: [
              "แดชบอร์ดแบบเรียลไทม์",
              "API เปิดสำหรับเชื่อมต่อระบบอื่น",
              "ระบบแจ้งเตือนและสั่งงานจากระยะไกล",
            ],
          },
          {
            title: "การดูแลระดับมืออาชีพ",
            summary: "ทีมงาน 24/7 พร้อมสปาร์พาร์ตทั่วภูมิภาค",
            points: [
              "ศูนย์บริการเชิงรุกใน 12 ประเทศ",
              "SLA เข้มงวดไม่เกิน 4 ชั่วโมง",
              "ฝึกอบรมและถ่ายทอดเทคโนโลยีให้ทีมลูกค้า",
            ],
          },
        ],
      },
      industries: {
        title: "ตอบโจทย์หลายอุตสาหกรรม",
        description:
          "ตั้งแต่เครือข่ายขนส่งสาธารณะไปจนถึงโลจิสติกส์ระยะไกล เราปรับโครงสร้างระบบให้เหมาะกับสภาพแวดล้อมของคุณ",
        sectors: [
          {
            title: "การขนส่งสาธารณะ",
            blurb: "ชาร์จรถเมล์ไฟฟ้าด้วยระบบวางแผนรอบการเดินรถ",
          },
          {
            title: "สถานีบริการน้ำมัน",
            blurb: "เพิ่มโซนชาร์จเร็วพร้อมระบบสมาชิก",
          },
          {
            title: "คลังสินค้าและโลจิสติกส์",
            blurb: "จัดการฟลีทยานยนต์ไฟฟ้าและ AGV ด้วยข้อมูลรวม",
          },
          {
            title: "สนามบินและท่าเรือ",
            blurb: "แหล่งพลังงานสำรองและระบบจ่ายไฟสำหรับยานพาหนะภาคพื้น",
          },
        ],
      },
      resources: {
        title: "อินไซต์ล่าสุด",
        description:
          "ติดตามแนวโน้ม EV และพลังงานสะอาด พร้อมกรณีศึกษาโครงการจริงจากลูกค้า Neosen",
        articles: [
          {
            category: "กรณีศึกษา",
            title: "เครือข่ายชาร์จ 1,200 จุดใน 6 เดือน",
            summary:
              "วิธีที่ผู้ให้บริการรถสาธารณะเปลี่ยนเป็นระบบไฟฟ้าด้วยการวางแผนโครงสร้างแบบโมดูลาร์",
          },
          {
            category: "บทวิเคราะห์",
            title: "สูตรการลดค่าไฟด้วยระบบกักเก็บพลังงาน",
            summary:
              "เจาะลึกเทคนิค peak shaving และการใช้ AI ทำนายโหลด",
          },
        ],
      },
      contact: {
        title: "ออกแบบระบบพลังงานไปพร้อมกับเรา",
        description:
          "กรอกข้อมูลหรือพูดคุยกับที่ปรึกษาเพื่อรับการวิเคราะห์ความพร้อมของไซต์และใบเสนอราคา",
        phoneLabel: "โทร",
        emailLabel: "อีเมล",
        addressLabel: "สำนักงานใหญ่",
      },
    },
    footer: {
      tagline:
        "Neosen ขับเคลื่อนโครงสร้างพื้นฐานพลังงานอัจฉริยะสำหรับโลกที่ไร้มลพิษ",
      quickLinksTitle: "ลิงก์ด่วน",
      contactTitle: "ติดต่อเรา",
      addressLines: [
        "NEOSEN Asia Pacific",
        "อาคารคิวเฮาส์ ลุมพินี ชั้น 22",
        "กรุงเทพมหานคร 10120",
        "ประเทศไทย",
      ],
      contactNumbers: [
        "โทร. +66 (0)2 123 4567",
        "แฟกซ์ +66 (0)2 123 4568",
      ],
      emailLabel: "อีเมล",
      email: "hello@neosen.com",
      hoursTitle: "เวลาทำการ",
      hours: [
        "จันทร์-ศุกร์ 09:00-18:00 น.",
        "ทีมซัพพอร์ตฉุกเฉิน 24 ชม.",
      ],
      socialsTitle: "ติดตาม Neosen",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/neosen" },
        { label: "YouTube", href: "https://www.youtube.com/@neosen" },
        { label: "Twitter", href: "https://twitter.com/neosen" },
      ],
      legal: "© {year} Neosen Energy Systems. สงวนลิขสิทธิ์",
      certifications: "มาตรฐาน IEC, UL และ ISO/IEC 27001",
    },
  },
  en: {
    brand: {
      name: "NEOSEN",
      tagline: "Intelligent Power Systems",
      slogan: "Powering mobility and infrastructure with adaptive charging technology.",
    },
    legacyHeader: {
      strapline: "High information technologies for high success in your business.",
      emphasis: "THINK OF US",
      company: '"NEOSEN LIMITED"',
    },
    nav: {
      home: "Home",
      about: "Platform",
      capabilities: "Technology",
      products: "Solutions",
      news: "Insights",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Intelligent power platform",
      headline: "Power systems engineered for tomorrow's mobility",
      description:
        "Neosen unifies certified hardware, adaptive software, and proactive services to deliver resilient charging and energy networks worldwide.",
      primaryCta: "Explore solutions",
      secondaryCta: "Download spec sheet",
      stats: [
        { label: "Chargers deployed", value: "150K+" },
        { label: "Countries served", value: "42" },
        { label: "System uptime", value: "99.97%" },
      ],
      highlights: [
        "Unified hardware and cloud management",
        "24/7 monitoring with predictive maintenance",
        "Certified to global safety and security standards",
      ],
    },
    sections: {
      partners: {
        title: "Trusted by energy innovators",
        description:
          "Utilities, transit agencies, and retail networks rely on Neosen to scale fast-charging and energy storage infrastructure.",
        logos: ["GridWorks", "MoveX", "Voltchain", "Aerolink", "UrbanFuel"],
      },
      solutions: {
        title: "Solutions tailored to your operation",
        description:
          "Every deployment includes certified hardware, AI-powered energy management, and lifecycle services designed around your teams.",
        items: [
          {
            title: "EV charging hubs",
            detail:
              "Modular DC fast charging with dynamic load balancing, smart billing, and user-first experiences.",
          },
          {
            title: "Industrial energy storage",
            detail:
              "Megawatt-scale storage that stabilises demand, integrates renewables, and protects against outages.",
          },
          {
            title: "Fleet intelligence platform",
            detail:
              "Single-pane visibility of vehicles and chargers with predictive analytics for operations planning.",
          },
        ],
        footnote: "Co-create every project alongside Neosen solution architects.",
      },
      products: {
        title: "Packages aligned to your goals",
        description:
          "Choose FastCharge Core, GridFlex Storage, Fleet Orchestrator, or Site Intelligence to build the right energy system for you.",
        ctaHeadline: "Ready to elevate your energy infrastructure?",
      },
      platform: {
        title: "A flexible architecture from edge to cloud",
        description:
          "Resilient hardware, continuously updated software, and proactive support combine to deliver always-on performance.",
        pillars: [
          {
            title: "Deployment-ready hardware",
            summary: "IP65-rated enclosures, plug-and-charge ready, adaptive power modules.",
            points: [
              "Supports CCS, CHAdeMO, and GB/T connectors",
              "Corrosion-resistant aluminium chassis",
              "Instant over-the-air firmware updates",
            ],
          },
          {
            title: "Intelligent software",
            summary: "Energy analytics with predictive controls and open APIs.",
            points: [
              "Real-time operational dashboards",
              "Open APIs for ERP and billing integrations",
              "Remote commands and automated alerts",
            ],
          },
          {
            title: "Expert lifecycle services",
            summary: "24/7 field teams with regional parts hubs and training programmes.",
            points: [
              "Proactive service centres across 12 countries",
              "Guaranteed SLAs within four hours",
              "On-site enablement for your technicians",
            ],
          },
        ],
      },
      industries: {
        title: "Built for multiple industries",
        description:
          "From public transit to long-haul logistics, configure Neosen systems to fit your environment and regulatory needs.",
        sectors: [
          {
            title: "Public transit",
            blurb: "Optimise bus charging around route schedules and depot constraints.",
          },
          {
            title: "Fuel & retail",
            blurb: "Add fast-charging experiences with loyalty integrations and analytics.",
          },
          {
            title: "Warehousing & logistics",
            blurb: "Manage EV fleets and automated guided vehicles from a unified dashboard.",
          },
          {
            title: "Airports & ports",
            blurb: "Deploy resilient backup power and ground-support charging infrastructure.",
          },
        ],
      },
      resources: {
        title: "Latest insights",
        description:
          "Stay ahead of EV and clean-energy trends with reports, guides, and real-world success stories.",
        articles: [
          {
            category: "Case study",
            title: "1,200 charging points launched in six months",
            summary:
              "Discover how a transit authority electrified its network with modular rollouts and adaptive load management.",
          },
          {
            category: "Analysis",
            title: "The energy-storage playbook for cost reduction",
            summary:
              "Peak shaving strategies and AI load forecasting to protect margins and grid stability.",
          },
        ],
      },
      contact: {
        title: "Design your next energy project with us",
        description:
          "Share your site requirements or talk to a specialist to receive a readiness assessment and proposal.",
        phoneLabel: "Phone",
        emailLabel: "Email",
        addressLabel: "Headquarters",
      },
    },
    footer: {
      tagline:
        "Neosen powers intelligent energy infrastructure for a zero-emission future.",
      quickLinksTitle: "Quick links",
      contactTitle: "Get in touch",
      addressLines: [
        "NEOSEN Global HQ",
        "88 Market Street, Suite 2400",
        "San Francisco, CA 94105",
        "USA",
      ],
      contactNumbers: [
        "+1 (415) 555-0182",
        "+1 (415) 555-0199",
      ],
      emailLabel: "Email",
      email: "hello@neosen.com",
      hoursTitle: "Office hours",
      hours: [
        "Monday – Friday 9:00-18:00",
        "Emergency support available 24/7",
      ],
      socialsTitle: "Follow Neosen",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/neosen" },
        { label: "YouTube", href: "https://www.youtube.com/@neosen" },
        { label: "Twitter", href: "https://twitter.com/neosen" },
      ],
      legal: "© {year} Neosen Energy Systems. All rights reserved.",
      certifications: "IEC, UL, and ISO/IEC 27001 certified",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("th");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "th" ? "en" : "th")),
      translations: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const availableLanguages = Object.keys(translations);
