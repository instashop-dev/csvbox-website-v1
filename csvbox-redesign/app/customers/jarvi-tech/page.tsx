import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "How Jarvi Tech Integrated CSV Imports in a Day Using CSVBox",
  description: "By replacing fragile CSV uploads with a fast, user-friendly import experience without engineering overhead.",
};

export default function JarviTechPage() {
  return (
    <CaseStudyLayout
      company="Jarvi Tech"
      logo="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/7mxl1r8uy4k6xows.svg"
      heroImage="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/xs8zg9kbd14mtu4s.png"
      headline="How Jarvi Tech Integrated CSV Imports in a Day Using CSVBox"
      subheadline="By replacing fragile CSV uploads with a fast, user-friendly import experience without engineering overhead."
      stats={[
        { value: "<1 DAY", label: "Integration time", desc: "Integrated CSVBox and launched a fully functional CSV import flow in under a day." },
        { value: "90%", label: "of CUSTOMERS", desc: "Over 90% of customers successfully completed data imports without support or manual intervention." },
        { value: "$1,000+", label: "SAVED", desc: "Saved more than $1,000 by avoiding custom CSV import development and ongoing maintenance costs." },
      ]}
      sections={[
        {
          badge: "Before CSVBox",
          heading: "Manual work, uncertainty, and blocked execution",
          body: (
            <>
              <p>As an HRTech SaaS company, Jarvi Tech knew that CSV and spreadsheet imports were going to be a critical part of their product experience. Their customers needed an easy way to upload candidate and company data — but building a reliable CSV import system in-house wasn&apos;t straightforward. Before CSVBox, Jarvi Tech <strong>didn&apos;t have a dedicated CSV import solution at all</strong>. The team explored internal build possibilities, but quickly ran into familiar challenges:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>CSV files came in <strong>different formats and structures</strong></li>
                <li><strong>Encoding issues</strong> were unpredictable and hard to debug</li>
                <li>Edge cases would require ongoing engineering time</li>
              </ol>
              <p>Rather than rushing out a half-baked solution, the team made the deliberate decision <strong>not to implement a custom importer</strong>, knowing it could compromise both product quality and development velocity.</p>
            </>
          ),
        },
        {
          badge: "Why CSVBox",
          heading: "A developer-friendly solution that just made sense",
          body: (
            <>
              <p>When Jarvi Tech started looking for a CSV import solution, their priorities were clear: <strong>Cost-effective</strong> for a growing SaaS, <strong>Fast to integrate</strong>, without weeks of engineering effort, and <strong>Developer-friendly</strong>, so the team stayed in control.</p>
              <p>CSVBox stood out immediately. The combination of <strong>easy integration</strong>, <strong>clean developer experience</strong>, and <strong>competitive pricing</strong> made CSVBox a natural choice over other alternatives. It allowed the team to skip months of internal development while still delivering a polished import experience to their users. In fact, the entire integration took <strong>less than a day</strong> — allowing Jarvi Tech to move forward without slowing down product development.</p>
            </>
          ),
        },
        {
          badge: "After CSVBox",
          heading: "A reliable import experience, without the engineering burden",
          body: (
            <>
              <p>Today, Jarvi Tech uses CSVBox to import:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Candidate data</strong></li>
                <li><strong>Company data</strong></li>
              </ul>
              <p>Their customers handle uploads themselves, while CSVBox takes care of <strong>Automatic field mapping</strong>, <strong>Handling large files</strong>, and eliminating format and encoding headaches.</p>
              <p>The biggest win for the team? They were able to <strong>ship a production-ready CSV import experience</strong> without building and maintaining complex infrastructure internally.</p>
              <p>What Jarvi Tech values most about CSVBox is its <strong>pricing and simplicity</strong> — it delivers exactly what they need, without unnecessary complexity. They confidently recommend CSVBox to other HR and People Ops teams looking for a practical, developer-friendly import solution that doesn&apos;t slow teams down.</p>
            </>
          ),
        },
      ]}
      testimonial={{
        quote: "CSVBox was easy to integrate and competitively priced — exactly what we were looking for!",
        name: "Quentin Décré",
        title: "CEO @JarviTech",
        logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/7mxl1r8uy4k6xows.svg",
      }}
      nextSlug="booksource"
      nextCompany="BookSource"
    />
  );
}
