import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  logos: Logo[];
  label?: string;
}

export default function LogoCarousel({ logos, label = "Trusted by teams in companies of all sizes" }: LogoCarouselProps) {
  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-8 border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-4 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
      </div>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-logos" style={{ width: "max-content" }}>
          {allLogos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-8 shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 100}
                height={logo.height || 32}
                className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
