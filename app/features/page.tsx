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

const sections = [
  {
    badge: "Core Importer",
    heading: "Ship a reliable importer in minutes, not months.",
    bullets: [
      "Plug-and-Play Widget",
      "Multi-Format Support",
      "Smart Column Mapping",
      "Progressive UX",
      "Large File Support",
      "1-Click Imports",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/l1hcl02i482sffkc.png",
    reverse: false,
  },
  {
    badge: "Data Validation",
    heading: "Catch bad data before it hits your system.",
    bullets: [
      "Built-In Validators",
      "Custom JavaScript Rules",
      "Server-Side Validation",
      "Granular Error Types",
      "Instant Feedback",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/lhjow09vmd20phc7.png",
    reverse: true,
  },
  {
    badge: "User Experience",
    heading: "Reduce drop-offs with a smooth, branded flow.",
    bullets: [
      "Branded UI",
      "Intuitive Flow",
      "Mobile-Optimized",
      "Internationalization",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/mgy9t3iaztrrr0o9.png",
    reverse: false,
  },
  {
    badge: "Integrations",
    heading: "Pipe clean data straight into your app, API, or DB",
    bullets: [
      "Direct Data Delivery",
      "Popular Connectors",
      "Cloud-Native",
      "Framework Ready",
      "Event Hooks",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/lt2k8pzc4pykndy7.png",
    reverse: true,
  },
  {
    badge: "Performance",
    heading: "Upload thousands of rows without sweating your infra.",
    bullets: [
      "Fast Uploads",
      "Parallel Validation",
      "Enterprise Scale",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/610n37dcn6ecaz2p.png",
    reverse: false,
  },
  {
    badge: "Security",
    heading: "Meet compliance requirements without rebuilding your stack.",
    bullets: [
      "Private Mode",
      "Data Residency",
      "Encryption",
      "Compliance",
      "Access Control",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/nwkkfo53cwxcz74z.png",
    reverse: true,
  },
  {
    badge: "Developer Friendly",
    heading: "Integrate fast, customize deeply",
    bullets: [
      "No Code Config",
      "REST File API",
      "React & JS SDKs",
      "Environment Variables",
      "Detailed Docs",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/1nd90a7tu2ba7vzk.png",
    reverse: false,
  },
  {
    badge: "Why Teams Love CSVBox",
    heading: "Faster onboarding, fewer tickets",
    bullets: [
      "5-10× faster onboarding vs. custom-built importers",
      "Huge reduction in customer support tickets",
      "No more 4-6 month distraction building a feature that's not your core",
      "Developer-first, enterprise-ready.",
    ],
    img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/0adgxpnnifwxq7be.png",
    reverse: true,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-12 sm:pt-28 px-4 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5 whitespace-pre-line">
              Ship Spreadsheet
              <br />
              Imports 10X Faster
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Every feature you need for bulletproof CSV imports
            </p>
            <Link
              href="https://app.csvbox.io/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              Get Started
              <svg width="13" height="11" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true">
                <path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Feature sections */}
        {sections.map((section, i) => (
          <section
            key={section.badge}
            className={`py-14 px-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div
              className={`max-w-6xl mx-auto flex flex-col ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-4">
                  {section.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                  {section.heading}
                </h2>
                <ul className="space-y-2.5 mt-6">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <Image
                  src={section.img}
                  alt={section.heading}
                  width={520}
                  height={340}
                  className="w-full rounded-xl shadow-lg border border-gray-100"
                  unoptimized
                />
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Ready to get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Create your account for free to try our product.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.csvbox.io/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                Get Started Free
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No credit card | Embed in minutes | Secure by default
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
