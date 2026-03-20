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
    slug: "exclusion-screening",
    company: "Exclusion Screening",
    category: "HEALTH-TECH . SAAS",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/rqbpi5249fqh5384.webp",
    image: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5u29uihzu4iappyc.png",
    headline: "Exclusion Screening Saved 20+ Hours a Week on CSV Imports",
    excerpt: "Replaced labor-intensive CSV handling with automated validation and self-serve uploads, reclaiming 50+ hours per week.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Hours saved/week", value: "50+" }, { label: "Manual handling", value: "Zero" }],
  },
  {
    slug: "booksource",
    company: "BookSource",
    category: "SAAS . B2B SOFTWARE",
    logo: null,
    image: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/bxh9dfs8uk47035r.png",
    headline: "How BookSource Simplified CSV Imports and Reduced Data Errors with CSVBox",
    excerpt: "Created a reliable, low-maintenance data upload workflow. CSVBox became a 'set-and-forget' solution for their operations.",
    stats: [{ label: "Integration time", value: "<1 week" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "peopleboxai",
    company: "Peoplebox.ai",
    category: "SAAS . HR-TECH",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/leg2g4tb98v1alcz.webp",
    image: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/j4hnndsbmaq86qht.png",
    headline: "How CSVBox Helped Peoplebox.ai Simplify CSV Imports and Speed Up User Onboarding",
    excerpt: "Replaced a fragile S3-based process with a fast, user-friendly import experience — integrated in 1–3 days.",
    stats: [{ label: "Integration time", value: "<3 days" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "jarvi-tech",
    company: "Jarvi Tech",
    category: "SAAS . HR-TECH",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/7mxl1r8uy4k6xows.svg",
    image: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/t01bc67m7fxt2hqv.png",
    headline: "How Jarvi Tech Integrated CSV Imports in a Day Using CSVBox",
    excerpt: "Shipped a production-ready CSV import experience for candidate and company data without building complex infrastructure.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "99minds",
    company: "99minds",
    category: "SAAS . FINTECH",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/8kbm6orz9bmnlgvs.svg",
    image: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/b4o6dflfsi4qerv3.png",
    headline: "How 99minds Simplified CSV Imports and Reduced Support Overhead with CSVBox",
    excerpt: "Replaced manual uploads with a self-serve import flow, significantly lowering support tickets around CSV uploads.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
  {
    slug: "monetizachat",
    company: "MonetizaChat",
    category: "SAAS . FINTECH",
    logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/2cvme041o8aoorgz.png",
    image: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/7xq78rpey8gkbxr0.png",
    headline: "How MonetizaChat Enabled Seamless Customer Data Imports with CSVBox",
    excerpt: "Integrated CSVBox in less than a day to add a self-serve CSV import plugin, enabling customers to upload their own data directly.",
    stats: [{ label: "Integration time", value: "<1 day" }, { label: "Customer success rate", value: "90%" }, { label: "Cost saved", value: "$1,000+" }],
  },
];

const customerLogos = [
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/lp9qd6ojelwzg88w.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/7ugtancjkuvr2ww8.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/wLEWQosOrMsIIwWt.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/rlbibvn2iiw0ubvd.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/iuspy2nwmaau1eb6.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/1i8hqjn99j9uzd0m.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5xl75d1vw36b1c1h.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/x2zg9kju5cde79ky.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/bboftpxlu2v36yqu.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/kgvmp9lhuv40viq6.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/DzBbMTIeXeQjFATg.png",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/PcpMjSAUehlldasC.png",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5w3c2y6izkb8oacz.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ajsgcrluawrw3h2j.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/w2tm0dy409h71ipf.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/xw2rpuovc3udos1h.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/otww247tvvfiiw68.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/e7p682wckhqou9y1.svg",
  "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/agsd4mkhpbo37ksd.svg",
];

export default function CustomersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero section */}
        <section className="pt-16 pb-12 px-4 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-5">Customers</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              How Real Teams Ship Better CSV Imports with CSVBox
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From faster onboarding to fewer support tickets — see how growing SaaS teams use CSVBox to launch reliable spreadsheet imports without custom builds.
            </p>
          </div>
        </section>

        {/* Case study cards */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/customers/${cs.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {cs.image && (
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image src={cs.image} alt={cs.company} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">{cs.category}</span>
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
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Customer logos section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Trusted by teams at</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {customerLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-12">
                  <Image src={logo} alt={`Customer logo ${index + 1}`} width={100} height={40} className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Teams Love CSVBox */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Faster onboarding, fewer tickets
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">5-10× faster onboarding vs. custom-built importers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Huge reduction in customer support tickets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No more 4-6 month distraction building a feature that's not your core.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Developer-first, enterprise-ready.</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image 
                  src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/0adgxpnnifwxq7be.png" 
                  alt="Why Teams Love CSVBox" 
                  width={600} 
                  height={400} 
                  className="rounded-2xl shadow-lg"
                  unoptimized 
                />
              </div>
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
