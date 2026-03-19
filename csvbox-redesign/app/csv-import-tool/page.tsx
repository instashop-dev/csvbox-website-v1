import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "A CSV Import Tool Built for Clean, Reliable Data Flow | CSVBox",
  description: "Production-ready CSV import pipeline that handles schema mapping, validation, and error recovery - so users upload data in seconds, not hours.",
};

const problems = [
  { badge: "⚠️ Most Common", title: "Data Format Chaos", desc: "Every user uploads a different CSV — date formats, encodings, delimiters, and headers never match.", bullets: ["Inconsistent date formats", "Missing or renamed columns", "Unexpected delimiters"] },
  { badge: "❗ High Friction", title: "Poor Error Messages", desc: "Errors like 'Row 4823 failed' don't help users understand what went wrong or how to fix it.", bullets: ["No field-level feedback", "Users stuck guessing fixes", "Support tickets increase"] },
  { badge: "⏳ Performance", title: "Slow Processing", desc: "Large CSV files freeze the browser or fail silently during import.", bullets: ["UI becomes unresponsive", "No progress visibility", "Users abandon imports"] },
  { badge: "🗄️ Risky", title: "Database Corruption", desc: "Partial imports leave your database in an inconsistent state with no easy rollback.", bullets: ["Broken relationships", "Duplicate records", "Manual cleanup required"] },
  { badge: "🛠️ Engineering Cost", title: "Endless Maintenance", desc: "Every edge case introduces new bugs. Engineers spend more time fixing imports than shipping features.", bullets: ["Hard-to-test edge cases", "Constant regressions", "High opportunity cost"] },
  { badge: "🙍 User Impact", title: "Poor User Experience", desc: "Confusing UI, unclear instructions, and no progress indicators frustrate users before they even finish importing.", bullets: ["No preview before import", "No success confirmation", "User churn increases"] },
];

const features = [
  { icon: "📄", title: "Smart File Upload", desc: "Drag-and-drop CSV upload with instant validation and real-time progress." },
  { icon: "🧩", title: "Schema-Based Mapping", desc: "Automatically detect and map CSV columns to your database schema." },
  { icon: "✅", title: "Data Validation", desc: "Built-in validators for data types, formats, and business logic." },
  { icon: "⚠️", title: "Row-Level Errors", desc: "Highlight invalid rows and allow inline fixes before import." },
  { icon: "🛢️", title: "Secure Ingestion", desc: "Encrypted database connections with automatic rollback on failure." },
  { icon: "📈", title: "Real-Time Progress", desc: "Live logs and progress indicators during large imports." },
];

const industries = [
  { icon: "👥", title: "CRM & Sales Tools", desc: "Import contacts, leads, and customer data from spreadsheets with zero friction.", bullets: ["Contact list imports", "Deal pipeline migration", "Account data sync"] },
  { icon: "🛒", title: "E-commerce Platforms", desc: "Bulk product uploads, inventory updates, and order imports at scale.", bullets: ["Product catalog imports", "Inventory management", "Order history uploads"] },
  { icon: "📊", title: "Analytics & BI Tools", desc: "Let users upload large datasets with automatic type detection.", bullets: ["Custom dataset uploads", "Time-series imports", "Multi-source aggregation"] },
  { icon: "🏢", title: "HR & Payroll Systems", desc: "Securely import employee, payroll, and benefits data with validation.", bullets: ["Employee onboarding", "Payroll uploads", "Benefits enrollment"] },
  { icon: "🎓", title: "EdTech & LMS", desc: "Bulk student enrollment, grades, and course data imports.", bullets: ["Student roster imports", "Grade book uploads", "Course migration"] },
  { icon: "🏥", title: "Healthcare Systems", desc: "HIPAA-compliant patient data imports with strict validation rules.", bullets: ["Patient record imports", "Appointment sync", "Insurance verification"] },
];

export default function CsvImportToolPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-14 sm:pt-28 px-4 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-5">Built for Modern SAAS</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
              A CSV Import Tool Built for Clean,
              <br />
              Reliable Data Flow
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Production-ready CSV import pipeline that handles schema mapping, validation, and error recovery - so users upload data in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="https://help.csvbox.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
                View Documentation
              </Link>
              <Link href="https://app.csvbox.io/register" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                Try CSVbox
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex px-3 py-1 text-xs font-medium text-red-700 bg-red-50 rounded-full border border-red-100 mb-4">THE PROBLEM</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">CSV Import Shouldn&apos;t Be This Hard</h2>
              <p className="text-gray-600 text-sm">Building a reliable CSV import feature takes months of development and constant maintenance. Here&apos;s what usually goes wrong.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {problems.map((p) => (
                <div key={p.title} className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mb-3 inline-block">{p.badge}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.title}</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 font-medium mt-8">Sound familiar? There&apos;s a better way 👇</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Everything You Need for Production CSV Imports</h2>
            <p className="text-gray-600 mb-8 text-sm">Built for developers, loved by users. Every feature designed for fast, reliable, error-free imports.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Perfect for Every Industry</h2>
            <p className="text-gray-600 mb-8 text-sm">From startups to enterprises, teams use our CSV import tool to streamline data onboarding.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind) => (
                <div key={ind.title} className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <span className="text-2xl mb-3 block">{ind.icon}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{ind.title}</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{ind.desc}</p>
                  <ul className="space-y-1">
                    {ind.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-3 h-3 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          heading="Ready to ship imports 10x faster?"
          subheading="Join teams who've eliminated import headaches with CSVBox."
          ctaLabel="Start free"
        />
      </main>
      <Footer />
    </>
  );
}
