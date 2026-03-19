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
