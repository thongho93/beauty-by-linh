import { useEffect, useState } from "react";
import LashesLogo from "@/components/ui/LashesLogo";
import Button from "@/components/ui/Button";

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
  { label: "Instagram", href: "https://instagram.com/", external: true },
];

export default function Header({ mode = "hero", onBookClick }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={
          mode === "sticky"
            ? "fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-md"
            : "absolute left-0 right-0 top-0 z-20"
        }
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-8 py-4 lg:px-12">
          <button
            type="button"
            className="relative grid h-11 w-11 cursor-pointer place-items-center border border-[color:var(--color-gold)] bg-transparent text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/40"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute top-1/2 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute top-1/2 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute top-1/2 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>

          <a
            href="#home"
            aria-label="Gå til toppen"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block"
          >
            {mode === "sticky" ? (
              <div className="hidden text-center md:block">
                <div className="text-[22px] tracking-[0.55em] text-white/90">LASHES BY LINH</div>
                <div className="mt-1 text-[11px] tracking-[0.7em] text-white/55">OSLO</div>
              </div>
            ) : (
              <LashesLogo className="h-14 w-14" />
            )}
          </a>

          <Button variant="gold" onClick={onBookClick}>
            Bestill time
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-[82vw] max-w-[420px] border-r border-[color:var(--color-gold)]/25 bg-black text-[color:var(--color-gold)] transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-label="Menu"
        >
          <div className="relative flex h-full flex-col px-8 pb-10 pt-20">
            <button
              type="button"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center border border-[color:var(--color-gold)] bg-transparent text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/40"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span className="absolute h-[1.5px] w-6 rotate-45 bg-current" />
              <span className="absolute h-[1.5px] w-6 -rotate-45 bg-current" />
            </button>
            <nav className="space-y-6 text-2xl tracking-[0.08em]">
              {navItems.map((item) => {
                const common =
                  "block w-fit transition-opacity duration-200 hover:opacity-80";
                if (item.external) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={common}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={common}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto pt-10 text-sm tracking-[0.2em] opacity-70">
              LASHES BY LINH
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
