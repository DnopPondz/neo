"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const catalogCopy = {
  en: {
    heroTitle: "Neosen technology portfolio",
    heroDescription:
      "Explore the engineered assemblies that power Neosen solutions. Select a product family to learn how it supports resilient energy infrastructure.",
    detailTitle: "Product intelligence",
    detailDescription:
      "Every assembly is supported by regional specialists and lifecycle services so you can deploy with confidence.",
    catalog: [
      {
        id: "mechanical-seal",
        title: "Mechanical Seal",
        summary:
          "Manufactured with cobalt-bound tungsten carbide faces, corrosion-resistant steels, and precision lapping for extended service life.",
        highlights: [
          "Supplies sealing mixes matched to fluid chemistry and operating pressure",
          "Thermal treatments ensure high corrosion resistance and stability",
          "Pairable with conditioning skids and telemetry sensors"
        ],
        media: {
          accent: "from-emerald-500 via-sky-400 to-amber-300",
          label: "Contact torque assembly"
        },
        children: [
          {
            id: "mechanical-seal-b1",
            title: "Elastomer Bellows (B1)",
            summary:
              "Elastomer bellows provide generous axial movement and damp vibration for light hydrocarbon and water duties.",
            highlights: [
              "FKM, EPDM, and NBR compounds available",
              "Split clamp design speeds installation"
            ],
            media: {
              accent: "from-sky-500 via-indigo-500 to-purple-400",
              label: "Balanced bellows core"
            }
          },
          {
            id: "mechanical-seal-sc1",
            title: "Cartridge Seal (SC1)",
            summary:
              "Pre-set cartridge units with integrated gland plates for minimal shaft preparation and quick swaps.",
            highlights: [
              "Meets API 682 Category 1 specifications",
              "Optional quench and flush ports"
            ],
            media: {
              accent: "from-amber-500 via-orange-400 to-rose-400",
              label: "Factory set cartridge"
            }
          },
          {
            id: "mechanical-seal-sl1",
            title: "Single Coil Spring (SL1)",
            summary:
              "Single-coil springs suit viscous duties with uniform face loading and easy cleaning.",
            highlights: [
              "Chrome-oxide coated faces",
              "Reversible for left or right rotation"
            ],
            media: {
              accent: "from-teal-500 via-emerald-500 to-lime-400",
              label: "Single coil module"
            }
          },
          {
            id: "mechanical-seal-sp1",
            title: "Single Spring (SP1)",
            summary:
              "A compact single-spring geometry ideal for package pumps and HVAC skid integration.",
            highlights: [
              "Compact profile for tight housings",
              "Optional silicon-carbide faces"
            ],
            media: {
              accent: "from-blue-500 via-cyan-500 to-emerald-400",
              label: "Compact spring set"
            }
          },
          {
            id: "mechanical-seal-sw1",
            title: "Wave Spring (SW1)",
            summary:
              "Wave springs maintain even load with low axial footprint for gas compression lines.",
            highlights: [
              "High-cycle stainless wave spring",
              "Grooved faces shed condensate"
            ],
            media: {
              accent: "from-rose-500 via-fuchsia-500 to-purple-400",
              label: "Wave spring stack"
            }
          },
          {
            id: "mechanical-seal-sm1",
            title: "Multi Spring (SM1)",
            summary:
              "Balanced multi-spring arrays distribute load across the sealing face for demanding rotating equipment.",
            highlights: [
              "Segmented spring pack for redundancy",
              "Graphite-reinforced secondary seals"
            ],
            media: {
              accent: "from-indigo-500 via-blue-500 to-cyan-400",
              label: "Balanced spring array"
            }
          },
          {
            id: "mechanical-seal-sd1",
            title: "Double Seal (SD1)",
            summary:
              "Dual-face configuration with pressurised barrier fluid for toxic and abrasive media.",
            highlights: [
              "Supports Plan 52 and 53 systems",
              "Condition monitoring ports included"
            ],
            media: {
              accent: "from-lime-500 via-emerald-500 to-teal-400",
              label: "Barrier-fluid ready"
            }
          },
          {
            id: "mechanical-seal-dm1",
            title: "Double Seal Multiple Spring (DM1)",
            summary:
              "Redundant spring sets secure face loading even during process upsets and rapid thermal cycling.",
            highlights: [
              "Split gland facilitates maintenance",
              "Internal circulation grooves"
            ],
            media: {
              accent: "from-amber-500 via-yellow-400 to-lime-300",
              label: "Dual spring cartridge"
            }
          }
        ]
      },
      {
        id: "carbon",
        title: "Carbon",
        summary:
          "Graphite components machined for bushings, bearings, and seal faces operating in demanding thermal envelopes.",
        highlights: [
          "Resin-impregnated and electrographite grades",
          "Precision grinding within ±0.01 mm"
        ],
        media: {
          accent: "from-slate-600 via-gray-500 to-neutral-400",
          label: "Graphite billet"
        }
      },
      {
        id: "rubber",
        title: "Rubber",
        summary:
          "Engineered elastomers tailored for chemical compatibility, compression set, and abrasion resistance.",
        highlights: [
          "Mixing lab validates compound performance",
          "Custom moulding up to 1.2 m diameter"
        ],
        media: {
          accent: "from-emerald-600 via-green-500 to-lime-400",
          label: "Moulded elastomer"
        }
      },
      {
        id: "plastic",
        title: "Plastic",
        summary:
          "High-performance plastics including PEEK, PTFE, and UHMW-PE for insulating and low-friction duties.",
        highlights: [
          "CNC machining with clean-room finishing",
          "Traceable resin batches"
        ],
        media: {
          accent: "from-cyan-500 via-sky-500 to-blue-500",
          label: "Precision polymer"
        }
      },
      {
        id: "hard-chrome",
        title: "Hard Chrome",
        summary:
          "Hard chrome plating services restore shafts, sleeves, and mechanical components with micron-accurate deposits.",
        highlights: [
          "Automated bath chemistry control",
          "Post-plate superfinishing"
        ],
        media: {
          accent: "from-zinc-500 via-slate-400 to-stone-300",
          label: "Chrome finishing"
        }
      },
      {
        id: "manufacturing-support",
        title: "Manufacturing Support",
        summary:
          "Dedicated support teams manage tooling design, rapid prototyping, and quality documentation for OEM partners.",
        highlights: [
          "APQP and PPAP-ready documentation",
          "Regional prototyping workshops"
        ],
        media: {
          accent: "from-purple-500 via-indigo-500 to-blue-400",
          label: "Process engineering"
        }
      }
    ]
  },
  th: {
    heroTitle: "เทคโนโลยีของ Neosen",
    heroDescription:
      "สำรวจชุดผลิตภัณฑ์ที่เสริมพลังให้กับโซลูชันของ Neosen เลือกกลุ่มผลิตภัณฑ์เพื่อดูบทบาทและคุณสมบัติสำคัญในการสร้างระบบพลังงานที่มั่นคง",
    detailTitle: "ข้อมูลผลิตภัณฑ์",
    detailDescription:
      "ทุกชุดผลิตภัณฑ์ได้รับการสนับสนุนจากผู้เชี่ยวชาญระดับภูมิภาคและบริการตลอดอายุโครงการ ทำให้คุณวางระบบได้อย่างมั่นใจ",
    catalog: [
      {
        id: "mechanical-seal",
        title: "แมคคานิคอลซีล",
        summary:
          "ผลิตด้วยผิวสัมผัสคาร์ไบด์ผสมนิกเกิล โครงสร้างเหล็กทนการกัดกร่อน และการขัดแต่งละเอียดเพื่ออายุการใช้งานยาวนาน",
        highlights: [
          "จัดสูตรซีลให้เหมาะกับคุณสมบัติของของไหลและความดัน",
          "ผ่านกระบวนการอบชุบเพื่อความทนทานต่อการกัดกร่อนสูง",
          "เชื่อมต่อกับสกิดคอนดิชั่นและเซ็นเซอร์มอนิเตอร์ได้"
        ],
        media: {
          accent: "from-emerald-500 via-sky-400 to-amber-300",
          label: "ชุดประกอบแรงเสียดทาน"
        },
        children: [
          {
            id: "mechanical-seal-b1",
            title: "เอลลาสโตเมอร์เบลโลว์ (B1)",
            summary:
              "เบลโลว์เอลลาสโตเมอร์ให้ระยะชดเชยแกนและลดแรงสั่น เหมาะกับงานไฮโดรคาร์บอนและระบบน้ำ",
            highlights: [
              "มีวัสดุ FKM, EPDM และ NBR",
              "โครงสร้างแยกชิ้นช่วยติดตั้งได้รวดเร็ว"
            ],
            media: {
              accent: "from-sky-500 via-indigo-500 to-purple-400",
              label: "แกนเบลโลว์สมดุล"
            }
          },
          {
            id: "mechanical-seal-sc1",
            title: "คาร์ทริดจ์ซีล (SC1)",
            summary:
              "ชุดคาร์ทริดจ์ตั้งค่าจากโรงงานพร้อมแผ่นยึด ช่วยลดการเตรียมเพลาและเปลี่ยนได้รวดเร็ว",
            highlights: [
              "เป็นไปตามมาตรฐาน API 682 หมวด 1",
              "สามารถติดตั้งพอร์ตชิลล์และฟลัชเสริม"
            ],
            media: {
              accent: "from-amber-500 via-orange-400 to-rose-400",
              label: "คาร์ทริดจ์พร้อมใช้งาน"
            }
          },
          {
            id: "mechanical-seal-sl1",
            title: "สปริงคอยล์เดี่ยว (SL1)",
            summary:
              "สปริงคอยล์เดี่ยวเหมาะสำหรับของเหลวหนืด ควบคุมแรงกดหน้าแหวนได้สม่ำเสมอและทำความสะอาดง่าย",
            highlights: [
              "ผิวเคลือบโครมออกไซด์",
              "ปรับหมุนใช้ได้ทั้งซ้ายและขวา"
            ],
            media: {
              accent: "from-teal-500 via-emerald-500 to-lime-400",
              label: "โมดูลคอยล์เดี่ยว"
            }
          },
          {
            id: "mechanical-seal-sp1",
            title: "สปริงเดี่ยว (SP1)",
            summary:
              "โครงสร้างกะทัดรัด เหมาะกับปั๊มแพ็กเกจและชุด HVAC ที่มีพื้นที่จำกัด",
            highlights: [
              "ขนาดกะทัดรัดติดตั้งในพื้นที่แคบ",
              "เลือกผิวซิลิกอนคาร์ไบด์ได้"
            ],
            media: {
              accent: "from-blue-500 via-cyan-500 to-emerald-400",
              label: "สปริงเดี่ยวขนาดเล็ก"
            }
          },
          {
            id: "mechanical-seal-sw1",
            title: "เวฟสปริง (SW1)",
            summary:
              "เวฟสปริงให้แรงกดสม่ำเสมอและกินพื้นที่แกนต่ำ เหมาะกับไลน์อัดก๊าซ",
            highlights: [
              "เวฟสปริงสเตนเลสทนรอบสูง",
              "ร่องผิวช่วยระบายน้ำคอนเดนเสท"
            ],
            media: {
              accent: "from-rose-500 via-fuchsia-500 to-purple-400",
              label: "สแต็คเวฟสปริง"
            }
          },
          {
            id: "mechanical-seal-sm1",
            title: "มัลติสปริง (SM1)",
            summary:
              "ชุดสปริงหลายตัวช่วยกระจายแรงกดบนหน้าแหวน เหมาะกับเครื่องจักรที่ใช้งานหนัก",
            highlights: [
              "สปริงแบ่งส่วนเพื่อความทนทาน",
              "ซีลรองเสริมกราไฟต์"
            ],
            media: {
              accent: "from-indigo-500 via-blue-500 to-cyan-400",
              label: "ชุดสปริงสมดุล"
            }
          },
          {
            id: "mechanical-seal-sd1",
            title: "ดับเบิลซีล (SD1)",
            summary:
              "โครงสร้างสองหน้าพร้อมของเหลวแบร์ริเออร์สำหรับของไหลเป็นพิษหรือมีอนุภาค",
            highlights: [
              "รองรับระบบ Plan 52 และ 53",
              "มีพอร์ตติดตั้งระบบมอนิเตอร์"
            ],
            media: {
              accent: "from-lime-500 via-emerald-500 to-teal-400",
              label: "พร้อมของเหลวแบร์ริเออร์"
            }
          },
          {
            id: "mechanical-seal-dm1",
            title: "ดับเบิลซีลมัลติสปริง (DM1)",
            summary:
              "สปริงสำรองหลายชุดรักษาแรงกดแม้มีความผิดปกติของกระบวนการและการเปลี่ยนแปลงอุณหภูมิรวดเร็ว",
            highlights: [
              "แผ่นยึดแบบแยกชิ้นซ่อมบำรุงง่าย",
              "ร่องหมุนเวียนของเหลวภายใน"
            ],
            media: {
              accent: "from-amber-500 via-yellow-400 to-lime-300",
              label: "คาร์ทริดจ์สปริงคู่"
            }
          }
        ]
      },
      {
        id: "carbon",
        title: "คาร์บอน",
        summary:
          "ชิ้นส่วนกราไฟต์กลึงสำหรับบุชชิ่ง แบริ่ง และผิวซีลที่ต้องทนความร้อนสูง",
        highlights: [
          "มีเกรดเรซินอิมเพรกเนตและอิเล็กโตรกราไฟต์",
          "เจียระไนความละเอียด ±0.01 มม."
        ],
        media: {
          accent: "from-slate-600 via-gray-500 to-neutral-400",
          label: "บล็อกกราไฟต์"
        }
      },
      {
        id: "rubber",
        title: "ยาง",
        summary:
          "เอลลาสโตเมอร์ที่ออกแบบให้เหมาะกับสารเคมี การยุบตัว และการทนต่อการเสียดสี",
        highlights: [
          "ห้องผสมทดสอบสมบัติยางครบ",
          "ขึ้นรูปได้ถึงเส้นผ่านศูนย์กลาง 1.2 เมตร"
        ],
        media: {
          accent: "from-emerald-600 via-green-500 to-lime-400",
          label: "ยางขึ้นรูป"
        }
      },
      {
        id: "plastic",
        title: "พลาสติก",
        summary:
          "พลาสติกสมรรถนะสูง เช่น PEEK, PTFE และ UHMW-PE สำหรับงานฉนวนและลดแรงเสียดทาน",
        highlights: [
          "เครื่องจักร CNC พร้อมห้องคลีนรูม",
          "ควบคุมย้อนกลับวัสดุทุกล็อต"
        ],
        media: {
          accent: "from-cyan-500 via-sky-500 to-blue-500",
          label: "โพลิเมอร์ความแม่นยำ"
        }
      },
      {
        id: "hard-chrome",
        title: "ฮาร์ดโครม",
        summary:
          "บริการชุบฮาร์ดโครมสำหรับเพลา ปลอก และชิ้นส่วนเครื่องจักรที่ต้องการความแม่นยำระดับไมครอน",
        highlights: [
          "ควบคุมสารละลายอัตโนมัติ",
          "ขัดซุปเปอร์ฟินิชหลังชุบ"
        ],
        media: {
          accent: "from-zinc-500 via-slate-400 to-stone-300",
          label: "พื้นผิวโครม"
        }
      },
      {
        id: "manufacturing-support",
        title: "การสนับสนุนการผลิต",
        summary:
          "ทีมสนับสนุนออกแบบเครื่องมือ ผลิตต้นแบบเร็ว และจัดทำเอกสารคุณภาพสำหรับ OEM",
        highlights: [
          "จัดทำเอกสาร APQP และ PPAP ครบ",
          "เวิร์กช็อปต้นแบบในภูมิภาค"
        ],
        media: {
          accent: "from-purple-500 via-indigo-500 to-blue-400",
          label: "วิศวกรรมกระบวนการ"
        }
      }
    ]
  }
};

