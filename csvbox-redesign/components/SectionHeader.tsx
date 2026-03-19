interface SectionHeaderProps {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  headingAs?: "h1" | "h2" | "h3";
  blueHighlight?: string;
}

export default function SectionHeader({
  badge,
  heading,
  subheading,
  align = "center",
  headingAs: Tag = "h2",
  blueHighlight,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  const renderHeading = () => {
    if (!blueHighlight || !heading.includes(blueHighlight)) {
      return heading;
    }
    const parts = heading.split(blueHighlight);
    return (
      <>
        {parts[0]}
        <span className="text-blue-600">{blueHighlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignClass}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-200">
          {badge}
        </span>
      )}
      <Tag className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
        {renderHeading()}
      </Tag>
      {subheading && (
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
