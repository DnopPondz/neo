"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    badge: "GENERAL",
    intro:
      "โซลูชันของเราเริ่มจากความเข้าใจว่าธุรกิจทุกประเภทต้องเติบโตด้วยเทคโนโลยีที่เหมาะสมที่สุดสำหรับองค์กรของคุณ.",
    paragraphs: [
      "ปัจจุบันมีเทคโนโลยีใหม่มากมายถูกพัฒนาขึ้นเพื่อสนับสนุนทุกสาขาธุรกิจที่มีแนวโน้มเติบโตอย่างต่อเนื่อง เช่น เทคโนโลยีการผลิตที่ช่วยลดงานระหว่างทำ ประหยัดเวลาและต้นทุน.",
      "ในยุคโลกไร้พรมแดน ข้อมูลที่มากขึ้นคือโอกาสที่มากขึ้นในการไปถึงเป้าหมายของคุณ นั่นคือเหตุผลที่เทคโนโลยีสารสนเทศพิสูจน์แล้วว่าเป็นเครื่องมือสำคัญที่ช่วยให้ธุรกิจเดินหน้ามีประสิทธิภาพ.",
      "คอมพิวเตอร์ ซึ่งเป็นหนึ่งในเทคโนโลยีสารสนเทศ ได้รับการยอมรับทั่วโลกเรื่องสมรรถนะ การใช้คอมพิวเตอร์ช่วยให้คุณค้นหาและรับข้อมูลล่าสุด รวมถึงควบคุมทุกสิ่งที่ต้องการได้ทุกเวลา ทุกสถานที่.",
      "นีโอเซนตระหนักถึงประเด็นนี้มาโดยตลอด และมุ่งมั่นค้นหาและนำเสนอเทคโนโลยีที่เหมาะสมที่สุดสำหรับองค์กรของคุณ เราพร้อมให้บริการทั้งงานที่ปรึกษาและฮาร์ดแวร์คอมพิวเตอร์คุณภาพสูง เช่น เมนบอร์ด ซีพียู ฮาร์ดดิสก์ หน่วยความจำ การ์ดจอ รวมถึงส่วนประกอบธุรกิจอื่น ๆ ของ Macromedia และ Intel ซึ่งเราคือผู้แทนจำหน่าย.",
    ],
    closingLead: "ด้วยเทคโนโลยีสารสนเทศคุณภาพเพื่อความสำเร็จสูงสุดของธุรกิจคุณ",
    closingSignature: 'จงนึกถึงเรา "Neosen Limited"',
  },
  en: {
    badge: "GENERAL",
    intro:
      "Our solutions begin with the belief that every organisation deserves technology tailored precisely to its growth.",
    paragraphs: [
      "Nowadays, there are many new technologies developed to support all branches of business that have the tendency to grow more and more such as manufacturing techniques that can help you to reduce work in progress, save time and cost.",
      "In the globalization era, more information means more chances to reach your goal. That is why information technologies are proven to be one of the indispensable tools helping your business run efficiently.",
      "Computer, one of the information technologies, is accepted all over the world for its performance. Using computer, you can find or receive updated information and control everything you need anytime, anywhere.",
      "Neosen always realises this point and continually searches for and provides you with the most appropriate technology that suits your organisation. We are ready to offer you not only consulting service but also high quality computer hardware: mainboard, CPU, HDD, memory card, VGA card, etc., and other business components of Macromedia and Intel of which we are an agent.",
    ],
    closingLead: "With high information technologies for high success in your business",
    closingSignature: 'think of us "Neosen Limited"',
  },
};

export default function ProductsView() {
  const { language } = useLanguage();

  const content = useMemo(() => pageCopy[language] ?? pageCopy.en, [language]);

  return (
    <main className="bg-slate-100 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10">
          <div className="relative h-24 bg-gradient-to-r from-[#2f6aa0] via-[#3993bd] to-[#48adc5]">
            <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[linear-gradient(135deg,rgba(255,255,255,0.65)_8%,rgba(255,255,255,0.1)_8%,rgba(255,255,255,0.1)_46%,rgba(255,255,255,0.65)_46%,rgba(255,255,255,0.65)_54%,rgba(255,255,255,0.1)_54%)] bg-[length:48px_48px]" />
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
          </div>
          <div className="relative px-6 pb-12 pt-0 sm:px-12">
            <div className="-mt-12 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-slate-900/10">
              <span className="text-sm font-semibold uppercase tracking-[0.6em] text-slate-500">{content.badge}</span>
            </div>
            <div className="mt-8 space-y-6 text-base leading-relaxed sm:text-lg">
              <p className="font-semibold text-slate-800">{content.intro}</p>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-base font-semibold text-slate-800 sm:text-lg">{content.closingLead}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#2f6aa0] sm:text-base">
                {content.closingSignature}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
