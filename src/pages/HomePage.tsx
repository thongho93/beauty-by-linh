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
      <Header onBookClick={() => setBookingOpen(true)} />
      <section
        id="home"
        className="relative overflow-hidden cursor-pointer bg-black"
        style={{ minHeight: "100svh" }}
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
        <div
          aria-hidden="true"
          className="absolute inset-0 hero-img"
          style={{
            backgroundImage: "url('/img/Page cover/freepik-to-use-in-homepage.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
          }}
        />
        {/* Uniform dim over the whole image */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Bottom fade to black — laptop+ only */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent hidden sm:block" />
        {/* Blend left black into the image's natural dark background */}
        <div
          className="hero-gradient-lr absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #000 0%, #000 25%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 55%, transparent 70%)",
          }}
        />

        <div
          className="relative z-10 flex items-end sm:items-center px-8 sm:px-16 lg:pl-16 pb-16 sm:pb-0"
          style={{ minHeight: "100svh" }}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <div className="w-full max-w-lg text-white flex flex-col items-center sm:items-start lg:-mt-[12vh]">
            <img
              src="/img/logo-transparent.png"
              alt="Lashes by Linh Oslo"
              className="w-52 sm:w-[300px] mb-5 sm:mb-6"
              style={{
                filter:
                  "drop-shadow(0 0 12px rgba(183,107,80,0.4)) drop-shadow(0 0 30px rgba(183,107,80,0.2))",
              }}
            />

            <div className="flex flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="w-[130px] sm:w-[155px] lg:w-[175px] whitespace-nowrap rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none border border-[color:var(--color-gold)] px-3 py-2.5 sm:px-4 sm:py-3 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_20px_rgba(183,132,113,0.3)] active:scale-[0.98]"
              >
                Bestill time
              </button>
              <a
                href="#tjenester"
                className="w-[130px] sm:w-[155px] lg:w-[175px] whitespace-nowrap rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none border border-white/35 px-3 py-2.5 sm:px-4 sm:py-3 text-center text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-white/70 transition-all duration-300 hover:border-white/70 hover:text-white active:scale-[0.98]"
              >
                Tjenester
              </a>
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
