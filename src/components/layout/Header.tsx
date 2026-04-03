import { useEffect, useState } from "react";
import LashesLogo from "@/components/ui/LashesLogo";

type HeaderMode = "hero" | "sticky";

interface HeaderProps {
  mode?: HeaderMode;
  onBookClick?: () => void;
}

const navItems: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Hjem", href: "#home" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Galleri", href: "#galleri" },
  { label: "Om", href: "#om" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header({ mode = "hero", onBookClick }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <header
        className={
          mode === "sticky"
            ? "fixed left-0 right-0 top-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/10"
            : "fixed left-0 right-0 top-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/10"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">

          {/* LEFT — Logo */}
          <a href="#home" aria-label="Gå til toppen" className="shrink-0">
            <LashesLogo className="h-14 w-14 drop-shadow-[0_0_8px_rgba(183,132,113,0.4)]" />
          </a>

          {/* RIGHT — Nav + CTA button + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <nav className="hidden lg:flex items-center gap-7 mr-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.2em] text-white/70 transition-colors duration-200 hover:text-[color:var(--color-gold)]"
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[11px] tracking-[0.2em] text-white/70 transition-colors duration-200 hover:text-[color:var(--color-gold)]"
                  >
                    {item.label.toUpperCase()}
                  </a>
                )
              )}
            </nav>
            {/* Filled CTA button */}
            <button
              type="button"
              onClick={onBookClick}
              className="rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl px-6 py-2.5 text-[11px] font-bold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(183,132,113,0.4)] hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
            >
              Bestill time
            </button>

            {/* Hamburger — tablet & mobile only */}
            <button
              type="button"
              className="lg:hidden grid h-10 w-10 cursor-pointer place-items-center border border-[color:var(--color-gold)]/60 bg-transparent text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet slide-out menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-[80vw] max-w-[380px] border-r border-[color:var(--color-gold)]/20 bg-black transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-label="Meny"
        >
          <div className="flex h-full flex-col px-8 pb-10 pt-8">
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-10">
              <LashesLogo className="h-12 w-12" />
              <button
                type="button"
                className="grid h-10 w-10 place-items-center border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10"
                aria-label="Lukk meny"
                onClick={() => setOpen(false)}
              >
                <span className="absolute h-[1.5px] w-5 rotate-45 bg-current" />
                <span className="absolute h-[1.5px] w-5 -rotate-45 bg-current" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="space-y-5">
              {navItems.map((item) => {
                const cls = "block text-xl tracking-[0.1em] text-white/80 transition-colors duration-200 hover:text-[color:var(--color-gold)]";
                return item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <a key={item.label} href={item.href} className={cls} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA at bottom */}
            <div className="mt-auto">
              <button
                type="button"
                onClick={() => { setOpen(false); onBookClick?.(); }}
                className="w-full rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none py-3 text-[11px] font-bold tracking-[0.3em] text-white transition-all duration-300 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
              >
                Bestill time
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
