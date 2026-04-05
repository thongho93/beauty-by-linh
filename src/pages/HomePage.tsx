import { useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";
import TjenesterSection from "@/components/sections/TjenesterSection";
import GalleriSection from "@/components/sections/GalleriSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const scrollToNextSlow = () => {
    const target = document.getElementById("tjenester");
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
        className="relative overflow-hidden cursor-pointer" style={{ minHeight: "100svh" }}
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
          src="/img/Page cover/to-use-in-homepage.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover hero-img"
          style={{ objectPosition: "right bottom", transform: "translateX(22%) translateY(12%) scale(1.05)" }}
        />
        {/* Hard black on left fading into transparent where image starts */}
        <div className="hero-gradient-lr absolute inset-0" style={{ background: "linear-gradient(to right, #000 0%, #000 30%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.05) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Top gradient to cover gap when image is pushed down on tablet */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" style={{ background: "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.7) 8%, transparent 20%)" }} />

        <div
          className="relative z-10 flex items-center px-8 sm:px-16 lg:px-16"
          style={{ minHeight: "100svh" }}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <div className="max-w-lg text-white">
            <div className="text-5xl sm:text-6xl lg:text-7xl tracking-[0.25em]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>
              LASHES<br />BY LINH
            </div>
            <div className="mt-3 text-xs sm:text-sm tracking-[0.7em] text-white/60" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>OSLO</div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <a
                href="#tjenester"
                className="w-full max-w-[220px] rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none border border-white/35 px-5 py-3.5 text-center text-[11px] tracking-[0.35em] text-white/70 transition-all duration-300 hover:border-white/70 hover:text-white active:scale-[0.98]"
              >
                Tjenester
              </a>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="w-full max-w-[220px] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none border border-[color:var(--color-gold)] px-5 py-3.5 text-[11px] tracking-[0.35em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_20px_rgba(183,132,113,0.3)] active:scale-[0.98]"
              >
                Bestill time
              </button>
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
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 bg-transparent border-none text-[color:var(--color-gold)]/80 transition-all duration-300 hover:text-white hover:bg-transparent hover:shadow-none hover:scale-110 active:scale-95 cursor-pointer hidden sm:block"
        >
          <div
            className="text-2xl transition-colors duration-300 hover:text-[color:var(--color-gold)]"
            style={{ animation: "floatY 2s ease-in-out infinite" }}
          >
            ↓
          </div>
        </button>
      </section>

      <TjenesterSection />

      <GalleriSection />
      <ReviewsSection />
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
