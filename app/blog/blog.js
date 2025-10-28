export const blogViewCopy = {
  th: {
    eyebrow: "Neosen Insights",
    heroTitle: "บทความและอินไซต์ด้านพลังงานอัจฉริยะ",
    heroDescription:
      "อัปเดตแนวโน้ม EV โครงสร้างพื้นฐานพลังงาน และเคล็ดลับการดำเนินงานจากทีมวิศวกร Neosen",
    featureBadge: "เรื่องเด่น",
    highlightListTitle: "หัวข้อยอดนิยม",
    highlightDescription:
      "สรุปกลยุทธ์และคู่มือปฏิบัติที่ช่วยให้โครงการของคุณก้าวหน้า",
    allArticlesTitle: "บทความทั้งหมด",
    allArticlesDescription:
      "เรียงตามวันที่เผยแพร่เพื่อไม่พลาดมุมมองสำคัญ",
    readFullCta: "อ่านบทความ",
    pageStatus: (page, total, totalPosts) =>
      `หน้า ${page} จาก ${total} (ทั้งหมด ${totalPosts} บทความ)`,
    previous: "ก่อนหน้า",
    next: "ถัดไป",
    emptyState: "ยังไม่มีบทความให้แสดงในขณะนี้",
    emptyList: "ยังไม่มีบทความเพิ่มเติม",
  },
  en: {
    eyebrow: "Neosen Insights",
    heroTitle: "Intelligent energy insights",
    heroDescription:
      "Stay ahead of EV infrastructure, energy storage, and fleet operations with guidance from Neosen engineers.",
    featureBadge: "Featured",
    highlightListTitle: "Popular topics",
    highlightDescription:
      "Strategies and playbooks accelerating customer deployments",
    allArticlesTitle: "All articles",
    allArticlesDescription:
      "Sorted by publish date so you catch every perspective",
    readFullCta: "Read article",
    pageStatus: (page, total, totalPosts) =>
      `Page ${page} of ${total} (${totalPosts} articles)`,
    previous: "Previous",
    next: "Next",
    emptyState: "No articles are available right now. Please check back soon.",
    emptyList: "There are no more articles yet.",
  },
};

export const blogArticleCopy = {
  th: {
    backLabel: "กลับสู่หน้าบทความ",
    summaryLabel: "สรุปประเด็น",
    takeawaysTitle: "สิ่งที่ควรนำไปต่อยอด",
    relatedTitle: "อ่านเพิ่มเติม",
    relatedDescription:
      "สำรวจบทความที่เกี่ยวข้องเพื่อพัฒนาโครงสร้างพลังงานของคุณ",
    advisoryTitle: "อยากคุยกับผู้เชี่ยวชาญ?",
    advisoryDescription:
      "ทีม Neosen พร้อมช่วยวิเคราะห์ไซต์และออกแบบโซลูชันที่เหมาะสม",
    advisoryCta: "ติดต่อทีม Neosen",
  },
  en: {
    backLabel: "Back to insights",
    summaryLabel: "Summary",
    takeawaysTitle: "Key takeaways",
    relatedTitle: "Related reading",
    relatedDescription:
      "Explore connected stories to accelerate your energy programme.",
    advisoryTitle: "Need a specialist call?",
    advisoryDescription:
      "Neosen engineers can assess your sites and co-design the right solution.",
    advisoryCta: "Talk to Neosen",
  },
};

