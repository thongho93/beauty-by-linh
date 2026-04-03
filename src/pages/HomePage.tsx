import { useRef, useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";
import GalleriSection from "@/components/sections/GalleriSection";

export default function HomePage() {
  const nextSectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

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
      {bookingOpen ? <BookingModal onClose={() => setBookingOpen(false)} /> : null}
      <Header mode="sticky" onBookClick={() => setBookingOpen(true)} />
      <section
        id="home"
        ref={heroRef}
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
      >
        <img
          src="/img/lashes-by-linh-1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover hero-img"
          style={{
            objectPosition: "90% 60%",
            transform: "scale(1.25) translateY(-12%)",
            transformOrigin: "center center",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        


        <div className="relative z-10 flex min-h-screen items-end justify-center px-4 pb-24">
          <div>
            <div
              className="text-center text-white"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
<div className="text-4xl sm:text-5xl lg:text-6xl tracking-[0.35em]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>LASHES<br className="block sm:hidden" /> BY LINH</div>
              <div className="mt-3 text-xs sm:text-sm tracking-[0.7em] text-white/60" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>OSLO</div>

              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="#tjenester"
                  className="rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-lg px-8 py-3.5 text-center text-sm font-bold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #D4A898 0%, #B78471 50%, #8B5E52 100%)" }}
                >
                  Tjenester
                </a>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-lg px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
                >
                  Bestill time
                </button>
              </div>
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

      <GalleriSection />
      <style>
        {`
          @media (min-width: 640px) and (max-width: 1279px) {
            .hero-img {
              object-position: 44% 45% !important;
              transform: scale(1.25) translateY(-12%) !important;
            }
          }
          @media (min-width: 1280px) {
            .hero-img {
              object-position: 75% 60% !important;
              transform: scale(1.25) translateY(-12%) !important;
            }
          }
          @media (max-width: 639px) {
            .hero-img {
              object-position: 35% 55% !important;
              transform: scale(1.15) translateY(-7%) !important;
            }
          }
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
