import type { Metadata } from "next";
import ComparisonLayout from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "CSVBox vs Oneschema - Which CSV Importer is Right?",
  description: "Both are great spreadsheet importers — but CSVBox gives you the same capabilities with a simpler setup, stable APIs, and a mobile-ready experience.",
};

export default function OneSchemaPage() {
  return (
    <ComparisonLayout
      competitor="OneSchema"
      heroH1={<>CSVBox vs Oneschema <br /><em>The same power — at 1/20th the cost.</em></>}
      heroSubtitle="Both are great spreadsheet importers — but CSVBox gives you the same capabilities with a simpler setup, stable APIs, and a mobile-ready experience that scales with your product, not your costs."
      qualTable={{
        headers: ["What to Look For", "Why It Matters", "How CSVBox Wins"],
        rows: [
          ["Ease of Integration", "Setup time directly impacts time-to-value.", "Drop in a single script — integrate in 15–30 mins."],
          ["Mobile Experience", "Your users import from any device.", "The only importer truly optimized for mobile."],
          ["Import Links", "Share upload flows without embedding.", "✅ Supported — not available in OneSchema."],
          ["API Stability", "Breaking changes cost engineering time.", "Backward-compatible since day one. Zero rework."],
          ["Data Destinations", "Push data where it needs to go.", "Direct to DBs, APIs, Airtable, and more."],
          ["Pricing", "Predictability enables planning.", "Public plans from $19/mo — no enterprise quotes."],
        ],
      }}
      techTable={{
        rows: [
          ["Embeddable widget", "Yes", "Yes"],
          ["1-click import", "Yes", "Yes"],
          ["Custom JS validation", "Yes", "Limited"],
          ["Transformations / virtual columns", "Yes", "No"],
          ["Private mode / self-hosted", "Yes", "Not available"],
          ["Headless Mode", "Limited", "Full fledged"],
          ["Mobile friendly imports", "Yes", "Not supported"],
          ["Import Links", "Yes", "Not supported"],
          ["Data Destinations", "Multiple", "API only"],
          ["API Stability", "Backward-compatible, zero breaking changes", "Frequent API changes cause rework"],
        ],
      }}
      bizTable={{
        rows: [
          ["Ease of integration", "Drop-in, no SDK", "SDK-based"],
          ["Setup time", "15–30 mins", "Days to weeks"],
          ["Pricing transparency", "Public", "Enterprise quote"],
          ["Sales experience", "Self-serve", "Sales-led onboarding"],
          ["Free plan", "Yes", "No"],
          ["Target audience", "Startups, Mid market SaaS", "Enterprises"],
          ["Paid Plans", "Starts $19/mo", "Premium enterprise"],
        ],
      }}
      benefits={[
        { title: "Save thousands per year", desc: "Same core features, no enterprise markup." },
        { title: "Delight users everywhere", desc: "The only importer truly optimized for mobile." },
        { title: "Connect directly", desc: "Push validated data straight to your database or API." },
        { title: "Give developers control", desc: "Custom validations, transformations, branding." },
        { title: "Enterprise-grade security", desc: "SOC 2 Type II, GDPR, data residency options for all plans" },
        { title: "Integrate in minutes", desc: "No meetings. No waiting. Just ship." },
      ]}
      whyCsvBox={[
        { title: "Developer-First Design", desc: "Clean APIs, React/JS SDKs, sandbox testing, and event hooks. Built to drop into modern stacks without glue code." },
        { title: "Full Import Stack in One Tool", desc: "Upload, map, validate, transform, deliver, monitor. No need to stitch together libraries, UI, and custom validation logic." },
        { title: "Production-Proven Scale", desc: "Handles millions of rows, resumable uploads, parallel validation, and enterprise-grade security out of the box." },
        { title: "Enterprise Security Without the Overhead", desc: "SOC 2 Type II, GDPR, encryption, private mode, data residency — included from day one, even on startup plans." },
        { title: "Saves Engineering Months", desc: "4–6 months of dev time avoided, plus ongoing support & maintenance overhead. Teams using CSVBox report 5-10× faster onboarding and drastically fewer support tickets." },
        { title: "Startup-Friendly Pricing", desc: "Full-fledged importer at a fraction of the 'enterprise-only' competition. Flexible plans that grow with you." },
      ]}
      summary="CSVbox offers fast developer setup with enterprise features at startup pricing - the sweet spot between complexity and capability. Why pay 20× more when you can get the same functionality, faster setup, and better UX — all for $19/month?"
    />
  );
}
