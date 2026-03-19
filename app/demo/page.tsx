import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Embeddable CSV Excel Importer for Web Apps | CSVBox Demo",
  description: "Embed a powerful CSV & Excel spreadsheet importer in any web app. Try CSVBox — fast, secure, and developer-friendly data import solution.",
  openGraph: {
    images: [{ url: "https://umsousercontent.com/lib_khTFGMonhWqcPLFG/9nfdx7h3v9zwyv4n.png?w=1200&h=630&fit=crop" }],
  },
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Minimal intro */}
        <section className="pt-16 pb-8 px-4 text-center bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100 mb-4">Basic Demo</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">See CSVbox in Action</h1>
            <p className="text-gray-600 mb-6">
              Your users shouldn&apos;t struggle with CSV uploads.
              Experience how CSVBox makes onboarding effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                id="csvbox-import-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Start Import
              </button>
              <Link
                href="https://codesandbox.io/p/sandbox/priceless-robinson-emz6ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors"
              >
                Try on CodeSandbox
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true"><path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Output area */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div
              id="csvbox-output"
              className="hidden font-mono text-sm bg-[#1e1e1e] text-green-400 p-6 rounded-xl border border-gray-200 overflow-x-auto max-h-96 leading-relaxed"
              aria-live="polite"
              aria-label="Import output"
            />
          </div>
        </section>

        {/* CSVBox script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://js.csvbox.io/script.js';
                script.onload = function() {
                  function callback(result, data) {
                    var out = document.getElementById('csvbox-output');
                    if (out) {
                      out.classList.remove('hidden');
                      out.textContent = JSON.stringify(data, null, 2);
                    }
                  }
                  var importer = new CSVBoxImporter("2gzJa5YO3QPLYK6Bj7Qmq5bpbFqXno", {}, callback);
                  importer.setUser({ user_id: 'default123' });
                  var btn = document.getElementById('csvbox-import-btn');
                  if (btn) {
                    btn.addEventListener('click', function() { importer.openModal(); });
                  }
                };
                document.head.appendChild(script);
              })();
            `,
          }}
        />

        <CtaBanner
          heading="Ready to ship imports 10x faster?"
          subheading="Join teams who've eliminated import headaches with CSVBox."
          ctaLabel="Start free"
        />
      </main>
      <Footer />
    </>
  );
}
