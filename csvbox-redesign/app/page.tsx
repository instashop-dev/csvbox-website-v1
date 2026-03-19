import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";

const logos = [
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/3js5nlw45l6u3msx.svg", alt: "Nifty" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/42exataaoih2jxbf.svg", alt: "Twenix" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/nu5a7f2qulxz6zt2.png", alt: "Nesspay" },
  { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/vMOrhPQfNLMCdwPp.svg", alt: "BigBinary" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/0mre5lx36t2q9bjp.svg", alt: "Venue" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/pqnkrc5yg30yn2dq.svg", alt: "Pando" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/eh7ylun762wfldr7.svg", alt: "Sendify" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/prpdv0uivw21y0n4.svg", alt: "Monument" },
  { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/JWEJUIOtvORrzjlx.svg", alt: "PropertyRadar" },
  { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/IkhteYyDnJttERea.svg", alt: "Fiddle.io" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/vo5hgcr4kkhomdng.svg", alt: "Memberstack" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/7cu2b7ctryfwoph1.png", alt: "Senja" },
  { src: "https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/zs8il3heivhf6s2g.svg", alt: "WizCommerce" },
];

const features = [
  {
    title: "Powerful Data Validations",
    desc: "Built-in rules, custom JavaScript checks, and server-side validations — catch errors at the cell, row, or table level before they reach your app.",
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/pzrjpvyuuexm5fz8.png",
  },
  {
    title: "Seamless User Experience",
    desc: "Fully branded importer with your colors, logo, and language. Mobile-ready, intuitive flow with progress tracking, smart column mapping, and AI-powered transformations.",
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ame5xcee4ujs8o0n.png",
  },
  {
    title: "Easy Integrations",
    desc: "Deliver validated data straight to your app, API, or database — zero friction for your team or your users.",
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/1vec75rebqbz8hyb.png",
  },
  {
    title: "High Performance",
    desc: "Import, map, and validate massive spreadsheets in seconds. Optimized for thousands of rows without performance drops.",
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/bgfwbiuaj5j17rj5.png",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Private Mode, flexible data residency, SOC 2 Type II, GDPR compliance, and end-to-end encryption to safeguard every import.",
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/un13k3e1spxh4qa5.png",
  },
  {
    title: "Developer Experience",
    desc: "Clean APIs, React/JS SDKs, sandbox testing, and event hooks. Built to drop into modern stacks in minutes.",
    img: null,
  },
];

const faqItems = [
  {
    question: "How long does it take to embed CSVBox?",
    answer: "Most teams have a working importer in under 10 minutes. Add one line of JavaScript to your app and configure your data schema through our dashboard.",
  },
  {
    question: "Can I customize validation rules?",
    answer: "Yes. Set data types, required fields, custom regex patterns, and business logic. You can also add server-side validation via our webhook system.",
  },
  {
    question: "What file formats are supported?",
    answer: "CSV, XLSX, and XLS files. We handle encoding issues, delimiter detection, and common formatting problems automatically.",
  },
  {
    question: "How does pricing work?",
    answer: "Pay only for what you use. Free tier includes 100 imports per month. Paid plans start at $19/month with transparent per-import pricing.",
  },
];

export default function HomePage() {
  const doubledLogos = [...logos, ...logos];
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 px-4 text-center bg-white">
          <div className="max-w-6xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-6">
              Ship data imports 10x faster
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
              The fast CSV importer
              <br />
              for SaaS teams
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Embeddable widget that validates, transforms, and delivers clean data.
              Skip the weeks of custom development and ship production-ready imports today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <Link
                href="https://app.csvbox.io/register"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                Start Free
                <svg width="13" height="11" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true">
                  <path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors"
              >
                Demo
              </Link>
            </div>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/br92vd4ucqblnvv3.svg"
                alt="CSV importer widget preview"
                width={900}
                height={500}
                className="w-full"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ── Logo Carousel ── */}
        <section className="py-6 border-y border-gray-100 overflow-hidden">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest text-center mb-5">
            Trusted by teams in companies of all sizes
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-logos" style={{ width: "max-content" }}>
              {doubledLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center px-8 shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={32}
                    className="h-7 w-auto object-contain grayscale opacity-50 hover:opacity-80 transition-opacity"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <Image
                src="https://umsousercontent.com/lib_XeXLBCemoPqjIOuk/xidegze53b8056l0.svg"
                alt="Simple AI"
                width={100}
                height={30}
                className="h-7 w-auto object-contain mb-5"
                unoptimized
              />
              <blockquote>
                <p className="text-gray-800 text-lg leading-relaxed">
                  &ldquo;We love how easy CSVbox made it to integrate file uploads into our product. We started with a self built version and it was buggy and hard for people to use. CSVbox solved this for us and only{" "}
                  <strong className="font-semibold">took an hour to integrate</strong>.&rdquo;
                </p>
                <footer className="mt-5">
                  <p className="font-semibold text-gray-900 text-sm">Zach Kamran</p>
                  <p className="text-sm text-gray-500">CTO @ Simple AI</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Get Started in 3 Steps ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Get Started in Minutes
              </h2>
              <p className="text-lg text-gray-600">Production-ready imports in three steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: "1", title: "Configure", desc: "Define schema, setup validation rules, transform functions and destination settings." },
                { n: "2", title: "Embed", desc: "Add the JS snippet to your app. Or share the Import Link." },
                { n: "3", title: "Receive", desc: "Users upload sheets. You get clean data in your app, API or DB." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stress-free CSV Imports ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Stress-free CSV Imports
              </h2>
              <p className="text-lg text-gray-600">
                Give your users a clean, secure, and seamless import flow in minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{f.desc}</p>
                  {f.img && (
                    <div className="rounded-lg overflow-hidden border border-gray-100">
                      <Image
                        src={f.img}
                        alt={f.title}
                        width={400}
                        height={220}
                        className="w-full object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Keep Developers on High-Value Work ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Keep Developers on High-Value Work
              </h2>
              <p className="text-lg text-gray-600">
                Every hour saved on spreadsheets is an hour spent shipping features your customers love.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: "5–10x Faster Onboarding", desc: "Instant, frictionless imports = higher conversions." },
                { title: "Skip Months of Dev Work", desc: "Focus on your product, not building import tools." },
                { title: "Fewer Support Tickets", desc: `No more "file won't upload" headaches.` },
              ].map((v) => (
                <div key={v.title} className="p-6 bg-white border border-gray-100 rounded-xl text-center shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBanner />

        {/* ── FAQs ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">FAQs</h2>
              <p className="text-gray-600">Frequently asked questions answered</p>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
