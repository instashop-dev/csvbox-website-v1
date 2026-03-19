import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "How BookSource Simplified CSV Imports and Reduced Data Errors with CSVBox",
  description: "By integrating CSVBox in under 72 hours, BookSource automated CSV validation and created a reliable, low-maintenance data upload workflow.",
};

export default function BooksourcePage() {
  return (
    <CaseStudyLayout
      company="BookSource"
      heroImage="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/o72bpdjdbawssl1t.png"
      headline="How BookSource Simplified CSV Imports and Reduced Data Errors with CSVBox"
      subheadline="By integrating CSVBox in under 72 hours, BookSource automated CSV validation, reduced import errors, and created a reliable, low-maintenance data upload workflow for their web application."
      stats={[
        { value: "<1 WEEK", label: "Integration time", desc: "Integrated CSVBox and launched a fully functional, production-ready CSV import workflow in under 72 hours eliminating the need for weeks of custom development." },
        { value: "90%", label: "of CUSTOMERS", desc: "Over 90% of users completed CSV imports successfully on the first attempt, with near-zero support tickets or manual intervention required." },
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
          heading: "Finding a Reliable Way to Validate Data During Upload",
          body: (
            <>
              <p>As CSV imports became more common, the BookSource team started looking for a solution that could automatically verify data at the moment it was uploaded. Their goal was simple: reduce errors before the data entered the system.</p>
              <p>Building a custom CSV handling system internally was an option, but it would require engineering time and ongoing maintenance.</p>
              <p>CSVBox stood out as the right fit because it offered:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Easy integration with existing systems</strong></li>
                <li><strong>Strong validation and error handling</strong></li>
                <li><strong>A developer-friendly implementation</strong></li>
                <li><strong>A cleaner upload experience for end users</strong></li>
              </ol>
              <p>Most importantly, CSVBox allowed the team to automatically validate uploaded data, helping catch issues earlier and reducing the need for manual corrections later.</p>
            </>
          ),
        },
        {
          badge: "After CSVBox",
          heading: "Fewer Errors and a \"Set-and-Forget\" Import Process",
          body: (
            <>
              <p>CSVBox was integrated in <strong>less than a day</strong> by BookSource&apos;s systems team and quickly became part of their standard workflow for handling CSV uploads.</p>
              <p>The platform is now used to import several types of data, including:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>User and customer records</strong></li>
                <li><strong>Customer order data</strong></li>
                <li><strong>Reporting and operational datasets</strong></li>
              </ol>
              <p>One of the most valuable features for the team has been <strong>field validation</strong>, which ensures uploaded data meets required formats before processing.</p>
              <p>CSV imports became far more reliable, with <strong>fewer errors during upload</strong> and significantly less manual intervention required from the team. For BookSource, CSVBox has effectively become a <strong>&ldquo;set-and-forget&rdquo; solution</strong> for CSV imports — reducing operational workload while giving users a smoother, more dependable upload experience.</p>
            </>
          ),
        },
      ]}
      testimonial={{
        quote: "With CSVBox, we were able to add a production-ready CSV import system without the complexity of building one from scratch.",
        name: "David Warnock",
        title: "Systems Manager @Booksource",
      }}
      nextSlug="exclusion-screening"
      nextCompany="Exclusion Screening"
    />
  );
}
