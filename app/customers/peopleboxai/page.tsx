import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Peoplebox.ai Case Study: Scaling CSV Imports with CSVBox",
  description: "How CSVBox helped Peoplebox.ai simplify CSV imports and speed up user onboarding by replacing fragile CSV uploads.",
};

export default function PeopleboxPage() {
  return (
    <CaseStudyLayout
      company="Peoplebox.ai"
      logo="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/leg2g4tb98v1alcz.webp"
      heroImage="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/qs4jjn7c8stowq63.png"
      headline="How CSVBox Helped Peoplebox.ai Simplify CSV Imports and Speed Up User Onboarding"
      subheadline="By replacing fragile CSV uploads with a fast, user-friendly import experience without engineering overhead."
      stats={[
        { value: "<3 DAYS", label: "Integration time", desc: "Integrated CSVBox and launched a fully functional, production-ready CSV import flow in under 72 hours, replacing weeks of potential in-house development." },
        { value: "90%", label: "of CUSTOMERS", desc: "Over 90% of users completed CSV imports successfully on the first attempt, with near-zero support tickets or manual intervention required." },
        { value: "$1,000+", label: "SAVED", desc: "Avoided the cost of building, testing, and maintaining a custom CSV import system—saving $1,000+ upfront and ongoing maintenance effort." },
      ]}
      sections={[
        {
          badge: "Before CSVBox",
          heading: "Manual CSV Imports That Slowed Down Onboarding",
          body: (
            <>
              <p>Before CSVBox, Peoplebox.ai relied on a <strong>manual S3-based process</strong> to handle CSV uploads. While this approach worked early on, it became increasingly fragile as more customers began onboarding and importing data.</p>
              <p><em>CSV files rarely looked the same.</em></p>
              <p>The team frequently dealt with:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Inconsistent column structures</strong></li>
                <li><strong>Missing or mismatched headers</strong></li>
                <li><strong>Formatting issues that required manual fixes</strong></li>
              </ol>
              <p>Each upload introduced friction. Customers faced delays, and the team had to step in repeatedly to resolve import issues. As CSV imports expanded across multiple workflows, it became clear this setup wouldn&apos;t scale without adding significant engineering overhead.</p>
            </>
          ),
        },
        {
          badge: "Why CSVBox",
          heading: "Finding the Right CSV Import Solution for a Growing SaaS",
          body: (
            <>
              <p>As CSV imports became a <strong>foundational part of the Peoplebox.ai platform</strong>, the team knew their existing approach wouldn&apos;t scale. CSV handling was no longer a side feature — it was central to how users onboarded and used the product.</p>
              <p>Building a custom CSV import system internally was an option, but it came with clear trade-offs:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Ongoing development and long-term maintenance</strong></li>
                <li><strong>Extensive testing to handle edge cases</strong></li>
                <li><strong>Engineering time pulled away from core product features</strong></li>
              </ol>
              <p><em>The team needed a solution that worked out of the box.</em></p>
              <p>CSVBox stood out as a practical and scalable choice. Its developer-friendly integration made adoption straightforward, while its ability to handle different CSV formats removed much of the complexity the team was facing.</p>
              <p>What mattered most: <strong>Flexible, dynamic column mapping</strong>, <strong>Clear documentation that sped up implementation</strong>, and <strong>Responsive support when needed</strong>.</p>
              <p>Most importantly, CSVBox allowed Peoplebox.ai to <strong>decouple CSV import logic from the rest of the application</strong>, without compromising on reliability or user experience.</p>
            </>
          ),
        },
        {
          badge: "After CSVBox",
          heading: "Faster, More Reliable CSV Imports at Scale.",
          body: (
            <>
              <p>CSVBox was integrated within <strong>1–3 days</strong> and quickly became the standard way Peoplebox.ai handled CSV imports across the product.</p>
              <p>With a <strong>single, centralized import flow</strong> in place, the team could now:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Support multiple CSV use cases without duplicating logic</strong></li>
                <li><strong>Handle varied file formats with fewer errors</strong></li>
                <li><strong>Deliver a more consistent import experience to customers</strong></li>
              </ol>
              <p><em>The impact was immediate.</em></p>
              <p>Customers were able to upload their data more easily, even when CSV formats differed. Errors caused by mismatched columns dropped significantly, and user onboarding became noticeably smoother and faster.</p>
              <p>Today, CSVBox powers the import of both <strong>user and customer data</strong> across the platform. By relying on CSVBox to manage CSV uploads, Peoplebox.ai simplified its data workflows, reduced operational overhead, and freed up engineering time to focus on building features that directly improve customer value.</p>
            </>
          ),
        },
      ]}
      testimonial={{
        quote: "CSVBox made it easy for us to manage CSV imports across our web application, with great documentation and reliable support!",
        name: "Alagu Muthuraman",
        title: "Co-Founder @Peoplebox.ai",
        logo: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/leg2g4tb98v1alcz.webp",
      }}
      nextSlug="99minds"
      nextCompany="99minds"
    />
  );
}
