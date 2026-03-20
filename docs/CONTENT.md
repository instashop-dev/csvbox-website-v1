# Content Inventory

This document lists all pages and content from the original csvbox.io website that have been migrated to the redesigned Next.js site.

## Page Inventory (26 pages)

### Core Pages

| Route | Title | Description |
|-------|-------|-------------|
| `/` | Home | Main landing page with features, pricing, testimonials |
| `/about` | About CSVBox | Company information, mission, team |
| `/features` | Features | Product features and capabilities |
| `/pricing` | Pricing | Pricing plans and tiers |
| `/demo` | Demo | Interactive product demo |

### Product Pages

| Route | Title | Description |
|-------|-------|-------------|
| `/csv-import` | CSV Import | CSV import tool and features |
| `/csv-import-tool` | Import Tool | Import tool landing page |
| `/why-csvbox` | Why CSVBox | Value proposition and benefits |

### Customer Case Studies

| Route | Title | Company |
|-------|-------|---------|
| `/customers` | Customers | Customer stories overview |
| `/customers/99minds` | 99minds Case Study | E-commerce loyalty platform |
| `/customers/booksource` | BookSource Case Study | Book distribution company |
| `/customers/exclusion-screening` | Exclusion Screening | HR compliance platform |
| `/customers/jarvi-tech` | Jarvi Tech Case Study | Technology consulting |
| `/customers/monetizachat` | MonetizaChat | Chat monetization platform |
| `/customers/peopleboxai` | PeopleBox AI | AI recruitment platform |

### Use Cases

| Route | Title | Industry |
|-------|-------|----------|
| `/usecases/ed-tech` | Ed Tech | Education technology |
| `/usecases/e-commerce` | E-commerce | Online retail |
| `/usecases/fintech` | Fintech | Financial technology |
| `/usecases/health-tech` | Health Tech | Healthcare technology |
| `/usecases/hr-tech` | HR Tech | Human resources |
| `/usecases/web-applications` | Web Applications | SaaS applications |

### Alternatives

| Route | Title | Competitor |
|-------|-------|------------|
| `/csvbox-alternatives` | CSVBox Alternatives | Overview of alternatives |
| `/alternatives/dromo` | Dromo | Competitor comparison |
| `/alternatives/flatfile` | Flatfile | Competitor comparison |
| `/alternatives/flatfile/copy` | Flatfile Copy | Flatfile alternative page |
| `/alternatives/oneschema` | OneSchema | Competitor comparison |

## Key Sections & Features

### Homepage Sections
- Hero with product screenshot
- Feature highlights
- Pricing tiers (Free, Pro, Enterprise)
- Customer testimonials
- Integration logos
- Call-to-action sections

### Common Components
- Navigation header with logo and links
- Footer with sitemap, legal links, social
- Pricing tables with feature comparison
- Customer logos and testimonials
- Feature cards and icons
- Code snippets for integration
- Form elements (email capture, demo request)

## SEO Metadata

### Default Metadata

```typescript
// Root layout metadata
{
  title: 'CSVBox - CSV Import for Web Developers',
  description: 'The CSV import solution for web developers. Import CSV data into your web app with a beautiful, customizable upload widget.',
  keywords: ['csv import', 'data import', 'file upload', 'web development'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://csvbox.io',
    siteName: 'CSVBox',
  }
}
```

### Page-Specific Metadata

Each page includes custom metadata:
- Unique title tags
- Custom meta descriptions
- Canonical URLs
- Structured data (where applicable)

### Image Assets

- Product screenshots and demos
- Customer logos (stored on Umso CDN)
- Feature icons and illustrations
- Team photos (about page)

## Content Migration Notes

### Preserved Content
- All 26 page templates
- All customer case study content
- All use case descriptions
- All feature descriptions
- All pricing information

### Technical Differences
- Migrated from original framework to Next.js 15
- Styling converted to Tailwind CSS v4
- Images optimized and served from CDN
- Responsive breakpoints updated

### SEO Preserved
- All meta tags maintained
- URL structure preserved (no redirects needed)
- Sitemap.xml maintained
- robots.txt configured

## Content Management

### Adding New Pages

1. Create route in `app/` directory:
   ```bash
   mkdir app/new-page
   ```

2. Create page.tsx with metadata:
   ```typescript
   export const metadata = {
     title: 'Page Title',
     description: 'Page description',
   };
   
   export default function Page() { ... }
   ```

3. Add navigation link in header component

### Updating Content

All content is component-based in the `app/` directory. To update:
- Edit individual page.tsx files for page content
- Edit components in `components/` for reusable elements
- Update metadata in each page's export

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| First Contentful Paint | < 1s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

## CDN Configuration

External images are served from:
- **Umso CDN**: `umsousercontent.com` - Customer images and assets

Configured in next.config.ts:
```typescript
images: {
  remotePatterns: [{
    protocol: 'https',
    hostname: 'umsousercontent.com',
  }],
  unoptimized: true,
}
```