export const blogPosts = [
  {
    slug: "intelligent-charging-blueprint",
    cover: "/hero-textile.svg",
    date: "2024-11-18",
    featured: true,
    topics: ["charging", "strategy"],
    translations: {
      th: {
        title: "แผนแม่บทติดตั้งสถานีชาร์จอัจฉริยะภายใน 180 วัน",
        excerpt:
          "สรุปขั้นตอนการเลือกไซต์ ออกแบบกำลังไฟ และเตรียมทีมปฏิบัติการสำหรับเครือข่ายชาร์จความเร็วสูง",
        category: "ยุทธศาสตร์",
        tags: ["EV", "Smart City"],
        readingTime: "6 นาที",
        author: "ทีมที่ปรึกษาโครงสร้างพื้นฐาน",
        authorRole: "Neosen Advisory",
        content: [
          {
            heading: "ประเมินศักยภาพของไซต์",
            paragraphs: [
              "เริ่มต้นด้วยการเก็บข้อมูลโหลดไฟฟ้าและปริมาณการจราจรในพื้นที่เป้าหมาย พร้อมตรวจสอบความพร้อมของหม้อแปลงและการขยายสายส่ง.",
              "ข้อมูลจาก IoT และแผนที่พลังงานช่วยให้วิเคราะห์ได้ว่าควรติดตั้งกำลังไฟกี่กิโลวัตต์ต่อจุดเพื่อรองรับความต้องการจริง.",
            ],
          },
          {
            heading: "ออกแบบระบบให้ยืดหยุ่น",
            paragraphs: [
              "ใช้โมดูลกำลังที่ปรับได้และระบบ load balancing เพื่อรองรับการเติบโตในอนาคตโดยไม่ต้องเปลี่ยนฮาร์ดแวร์ทั้งหมด.",
            ],
            bullets: [
              "กำหนดโครงร่างการเดินสายและการระบายความร้อนตั้งแต่ต้น",
              "เตรียมพื้นที่สำหรับแบตเตอรี่กักเก็บพลังงานในอนาคต",
              "กำหนด SLA การซ่อมบำรุงและอะไหล่สำรอง",
            ],
          },
          {
            heading: "เตรียมทีมปฏิบัติการ",
            paragraphs: [
              "จัดอบรมทีม onsite และ remote operations ให้เข้าใจระบบเตือนภัย การวิเคราะห์ข้อมูล และการแก้ไขปัญหาเบื้องต้น.",
            ],
          },
        ],
        keyTakeaways: [
          "ใช้ข้อมูลโหลดไฟฟ้าและการจราจรเพื่อเลือกไซต์",
          "ออกแบบระบบให้ขยายได้ด้วยโมดูลาร์",
          "สร้างแผนอบรมและ SLA ก่อนเปิดใช้งาน",
        ],
      },
      en: {
        title: "The 180-day intelligent charging blueprint",
        excerpt:
          "A step-by-step guide to site selection, power design, and operational readiness for high-power charging networks.",
        category: "Strategy",
        tags: ["EV", "Infrastructure"],
        readingTime: "6 min",
        author: "Infrastructure Advisory Team",
        authorRole: "Neosen Advisory",
        content: [
          {
            heading: "Evaluate site potential",
            paragraphs: [
              "Collect load data, traffic volume, and grid upgrade requirements before committing to construction.",
              "Leverage IoT telemetry and energy maps to right-size kilowatt capacity per dispenser.",
            ],
          },
          {
            heading: "Design for flexibility",
            paragraphs: [
              "Adopt modular power blocks and intelligent load balancing so you can scale without ripping out hardware.",
            ],
            bullets: [
              "Plan cabling and thermal management early",
              "Reserve space for future energy storage",
              "Define maintenance SLAs and spare inventory",
            ],
          },
          {
            heading: "Prepare operations",
            paragraphs: [
              "Train onsite and remote teams on alerting workflows, data analytics, and first-line remediation.",
            ],
          },
        ],
        keyTakeaways: [
          "Use load and traffic data to prioritise sites",
          "Design modular systems ready for expansion",
          "Establish training and SLAs before launch",
        ],
      },
    },
  },
  {
    slug: "energy-storage-roi",
    cover: "/hero-textile.svg",
    date: "2024-09-22",
    featured: false,
    topics: ["storage", "finance"],
    translations: {
      th: {
        title: "คำนวณ ROI ระบบกักเก็บพลังงานใน 3 ขั้น",
        excerpt:
          "ประเมินค่าไฟ ปริมาณโหลด และรายได้เสริมจากการบริหารพลังงานเพื่อวางแผนลงทุน GridFlex Storage",
        category: "การเงิน",
        tags: ["Storage", "ROI"],
        readingTime: "5 นาที",
        author: "ทีมวิเคราะห์พลังงาน",
        authorRole: "Neosen Analytics",
        content: [
          {
            heading: "วิเคราะห์ค่าไฟฟ้า",
            paragraphs: [
              "ดึงข้อมูลค่าไฟย้อนหลัง 12 เดือน เพื่อระบุช่วงพีกและโอกาสในการทำ peak shaving.",
            ],
          },
          {
            heading: "จำลองสถานการณ์",
            paragraphs: [
              "ใช้ซอฟต์แวร์จำลองการชาร์จ/คายประจุเพื่อคำนวณการประหยัดและรายได้จากการขายไฟกลับ.",
            ],
          },
          {
            heading: "สร้าง Business Case",
            paragraphs: [
              "รวมค่าอุปกรณ์ บริการดูแล และผลประหยัด เพื่อสร้างแผนคืนทุนที่ผู้บริหารตัดสินใจได้ง่าย.",
            ],
          },
        ],
        keyTakeaways: [
          "เริ่มจากข้อมูลค่าไฟจริง",
          "จำลองหลายกรณีเพื่อเห็นผลตอบแทน",
          "นำเสนอข้อมูลทั้ง CAPEX และ OPEX",
        ],
      },
      en: {
        title: "Calculating energy-storage ROI in three steps",
        excerpt:
          "Assess tariff data, load profiles, and ancillary revenues to build a GridFlex Storage investment case.",
        category: "Finance",
        tags: ["Storage", "ROI"],
        readingTime: "5 min",
        author: "Energy Analytics Team",
        authorRole: "Neosen Analytics",
        content: [
          {
            heading: "Analyse utility tariffs",
            paragraphs: [
              "Review the last 12 months of bills to pinpoint peak periods and shaving opportunities.",
            ],
          },
          {
            heading: "Model scenarios",
            paragraphs: [
              "Run charge/discharge simulations to quantify savings and potential market revenue.",
            ],
          },
          {
            heading: "Build the business case",
            paragraphs: [
              "Combine equipment, service, and savings data into an executive-ready payback plan.",
            ],
          },
        ],
        keyTakeaways: [
          "Start with real utility data",
          "Model multiple scenarios",
          "Present both CAPEX and OPEX impacts",
        ],
      },
    },
  },
  {
    slug: "fleet-electrification-playbook",
    cover: "/hero-textile.svg",
    date: "2024-08-05",
    featured: false,
    topics: ["fleet", "operations"],
    translations: {
      th: {
        title: "เพลย์บุ๊กเปลี่ยนฟลีทเป็นไฟฟ้า",
        excerpt:
          "แนวทางทีละขั้นในการจัดการตารางวิ่ง การชาร์จ และการฝึกอบรมทีมสำหรับ Fleet Orchestrator",
        category: "ปฏิบัติการ",
        tags: ["Fleet", "EV"],
        readingTime: "7 นาที",
        author: "ทีมปฏิบัติการฟลีท",
        authorRole: "Neosen Mobility",
        content: [
          {
            heading: "จัดลำดับยานพาหนะ",
            paragraphs: [
              "เริ่มจากยานพาหนะที่มีเส้นทางตายตัวและระยะทางสั้นเพื่อควบคุมความเสี่ยง.",
            ],
          },
          {
            heading: "กำหนดตารางชาร์จ",
            paragraphs: [
              "ใช้ข้อมูล telematics เพื่อจัดคิวชาร์จและกำหนดเวลาพักที่เหมาะสม.",
            ],
            bullets: [
              "กำหนดกฎการชาร์จตามระดับแบตเตอรี่",
              "ตั้งค่าแจ้งเตือนเมื่อรถไม่กลับฐาน",
              "ผสานข้อมูลกับระบบบริหารงานขนส่ง",
            ],
          },
          {
            heading: "ฝึกอบรมทีม",
            paragraphs: [
              "จัดเวิร์กช็อปให้คนขับและทีมควบคุมเข้าใจแผงควบคุม Fleet Orchestrator และขั้นตอนความปลอดภัย.",
            ],
          },
        ],
        keyTakeaways: [
          "เริ่มจากเส้นทางที่ควบคุมได้",
          "ใช้ข้อมูลเพื่อจัดการตารางชาร์จ",
          "ลงทุนในการฝึกอบรมทีม",
        ],
      },
      en: {
        title: "Fleet electrification playbook",
        excerpt:
          "Step-by-step guidance for scheduling, charging, and training teams with Neosen Fleet Orchestrator.",
        category: "Operations",
        tags: ["Fleet", "EV"],
        readingTime: "7 min",
        author: "Fleet Operations Team",
        authorRole: "Neosen Mobility",
        content: [
          {
            heading: "Prioritise vehicles",
            paragraphs: [
              "Start with fixed-route, shorter-range vehicles to manage risk during early adoption.",
            ],
          },
          {
            heading: "Plan charging windows",
            paragraphs: [
              "Use telematics data to queue charging sessions and align dwell times.",
            ],
            bullets: [
              "Set policies based on state of charge",
              "Trigger alerts when vehicles miss depot return",
              "Integrate with transport management systems",
            ],
          },
          {
            heading: "Train every team",
            paragraphs: [
              "Run workshops so drivers and controllers are fluent in Fleet Orchestrator dashboards and safety routines.",
            ],
          },
        ],
        keyTakeaways: [
          "Start with controllable routes",
          "Leverage data for charge scheduling",
          "Invest in team enablement",
        ],
      },
    },
  },
];

export const getLocalizedPosts = (language) =>
  blogPosts.map((post) => {
    const translation = post.translations[language];
    return {
      slug: post.slug,
      cover: post.cover,
      date: post.date,
      featured: post.featured,
      topics: post.topics,
      category: translation.category,
      title: translation.title,
      excerpt: translation.excerpt,
      tags: translation.tags,
      readingTime: translation.readingTime,
      content: translation.content,
      keyTakeaways: translation.keyTakeaways,
      author: translation.author,
      authorRole: translation.authorRole,
    };
  });

export const getLocalizedPost = (slug, language) => {
  const match = blogPosts.find((post) => post.slug === slug);
  if (!match) {
    return undefined;
  }
  const translation = match.translations[language];
  return {
    slug: match.slug,
    cover: match.cover,
    date: match.date,
    featured: match.featured,
    topics: match.topics,
    category: translation.category,
    title: translation.title,
    excerpt: translation.excerpt,
    tags: translation.tags,
    readingTime: translation.readingTime,
    content: translation.content,
    keyTakeaways: translation.keyTakeaways,
    author: translation.author,
    authorRole: translation.authorRole,
  };
};
