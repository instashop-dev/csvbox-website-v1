import type { Metadata } from "next";
import ComparisonLayout from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "CSVBox vs Dromo - AI-Powered CSV Importer Comparison",
  description: "Dromo offers a polished importer — but CSVBox gives you deeper validations, direct integrations, higher row limits, and a simpler setup at $19/month.",
};

export default function DromoPage() {
  return (
    <ComparisonLayout
      competitor="Dromo"
      heroH1={<>CSVBox vs Dromo <br /><em>Cut Costs, Not Capability.</em></>}
      heroSubtitle="Dromo offers a polished importer — but it stops short where teams need flexibility. CSVBox gives you deeper validations, direct integrations, higher row limits, and a simpler setup — all starting at $19/month."
      qualTable={{
        headers: ["What to Look For", "Why It Matters", "How CSVBox Wins"],
        intro: "Dromo is designed for large enterprise data teams. CSVBox is built for builders — lightweight, intuitive, and developer-friendly. It's simple by design — fewer steps, less setup, and no hidden surprises.",
        rows: [
          ["Ease of Integration", "Setup friction slows releases.", "Drop in a single script — live in 15–30 mins."],
          ["Validation Power", "Catch errors before they hit production.", "Advanced schema + JS + server-side validations with row-, cell-, and table-level checks."],
          ["Complexity", "More options shouldn't mean confusion.", "Streamlined, intuitive, mobile-ready UI anyone can use."],
          ["Row Limits", "Many tools throttle data size.", "Import 500K rows seamlessly — no forced upgrades."],
          ["Data Destinations", "Copy-pasting data wastes time.", "Push directly to DBs, APIs, or apps like Postgres, MySQL, Supabase, Airtable, etc."],
          ["Error Handling", "Bad data creates support chaos.", "Real-time error previews and downloadable error files."],
          ["Pricing", "Predictability builds trust.", "Public plans from $19/mo — no sales calls, no surprises."],
          ["Customization", "Your importer should look native.", "Full white-label, fonts, colors, language, and logo control."],
          ["API Stability", "Breaking changes cost engineering time.", "Backward-compatible since day one. Integrate once — it just works."],
        ],
      }}
      techTable={{
        rows: [
          ["Embeddable Widget", "✅ Yes", "✅ Yes"],
          ["Setup Time", "15–30 mins", "1–2 days"],
          ["Custom Validations", "✅ Full (JS + server)", "⚙️ Limited rules"],
          ["Data Transforms / Virtual Columns", "✅ Supported", "❌ Not available"],
          ["Mobile-Friendly Imports", "✅ Yes", "⚙️ Partial"],
          ["Import Links (Shareable Uploads)", "✅ Yes", "❌ No"],
          ["Data Destinations", "Direct to DBs, APIs & Apps", "Export only"],
          ["Row Limits", "500K rows", "100K rows"],
          ["API Stability", "Always backward-compatible", "⚠️ Occasional breaking changes"],
          ["Complexity", "Lightweight, fast", "⚙️ More setup steps & configuration"],
        ],
      }}
      bizTable={{
        rows: [
          ["Integration Effort", "Drop-in, no SDK", "Requires SDK setup"],
          ["Setup Time", "15–30 mins", "1–2 days"],
          ["Pricing", "Transparent & Public", "Quote-based tiers"],
          ["Free Plan", "✅ Yes", "⚙️ Limited trial"],
          ["Sales Experience", "Self-Serve", "Contact-based"],
          ["Target Audience", "Startups & Mid-Market SaaS", "SMBs & Enterprise"],
          ["Starting Price", "$19/month", "$499+/month"],
          ["Learning Curve", "🧠 Simple & fast", "⚙️ Moderate"],
          ["Data Destinations", "Direct push to DBs/APIs", "API only"],
        ],
      }}
      benefits={[
        { title: "Save 15–20× on pricing", desc: "Same core features, no enterprise markup." },
        { title: "Delight users everywhere", desc: "The only importer truly optimized for mobile." },
        { title: "Connect directly", desc: "Push validated data straight to your database or API." },
        { title: "Low learning curve", desc: "Developers love how little config it needs." },
        { title: "Enterprise-grade security", desc: "SOC 2 Type II, GDPR, data residency options for all plans" },
        { title: "Integrate in minutes", desc: "No SDK, no sales calls, no complexity." },
        { title: "Stable APIs", desc: "Always backward compatible. No rework." },
        { title: "More validation power", desc: "Customized cell, row, and table-level error handling" },
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
      summary="Cut costs by 90%, boost validation depth, and scale past row limits. CSVBox does more, faster, for far less."
    />
  );
}
