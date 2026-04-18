import { useEffect, useState } from "react";
import LashesLogo from "@/components/ui/LashesLogo";

interface HeaderProps {
  onBookClick?: () => void;
}

const navItems: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Hjem", href: "/#home" },
  { label: "Tjenester", href: "/tjenester" },
  { label: "Galleri", href: "/galleri" },
  { label: "Priser", href: "/priser" },
  { label: "Om", href: "/#om" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header({ onBookClick }: HeaderProps) {
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
        className="fixed left-0 right-0 top-0 z-40 bg-black/70 backdrop-blur-md border-b border-[color:var(--color-gold)]/15"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-12">

          {/* LEFT — Logo */}
          <a href="/#home" aria-label="Gå til toppen" className="shrink-0">
            <LashesLogo className="h-12 w-12 sm:h-10 sm:w-10 drop-shadow-[0_0_12px_rgba(201,154,133,0.7)]" />
          </a>

          {/* RIGHT — Nav + CTA button + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <nav className="hidden min-[950px]:flex items-center gap-7 mr-4">
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
            {/* Filled CTA button — hidden on small mobile, visible from sm up */}
            <button
              type="button"
              onClick={onBookClick}
              className="hidden sm:block rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-none border border-[color:var(--color-gold)] px-4 py-1.5 text-[10px] tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_20px_rgba(183,132,113,0.3)] active:scale-[0.98]"
            >
              Bestill time
            </button>

            {/* Hamburger — tablet & mobile only */}
            <button
              type="button"
              className="min-[950px]:hidden flex h-12 w-12 flex-col items-center justify-center gap-[6px] sm:h-10 sm:w-10 sm:gap-[5px] cursor-pointer bg-transparent text-[color:var(--color-gold)] hover:shadow-none"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`block h-[2px] w-6 sm:h-[1.5px] sm:w-5 bg-current transition-all duration-300 origin-center ${open ? "translate-y-[7px] sm:translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[2px] w-6 sm:h-[1.5px] sm:w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-6 sm:h-[1.5px] sm:w-5 bg-current transition-all duration-300 origin-center ${open ? "-translate-y-[7px] sm:-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet slide-out menu */}
      <div
        className={`fixed inset-0 z-50 min-[950px]:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Fullscreen menu */}
        <aside
          className={`absolute inset-0 h-dvh w-full bg-[linear-gradient(180deg,rgba(10,10,11,0.98)_0%,rgba(0,0,0,0.99)_100%)] transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
          role="dialog"
          aria-label="Meny"
        >
          <div className="flex h-full flex-col px-8 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))]">
            {/* Drawer header */}
            <div className="mb-8 flex items-center justify-between">
              <LashesLogo className="h-12 w-12 scale-[1.28] origin-left-top" />
              <button
                type="button"
                className="grid h-10 w-10 scale-[1.22] place-items-center bg-transparent text-[color:var(--color-gold)] transition-opacity duration-300 hover:opacity-70 hover:shadow-none"
                aria-label="Lukk meny"
                onClick={() => setOpen(false)}
              >
                <span className="absolute h-[1.8px] w-6 rotate-45 bg-current" />
                <span className="absolute h-[1.8px] w-6 -rotate-45 bg-current" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center">
              {/* Nav links */}
              <nav className="space-y-5 text-center">
                {navItems.map((item) => {
                  const cls =
                    "block text-[2rem] leading-none tracking-[0.12em] text-white/85 transition-colors duration-200 hover:text-[color:var(--color-gold)] sm:text-[2.25rem]";
                  return item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a key={item.label} href={item.href} className={cls} onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              {/* CTA directly below "Kontakt" */}
              <button
                type="button"
                onClick={() => { setOpen(false); onBookClick?.(); }}
                className="mt-8 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none border border-[color:var(--color-gold)]/85 px-10 py-4 text-[13px] tracking-[0.34em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_26px_rgba(183,132,113,0.35)] active:scale-[0.98]"
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
