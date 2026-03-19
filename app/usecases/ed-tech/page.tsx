import type { Metadata } from "next";
import UseCaseLayout from "@/components/UseCaseLayout";

export const metadata: Metadata = {
  title: "Automate Data Imports for EdTech | CSVBox",
  description: "Upload, map, and validate student and academic data from any CSV or Excel file — so your learning platform stays accurate, compliant, and error-free.",
};

export default function EdTechPage() {
  return (
    <UseCaseLayout
      heroH1="Automate Data Imports for EdTech"
      heroSubtitle="Upload, map, and validate student and academic data from any CSV or Excel file — so your learning platform stays accurate, compliant, and error-free."
      heroCta="Try CSVbox for free"
      heroImg="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/s98h1pw2b1ch4ffb.png"
      featureCards={[
        { badge: "Faster Student Onboarding", h2: "Student Onboarding Made Simple", desc: "Web applications often rely on users to upload CSV or Excel files. But every file comes in a different format, structure, and quality." },
        { badge: "Error-Free Class Imports", h2: "Bulk Class Data Without Errors", desc: "Without an intelligent importer, teams spend hours. This slows down product development and onboarding." },
        { badge: "Seamless System Integrations", h2: "CRM & ERP Integrations", desc: "Connect student and academic data to your LMS, SIS, and reporting tools without complex setup." },
      ]}
      problemHeading="The Data Import Problem in EdTech"
      problemSubtitle="Why most learning platforms struggle with student data uploads — and how CSVBox fixes it."
      problems={[
        { title: "Messy & Inconsistent Student Data", desc: "Web applications often rely on users to upload CSV or Excel files. But every file comes in a different format, structure, and quality." },
        { title: "Manual Mapping & Engineering Overhead", desc: "Teams spend hours fixing file issues, writing custom import logic, and supporting failed uploads. This slows down feature development and platform scalability." },
        { title: "Poor student Onboarding Experience", desc: "Confusing import flows delay class setup and student access. Low activation leads to frustrated users and higher churn." },
      ]}
      logos={[
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/uYfeivcSthRUiBbN.svg", alt: "Twenix" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/9nxdr8448kuai51w.png", alt: "Grayson Web" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/9hhze36k0sjbfdrm.svg", alt: "No More Marking" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/uqpcghpxj2f2o8fz.svg", alt: "Logo" },
      ]}
      useCaseCards={[
        { badge: "Painpoint", heading: "The problem", body: "Student and enrollment data arrives in messy, inconsistent files." },
        { badge: "How CSVBox helps", heading: "The solution", body: "CSVBox auto-maps and validates student and enrollment data instantly." },
        { badge: "Result", heading: "The outcome", body: "Smooth onboarding and accurate learning records." },
      ]}
      sectionHeading="The Easiest CSV Importer for EdTech"
      sectionSubtitle="Automatically map and validate student data from any spreadsheet."
      contentBlocks={[
        { heading: "Built for CSV imports in modern EdTech platforms", body: "CSVBox is a powerful CSV importer designed for education software and learning platforms. It helps you handle student records, course data, and academic files from spreadsheets with ease. Every upload is automatically mapped, validated, and cleaned before entering your system.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/87lt38we56wwupct.png", reverse: false },
        { heading: "Faster student onboarding with a self-serve importer", body: "Manual data imports slow down class setup and student access. CSVBox gives schools and admins a guided, self-serve upload experience. This helps learners get started faster without support delays.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ifizzvg2twxj2t0z.png", reverse: true },
        { heading: "Reliable data validation for academic systems", body: "CSVBox checks file structure, formats, and required fields in real time. Errors in student, grade, or enrollment data are caught instantly. This keeps your LMS and reporting systems accurate.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5e4qeoiqerbhydgd.png", reverse: false },
      ]}
      dataHeading="Simplify Data Imports across your EdTech Platforms"
      dataSubtitle="CSVBox helps your team upload, validate, and map data from any spreadsheet seamlessly, so your apps always stay up-to-date and error-free."
      dataItems={[
        { num: "1", title: "Students", desc: "Import student profiles, enrollment details, and IDs with instant validation to avoid onboarding issues." },
        { num: "2", title: "Courses", desc: "Sync course catalogs, schedules, and subject data into your LMS without formatting problems." },
        { num: "3", title: "Grades", desc: "Upload exam results and performance data from multiple sources while keeping records accurate." },
        { num: "4", title: "Attendance", desc: "Manage daily attendance and class participation data with automatic validation." },
        { num: "5", title: "Faculty", desc: "Import teacher profiles, assignments, and roles from spreadsheets into your system." },
        { num: "6", title: "Reports and Analytics", desc: "Feed your academic dashboards with clean student and performance data from CSV files." },
      ]}
      ctaHeading="Ready to ship imports 10x faster?"
      ctaSubheading="Join teams who've eliminated import headaches with CSVBox."
      ctaLabel="Start for free"
    />
  );
}
