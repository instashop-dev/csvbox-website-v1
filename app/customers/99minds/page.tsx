import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "How 99minds Simplified CSV Imports and Reduced Support Overhead with CSVBox",
  description: "By integrating CSVBox in less than a day, 99minds replaced manual CSV uploads with a self-serve import flow.",
};

export default function Page99minds() {
  return (
    <CaseStudyLayout
      company="99minds"
      logo="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/8kbm6orz9bmnlgvs.svg"
      heroImage="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/2hkqpuulx8evs2dn.png"
      headline="How 99minds Simplified CSV Imports and Reduced Support Overhead with CSVBox"
      subheadline="By integrating CSVBox in less than a day, 99minds replaced manual CSV uploads and local scripts with a self-serve import flow. This allowed users to upload data directly while CSVBox handled validation and error checking, reducing confusion around CSV templates and significantly lowering support tickets."
      stats={[
        { value: "<1 DAY", label: "Integration time", desc: "Integrated CSVBox in less than a day and launched a production-ready CSV import workflow eliminating the need to build and maintain a custom solution internally." },
        { value: "90%", label: "of CUSTOMERS", desc: "Over 90% of users successfully completed their CSV imports on the first attempt, significantly reducing support requests and the need for manual intervention." },
        { value: "$1,000+", label: "SAVED", desc: "Avoided the cost of building, testing, and maintaining a custom CSV import system saving $1,000+ upfront and ongoing maintenance effort." },
      ]}
      sections={[
        {
          badge: "Before CSVBox",
          heading: "Manual CSV Imports Created Errors and Extra Work",
          body: (
            <>
              <p>Before adopting CSVBox, BookSource handled CSV and spreadsheet imports manually. While this approach worked initially, it quickly became difficult to manage as data imports became a regular operational task. CSV files often arrived in different formats, which created ongoing challenges for the team.</p>
              <p>The team frequently dealt with:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Inconsistent file formats across uploads</strong></li>
                <li><strong>Column mapping problems between files and system fields</strong></li>
                <li><strong>Poor or unclear error messages when something failed</strong></li>
              </ol>
              <p>These issues meant that when an import didn&apos;t work correctly, the team had to spend additional time identifying and fixing errors manually. As imports became more frequent, this process added unnecessary workload for the systems team and created friction in the overall data workflow.</p>
            </>
          ),
        },
        {
          badge: "Why CSVBox",
          heading: "A Simpler Way to Offer Self-Serve CSV Imports",
          body: (
            <>
              <p>As CSV imports became a regular requirement for their platform, the 99minds team needed a better way to manage file uploads without relying on manual processing or internal scripts. Their goal was to let users upload CSV files themselves while ensuring the data matched the expected format.</p>
              <p>Building and maintaining a fully custom CSV importer was possible, but it would require ongoing development effort and additional engineering resources.</p>
              <p>CSVBox stood out as the right solution because it offered:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>A fast and straightforward integration</strong></li>
                <li><strong>Built-in validation during uploads</strong></li>
                <li><strong>Clear CSV templates for users</strong></li>
                <li>A reliable self-serve import experience</li>
              </ol>
              <p>Most importantly, CSVBox allowed the team to move away from manual CSV handling and provide a structured, user-friendly import flow reducing confusion around file formats and significantly lowering support requests related to CSV uploads.</p>
            </>
          ),
        },
        {
          badge: "After CSVBox",
          heading: "Self-Serve CSV Imports with Fewer Errors and Less Support Work",
          body: (
            <>
              <p>CSVBox was integrated in less than a day and quickly became the standard way 99minds handles CSV uploads across their web application. Instead of sending files to the team for manual processing, users can now upload their data directly through a self-serve import flow.</p>
              <p>The platform is now used to import key datasets such as:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>User and customer data</strong></li>
                <li><strong>Transaction and event records</strong></li>
                <li><strong>Operational and reporting datasets</strong></li>
              </ol>
              <p>One of the biggest improvements came from built-in validation and clearer CSV templates, which help catch issues during upload instead of after the data is processed. Users can now import data on their own with far less confusion around CSV formats, while the team sees significantly fewer support tickets related to CSV uploads. By relying on CSVBox to manage imports, 99minds simplified their data workflows and reduced the need for manual intervention.</p>
            </>
          ),
        },
      ]}
      testimonial={{
        quote: "CSVBox let us offer a self-serve CSV import experience for our users without having to build and maintain the entire system ourselves.",
        name: "Mrudul Tarwatkar",
        title: "CTO, @99minds Inc",
        logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/8kbm6orz9bmnlgvs.svg",
      }}
      nextSlug="jarvi-tech"
      nextCompany="Jarvi Tech"
    />
  );
}
