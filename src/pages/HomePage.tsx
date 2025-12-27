import { useRef } from "react";
import Header from "@/components/layout/Header";

export default function HomePage() {
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const scrollToNextSlow = () => {
    const target = nextSectionRef.current;
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    const duration = 1200; // ms – slow, luxury feel

    let startTime: number | null = null;

    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeInOut(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <main>
      <section
        className="relative min-h-screen overflow-hidden cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={() => scrollToNextSlow()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToNextSlow();
          }
        }}
        style={{
          backgroundImage: "url(/img/lashes-by-linh-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "95% 72%",
        }}
      >
        <div
          className="absolute inset-0 scale-[0.99]"
          style={{
            backgroundImage: "url(/img/lashes-by-linh-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "95% 72%",
            transformOrigin: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />

        <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <Header />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="translate-y-16 md:translate-y-20">
            <div className="text-center text-white">
              <div className="mx-auto mb-6 grid h-24 w-24 place-items-center border border-white/60">
                <span className="text-4xl tracking-wide">B L</span>
              </div>

              <div className="text-3xl tracking-[0.3em]">BEAUTY BY LINH</div>
              <div className="mt-2 text-xs tracking-[0.5em] text-white/70">OSLO</div>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={(e) => {
            e.stopPropagation();
            scrollToNextSlow();
          }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[color:var(--color-gold)]/80 transition-all duration-300 hover:text-white hover:scale-110 active:scale-95 cursor-pointer"
        >
          <div
            className="text-2xl transition-colors duration-300 hover:text-[color:var(--color-gold)]"
            style={{ animation: "floatY 2s ease-in-out infinite" }}
          >
            ↓
          </div>
        </button>
      </section>

      <section ref={nextSectionRef} className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl">Neste seksjon</h2>
        <p className="mt-2 text-neutral-600">Her kommer innholdet under hero.</p>
      </section>
      <style>
        {`
          @keyframes floatY {
            0% { transform: translateY(0); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </main>
  );
}
