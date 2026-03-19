import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Customer Stories | CSVBox Case Studies & Success Stories",
  description: "Discover how SaaS, HR-Tech, and FinTech companies use CSVBox to streamline CSV imports, automate onboarding, validate data, and reduce errors through real customer stories.",
};

const caseStudies = [
  {
    slug: "monetizachat",
    company: "MonetizaChat",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/2cvme041o8aoorgz.png",
    headline: "How MonetizaChat Enabled Seamless Customer Data Imports with CSVBox",
    excerpt: "Integrated CSVBox in less than a day to add a self-serve CSV import plugin, enabling customers to upload their own data directly.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "peopleboxai",
    company: "Peoplebox.ai",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/leg2g4tb98v1alcz.webp",
    headline: "How CSVBox Helped Peoplebox.ai Simplify CSV Imports and Speed Up User Onboarding",
    excerpt: "Replaced a fragile S3-based process with a fast, user-friendly import experience — integrated in 1–3 days.",
    stats: [{ label: "Integration time", value: "<3 days" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "99minds",
    company: "99minds",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/8kbm6orz9bmnlgvs.svg",
    headline: "How 99minds Simplified CSV Imports and Reduced Support Overhead with CSVBox",
    excerpt: "Replaced manual uploads with a self-serve import flow, significantly lowering support tickets around CSV uploads.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "jarvi-tech",
    company: "Jarvi Tech",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/7mxl1r8uy4k6xows.svg",
    headline: "How Jarvi Tech Integrated CSV Imports in a Day Using CSVBox",
    excerpt: "Shipped a production-ready CSV import experience for candidate and company data without building complex infrastructure.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "booksource",
    company: "BookSource",
    logo: null,
    headline: "How BookSource Simplified CSV Imports and Reduced Data Errors with CSVBox",
    excerpt: "Created a reliable, low-maintenance data upload workflow. CSVBox became a 'set-and-forget' solution for their operations.",
    stats: [{ label: "Integration time", value: "<1 week" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "exclusion-screening",
    company: "Exclusion Screening",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/rqbpi5249fqh5384.webp",
    headline: "Exclusion Screening Saved 20+ Hours a Week on CSV Imports",
    excerpt: "Replaced labor-intensive CSV handling with automated validation and self-serve uploads, reclaiming 50+ hours per week.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Hours saved/week", value: "50+" }, { label: "Manual handling", value: "Zero" }],
  },
];

export default function CustomersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Compact hero */}
        <section className="pt-16 pb-10 sm:pt-20 px-4 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-5">Customers</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Customer Stories</h1>
            <p className="text-lg text-gray-600">Real teams. Real results.</p>
          </div>
        </section>

        {/* Case study cards */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/customers/${cs.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {cs.logo ? (
                    <Image src={cs.logo} alt={cs.company} width={80} height={28} className="h-7 w-auto object-contain" unoptimized />
                  ) : (
                    <span className="font-bold text-gray-900">{cs.company}</span>
                  )}
                </div>
                <h2 className="font-bold text-gray-900 mb-2 text-base leading-snug group-hover:text-blue-600 transition-colors">
                  {cs.headline}
                </h2>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{cs.excerpt}</p>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-lg font-extrabold text-blue-600">{s.value}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
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
