"use client";

import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    introHeading: "Neosen คือผู้นำด้านแพลตฟอร์มพลังงานอัจฉริยะ",
    introParagraphs: [
      "ก่อตั้งโดยทีมวิศวกรพลังงานและผู้เชี่ยวชาญระบบคลาวด์ Neosen พัฒนาโซลูชันชาร์จไฟฟ้าและการบริหารพลังงานแบบครบวงจรสำหรับเมืองอัจฉริยะ ฟลีทยานยนต์ไฟฟ้า และโครงสร้างพื้นฐานที่ต้องการความเสถียรสูง",
      "เราสร้างระบบตั้งแต่การออกแบบสถานีชาร์จ การวิเคราะห์โหลด ไปจนถึงซอฟต์แวร์มอนิเตอร์แบบเรียลไทม์ เพื่อให้ลูกค้าสามารถขยายการให้บริการได้อย่างรวดเร็วและเชื่อถือได้",
    ],
    galleryPlaceholders: [
      "ศูนย์ควบคุม",
      "สถานีชาร์จ",
      "ทีมวิศวกร",
      "โครงการลูกค้า",
    ],
    philosophyTitle: "พันธกิจของเรา",
    philosophyStatement: "พลังงานที่เชื่อถือได้ เชื่อมต่ออัจฉริยะ เติบโตไปพร้อมกัน",
    serviceTitle: "บริการหลัก",
    serviceItems: [
      "ออกแบบและติดตั้งระบบชาร์จและกักเก็บพลังงาน",
      "ให้คำปรึกษาเชิงกลยุทธ์และบริการดูแลตลอดอายุโครงการ",
    ],
    environmentTitle: "มาตรฐานและความปลอดภัย",
    environmentParagraphs: [
      "ทุกอุปกรณ์ผ่านการรับรอง IEC, UL และมาตรฐานความปลอดภัยภูมิภาค พร้อมระบบรักษาความปลอดภัยไซเบอร์ที่ได้รับการตรวจสอบอย่างสม่ำเสมอ",
      "เราทำงานร่วมกับพันธมิตรท้องถิ่นเพื่อให้แน่ใจว่าการติดตั้งสอดคล้องกับข้อกำหนดทางกฎหมายและสิ่งแวดล้อมในแต่ละประเทศ",
    ],
    safetyTitle: "การสนับสนุนลูกค้า",
    safetyParagraphs: [
      "ทีมดูแลลูกค้า 24/7 เฝ้าระวังระบบอย่างต่อเนื่อง พร้อมแจ้งเตือนและแก้ไขปัญหาก่อนเกิดผลกระทบ",
      "เราจัดอบรมทีมงานลูกค้าให้ใช้งานแพลตฟอร์ม Neosen ได้อย่างเต็มประสิทธิภาพ และสนับสนุนการถ่ายทอดเทคโนโลยี",
    ],
    learningTitle: "วัฒนธรรมการเรียนรู้",
    learningQuote: "ความก้าวหน้าทางพลังงานต้องมาพร้อมการเรียนรู้อย่างต่อเนื่อง",
    learningParagraphs: [
      "เราส่งเสริมการวิจัยและพัฒนาเทคโนโลยีใหม่อย่างสม่ำเสมอ ทั้งด้านการจัดการพลังงานด้วย AI และระบบชาร์จความเร็วสูงรุ่นถัดไป",
      "พนักงานทุกคนได้รับโอกาสเข้าร่วมโปรแกรมฝึกอบรม เทรนนิ่งด้านความปลอดภัย และแลกเปลี่ยนความรู้กับพันธมิตรระดับโลก",
    ],
    exhibitionsTitle: "อีเวนต์และนิทรรศการ",
    exhibitions: [
      {
        name: "Future Mobility Expo 2025",
        dateRange: "12-15 มีนาคม 2568",
        location: "Singapore EXPO, สิงคโปร์",
      },
      {
        name: "Smart Grid Asia Summit",
        dateRange: "28-30 สิงหาคม 2568",
        location: "ไบเทค บางนา ประเทศไทย",
      },
    ],
  },
  en: {
    introHeading: "Neosen leads the intelligent energy platform evolution",
    introParagraphs: [
      "Founded by power-systems engineers and cloud specialists, Neosen builds end-to-end charging and energy-management solutions for smart cities, electric fleets, and mission-critical infrastructure.",
      "From charger site design and load analysis to real-time monitoring software, we help customers scale services quickly with confidence.",
    ],
    galleryPlaceholders: [
      "Control room",
      "Charging plaza",
      "Engineering team",
      "Customer project",
    ],
    philosophyTitle: "Our mission",
    philosophyStatement: "Reliable energy. Intelligent connections. Shared growth.",
    serviceTitle: "Core services",
    serviceItems: [
      "Designing and deploying charging and energy storage systems",
      "Strategic consulting with lifecycle care and proactive monitoring",
    ],
    environmentTitle: "Compliance & safety",
    environmentParagraphs: [
      "All equipment meets IEC, UL, and regional regulations with continuous cyber-security assessments.",
      "We collaborate with local partners to ensure every deployment satisfies legal and environmental requirements in each country.",
    ],
    safetyTitle: "Customer support",
    safetyParagraphs: [
      "24/7 customer operations teams watch over every asset, issuing proactive alerts and remediation steps.",
      "We equip customer teams with in-depth platform training and technology transfer programmes.",
    ],
    learningTitle: "Learning culture",
    learningQuote: "Energy progress demands constant learning.",
    learningParagraphs: [
      "We invest in ongoing research across AI-powered energy management and next-generation fast-charging hardware.",
      "Every employee can join global workshops, safety certifications, and partner labs to bring fresh ideas back to our platform.",
    ],
    exhibitionsTitle: "Events & showcases",
    exhibitions: [
      {
        name: "Future Mobility Expo 2025",
        dateRange: "12-15 March 2025",
        location: "Singapore EXPO, Singapore",
      },
      {
        name: "Smart Grid Asia Summit",
        dateRange: "28-30 August 2025",
        location: "Bangkok International Trade & Exhibition Centre, Thailand",
      },
    ],
  },
};

