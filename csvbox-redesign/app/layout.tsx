import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://csvbox.io"),
  title: {
    default: "CSVBox - Ship Data Imports 10x Faster | CSV Importer Widget",
    template: "%s | CSVBox",
  },
  description:
    "Embeddable CSV importer that validates, transforms, and delivers clean data. Production-ready widget installs in minutes. Try free.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://csvbox.io",
    siteName: "CSVBox",
    images: [
      {
        url: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/vOaKlfgYpPeRoFQg.png?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@csvboxio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg text-sm font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
