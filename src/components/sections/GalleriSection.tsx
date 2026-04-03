import { useEffect } from "react";

export default function GalleriSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="galleri" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">

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

        {/* Behold Instagram widget */}
        {/* @ts-expect-error – behold-widget is a custom HTML element */}
        <behold-widget feed-id="HwdIqHyPiLk1quWWNn7s" />

        {/* Bottom link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/lash_by_lin/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[color:var(--color-gold)] px-10 py-3 text-xs tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98]"
          >
            SE FLERE BILDER
          </a>
        </div>
      </div>
    </section>
  );
}
