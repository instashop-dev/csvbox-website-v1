import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

interface Logo { src: string; alt: string; }
interface Problem { title: string; desc: string; badge?: string; }
interface ContentBlock { heading: string; body: string; img: string; reverse?: boolean; }
interface DataItem { num: string; title: string; desc: string; }

interface UseCaseLayoutProps {
  heroH1: string;
  heroSubtitle: string;
  heroCta?: string;
  heroImg: string;
  featureCards: { badge: string; h2: string; desc: string; }[];
  problemHeading: string;
  problemSubtitle?: string;
  problems: Problem[];
  logos: Logo[];
  useCaseCards: { badge: string; heading: string; body: string; }[];
  sectionHeading: string;
  sectionSubtitle?: string;
  contentBlocks: ContentBlock[];
  dataHeading: string;
  dataSubtitle?: string;
  dataItems: DataItem[];
  ctaHeading?: string;
  ctaSubheading?: string;
  ctaLabel?: string;
}

export default function UseCaseLayout({
  heroH1, heroSubtitle, heroCta = "Try CSVBox for free", heroImg,
  featureCards, problemHeading, problemSubtitle, problems, logos,
  useCaseCards, sectionHeading, sectionSubtitle, contentBlocks,
  dataHeading, dataSubtitle, dataItems,
  ctaHeading = "Ready to get Started?",
  ctaSubheading = "Create your account for free to try our product.",
  ctaLabel = "Start for Free",
}: UseCaseLayoutProps) {
  const doubledLogos = [...logos, ...logos];
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-16 pb-12 sm:pt-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">{heroH1}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{heroSubtitle}</p>
              <Link href="https://app.csvbox.io/register" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                {heroCta}
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 shrink-0">
              <Image src={heroImg} alt={heroH1} width={560} height={360} className="w-full rounded-xl shadow-xl border border-gray-100" unoptimized />
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featureCards.map((c) => (
              <div key={c.badge} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-3">{c.badge}</p>
                <h2 className="font-bold text-gray-900 mb-2 text-base">{c.h2}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problems */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">{problemHeading}</h2>
              {problemSubtitle && <p className="text-gray-600 text-sm">{problemSubtitle}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {problems.map((p) => (
                <div key={p.title} className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo carousel */}
        {logos.length > 0 && (
          <section className="py-8 border-y border-gray-100 overflow-hidden bg-gray-50">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest text-center mb-5">TRUSTED BY</p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="flex animate-scroll-logos" style={{ width: "max-content" }}>
                {doubledLogos.map((logo, i) => (
                  <div key={i} className="flex items-center justify-center px-8 shrink-0">
                    <Image src={logo.src} alt={logo.alt} width={100} height={32} className="h-7 w-auto object-contain grayscale opacity-50" unoptimized />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Use case cards */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            {useCaseCards.map((c) => (
              <div key={c.badge} className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">{c.badge}</p>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{c.heading}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature section heading */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{sectionHeading}</h2>
            {sectionSubtitle && <p className="text-gray-600 text-sm">{sectionSubtitle}</p>}
          </div>
        </section>

        {/* Content blocks */}
        {contentBlocks.map((block, i) => (
          <section key={block.heading} className={`py-12 px-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
            <div className={`max-w-6xl mx-auto flex flex-col ${block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{block.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{block.body}</p>
              </div>
              <div className="flex-1">
                <Image src={block.img} alt={block.heading} width={480} height={300} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
              </div>
            </div>
          </section>
        ))}

        {/* Data items grid */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">{dataHeading}</h2>
            {dataSubtitle && <p className="text-gray-600 text-sm text-center mb-8">{dataSubtitle}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dataItems.map((d) => (
                <div key={d.title} className="flex gap-4 p-5 border border-gray-100 rounded-xl bg-gray-50">
                  <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{d.num}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{d.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner heading={ctaHeading} subheading={ctaSubheading} ctaLabel={ctaLabel} />
      </main>
      <Footer />
    </>
  );
}
