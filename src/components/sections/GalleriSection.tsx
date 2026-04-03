import { useEffect, useRef } from "react";

const WIDGET_ID = import.meta.env.VITE_LIGHTWIDGET_ID as string | undefined;

export default function GalleriSection() {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!WIDGET_ID || scriptRef.current) return;
    const script = document.createElement("script");
    script.src   = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    scriptRef.current = script;
    document.body.appendChild(script);
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <section id="galleri" className="py-24 px-4">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          <h2 className="font-['Playfair_Display'] text-3xl font-light tracking-[0.15em] text-white md:text-4xl">
            Galleri
          </h2>
          <p className="mt-4 text-sm tracking-[0.25em] text-white/50">
            FØLG OSS PÅ{" "}
            <a
              href="https://www.instagram.com/lash_by_lin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--color-gold)] transition-opacity hover:opacity-70"
            >
              @LASH_BY_LIN
            </a>
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
        </div>

        {/* Feed */}
        {WIDGET_ID ? (
          <div className="overflow-hidden">
            <iframe
              src={`//lightwidget.com/widgets/${WIDGET_ID}.html`}
              scrolling="no"
              allowTransparency
              className="lightwidget-widget w-full border-0 overflow-hidden"
              style={{ minHeight: "600px" }}
              title="Instagram feed – @lash_by_lin"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 rounded border border-dashed border-[color:var(--color-gold)]/30 py-20 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[color:var(--color-gold)]/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <div>
              <p className="text-sm tracking-[0.2em] text-white/60">INSTAGRAM-FEED KOMMER HER</p>
              <p className="mt-2 text-xs text-white/30">
                Legg til{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[color:var(--color-gold)]/70">
                  VITE_LIGHTWIDGET_ID
                </code>{" "}
                i{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[color:var(--color-gold)]/70">
                  .env.local
                </code>
              </p>
            </div>
            <a
              href="https://www.instagram.com/lash_by_lin/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[color:var(--color-gold)] px-8 py-2.5 text-xs tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98]"
            >
              SE PÅ INSTAGRAM
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