function flattenCatalog(nodes) {
  return nodes.flatMap((node) => [node, ...(node.children ? flattenCatalog(node.children) : [])]);
}

function ProductHighlights({ highlights }) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-600">
      {highlights.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MediaPreview({ media }) {
  if (!media) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
      <div className={`h-48 w-full bg-gradient-to-br ${media.accent}`} aria-hidden />
      {media.label ? (
        <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
          {media.label}
        </span>
      ) : null}
    </div>
  );
}

function CatalogNode({ item, depth, activeId, onSelect }) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;

  return (
    <div>
      <button
        type="button"
        onClick={() => onSelect(item.id)}
        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition hover:bg-emerald-50 ${
          isActive ? "bg-emerald-100 text-emerald-800" : "text-slate-700"
        }`}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
      >
        <span>{item.title}</span>
        {isActive ? <span aria-hidden className="text-xs">●</span> : null}
      </button>
      {hasChildren ? (
        <div className="space-y-1">
          {item.children.map((child) => (
            <CatalogNode key={child.id} item={child} depth={depth + 1} activeId={activeId} onSelect={onSelect} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function CapabilitiesView() {
  const { language } = useLanguage();
  const copy = catalogCopy[language];
  const [activeId, setActiveId] = useState(copy.catalog[0].id);

  useEffect(() => {
    setActiveId(catalogCopy[language].catalog[0].id);
  }, [language]);

  const flattened = useMemo(() => flattenCatalog(copy.catalog), [copy.catalog]);
  const activeProduct = useMemo(() => {
    return flattened.find((item) => item.id === activeId) ?? flattened[0];
  }, [flattened, activeId]);

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">{copy.detailTitle}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{copy.heroTitle}</h1>
          <p className="text-lg leading-7 text-slate-600">{copy.heroDescription}</p>
          <p className="text-sm leading-6 text-slate-500">{copy.detailDescription}</p>
        </header>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          <section className="space-y-8 rounded-[2.5rem] border border-slate-200 bg-white/90 p-10 shadow-xl backdrop-blur">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                {activeProduct.title}
              </span>
              <p className="text-base leading-7 text-slate-600">{activeProduct.summary}</p>
            </div>
            <MediaPreview media={activeProduct.media} />
            <ProductHighlights highlights={activeProduct.highlights} />
          </section>

          <aside className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Product</h2>
            <div className="mt-4 space-y-1">
              {copy.catalog.map((item) => (
                <CatalogNode key={item.id} item={item} depth={0} activeId={activeId} onSelect={setActiveId} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
