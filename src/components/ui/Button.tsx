interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "gold" | "default";
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = "default", target, rel, onClick }: Props) {
  const className =
    variant === "gold"
      ? "inline-flex items-center justify-center cursor-pointer px-6 py-2 text-sm font-medium tracking-[0.2em] text-[color:var(--color-gold)] border border-[color:var(--color-gold)] bg-transparent transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(200,169,106,0.25)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/40"
      : "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white";

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return <button type="button" className={className} onClick={onClick}>{children}</button>;
}
