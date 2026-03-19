import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "A CSV Import Tool Built for Clean, Reliable Data Flow | CSVBox",
  description: "Production-ready CSV import pipeline that handles schema mapping, validation, and error recovery, so users upload data in seconds, not hours.",
};

const problems = [
  { icon: "🗃️", badge: "Most common", title: "Data Format Chaos", desc: "Every user's CSV is different—date formats, encodings, delimiters. One upload breaks everything." },
  { icon: "⚠️", badge: "High friction", title: "Poor Error Messages", desc: "'Row 4823 failed' doesn't help anyone. Users need to know exactly what's wrong and how to fix it." },
  { icon: "⏳", badge: "Performance", title: "Slow Processing", desc: "Large files freeze the browser. Users wait minutes or give up entirely on big imports." },
  { icon: "🗄️", badge: "Risky", title: "Database Corruption", desc: "Partial imports leave your database in an inconsistent state. Rolling back is a nightmare." },
  { icon: "🔧", badge: "Engineering cost", title: "Endless Maintenance", desc: "Every new edge case means another bug fix. Your team spends more time maintaining imports than building features." },
  { icon: "👤", badge: "User Impact", title: "Poor User Experience", desc: "Confusing UI, no progress indicators, unclear instructions. Users churn before they even import data." },
];

const solutions = [
  { title: "Smart Auto-Mapping & Detection", desc: "CSVBox automatically detects file structure, headers, encodings, and formats — then maps everything to your schema without manual setup.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/652y0qa9kt3nl0iy.png" },
  { title: "Real-Time Validation & Fast Processing", desc: "Every row is validated as it's uploaded with clear, actionable error messages. Large files process smoothly without freezing the UI.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/aoo1bp2hxwet986e.png" },
  { title: "Controlled Imports & Team Collaboration", desc: "Review data before finalizing imports, maintain full visibility into changes, and collaborate with your team to ship reliable data workflows together.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/z9v5m37vqn6ft5do.png", cta: "Get started now" },
];

