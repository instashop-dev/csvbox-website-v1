import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing - CSV Importer for Every Team Size",
  description: "Transparent CSV importer pricing. Free tier available. Pay-as-you-grow plans from $19/month. Enterprise options available.",
};

const tiers = [
  {
    name: "Sandbox",
    price: "$0",
    period: "/month",
    desc: "For testing and evaluation",
    cta: "Get Started Free",
    ctaHref: "https://app.csvbox.io/register",
    highlight: false,
    features: [
      "100 imports/month",
      "1 sheet",
      "CSV & XLSX support",
      "Basic validations",
      "Community support",
    ],
  },
  {
    name: "Startup",
    price: "$19",
    period: "/month",
    desc: "For early-stage products",
    cta: "Get Started",
    ctaHref: "https://app.csvbox.io/register",
    highlight: false,
    features: [
      "1,000 imports/month",
      "3 sheets",
      "Custom validations",
      "Webhooks",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "For growing SaaS teams",
    cta: "Get Started",
    ctaHref: "https://app.csvbox.io/register",
    highlight: true,
    badge: "Most Popular",
    features: [
      "10,000 imports/month",
      "10 sheets",
      "JS transforms",
      "Import Links",
      "Priority support",
    ],
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    desc: "For scaling products",
    cta: "Get Started",
    ctaHref: "https://app.csvbox.io/register",
    highlight: false,
    features: [
      "50,000 imports/month",
      "Unlimited sheets",
      "Private mode",
      "Data residency",
      "Dedicated support",
    ],
  },
  {
    name: "Plus",
    price: "Custom",
    period: "",
    desc: "For enterprise teams",
    cta: "Contact Us",
    ctaHref: "https://share.hsforms.com/1ubpg6RBoQgKOISkRMEViwg5auur",
    highlight: false,
    features: [
      "Unlimited imports",
      "Unlimited sheets",
      "SOC 2 Type II",
      "SLA guarantee",
      "Dedicated Slack channel",
    ],
  },
];

const pricingFaq = [
  {
    question: "Is there a free plan?",
    answer: "Yes. The Sandbox plan is free forever with 100 imports/month. No credit card required.",
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "What counts as an import?",
    answer: "Each time a user uploads and completes a CSV/Excel import through your embedded widget counts as one import.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes. Annual plans are available with a discount. Contact us for annual pricing details.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) through our secure Stripe payment gateway.",
  },
];

const featureComparison = [
  { feature: "Imports", sandbox: "100", startup: "1K", pro: "5K", growth: "10K", plus: "10K" },
  { feature: "Rows per Import", sandbox: "5", startup: "10K", pro: "50K", growth: "100K", plus: "500K" },
  { feature: "Remove Branding", sandbox: "No", startup: "No", pro: "No", growth: "Yes", plus: "Yes" },
  { feature: "Custom Styling", sandbox: "No", startup: "No", pro: "Yes", growth: "Yes", plus: "Yes" },
  { feature: "AI Bulk Transforms", sandbox: "No", startup: "No", pro: "No", growth: "Yes", plus: "Yes" },
  { feature: "Team Members", sandbox: "3", startup: "3", pro: "5", growth: "7", plus: "10" },
];

const commonFeatures = [
  {
    category: "Core Import & File Handling",
    features: [
      "CSV, XLS, XLSX files supported",
      "Auto-detect delimiter, headers, encoding, date/number formats",
      "Multi-sheet selection; sheet-without-headers support",
      "Large file support with configurable size & row limits",
      "Drag-and-drop and copy-paste support",
      "Incremental uploads & resume failed upload",
      "Client-side preview before submit",
      "Header row selection",
    ],
  },
  {
    category: "Column Mapping & Schema",
    features: [
      "Unlimited Schemas",
      "Smart/AI column matching to target schema",
      "Required/optional fields & default values",
      "Dynamic code based columns",
      "Dynamic user attributes",
      "List/enum constraints & reference lookups",
      "Saved mappings; auto-apply on next upload",
      "Custom mapping keywords",
      "Virtual/derived columns",
    ],
  },
  {
    category: "Validation & Data Quality",
    features: [
      "Built-in validators (type, length, range, regex)",
      "Cross-field & row-level rules",
      "Server-side validation",
      "Custom JavaScript validators",
      "Duplicate detection",
      "Cell/row/table error flagging with inline messages",
      "Downloadable error reports (Excel)",
      "Find and Replace",
      "Normalization (trim, case, whitespace)",
      "Conditional transforms (IF/ELSE rules)",
    ],
  },
  {
    category: "User Experience (UX)",
    features: [
      "Multiple languages",
      "Skippable steps",
      "Progress indicators",
      "Mobile-responsive",
      "Inline help, tooltips & sample file downloads",
      "Light/Dark mode",
      "1-click import option",
    ],
  },
  {
    category: "Integrations & Destinations",
    features: [
      "Test API via webhooks.csvbox.io",
      "Direct API ingestion (REST)",
      "Database loaders via your API (Postgres/MySQL)",
      "Client side import",
      "Zapier / n8n / Make triggers (through webhooks)",
      "Direct Import Links",
      "App-specific payload templates (JSON/CSV) (coming soon)",
    ],
  },
  {
    category: "Developer Experience (DX)",
    features: [
      "JavaScript SDK & drop-in widget",
      "Dynamic schemas",
      "Environment variables",
      "Event hooks & callbacks",
      "Typed payloads & example code snippets",
      "Test API service",
      "Detailed API docs",
    ],
  },
  {
    category: "Performance & Scale",
    features: [
      "Streaming upload & chunking",
      "Parallel validation pipeline",
      "Concurrency controls & rate limits",
      "Row throughput targets (tiered)",
      "CDN edge delivery for widget",
      "Background processing & async completion webhooks",
    ],
  },
  {
    category: "Security, Privacy & Compliance",
    features: [
      "Private Mode (no data retention beyond processing)",
      "Encryption in transit & at rest",
      "Data residency options",
      "GDPR alignment & DPA support",
      "SOC 2 Type II",
      "Configurable data retention windows",
      "Domain restrictions",
    ],
  },
  {
    category: "Admin, Governance & Controls",
    features: [
      "Organizations and teams",
      "Seats & roles (Owner, Admin, Developer, Finance)",
      "Usage quotas & limits dashboard",
      "Limit alerts",
      "Real-time import status",
      "Email and chat support",
    ],
  },
  {
    category: "Billing & Procurement",
    features: [
      "Monthly/annual plans",
      "Invoicing support (via Paddle)",
      "Usage-based add-ons (Custom plans)",
      "Tax/VAT handling & compliant invoices",
    ],
  },
];

const whyCsvBox = [
  "Developer-First Design",
  "Full Import Stack in One Tool",
  "Production-Proven Scale",
  "Enterprise Security Without the Overhead",
  "Saves Engineering Months",
  "Startup-Friendly Pricing",
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-12 sm:pt-28 px-4 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-6">Pricing</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Big-League Features{" "}
              <span className="block text-blue-600">Small-Team Pricing</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              All the power of a $100k in-house build importer — without the cost or engineering burden
            </p>
            <Link href="https://app.csvbox.io/register" className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
              Get Started Free
              <svg width="13" height="11" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
            </Link>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl p-6 ${
                    tier.highlight
                      ? "bg-blue-600 text-white shadow-xl ring-2 ring-blue-600 scale-[1.02]"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold text-blue-600 bg-white rounded-full shadow-sm border border-blue-100">
                      {tier.badge}
                    </span>
                  )}
                  <div className="mb-4">
                    <h2 className={`text-base font-bold mb-1 ${tier.highlight ? "text-white" : "text-gray-900"}`}>{tier.name}</h2>
                    <p className={`text-xs mb-3 ${tier.highlight ? "text-blue-100" : "text-gray-500"}`}>{tier.desc}</p>
                    <div className="flex items-end gap-1">
                      <span className={`text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-gray-900"}`}>{tier.price}</span>
                      {tier.period && <span className={`text-sm mb-1 ${tier.highlight ? "text-blue-100" : "text-gray-500"}`}>{tier.period}</span>}
                    </div>
                  </div>
                  <Link
                    href={tier.ctaHref}
                    className={`block text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors mb-5 ${
                      tier.highlight
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                  <ul className="space-y-2.5 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs">
                        <svg
                          className={`w-3.5 h-3.5 shrink-0 ${tier.highlight ? "text-blue-200" : "text-blue-600"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={tier.highlight ? "text-blue-50" : "text-gray-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Feature Comparison</h2>
              <p className="text-gray-600">Compare features across all plans</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Sandbox</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Startup</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Pro</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Growth</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Plus</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="text-center py-3 px-4 text-gray-600">{row.sandbox}</td>
                      <td className="text-center py-3 px-4 text-gray-600">{row.startup}</td>
                      <td className="text-center py-3 px-4 text-gray-600">{row.pro}</td>
                      <td className="text-center py-3 px-4 text-gray-600">{row.growth}</td>
                      <td className="text-center py-3 px-4 text-gray-600">{row.plus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Common Features Across All Plans */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Common Features Across All Plans</h2>
              <p className="text-gray-600">Everything you need to build robust data imports</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonFeatures.map((category) => (
                <div key={category.category} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-10 h-10 text-blue-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">
              &ldquo;It's unfortunate that we can't quantify how much development cost we've saved with CSVBox. It's an incredibly simple yet comprehensive solution that has saved us from a long and tedious process, bringing us to a much more efficient state.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-gray-900">Saltuk Kirac</span>
              <span className="text-gray-500">Founder @</span>
              <span className="text-gray-900 font-medium">Generative AI Atmosphere</span>
            </div>
          </div>
        </section>

        {/* Why CSVBox? */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-8">Why CSVBox?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyCsvBox.map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - before CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Pricing FAQ</h2>
              <p className="text-gray-600">Common questions about plans and billing</p>
            </div>
            <FaqAccordion items={pricingFaq} />
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
