import type { Metadata } from "next";
import UseCaseLayout from "@/components/UseCaseLayout";

export const metadata: Metadata = {
  title: "Automate Data Imports for E-commerce Platforms | CSVBox",
  description: "Clean, validate, and onboard product, order, and customer data with a powerful CSV importer built for online stores.",
};

export default function EcommercePage() {
  return (
    <UseCaseLayout
      heroH1="Automate Data Imports for E-commerce Platforms"
      heroSubtitle="Clean, validate, and onboard product, order, and customer data with a powerful CSV importer built for online stores. No messy uploads. No broken catalogs. Just fast, reliable data flows."
      heroImg="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/lvs51xptkqygdb9j.png"
      featureCards={[
        { badge: "Self serve imports", h2: "Store Data Onboarding Made Simple", desc: "E-commerce platforms often rely on merchants to upload product, inventory, or customer CSV files. But every file comes in a different format, structure, and quality." },
        { badge: "Error free CSV uploads", h2: "Bulk Uploads Without Errors", desc: "Without an intelligent importer, teams spend hours fixing broken product catalogs and inventory data. This slows down store launches and operations." },
        { badge: "Seamless Integrations", h2: "ERP, OMS & CRM Integrations", desc: "Sync product, order, and customer data with your ERP, OMS, and CRM tools without complex setup." },
      ]}
      problemHeading="The Data Import Problem in E-commerce"
      problemSubtitle="Why most e-commerce platforms struggle with merchant data uploads — and how CSVBox fixes it."
      problems={[
        { title: "Messy & Inconsistent Store Data", desc: "Merchants upload CSV files in different formats, structures, and quality — causing broken catalogs and bad data." },
        { title: "Manual Mapping & Engineering Overhead", desc: "Without an intelligent importer, teams spend hours building custom import logic and fixing edge cases." },
        { title: "Poor Onboarding experience", desc: "Confusing import processes lead to failed uploads, support tickets, and merchant churn." },
      ]}
      logos={[
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/jQJawvzTSUkyTeAU.svg", alt: "Fiddle.io" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/wHvwakyioOFZdKQD.png", alt: "BetterCommerce" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/yDMvIFWSNyOJkvri.png", alt: "Cartkit" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/6pldpd3qlo8xvq9o.png", alt: "Flexmyroom" },
        { src: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/NZwzQoBLEaHCAoop.png", alt: "Planetary" },
      ]}
      useCaseCards={[
        { badge: "Painpoint", heading: "The problem", body: "Merchants upload product, inventory, and order CSV files in different formats, causing broken imports and bad data." },
        { badge: "How CSVBox helps", heading: "The solution", body: "CSVBox automatically maps, validates, and cleans store data before it enters your system." },
        { badge: "Result", heading: "The outcome", body: "Faster merchant onboarding, fewer errors, and reliable data for your e-commerce platform." },
      ]}
      sectionHeading="The Easiest CSV Importer for E-commerce"
      sectionSubtitle="Turn messy merchant uploads into clean, validated store data in minutes. Built for marketplaces, DTC brands, and modern commerce platforms."
      contentBlocks={[
        { heading: "Built for CSV Imports in E-commerce Platforms", body: "CSVBox is a powerful CSV importer for e-commerce platforms that helps SaaS products handle user data effortlessly. Whether your users upload product catalogs, inventory lists, customer records, or order history, CSVBox ensures everything is clean, validated, and properly mapped every time.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/87lt38we56wwupct.png", reverse: false },
        { heading: "Faster Merchant Onboarding with a Self-Serve CSV Importer", body: "Manual data uploads slow down store setup and product launches. CSVBox gives merchants a self-serve CSV upload experience so they can go live faster without engineering help.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ifizzvg2twxj2t0z.png", reverse: true },
        { heading: "Reliable Data Validation for E-commerce Platforms", body: "CSVBox automatically validates file structure, formats, and required fields before data enters your system. This prevents broken product listings, pricing errors, and inventory issues across your platform.", img: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/5e4qeoiqerbhydgd.png", reverse: false },
      ]}
      dataHeading="Simplify Data Imports Across Your E-commerce Stack"
      dataSubtitle="CSVbox helps your team upload, validate, and map product, order, and customer data from any spreadsheet so your storefronts, systems, and analytics always stay accurate and up to date."
      dataItems={[
        { num: "1", title: "Products", desc: "Import product catalogs, SKUs, pricing, and inventory data from CSV or Excel with built-in validation to prevent listing errors and mismatched attributes." },
        { num: "2", title: "Orders", desc: "Upload bulk order data from marketplaces or offline systems into your commerce platform with automatic formatting and real-time error checks." },
        { num: "3", title: "Customers", desc: "Import customer profiles, addresses, and purchase history from multiple sources without worrying about missing fields or inconsistent formats." },
        { num: "4", title: "Inventory", desc: "Sync stock levels and warehouse data from spreadsheets into your inventory system with accurate quantity and availability validation." },
        { num: "5", title: "Payments and Transactions", desc: "Upload transaction, payout, and reconciliation data from CSV files into your finance or reporting tools with clean, structured mapping." },
        { num: "6", title: "Reports and Analytics", desc: "Feed your dashboards and BI tools by importing clean commerce data from CSVs—without manual cleanup or broken reports." },
      ]}
    />
  );
}
