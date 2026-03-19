import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About CSVBox – Bootstrapped SaaS for Effortless Spreadsheet Uploads",
  description: "CSVBox is a developer-first spreadsheet importer built with care, independence, and ethics — simplifying data onboarding for SaaS teams worldwide.",
};

const values = [
  { icon: "🧘", title: "Simplicity", desc: "Complexity kills progress. We remove it." },
  { icon: "🤝", title: "Integrity", desc: "We believe honesty scales better than hype." },
  { icon: "🪶", title: "Craftsmanship", desc: "Details matter — small UX touches, fast responses, clean code." },
  { icon: "🔒", title: "Trust", desc: "Data privacy isn't a feature. It's a foundation." },
  { icon: "🌱", title: "Independence", desc: "Bootstrapped by choice — accountable only to our customers." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-12 sm:pt-28 px-4 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              About <span className="text-blue-600">CSVBox</span>
            </h1>
            <p className="text-xl text-gray-600">Built with care. Used with trust.</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                🧩 We Built CSVBox to Fix Spreadsheet Uploads — Once and for All.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every SaaS team knows the struggle of handling spreadsheet uploads. You build the parser, write validations, handle mapping, and still end up with confused users and broken data. We were there too. We built importers for our own products — and every time, it drained weeks of engineering effort for something invisible to the end user. So we created <strong>CSVBox</strong> to scratch our own itch — to make spreadsheet uploads <em>finally effortless, reliable, and beautiful</em>.
              </p>
            </div>
          </div>
        </section>

        {/* Vision + Mission */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-3">🌍 Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To make <strong>data onboarding invisible</strong>. When users upload a spreadsheet, it should just work — <em>no friction, no fear, no chaos.</em> We imagine a world where every SaaS product welcomes data smoothly and every developer has the peace of mind that comes from knowing their import flow won&apos;t break at scale.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-3">🚀 Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To give teams a way to handle data onboarding with <strong>clarity, control, and confidence</strong>. We build software that works quietly and perfectly — so yours can shine loudly and brilliantly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✨</span>
                  <span><strong>Reduce friction</strong> — every click should feel natural.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">🛡️</span>
                  <span><strong>Enhance trust</strong> — data must stay private, safe, and predictable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">⚡</span>
                  <span><strong>Save time</strong> — engineering hours belong to innovation, not re-inventing importers.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">💡 Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-xl border border-gray-100 p-5 text-center shadow-sm">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company + People */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">🏢 Our Company</h2>
                <p className="text-gray-600 leading-relaxed">
                  CSVBox is built by an independent, 20+ people team at <strong>Thalia Technologies Pvt. Ltd.</strong>, based in <strong>Mumbai, India</strong>. We&apos;re <strong>bootstrapped</strong>, <strong>product-driven</strong>, and proudly free from investor pressure. We grow by <em>listening, improving, and earning trust</em> — not by chasing hype or vanity milestones.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">👥 Our People</h2>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re engineers, designers, and thinkers obsessed with making complex workflows feel effortless. No bureaucracy. No layers of management. Just a few people who love clean design, reliable code, and happy users. Every customer story, every bug fix, every tiny improvement — it all matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ethics */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-5">🌿 Our Ethics</h2>
            <ul className="space-y-3 mb-6">
              {[
                "🚫 No tracking scripts disguised as analytics.",
                "🔐 No silent data collection.",
                "💬 No upsell traps or bait-and-switch pricing.",
              ].map((e) => (
                <li key={e} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We build for <strong>trust</strong>, not for churn. Because ethical software design isn&apos;t just good business — it&apos;s good humanity.
            </p>
          </div>
        </section>

        {/* Made in India */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-3">🇮🇳 Made in India. Used Worldwide.</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              We&apos;re proud to be part of a new wave of Indian SaaS companies — <strong>global in quality, grounded in values</strong>. From startups in Berlin to enterprises in San Francisco, teams trust CSVBox to handle the quiet but critical job of bringing their users&apos; spreadsheets safely into their systems.
            </p>
            <p className="text-center text-lg font-bold text-gray-900">
              ⚡ CSVBox — The Invisible Power Behind Every Seamless Spreadsheet Upload. ⚡
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
