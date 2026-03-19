import Link from "next/link";
import Image from "next/image";

const footerNav = {
  Product: [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "https://help.csvbox.io/destinations", label: "Destinations", external: true },
    { href: "/demo", label: "Demo" },
    { href: "/why-csvbox", label: "Why CSVbox" },
  ],
  Resources: [
    { href: "/about", label: "About" },
    { href: "https://blog.csvbox.io/", label: "Blog", external: true },
    { href: "https://help.csvbox.io/", label: "Help", external: true },
    { href: "https://help.csvbox.io/change-log", label: "Changelog", external: true },
    { href: "/csvbox-alternatives", label: "Compare" },
    { href: "/customers", label: "Customers" },
  ],
  Docs: [
    { href: "https://help.csvbox.io/legal/privacy", label: "Privacy Policy", external: true },
    { href: "https://help.csvbox.io/legal/terms", label: "Terms of Use", external: true },
    { href: "https://help.csvbox.io/legal/gdpr", label: "GDPR", external: true },
    { href: "https://help.csvbox.io/legal/data-policy", label: "Data Policy", external: true },
  ],
};

const socialLinks = [
  {
    href: "https://x.com/csvboxio",
    label: "X (Twitter)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.2 2.3h3.4l-7.3 8.2 8.5 11.3h-6.6L11 14.8l-6 6.8H1.7L9.4 13 1.3 2.2H8l4.7 6.3zm-1.1 17.5h1.8L7.1 4H5z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@csvbox9398",
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor" aria-hidden="true">
        <path d="M549.7 124a68.6 68.6 0 0 0-48.3-48.5C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 25-48.3 48.6C15 167 15 256.4 15 256.4s0 89.4 11.4 132.3a67.6 67.6 0 0 0 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5a67.6 67.6 0 0 0 48.3-47.8C561 345.8 561 256.4 561 256.4s0-89.5-11.4-132.3zM232 337.7V175.2l143 81.2-143 81.2z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/csvbox-io",
    label: "GitHub",
    icon: (
      <svg width="16" height="16" viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252a250.7 250.7 0 0 0 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9a94.5 94.5 0 0 1 2.6-67.9c20.9-6.5 69 27 69 27a235 235 0 0 1 125.6 0s48.1-33.6 69-27a94.4 94.4 0 0 1 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
      </svg>
    ),
  },
  {
    href: "https://www.npmjs.com/search?q=csvbox",
    label: "NPM",
    icon: (
      <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor" aria-hidden="true">
        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
      </svg>
    ),
  },
  {
    href: "https://share.hsforms.com/1ubpg6RBoQgKOISkRMEViwg5auur",
    label: "Email",
    icon: (
      <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm0 48v40.8a9970.3 9970.3 0 0 1-134.6 106.5c-16.8 13.2-50.2 45-73.4 44.7-23.2.4-56.6-31.5-73.4-44.7A9969.7 9969.7 0 0 1 48 152.8V112h416zM48 400V214.4c23 18.2 55.4 43.9 105 82.6 21.8 17.2 60 55.2 103 55 42.7.2 80.5-37.2 103-55 49.6-38.7 82-64.3 105-82.6V400H48z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="shrink-0 max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ghFUuOArjfddplUQ.png"
                alt="CSVbox logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-bold text-gray-900 text-[15px]">CSVbox</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Turn messy spreadsheets into clean,{" "}
              <br />
              validated data your systems can rely on.
              <br />
              Built for developers and modern SaaS teams.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-10">
            {Object.entries(footerNav).map(([col, links]) => (
              <div key={col}>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">{col}</h4>
                <ul className="space-y-2 list-none m-0 p-0">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">© 2026 CSVbox</p>
        </div>
      </div>
    </footer>
  );
}
