type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-energys-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-energys-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-slate-700 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