export default function AboutView() {
  const { language, translations } = useLanguage();
  const { brand } = translations;
  const copy = pageCopy[language];

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-16 lg:px-8">
        <header className="grid gap-12 rounded-[3rem] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{brand.tagline}</p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">{copy.introHeading}</h1>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-700">
              {copy.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.galleryPlaceholders.map((label) => (
              <div
                key={label}
                className="relative flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-100 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
                aria-hidden="true"
              >
                {label}
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-12 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-lg lg:grid-cols-[1fr_0.8fr] lg:p-16">
          <div className="space-y-10 text-slate-700">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
              <h2 className="text-2xl font-semibold text-slate-900">{copy.philosophyTitle}</h2>
              <p className="text-lg font-medium text-slate-800">“{copy.philosophyStatement}”</p>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.serviceTitle}</h3>
              <ul className="space-y-3 text-base leading-7">
                {copy.serviceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.environmentTitle}</h3>
              <div className="space-y-4 text-base leading-7">
                {copy.environmentParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.safetyTitle}</h3>
              <div className="space-y-4 text-base leading-7">
                {copy.safetyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-10 text-slate-700">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{copy.learningTitle}</p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">“{copy.learningQuote}”</p>
              </div>
              <div className="space-y-4 text-base leading-7">
                {copy.learningParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.exhibitionsTitle}</h3>
              <ul className="space-y-6 text-base leading-7">
                {copy.exhibitions.map((item) => (
                  <li key={item.name} className="space-y-2">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p>{item.dateRange}</p>
                    <p className="text-slate-600">{item.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
