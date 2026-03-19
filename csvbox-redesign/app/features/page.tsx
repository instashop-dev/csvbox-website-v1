import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "CSV Importer Features - Validation, Mapping & More",
  description: "Complete CSV import features: data validation, column mapping, transforms, error handling, webhooks. See why teams choose CSVBox.",
};

const featureBlocks = [
  {
    badge: "Upload",
    title: "Smart File Upload",
    desc: "Drag-and-drop CSV upload with instant validation and real-time progress.",
    bullets: [
      "CSV, XLSX, and XLS support",
      "Automatic encoding detection",
      "Delimiter auto-detection",
      "Large file chunking",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/pzrjpvyuuexm5fz8.png",
    reverse: false,
  },
  {
    badge: "Mapping",
    title: "Intelligent Column Mapping",
    desc: "Automatically map CSV columns to your schema with AI-powered suggestions and manual override.",
    bullets: [
      "Auto-detect column names",
      "Drag-to-map interface",
      "Save mapping templates",
      "Handle renamed or missing columns",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ame5xcee4ujs8o0n.png",
    reverse: true,
  },
  {
    badge: "Validation",
    title: "Powerful Data Validation",
    desc: "Built-in rules, custom JavaScript checks, and server-side validations — catch errors before they reach your database.",
    bullets: [
      "Cell, row, and table-level validation",
      "Required fields, data types, regex",
      "Custom JS validation functions",
      "Server-side webhook validation",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/1vec75rebqbz8hyb.png",
    reverse: false,
  },
  {
    badge: "Transforms",
    title: "Data Transforms & Virtual Columns",
    desc: "Transform, format, and enrich data on the fly before it reaches your system.",
    bullets: [
      "Formula-based transforms",
      "Virtual computed columns",
      "Date/number format normalization",
      "AI-powered data cleanup",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/bgfwbiuaj5j17rj5.png",
    reverse: true,
  },
  {
    badge: "Delivery",
    title: "Flexible Data Delivery",
    desc: "Push validated data directly to your app, API, database, or third-party tools.",
    bullets: [
      "Postgres, MySQL, Supabase",
      "REST API webhooks",
      "Airtable, Google Sheets",
      "Custom destination support",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/un13k3e1spxh4qa5.png",
    reverse: false,
  },
  {
    badge: "Security",
    title: "Enterprise-Grade Security",
    desc: "Private Mode, flexible data residency, SOC 2 Type II, GDPR compliance, and end-to-end encryption.",
    bullets: [
      "SOC 2 Type II certified",
      "GDPR compliant",
      "US & EU data residency",
      "End-to-end encryption",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/3dowhx6drkab10n1.png",
    reverse: true,
  },
  {
    badge: "Developer Experience",
    title: "Built for Developers",
    desc: "Clean APIs, React/JS/Vue/Laravel SDKs, sandbox testing, and event hooks. Drop into modern stacks without glue code.",
    bullets: [
      "React, Vue, Angular, Vanilla JS SDKs",
      "Sandbox mode for testing",
      "Webhook event system",
      "Import Links (shareable upload URLs)",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/d4i5g46jmvoixg5e.png",
    reverse: false,
  },
  {
    badge: "Analytics",
    title: "Import Monitoring & Logs",
    desc: "Full visibility into every import — monitor status, errors, and data quality in real time.",
    bullets: [
      "Real-time import progress",
      "Row-level error reporting",
      "Downloadable error files",
      "Import history & audit log",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/dv9hkfg4eh7zfo7y.png",
    reverse: true,
  },
];

const featureChecklist = [
  "Embeddable widget", "Import Links", "Mobile-friendly", "White-label branding",
  "Custom validation rules", "Server-side validation", "JS transforms", "Virtual columns",
  "Webhook notifications", "Direct DB delivery", "SOC 2 Type II", "GDPR compliance",
  "Data residency", "Private mode", "Sandbox testing", "API access",
  "Backward-compatible APIs", "Multi-language support", "Large file support", "Error file download",
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-12 sm:pt-28 px-4 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-6">Features</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
              Every Feature You Need to Ship World-Class Imports
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              From validation to delivery, CSVBox handles the entire import pipeline so you don&apos;t have to.
            </p>
            <Link href="https://app.csvbox.io/register" className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
              Get Started Free
              <svg width="13" height="11" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
            </Link>
          </div>
        </section>

        {/* Feature blocks */}
        {featureBlocks.map((block, i) => (
          <section key={block.badge} className={`py-14 px-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className={`max-w-6xl mx-auto flex flex-col ${block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
              <div className="flex-1">
                <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-4">{block.badge}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">{block.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{block.desc}</p>
                <ul className="space-y-2.5">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <Image src={block.img} alt={block.title} width={520} height={340} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
              </div>
            </div>
          </section>
        ))}

        {/* Checklist */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Complete Feature List</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {featureChecklist.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner heading="Ready to ship imports 10x faster?" />
      </main>
      <Footer />
    </>
  );
}
