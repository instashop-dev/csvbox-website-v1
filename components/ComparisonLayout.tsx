import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

interface TableRow { col1: string; col2: string; col3: string; }
interface BenefitCard { title: string; desc: string; }
interface WhyCsvBoxCard { title: string; desc: string; }

interface ComparisonLayoutProps {
  competitor: string;
  heroH1: React.ReactNode;
  heroSubtitle: string;
  qualTable: { headers: [string, string, string]; rows: [string, string, string][]; intro?: string; };
  techTable: { rows: [string, string, string][]; };
  bizTable: { rows: [string, string, string][]; };
  benefits: BenefitCard[];
  summary: string;
  whyCsvBox?: WhyCsvBoxCard[];
}

function CheckIcon({ val }: { val: string }) {
  if (val.startsWith("✅") || val === "Yes") return <span className="text-green-600 font-medium">✅ {val.replace("✅","").trim() || "Yes"}</span>;
  if (val.startsWith("❌") || val === "No") return <span className="text-red-500 font-medium">❌ {val.replace("❌","").trim() || "No"}</span>;
  if (val.startsWith("⚙️")) return <span className="text-amber-500 font-medium">⚙️ {val.replace("⚙️","").trim()}</span>;
  return <span>{val}</span>;
}

const defaultWhyCsvBox: WhyCsvBoxCard[] = [
  { title: "Developer-First Design", desc: "Clean APIs, React/JS SDKs, sandbox testing, and event hooks. Built to drop into modern stacks without glue code." },
  { title: "Full Import Stack in One Tool", desc: "Upload, map, validate, transform, deliver, monitor. No need to stitch together libraries, UI, and custom validation logic." },
  { title: "Production-Proven Scale", desc: "Handles millions of rows, resumable uploads, parallel validation, and enterprise-grade security out of the box." },
  { title: "Enterprise Security Without the Overhead", desc: "SOC 2 Type II, GDPR, encryption, private mode, data residency — included from day one, even on startup plans." },
  { title: "Saves Engineering Months", desc: "4–6 months of dev time avoided, plus ongoing support & maintenance overhead. Teams using CSVBox report 5-10× faster onboarding and drastically fewer support tickets." },
  { title: "Startup-Friendly Pricing", desc: "Full-fledged importer at a fraction of the 'enterprise-only' competition. Flexible plans that grow with you." },
];

export default function ComparisonLayout({ competitor, heroH1, heroSubtitle, qualTable, techTable, bizTable, benefits, summary, whyCsvBox = [] }: ComparisonLayoutProps) {
  const displayWhyCsvBox = whyCsvBox.length > 0 ? whyCsvBox : defaultWhyCsvBox;

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-16 pb-12 sm:pt-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/csvbox-alternatives" }, { label: `vs ${competitor}` }]} />
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-5">CSV Importers</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">{heroH1}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-8 leading-relaxed">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="https://app.csvbox.io/register" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm">
                Start Free
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
              <Link href="/demo" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors">
                Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Qualitative table */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-extrabold text-gray-900 mb-4">Why CSVBox Feels Effortless</h2>
            {qualTable.intro && <p className="text-gray-600 mb-6 text-sm leading-relaxed">{qualTable.intro}</p>}
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    {qualTable.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {qualTable.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                      <td className="px-4 py-3 text-gray-600">{row[1]}</td>
                      <td className="px-4 py-3 text-gray-800 font-medium">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technical comparison */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Technical Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider w-1/3">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700 text-xs uppercase tracking-wider">CSVBox</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 text-xs uppercase tracking-wider">{competitor}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {techTable.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                      <td className="px-4 py-3"><CheckIcon val={row[1]} /></td>
                      <td className="px-4 py-3 text-gray-600"><CheckIcon val={row[2]} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Business comparison */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Business Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider w-1/3">Category</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700 text-xs uppercase tracking-wider">CSVBox</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 text-xs uppercase tracking-wider">{competitor}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {bizTable.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                      <td className="px-4 py-3 font-medium text-blue-700">{row[1]}</td>
                      <td className="px-4 py-3 text-gray-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefit cards */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Why Growing SaaS Teams Choose CSVbox</h2>
            <p className="text-gray-600 mb-8 text-sm">Simpler. Faster. More Transparent.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="p-5 border border-gray-100 rounded-xl bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{b.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-700 font-medium text-sm">{summary}</p>
          </div>
        </section>

        {/* Why CSVBox? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">Why CSVBox?</h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">For SaaS teams that need clean imports, fast.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayWhyCsvBox.map((card) => (
                <div key={card.title} className="p-6 border border-gray-200 rounded-xl bg-white">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
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
