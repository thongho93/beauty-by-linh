interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "gold" | "default";
  target?: string;
  rel?: string;
}

export default function Button({ children, href, variant = "default", target, rel }: Props) {
  const className =
    variant === "gold"
      ? "relative inline-flex items-center justify-center cursor-pointer px-6 py-2 text-sm font-medium tracking-[0.2em] text-[color:var(--color-gold)] border border-[color:var(--color-gold)] bg-transparent transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_0_3px_rgba(200,169,106,0.18)] hover:scale-[1.03] active:scale-[0.98] overflow-visible before:absolute before:inset-[-6px] before:border before:border-[color:var(--color-gold)] before:opacity-0 before:scale-95 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:scale-100"
      : "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white";

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
