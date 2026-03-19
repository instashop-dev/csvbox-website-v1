import type { Metadata } from "next";
import UseCaseLayout from "@/components/UseCaseLayout";

export const metadata: Metadata = {
  title: "Finance Ready Data Imports for Fintech | CSVBox",
  description: "Import transactions, invoices, and financial records into your finance software with a secure, no-code CSV importer built for accuracy and compliance.",
};

export default function FintechPage() {
  return (
    <UseCaseLayout
      heroH1="Finance ready data imports for Fintech"
      heroSubtitle="Import transactions, invoices, and financial records into your finance software with a secure, no-code CSV importer built for accuracy and compliance."
      heroImg="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/oqzm6mnup1gdn8qo.png"
      featureCards={[
        { badge: "Map Financial Data in Seconds", h2: "Smart Financial Data Mapping", desc: "Finance users upload CSV and Excel files in many different formats. CSVbox automatically maps financial data to your system's schema without manual setup." },
        { badge: "Catch Errors Before Import", h2: "Real-Time Validation for Errors", desc: "Finance users upload CSV and Excel files in many different formats. CSVbox automatically maps financial data to your system's schema without manual setup." },
        { badge: "Enterprise-Grade Data Security", h2: "Secure and compliant Imports", desc: "CSVbox ensures financial data imports follow security and compliance standards, keeping sensitive records protected at every step." },
      ]}
      problemHeading="Why Financial Data Imports Are a Bottleneck?"
      problemSubtitle="Finance teams often deal with messy spreadsheets, inconsistent formats, and manual data entry when importing transactions, invoices, and account records."
      problems={[
        { title: "Messy & Inconsistent Financial Data", desc: "Finance users upload CSV and Excel files in different formats, with missing fields, incorrect values, and inconsistent structures. This makes importing financial records into accounting or fintech systems slow, error-prone, and unreliable." },
        { title: "Manual Mapping & Engineering Overhead", desc: "Engineering teams spend valuable time building and maintaining custom CSV import workflows for financial data. Every new format requires manual mapping, validation logic, and ongoing fixes." },
        { title: "Poor Financial Onboarding Experience", desc: "Slow, error-filled data imports frustrate finance users during onboarding. Failed uploads and unclear errors delay setup, reduce activation, and hurt user trust in financial software." },
      ]}
      logos={[
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ha5rmccu2mjdhhh9.png", alt: "Access Paytronix" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/0kp69elb6b6a3bze.svg", alt: "Logo" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/qsxdxwe5lcc95ncb.svg", alt: "Parafin" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/4dycqarehnrm6msy.svg", alt: "Avalara" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/a9im42t32hzg24ax.png", alt: "Glassdollar" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/93qlxd35e1krmsk4.png", alt: "Cforia" },
      ]}
      useCaseCards={[
        { badge: "Painpoint", heading: "The problem", body: "Financial data uploads come in different formats, causing frequent import errors." },
        { badge: "How CSVBox helps", heading: "The solution", body: "CSVBox automatically maps, validates, and cleans financial spreadsheets." },
        { badge: "Result", heading: "The outcome", body: "Compliant data, faster onboarding, and reliable systems." },
      ]}
      sectionHeading="The Easiest CSV importer for Fintech"
      sectionSubtitle="Automatically map and validate customers data from any spreadsheet."
      contentBlocks={[
        { heading: "Built for Financial Data Accuracy", body: "CSVbox ensures all financial records follow the correct structure for accounting, invoicing, and reporting systems even with inconsistent CSV files.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/87lt38we56wwupct.png", reverse: false },
        { heading: "Onboard Customers 10x Faster", body: "Reduce manual data cleanup and back-and-forth with clients by enabling self-serve financial data uploads.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ifizzvg2twxj2t0z.png", reverse: true },
        { heading: "Improve Compliance & Reporting", body: "CSVBox automatically validates file structure, formats, and required fields before data enters your system. This prevents bad data from breaking your workflows and ensures consistent, high-quality imports across your app.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5e4qeoiqerbhydgd.png", reverse: false },
      ]}
      dataHeading="A smarter way to import financial services data"
      dataSubtitle="CSVBox helps you import, validate, and structure spreadsheet data across finance, operations, and customer systems."
      dataItems={[
        { num: "1", title: "Invoices and Bills", desc: "Import vendor invoices and billing records with automatic validation and error handling." },
        { num: "2", title: "Vendors", desc: "Standardize supplier data from messy CSV files into clean, structured records." },
        { num: "3", title: "Customer Accounts", desc: "Onboard customer data with guided column mapping and real-time validation." },
        { num: "4", title: "Subscription and Renewals", desc: "Import recurring billing and renewal records without formatting issues." },
        { num: "5", title: "Inventory", desc: "Sync product and stock data from spreadsheets into your system instantly." },
        { num: "6", title: "Reimbursements", desc: "Process expense and reimbursement CSVs with zero data inconsistencies." },
      ]}
      ctaHeading="Ready to ship imports 10x faster?"
      ctaSubheading="Join teams who've eliminated import headaches with CSVBox."
      ctaLabel="Start for free"
    />
  );
}
