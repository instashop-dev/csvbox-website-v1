import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "CSV Importer Alternatives - Compare Tools | CSVBox",
  description: "Choosing the right CSV importer depends on your team size, technical requirements, and budget. Here's how CSVBox compares to other solutions.",
};

const whyFeatures = [
  { title: "Developer-First Design", desc: "Clean APIs, React/JS SDKs, sandbox testing, and event hooks. Built to drop into modern stacks without glue code." },
  { title: "Full Import Stack in One Tool", desc: "Upload, map, validate, transform, deliver, monitor. No need to stitch together libraries, UI, and custom validation logic." },
  { title: "Production-Proven Scale", desc: "Handles millions of rows, resumable uploads, parallel validation, and enterprise-grade security out of the box." },
  { title: "Enterprise Security Without the Overhead", desc: "SOC 2 Type II, GDPR, encryption, private mode, data residency — included from day one, even on startup plans." },
  { title: "Saves Engineering Months", desc: "4–6 months of dev time avoided, plus ongoing support & maintenance overhead. Teams using CSVBox report 5–10× faster onboarding and drastically fewer support tickets." },
  { title: "Startup-Friendly Pricing", desc: "Full-fledged importer at a fraction of the \"enterprise-only\" competition. Flexible plans that grow with you." },
];

export default function AlternativesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-10 sm:pt-28 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-5">CSV Importer Comparisons</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                CSVbox <br />Alternatives &amp; Competitors
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Choosing the right CSV importer depends on your team size, technical requirements, and budget. Here&apos;s how CSVBox compares to other solutions.
              </p>
              <Link href="https://app.csvbox.io/register" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                Get Started Free
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
            </div>
            <div className="flex-1">
              <Image src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/roz5yjq3ko388nul.png" alt="CSV importer alternatives" width={520} height={340} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
            </div>
          </div>
        </section>

        {/* Alternatives list */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Alternatives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Flatfile", slug: "flatfile" },
                { name: "OneSchema", slug: "oneschema" },
                { name: "Dromo", slug: "dromo" },
              ].map((alt) => (
                <Link
                  key={alt.slug}
                  href={`/alternatives/${alt.slug}`}
                  className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <span className="font-semibold text-gray-900">{alt.name}</span>
                  <span className="text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Compare
                    <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why CSVBox */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-4">Why CSVBox?</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">For SaaS teams that need clean imports, fast.</h2>
              <p className="text-gray-600">Not another &ldquo;<strong>CSV upload button.</strong>&rdquo; Here&apos;s what makes us different:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyFeatures.map((f) => (
                <div key={f.title} className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          heading="Ready to get Started?"
          subheading="Create your account for free to try our product."
          ctaLabel="Get Started Free"
        />
      </main>
      <Footer />
    </>
  );
}
