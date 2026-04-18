import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LashesLogo from "@/components/ui/LashesLogo";

interface HeaderProps {
  onBookClick?: () => void;
}

type NavItem = {
  label: string;
  to: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Hjem", to: "/#home" },
  { label: "Tjenester", to: "/tjenester" },
  { label: "Galleri", to: "/galleri" },
  { label: "Priser", to: "/priser" },
  { label: "Om", to: "/#om" },
  { label: "Kontakt", to: "/#kontakt" },
];

const navTextClass =
  "text-[11px] tracking-[0.2em] transition-colors duration-200 hover:text-[color:var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/45";

export default function Header({ onBookClick }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "contain";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const desktopNav = useMemo(
    () =>
      navItems.map((item) => {
        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className={`${navTextClass} text-white/70`}
            >
              {item.label.toUpperCase()}
            </a>
          );
        }

        if (item.to.includes("#")) {
          return (
            <Link key={item.label} to={item.to} className={`${navTextClass} text-white/70`}>
              {item.label.toUpperCase()}
            </Link>
          );
        }

        return (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `${navTextClass} ${isActive ? "text-[color:var(--color-gold)]" : "text-white/70"}`
            }
          >
            {item.label.toUpperCase()}
          </NavLink>
        );
      }),
    [],
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-[color:var(--color-gold)]/15 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-12">
          <Link to="/#home" aria-label="Gå til toppen" className="shrink-0">
            <LashesLogo className="h-12 w-12 drop-shadow-[0_0_12px_rgba(201,154,133,0.7)] sm:h-10 sm:w-10" />
          </Link>

          <div className="flex shrink-0 items-center gap-3">
            <nav className="mr-4 hidden items-center gap-7 min-[950px]:flex">{desktopNav}</nav>

            <button
              type="button"
              onClick={onBookClick}
              className="hidden rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-none border border-[color:var(--color-gold)] px-4 py-1.5 text-[10px] tracking-[0.3em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/45 sm:block"
            >
              Bestill Time
            </button>

            <button
              type="button"
              className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-[6px] bg-transparent text-[color:var(--color-gold)] sm:h-10 sm:w-10 sm:gap-[5px] min-[950px]:hidden"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={`block h-[2px] w-6 origin-center bg-current transition-all duration-300 sm:h-[1.5px] sm:w-5 ${open ? "translate-y-[7px] rotate-45 sm:translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 bg-current transition-all duration-300 sm:h-[1.5px] sm:w-5 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 origin-center bg-current transition-all duration-300 sm:h-[1.5px] sm:w-5 ${open ? "-translate-y-[7px] -rotate-45 sm:-translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 min-[950px]:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <aside
          id="mobile-nav"
          className={`absolute inset-0 h-dvh w-full bg-[linear-gradient(180deg,rgba(10,10,11,0.98)_0%,rgba(0,0,0,0.99)_100%)] transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
          role="dialog"
          aria-label="Meny"
          aria-modal="true"
        >
          <div className="flex h-full flex-col px-8 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))]">
            <div className="mb-8 flex items-center justify-between">
              <LashesLogo className="origin-left-top h-12 w-12 scale-[1.28]" />
              <button
                type="button"
                className="grid h-10 w-10 scale-[1.22] place-items-center bg-transparent text-[color:var(--color-gold)] transition-opacity duration-300 hover:opacity-70"
                aria-label="Lukk meny"
                onClick={() => setOpen(false)}
              >
                <span className="absolute h-[1.8px] w-6 rotate-45 bg-current" />
                <span className="absolute h-[1.8px] w-6 -rotate-45 bg-current" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center">
              <nav className="space-y-5 text-center">
                {navItems.map((item) => {
                  const itemClass =
                    "block text-[2rem] leading-none tracking-[0.12em] text-white/85 transition-colors duration-200 hover:text-[color:var(--color-gold)] sm:text-[2.25rem]";

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={itemClass}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={itemClass}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onBookClick?.();
                }}
                className="mt-8 rounded-bl-xl rounded-br-none rounded-tl-xl rounded-tr-xl border border-[color:var(--color-gold)]/85 px-10 py-4 text-[13px] tracking-[0.34em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.98]"
              >
                Bestill Time
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
