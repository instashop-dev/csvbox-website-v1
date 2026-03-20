import type { Metadata } from "next";
import UseCaseLayout from "@/components/UseCaseLayout";

export const metadata: Metadata = {
  title: "Automate Data Imports for Web Applications | CSVBox",
  description: "Clean, validate, and onboard user data with a powerful CSV importer built for modern web apps. No SDK headaches. No messy uploads.",
};

export default function WebAppsPage() {
  return (
    <UseCaseLayout
      heroH1="Automate Data Imports for Web Applications"
      heroSubtitle="Clean, validate, and onboard user data with a powerful CSV importer built for modern web apps. No SDK headaches. No messy uploads. Just fast, reliable data flows."
      heroImg="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/lvs51xptkqygdb9j.png"
      featureCards={[
        { badge: "Self serve imports", h2: "Customer Onboarding made simple", desc: "Web applications often rely on users to upload CSV or Excel files. But every file comes in a different format, structure, and quality." },
        { badge: "Error free CSV uploads", h2: "Bulk Uploads Without Errors", desc: "Without an intelligent importer, teams spend hours. This slows down product development and onboarding." },
        { badge: "Seamless Integrations", h2: "CRM & ERP Integrations", desc: "Connect validated data to your CRM, ERP, and other tools without complex setup." },
      ]}
      problemHeading="The Data Import Problem in Web Applications"
      problemSubtitle="Why most web apps struggle with user data uploads — and how CSVBox fixes it."
      problems={[
        { title: "Messy & Inconsistent User Data", desc: "Web applications often rely on users to upload CSV or Excel files. But every file comes in a different format, structure, and quality." },
        { title: "Manual Mapping & Engineering Overhead", desc: "Without an intelligent importer, teams spend hours building custom import logic and fixing edge cases." },
        { title: "Poor Onboarding experience", desc: "A confusing import process leads to user drop-offs and longer setup times. Low activation results in higher churn. First impressions matter for every SaaS and web application." },
      ]}
      logos={[
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/jQJawvzTSUkyTeAU.svg", alt: "Fiddle.io" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/jUXonWxVtVyIbpfH.png", alt: "Nextlot" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/tzFlWdkoOyQXCWZj.svg", alt: "PropertyRadar" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/wTjCQiofZymZDqTi.svg", alt: "Pando" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/rnlrmtr1af277it0.svg", alt: "Logo" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/oap1ogeqnwok62l1.webp", alt: "Dreamdata" },
      ]}
      useCaseCards={[
        { badge: "Painpoint", heading: "The problem", body: "User-uploaded CSV and Excel files come in different formats, structures, and quality — causing broken imports and bad data." },
        { badge: "How CSVBox helps", heading: "The solution", body: "CSVBox automatically maps, validates, and cleans user data before it enters your system." },
        { badge: "Result", heading: "The outcome", body: "Faster onboarding, fewer errors, and reliable data for your web app." },
      ]}
      sectionHeading="The Easiest CSV Importer for Web Applications"
      sectionSubtitle="Turn messy user uploads into clean, validated data in minutes. Built for SaaS, dashboards, and modern web platforms."
      contentBlocks={[
        { heading: "Built for CSV imports in modern web applications", body: "CSVBox is a powerful CSV importer for web applications that helps SaaS products handle user data effortlessly. Whether your users upload spreadsheets, bulk records, or structured files, CSVBox ensures clean, validated, and properly mapped data every time.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/87lt38we56wwupct.png", reverse: false },
        { heading: "Faster user onboarding with a self-serve CSV importer", body: "Manual data imports slow down user activation and overload your support team. CSVBox gives your users a self-serve CSV upload experience.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ifizzvg2twxj2t0z.png", reverse: true },
        { heading: "Reliable data validation for SaaS and web platforms", body: "CSVBox automatically validates file structure, formats, and required fields before data enters your system. This prevents bad data from breaking your workflows and ensures consistent, high-quality imports across your app.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5e4qeoiqerbhydgd.png", reverse: false },
      ]}
      dataHeading="Simplify Data Imports for Your Web Application"
      dataSubtitle="CSVBox handles uploads, validation, and mapping for every type of data your users need to import."
      dataItems={[
        { num: "1", title: "User Data", desc: "Import user profiles and account data from CSV or Excel with instant validation to prevent onboarding errors." },
        { num: "2", title: "Customer Records", desc: "Onboard customer data from multiple sources with guided mapping and real-time error checking." },
        { num: "3", title: "Product Catalogs", desc: "Sync product data and inventory from spreadsheets into your application without formatting issues." },
        { num: "4", title: "Transactions", desc: "Upload transaction and event records with automatic formatting and date validation." },
        { num: "5", title: "Configuration Data", desc: "Import settings, rules, and configuration data from CSV files into your system accurately." },
        { num: "6", title: "Reports and Analytics", desc: "Feed your dashboards with clean data by importing CSVs directly into your analytics tools without errors." },
      ]}
      ctaHeading="Ready to get Started?"
      ctaSubheading="Create your account for free to try our product."
      ctaLabel="Get Started"
    />
  );
}
