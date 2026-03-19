import Link from "next/link";

interface CtaBannerProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  badges?: string[];
}

export default function CtaBanner({
  heading = "Ready to ship imports 10x faster?",
  subheading = "Join teams who've eliminated import headaches with CSVBox.",
  ctaLabel = "Start free",
  ctaHref = "https://app.csvbox.io/register",
  badges = ["No credit card", "Embed in minutes", "Secure by default"],
}: CtaBannerProps) {
  return (
    <section style={{ backgroundColor: "#18181B" }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{heading}</h2>
          <p className="text-gray-400 text-base mb-4">{subheading}</p>
          <div className="flex flex-wrap gap-5">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm text-gray-400">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={ctaHref}
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg"
        >
          {ctaLabel}
          <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true">
            <path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
