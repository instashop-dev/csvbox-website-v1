import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Exclusion Screening Saved 20+ Hours a Week on CSV Imports",
  description: "By replacing labor-intensive CSV handling with automated validation and self-serve uploads.",
};

export default function ExclusionScreeningPage() {
  return (
    <CaseStudyLayout
      company="Exclusion Screening"
      logo="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/rqbpi5249fqh5384.webp"
      heroImage="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/zepsomjaodfegkj8.png"
      headline="Exclusion Screening Saved 20+ Hours a Week on CSV Imports"
      subheadline="By replacing labor-intensive CSV handling with automated validation and self-serve uploads."
      stats={[
        { value: "<1 DAY", label: "Integration time", desc: "CSVBox was integrated quickly without complex setup or long engineering cycles, making it easy to launch a production-ready CSV import flow almost immediately." },
        { value: "50+ HOURS", label: "Saved per month", desc: "By eliminating manual CSV validation and cleanup, the team reclaimed over 50 hours every week that were previously spent handling data imports." },
        { value: "ZERO", label: "Manual handling", desc: "Customers now upload and validate their own data without support, removing one of the most labor-intensive workflows entirely." },
      ]}
      sections={[
        {
          badge: "Before CSVBox",
          heading: "CSV imports demanded ongoing internal support",
          body: (
            <>
              <p>Before adopting <strong>CSVBox</strong>, Exclusion Screening handled CSV and spreadsheet imports <strong>manually</strong>. Every upload required internal effort to clean, validate, and map data before it could be used.</p>
              <p><strong>What wasn&apos;t working:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Inconsistent CSV formats across uploads</li>
                <li>Frequent column-mapping issues</li>
                <li>Manual validation and transformations</li>
                <li>Heavy internal effort for every import</li>
              </ol>
              <p><strong>Impact on the team:</strong> These issues didn&apos;t just slow things down — they created ongoing operational friction.</p>
              <p><em>&ldquo;The impact was felt mostly on our internal team. CSV imports were one of the most labor-intensive parts of our workflow.&rdquo;</em></p>
              <p>Engineering and operations teams spent hours every week fixing avoidable data issues instead of focusing on higher-value work.</p>
            </>
          ),
        },
        {
          badge: "Why CSVBox",
          heading: "A clear buy-vs-build decision",
          body: (
            <>
              <p>The team started looking for a CSV import solution when it became clear that building and maintaining imports in-house was inefficient and costly.</p>
              <p><strong>What they needed:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>A <strong>cost-effective</strong> solution. Minimal engineering involvement</li>
                <li>A tool customers could use without guidance</li>
                <li>Reliable handling of messy, real-world CSV files</li>
              </ol>
              <p><em>&ldquo;CSVBox stood out because it <strong>checked all the boxes.</strong>&rdquo;</em></p>
              <p>Why they chose CSVBox: <strong>Easy to integrate</strong> into their existing product, <strong>Developer-friendly</strong> with clear documentation, <strong>Powerful validation and transformation</strong> out of the box, <strong>Intuitive for customers</strong>, even with complex files.</p>
              <p><em>&ldquo;CSVBox handles all of the tricky and messy data import problems so we don&apos;t have to.&rdquo;</em></p>
              <p>The integration itself took <strong>less than a day</strong>, making it an easy decision to move forward.</p>
            </>
          ),
        },
        {
          badge: "After CSVBox",
          heading: "CSV imports became a solved problem",
          body: (
            <>
              <p>With CSVBox embedded into the product, customers can now upload their own data confidently — without internal intervention.</p>
              <p><strong>What changed:</strong> Automated validation, transformation, and column mapping. Customers upload CSVs directly without support. Internal teams no longer manage import issues manually.</p>
              <p><strong>Measurable impact:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>50+ hours saved every week</strong> for internal teams</li>
                <li>Significant reduction in operational workload</li>
                <li>Faster, smoother data onboarding</li>
              </ul>
              <p><em>&ldquo;We&apos;ve eliminated one of the most labor-intensive parts of our workflow.&rdquo;</em></p>
              <p>CSV imports are no longer a bottleneck — they&apos;re a reliable, self-serve part of the product.</p>
            </>
          ),
        },
      ]}
      testimonial={{
        quote: "CSVBox makes the buy vs build decision stupidly simple",
        name: "Mike Simmons",
        title: "CEO @Exclusion Screening",
        logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/rqbpi5249fqh5384.webp",
      }}
    />
  );
}