const industries = [
  { name: "Fintech", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/dx3kfngobhh3vllb.png", desc: "Real-time reconciliation, faster close cycles, and complete financial visibility." },
  { name: "Ed-Tech", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/2zn6sw0t7slrfd0a.png", desc: "Faster student onboarding, accurate records, and smoother academic operations" },
  { name: "Healthtech", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/azcvckd25uletllx.png", desc: "Error-free migrations, HIPAA-ready infrastructure, and a safe foundation for patient care." },
  { name: "Security", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/na9qkesnnz0o7cqm.png", desc: "Faster audits, fewer compliance gaps, and higher trust with regulators." },
  { name: "HR Tech", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/15liy4pif65sc6i5.png", desc: "Streamlined employee onboarding, accurate payroll data, and efficient HR workflows." },
  { name: "Accounting", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/sdxsvssqufysw4uh.png", desc: "Accurate financial data, fewer reconciliation errors, and vendors paid on time." },
  { name: "E-commerce", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/dd653f15wxdwqui0.png", desc: "Products go live faster, errors drop, and sales start immediately." },
  { name: "Real Estate", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/dgkpf13rucze7rba.png", desc: "Accurate rent rolls, fewer tenant disputes, and smoother operations." },
];

const buildVsBuy = [
  ["Initial development time", "3-6 months", "Few minutes"],
  ["Developer cost", "$50,000+", "Starts at $19"],
  ["Ongoing maintenance", "Constant", "Zero"],
  ["Error handling", "Basic", "Advanced"],
  ["Large file support", "Limited", "Unlimited"],
  ["Validation rules", "Manual", "Built in"],
  ["Security and compliance", "DIY", "SOC 2"],
  ["User experience", "Varies", "Polished"],
];

const faqItems = [
  { question: "How long does it take to integrate your CSV import tool?", answer: "Most developers integrate our tool in under few minutes. Simply drop our embeddable component into your app, configure your schema, and you're live. No backend infrastructure required." },
  { question: "What file sizes can your tool handle?", answer: "Our tool handles files of any size through automatic chunking. We've successfully processed files with millions of rows without any browser freezing or performance issues." },
  { question: "Do you support custom validation rules?", answer: "Yes! Beyond built-in validators for common data types (emails, dates, phone numbers), you can define custom validation logic using simple configuration or JavaScript functions specific to your business rules." },
  { question: "What happens if an import fails midway?", answer: "Our tool includes automatic transaction rollback. If any error occurs during import, we roll back all changes to keep your database in a consistent state. No partial imports, no data corruption." },
  { question: "Can I customize the look and feel?", answer: "Yes! The import UI is fully customizable with CSS. Match your brand colors, fonts, and styling. You can also use our headless API to build a completely custom interface." },
  { question: "Do you offer support during integration?", answer: "All paid plans include email support with responses within 24 hours. Pro plans get priority support with same-day responses. We also offer dedicated Slack channels for enterprise customers." },
];

export default function CsvImportPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-28 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                A CSV import tool built for clean, Reliable data flow
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Production-ready CSV import pipeline that handles schema mapping, validation, and error recovery, so users upload data in seconds, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="https://help.csvbox.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
                  View documentation
                </Link>
                <Link href="https://app.csvbox.io/register" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                  Try CSVBox
                  <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Image src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/xh96lkqtdk4bt08w.png" alt="CSV Import Tool" width={520} height={340} className="w-full rounded-xl shadow-xl border border-gray-100" unoptimized />
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">CSV Import Shouldn&apos;t Be This Hard</h2>
              <p className="text-gray-600">Building a reliable CSV import feature takes months of development and constant maintenance. Here&apos;s what goes wrong:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {problems.map((p) => (
                <div key={p.title} className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{p.badge}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">How CSVBox solves Everything</h2>
            <p className="text-gray-600 mb-10">We&apos;ve spent years perfecting CSV imports so you don&apos;t have to.</p>
            <div className="space-y-12">
              {solutions.map((s, i) => (
                <div key={s.title} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                    {s.cta && (
                      <Link href="https://app.csvbox.io/register" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                        {s.cta}
                      </Link>
                    )}
                  </div>
                  <div className="flex-1">
                    <Image src={s.img} alt={s.title} width={480} height={300} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer First */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-4">Developer First</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Integrate in Minutes, Not Weeks</h2>
            <p className="text-gray-600 text-sm">Drop an embeddable component into your app. No backend configuration or infrastructure management required.</p>
          </div>
        </section>

        {/* Industries */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Perfect for Every Industry</h2>
            <p className="text-gray-600 mb-8 text-sm">See how businesses across industries turn messy spreadsheets into clean, trusted data with csvbox.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="p-4 border border-gray-100 rounded-xl bg-gray-50 text-center">
                  <Image src={ind.img} alt={ind.name} width={80} height={80} className="w-12 h-12 object-contain mx-auto mb-3" unoptimized />
                  <h3 className="font-semibold text-gray-900 text-xs mb-1">{ind.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build vs Buy */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Build vs Buy: The Real Cost</h2>
            <p className="text-gray-600 mb-8 text-sm">Building CSV import in-house seems simple, but the hidden costs add up fast</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider"></th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 text-xs uppercase tracking-wider">Building Inhouse</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700 text-xs uppercase tracking-wider">Our CSV Tool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {buildVsBuy.map(([feature, inhouse, csvbox]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                      <td className="px-4 py-3 text-red-500">{inhouse}</td>
                      <td className="px-4 py-3 text-blue-700 font-medium">{csvbox}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-sm">Everything you need to know about our CSV import tool</p>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              <strong>Start Importing</strong> <strong>CSV Files</strong> <strong>Today</strong>
            </h2>
            <p className="text-gray-600 mb-6">Join product teams building better data import experiences.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="https://help.csvbox.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
                Learn More
              </Link>
              <Link href="https://app.csvbox.io/register" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                Get Started
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
