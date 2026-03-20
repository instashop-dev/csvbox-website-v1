import type { Metadata } from "next";
import ComparisonLayout from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "CSVBox vs Flatfile - CSV Importer Comparison",
  description: "Get the same enterprise-grade importing experience — with none of the complexity. CSVBox is lightweight, fast, mobile-friendly, and 20× more affordable.",
};

export default function FlatfilePage() {
  return (
    <ComparisonLayout
      competitor="Flatfile"
      heroH1={<>CSVBox vs Flatfile <br /><em>Power Without the Bloat</em></>}
      heroSubtitle="Get the same enterprise-grade importing experience — with none of the complexity. CSVBox is lightweight, fast, mobile-friendly, and 20× more affordable."
      qualTable={{
        headers: ["What to Look For", "Why It Matters", "How CSVBox Wins"],
        intro: "Flatfile is designed for large enterprise data teams. CSVBox is built for builders — lightweight, intuitive, and developer-friendly. It's simple by design — fewer steps, less setup, and no hidden surprises.",
        rows: [
          ["Ease of Integration", "Time is your most valuable resource.", "Drop in a single script — integrate in 15–30 mins."],
          ["Learning Curve", "Steep learning slows adoption.", "Minimal setup. Clear docs. Works out of the box."],
          ["User Experience", "Every click should feel natural.", "Clean, mobile-optimized, non-clunky interface."],
          ["Validation & Control", "Keep bad data out before it reaches your DB.", "Schema, JS, and server-side validation built-in."],
          ["Complexity", "Overengineering slows teams down.", "Lightweight and elegant — everything you need, nothing you don't."],
          ["Pricing Transparency", "Predictability builds trust.", "Public plans from $19/mo, no sales calls or quotes."],
          ["Security & Compliance", "Data protection builds brand trust.", "SOC 2 Type II, GDPR, and regional data residency included."],
          ["Maintenance Overhead", "Stability saves countless hours.", "Backward-compatible APIs. Integrate once, never redo."],
          ["Customer-Driven Development", "Tools should evolve with real users.", "Built on direct customer feedback — new improvements released weekly."],
        ],
      }}
      techTable={{
        rows: [
          ["Embeddable Widget", "✅ Yes", "✅ Yes"],
          ["Setup Time", "15–30 mins", "Days to weeks"],
          ["SDK Required", "❌ No", "✅ Yes"],
          ["Custom JS Validations", "✅ Full Control", "⚙️ Limited"],
          ["Data Transforms / Virtual Columns", "✅ Supported", "❌ Not Available"],
          ["Mobile-Friendly Imports", "✅ Yes", "❌ Not Optimized"],
          ["Import Links (Shareable Uploads)", "✅ Yes", "❌ No"],
          ["Data Destinations", "DBs, APIs & Apps (Postgres, MySQL, Supabase, Airtable, etc.)", "API Only"],
          ["API Stability", "Always backward-compatible", "❌ Frequent breaking changes"],
          ["Complexity", "Lightweight, fast", "⚙️ Heavy, enterprise-grade SDKs"],
        ],
      }}
      bizTable={{
        rows: [
          ["Integration Effort", "Drop-in, no SDK", "SDK setup required"],
          ["Setup Time", "15–30 mins", "Several days"],
          ["Pricing", "Transparent & Public", "Quote-based"],
          ["Free Plan", "✅ Yes", "❌ No"],
          ["Sales Experience", "Self-Serve", "Sales-Led"],
          ["Target Audience", "Startups & Mid-Market SaaS", "Enterprise"],
          ["Starting Price", "$19/month", "$500+/month"],
          ["Learning Curve", "🧠 Simple & fast", "⚙️ Complex & rigid"],
          ["Customer Feedback Loop", "Continuous improvement based on real users", "❌ Vendor-paced roadmap"],
        ],
      }}
      benefits={[
        { title: "Save thousands per year", desc: "Same core features, no enterprise markup." },
        { title: "Delight users everywhere", desc: "The only importer truly optimized for mobile." },
        { title: "Connect directly", desc: "Push validated data straight to your database or API." },
        { title: "Low learning curve", desc: "Developers love how little config it needs." },
        { title: "Enterprise-grade security", desc: "SOC 2 Type II, GDPR, data residency options for all plans" },
        { title: "Integrate in minutes", desc: "No SDK, no sales calls, no complexity." },
        { title: "Stable APIs", desc: "Always backward compatible. No rework." },
        { title: "Lightweight & efficient", desc: "Non-clunky UI with instant feedback." },
        { title: "Customer driven development", desc: "Your feedback shapes our roadmap" },
      ]}
      whyCsvBox={[
        { title: "Developer-First Design", desc: "Clean APIs, React/JS SDKs, sandbox testing, and event hooks. Built to drop into modern stacks without glue code." },
        { title: "Full Import Stack in One Tool", desc: "Upload, map, validate, transform, deliver, monitor. No need to stitch together libraries, UI, and custom validation logic." },
        { title: "Production-Proven Scale", desc: "Handles millions of rows, resumable uploads, parallel validation, and enterprise-grade security out of the box." },
        { title: "Enterprise Security Without the Overhead", desc: "SOC 2 Type II, GDPR, encryption, private mode, data residency — included from day one, even on startup plans." },
        { title: "Saves Engineering Months", desc: "4–6 months of dev time avoided, plus ongoing support & maintenance overhead. Teams using CSVBox report 5-10× faster onboarding and drastically fewer support tickets." },
        { title: "Startup-Friendly Pricing", desc: "Full-fledged importer at a fraction of the 'enterprise-only' competition. Flexible plans that grow with you." },
      ]}
      summary="Cut setup time by 90%, costs by 20×, and complexity by 100%. CSVBox is everything Flatfile promised — simplified."
    />
  );
}
