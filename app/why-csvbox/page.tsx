import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Why CSVBox – Fast, Reliable CSV Importer for SaaS Apps",
  description: "Ship data imports 10× faster. Save 90% of your build cost. Your users just want to upload their data. Your developers just want to move on.",
};

export default function WhyCsvboxPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-28 px-4 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-6">
              Why CSVbox - Fast, Reliable CSV Importer for SaaS Apps
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
              Ship data imports 10× faster.{" "}
              <br className="hidden sm:block" />
              Save 90% of your build cost.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Your users just want to upload their data.{" "}
              Your developers just want to move on.{" "}
              CSVBox makes both happen — in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="https://app.csvbox.io/register" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                Start Free
                <svg width="13" height="11" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors">
                Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Slow onboarding section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Slow onboarding kills momentum.</h2>
            <p className="text-gray-600 mb-10">
              With CSVBox, you go from <em>idea → importer → live data</em> in <strong>under 15 minutes</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Your users feel progress.", "Your product feels seamless.", "Your brand feels smart."].map((s) => (
                <div key={s} className="p-5 bg-white border border-gray-100 rounded-xl">
                  <p className="font-semibold text-gray-900">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developers */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Built for Developers Who Love Control</h2>
              <p className="text-gray-600 mb-8">Mastery without maintenance. Plug in and move fast.</p>
              <div className="space-y-5">
                {[
                  { title: "Plug and Play", desc: "2 lines of code for React, Vue, Laravel, or JS." },
                  { title: "Full Control", desc: "Custom validations, regex, and API-based checks." },
                  { title: "Transparent", desc: "Webhooks, logs, and full visibility — no black boxes." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Image src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/d4i5g46jmvoixg5e.png" alt="Developer experience" width={500} height={350} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
            </div>
          </div>
        </section>

        {/* Product Owners */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Built for Product Owners Who Think ROI</h2>
              <p className="text-gray-600 mb-8">Stop wasting sprints on imports. Launch faster, pay less, reduce churn.</p>
              <div className="space-y-5">
                {[
                  { title: "6 Weeks Dev → 15 Minutes Setup", desc: "Time saved that turns directly into velocity." },
                  { title: "0 Engineering Hours on Maintenance", desc: "CSVBox automatically handles parsing, updates, and validation logic. No upkeep required." },
                  { title: "Delightful Upload Flow = Lower Churn", desc: "Beautiful UI and real-time feedback keep users engaged and satisfied from first import." },
                  { title: "70% Fewer Support Tickets", desc: "Users fix errors instantly with smart validations." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <Image src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/dv9hkfg4eh7zfo7y.png" alt="Product owner ROI" width={500} height={350} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Privacy and Security at the Core.</h2>
              <p className="text-gray-600 mb-8">From encryption to compliance, CSVBox safeguards every import, every time.</p>
              <ul className="space-y-3">
                {[
                  "SOC 2 Type II certified infrastructure",
                  "GDPR compliant",
                  "Data residency options — US or EU",
                  "Encryption in transit and rest",
                  "Full private mode for data isolation",
                  "No data sharing or AI model training on user data",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <Image src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/3dowhx6drkab10n1.png" alt="Security" width={500} height={350} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
            </div>
          </div>
        </section>

        {/* Enterprise / Pricing Philosophy */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Enterprise Power. Startup Pricing.</h2>
            <p className="text-gray-600 mb-10">
              Launch in minutes, scale confidently with <strong>startup-level pricing</strong> and <em>no bloated enterprise plans</em>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "No enterprise lock-ins. Simple monthly plans.",
                "Free tier for testing and low-volume imports.",
                "Predictable billing — no per-import or hidden fees.",
                "Scale up or down anytime.",
                "Save hundreds compared to overpriced alternatives.",
                "Transparent. Fair. No Sales Calls.",
              ].map((item) => (
                <div key={item} className="p-4 bg-white border border-gray-100 rounded-xl">
                  <p className="text-sm font-medium text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
