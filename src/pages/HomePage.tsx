import { useCallback } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";
import TjenesterSection from "@/components/sections/TjenesterSection";
import GalleriSection from "@/components/sections/GalleriSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function HomePage() {
  const booking = useBookingModal();

  const scrollToServices = useCallback(() => {
    const target = document.getElementById("tjenester");
    if (!target) {
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
    const sectionTopOffset = 18;

    const startY = window.scrollY;
    const targetY = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - headerHeight - sectionTopOffset,
    );
    const distance = targetY - startY;
    const duration = 1200;

    let startTime: number | null = null;

    const easeInOut = (value: number) =>
      value < 0.5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeInOut(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <main>
      {booking.isOpen ? <BookingModal onClose={booking.close} /> : null}
      <Header onBookClick={booking.open} />

      <section
        id="home"
        className="relative cursor-pointer overflow-hidden bg-black"
        style={{ minHeight: "100svh" }}
        role="button"
        tabIndex={0}
        onClick={scrollToServices}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            scrollToServices();
          }
        }}
      >
        <div
          aria-hidden="true"
          className="hero-img absolute inset-0"
          style={{
            backgroundImage: "url('/img/Page cover/freepik-to-use-in-homepage.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-black to-transparent sm:block" />
        <div
          className="hero-gradient-lr absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #000 0%, #000 15%, rgba(0,0,0,0.88) 26%, rgba(0,0,0,0.65) 38%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.1) 65%, transparent 76%)",
          }}
        />

        <div
          className="relative z-10 flex min-h-[100svh] items-end px-8 pb-16 sm:items-center sm:px-16 sm:pb-0 lg:pl-16"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          <div className="flex w-full max-w-lg flex-col items-center text-white sm:items-start lg:-mt-[12vh]">
            <img
              src="/img/logo-transparent.png"
              alt="Lashes by Linh Oslo"
              className="mb-5 w-52 sm:mb-6 sm:w-[300px]"
              style={{
                filter:
                  "drop-shadow(0 0 12px rgba(183,107,80,0.4)) drop-shadow(0 0 30px rgba(183,107,80,0.2))",
              }}
              width={300}
              height={300}
              fetchPriority="high"
            />

            <div className="flex flex-row justify-center gap-3 sm:justify-start sm:gap-4">
              <button
                type="button"
                onClick={booking.open}
                className="w-[150px] whitespace-nowrap rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-none border border-[color:var(--color-gold)] px-4 py-3 text-[11px] tracking-[0.28em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.98] sm:w-[155px] sm:text-[11px] sm:tracking-[0.3em] lg:w-[175px]"
              >
                Bestill Time
              </button>
              <button
                type="button"
                onClick={scrollToServices}
                className="w-[150px] whitespace-nowrap rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-lg border border-white/35 px-4 py-3 text-center text-[11px] tracking-[0.28em] text-white/70 transition-colors duration-300 hover:border-white/70 hover:text-white active:scale-[0.98] sm:w-[155px] sm:text-[11px] sm:tracking-[0.3em] lg:w-[175px]"
              >
                Tjenester
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Scroll til neste seksjon"
          onClick={(event) => {
            event.stopPropagation();
            scrollToServices();
          }}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 border-none bg-transparent text-2xl text-[color:var(--color-gold)]/80 transition-colors duration-300 hover:text-white active:scale-95 sm:block"
        >
          <span className="animate-float-y inline-block">↓</span>
        </button>
      </section>

      <TjenesterSection />
      <GalleriSection />
      <ReviewsSection />
    </main>
  );
}
