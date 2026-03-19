import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";

interface Stat { value: string; label: string; desc: string; }
interface Section { badge: string; heading: string; body: React.ReactNode; }

interface CaseStudyLayoutProps {
  company: string;
  logo?: string;
  heroImage: string;
  headline: string;
  subheadline: string;
  stats: Stat[];
  sections: Section[];
  testimonial: { quote: string; name: string; title: string; logo?: string; };
  nextSlug?: string;
  nextCompany?: string;
}

export default function CaseStudyLayout({
  company,
  logo,
  heroImage,
  headline,
  subheadline,
  stats,
  sections,
  testimonial,
  nextSlug,
  nextCompany,
}: CaseStudyLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-16 pb-0 sm:pt-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Customers", href: "/customers" }, { label: company }]} />
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-5">Case Study</span>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1 pb-10">
                {logo && (
                  <Image src={logo} alt={company} width={120} height={40} className="h-8 w-auto object-contain mb-5" unoptimized />
                )}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">{headline}</h1>
                <p className="text-gray-600 leading-relaxed">{subheadline}</p>
              </div>
              <div className="w-full lg:w-2/5 shrink-0">
                <Image src={heroImage} alt={headline} width={520} height={340} className="w-full rounded-xl shadow-lg border border-gray-100" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">{s.value}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{s.label}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / Why / After */}
        {sections.map((sec, i) => (
          <section key={sec.badge} className={`py-14 px-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-4">
                {sec.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5">{sec.heading}</h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
                {sec.body}
              </div>
            </div>
          </section>
        ))}

        {/* Testimonial */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-sm">
              {testimonial.logo && (
                <Image src={testimonial.logo} alt={testimonial.name} width={120} height={40} className="h-8 w-auto object-contain mb-5" unoptimized />
              )}
              <blockquote className="mb-5">
                <p className="text-gray-900 text-lg font-medium leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="flex items-center gap-3">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </footer>
            </div>
          </div>
        </section>

        {/* Next case study */}
        {nextSlug && nextCompany && (
          <section className="py-8 px-4 bg-gray-50 border-t border-gray-100">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <Link href="/customers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                ← All customer stories
              </Link>
              <Link
                href={`/customers/${nextSlug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Next: {nextCompany}
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
            </div>
          </section>
        )}

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
