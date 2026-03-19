import type { Metadata } from "next";
import UseCaseLayout from "@/components/UseCaseLayout";

export const metadata: Metadata = {
  title: "Automate Data Imports for HealthTech | CSVBox",
  description: "Clean, validate, and onboard patient, clinical, and operational data with a powerful CSV importer built for healthcare systems.",
};

export default function HealthTechPage() {
  return (
    <UseCaseLayout
      heroH1="Automate Data Imports for HealthTech"
      heroSubtitle="Clean, validate, and onboard patient, clinical, and operational data with a powerful CSV importer built for healthcare systems. No messy uploads. No data errors. Just fast, compliant data flows."
      heroImg="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/lvs51xptkqygdb9j.png"
      featureCards={[
        { badge: "Self serve imports", h2: "Patient & Provider Onboarding Made Simple", desc: "HealthTech platforms often rely on users to upload patient, provider, or clinical CSV files. But every file comes in a different format, structure, and quality." },
        { badge: "Error free CSV uploads", h2: "Bulk Health Data Without Errors", desc: "Without an intelligent importer, teams spend hours fixing data issues. This slows down onboarding, reporting, and clinical workflows." },
        { badge: "Seamless Integrations", h2: "CRM & ERP Integrations", desc: "Connect patient and provider data to your EHR, CRM, and operational tools without complex setup." },
      ]}
      problemHeading="The Data Import Problem in HealthTech"
      problemSubtitle="Why most HealthTech platforms struggle with healthcare data uploads — and how CSVBox fixes it."
      problems={[
        { title: "Messy & Inconsistent Data", desc: "Users upload CSV files in different formats, structures, and quality — causing data gaps and errors." },
        { title: "Manual Mapping & Engineering Overhead", desc: "Without an intelligent importer, teams spend hours building custom import logic and fixing edge cases." },
        { title: "Poor Onboarding experience", desc: "Complex import processes lead to failed uploads, support tickets, and slower adoption." },
      ]}
      logos={[
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/wphkan1ewe9gtzcn.png", alt: "TotalCare Billing" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/0zvdgl2zj46r2bxb.png", alt: "Invatech Health" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/vajdtjl8w9be4liu.svg", alt: "Curai Health" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/a0q6qii1h7tc236p.webp", alt: "Metro Dermatology" },
      ]}
      useCaseCards={[
        { badge: "Painpoint", heading: "The problem", body: "Users upload patient, provider, and clinical CSV files in different formats, causing broken imports and bad data." },
        { badge: "How CSVBox helps", heading: "The solution", body: "CSVBox automatically maps, validates, and cleans healthcare data before it enters your system." },
        { badge: "Result", heading: "The outcome", body: "Faster onboarding, fewer errors, and reliable data for HealthTech platforms." },
      ]}
      sectionHeading="The Easiest CSV Importer for Healthtech"
      sectionSubtitle="Turn messy healthcare uploads into clean, validated data in minutes. Built for hospitals, clinics, and modern health platforms."
      contentBlocks={[
        { heading: "Built for CSV Imports in HealthTech Platforms", body: "CSVBox is a powerful CSV importer for HealthTech platforms that helps healthcare teams handle data effortlessly. Whether users upload patient records, appointment data, billing information, or clinical reports, CSVBox ensures everything is clean, validated, and properly mapped every time.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/87lt38we56wwupct.png", reverse: false },
        { heading: "Faster Patient & Provider Onboarding with a Self-Serve CSV Importer", body: "Manual data uploads slow down onboarding and care delivery. CSVBox gives healthcare teams a self-serve CSV upload experience so they can move faster without engineering help.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ifizzvg2twxj2t0z.png", reverse: true },
        { heading: "Reliable Data Validation for HealthTech Platforms", body: "CSVBox automatically validates file structure, formats, and required fields before data enters your system. This prevents missing records, incorrect entries, and data quality issues across your platform.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5e4qeoiqerbhydgd.png", reverse: false },
      ]}
      dataHeading="Simplify Data Imports Across Your HealthTech Platforms"
      dataSubtitle="CSVbox helps your team upload, validate, and map healthcare data from spreadsheets—so your systems stay accurate, compliant, and ready for care delivery."
      dataItems={[
        { num: "1", title: "Patients", desc: "Import patient profiles and clinical records with built-in validation to prevent data errors during onboarding." },
        { num: "2", title: "Appointments", desc: "Sync appointment and scheduling data from spreadsheets into your healthcare platform with accurate date validation." },
        { num: "3", title: "Providers", desc: "Import provider profiles, credentials, and assignments from multiple sources without formatting issues." },
        { num: "4", title: "Clinical records", desc: "Upload clinical notes and records from CSV files into your EHR or reporting system with clean, structured mapping." },
        { num: "5", title: "Billing and Insurance", desc: "Import billing, insurance, and claims data with automatic validation to ensure compliance and accuracy." },
        { num: "6", title: "Reports and Analytics", desc: "Feed your healthcare dashboards with clean patient and operational data from CSV files without manual cleanup." },
      ]}
    />
  );
}
