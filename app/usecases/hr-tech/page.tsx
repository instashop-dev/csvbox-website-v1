import type { Metadata } from "next";
import UseCaseLayout from "@/components/UseCaseLayout";

export const metadata: Metadata = {
  title: "Automate Data Imports for HR Tech | CSVBox",
  description: "Clean, validate, and onboard user data with a powerful CSV importer built for modern web apps. No SDK headaches. No messy uploads.",
};

export default function HrTechPage() {
  return (
    <UseCaseLayout
      heroH1="Automate Data Imports for HR Tech"
      heroSubtitle="Clean, validate, and onboard user data with a powerful CSV importer built for modern web apps. No SDK headaches. No messy uploads. Just fast, reliable data flows"
      heroImg="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/pd4i754cymd7k2zg.png"
      featureCards={[
        { badge: "HR data simplified", h2: "Built for HR Data Imports", desc: "Automate the upload of employee, payroll, and compensation spreadsheets into your HR systems." },
        { badge: "Zero-Setup HR Data Mapping", h2: "Smart HRIS Mapping", desc: "Automatically map HR data fields like employee records, job roles, and salary details without manual setup." },
        { badge: "Validate before you import", h2: "Real-Time Validation", desc: "Catch missing fields, formatting issues, and incorrect values early to ensure clean, accurate HR data." },
      ]}
      problemHeading="The Data Import Problem in HR-Tech"
      problemSubtitle="Why most web apps struggle with user data uploads — and how CSVBox fixes it."
      problems={[
        { title: "Messy & Inconsistent User Data", desc: "Web applications often rely on users to upload CSV or Excel files. But every file comes in a different format, structure, and quality." },
        { title: "Manual Mapping & Engineering Overhead", desc: "Without an intelligent importer, teams spend hours building custom import logic and fixing edge cases." },
        { title: "Poor Onboarding Experience", desc: "A confusing import process leads to user drop-offs and longer setup times. Low activation results in higher churn." },
      ]}
      logos={[
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/itdny4gxo1maz8hw.png", alt: "Paddle HR" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/q77c956i5zaqosjt.svg", alt: "Headversity" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/x3ga1omo3qwqdlsu.png", alt: "Mainteny" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/dg3mk5y3z8dsmjs5.svg", alt: "Logo" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/r29gp40q29nhdxp0.svg", alt: "Logo" },
      ]}
      useCaseCards={[
        { badge: "Painpoint", heading: "The problem", body: "Employee and payroll files are uploaded in different formats." },
        { badge: "How CSVBox helps", heading: "The solution", body: "CSVBox auto-maps and validates HR data instantly." },
        { badge: "Result", heading: "The outcome", body: "Clean HR records and faster onboarding." },
      ]}
      sectionHeading="The Easiest CSV importer for HR Tech"
      sectionSubtitle="Show step by step how to get started"
      contentBlocks={[
        { heading: "Onboard Employees 10x Faster", body: "Manual data uploads slow down hiring, payroll, and onboarding. CSVbox enables self-serve imports so HR teams can move faster without engineering help.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/87lt38we56wwupct.png", reverse: false },
        { heading: "Drive Efficiency & Better HR Experiences", body: "CSVbox reduces back-and-forth with HR admins by catching errors early and standardizing data before it enters your system.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ifizzvg2twxj2t0z.png", reverse: true },
        { heading: "Smart HR Data Mapping", body: "Automatically map employee records, job roles, and salary details to your HR systems with zero manual setup.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5e4qeoiqerbhydgd.png", reverse: false },
      ]}
      dataHeading="Simplify Data Import Across Your HR Platforms"
      dataSubtitle="CSVBox helps your team upload, validate, and map data from any spreadsheet seamlessly, so your apps always stay up-to-date and error-free."
      dataItems={[
        { num: "1", title: "Employees", desc: "Import employee records, job details, and personal information from CSV or Excel with built-in validation to prevent onboarding errors." },
        { num: "2", title: "Payroll", desc: "Upload salary, tax, and compensation data into your payroll system with automatic formatting and real-time error checks." },
        { num: "3", title: "Candidate", desc: "Import applicant data from multiple sources into your ATS without worrying about mismatched fields or missing information." },
        { num: "4", title: "Attendance", desc: "Sync time-tracking and attendance spreadsheets into your HR platform with accurate date and shift validation." },
        { num: "5", title: "Benefits", desc: "Upload employee benefits, insurance, and policy data from spreadsheets into your HRIS with clean, structured mapping." },
        { num: "6", title: "Reports and Analytics", desc: "Feed your dashboards with accurate data by importing CSVs directly into your analytics tools without errors." },
      ]}
      ctaHeading="Ready to ship imports 10x faster?"
      ctaSubheading="Join teams who've eliminated import headaches with CSVBox."
      ctaLabel="Get Started"
    />
  );
}
