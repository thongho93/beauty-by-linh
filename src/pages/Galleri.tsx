import { useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";

const photos = [
  { src: "/img/instagram/1.png", alt: "Vippeextensions" },
  { src: "/img/instagram/2.png", alt: "Vippeløft" },
  { src: "/img/instagram/3.png", alt: "Klassisk sett" },
  { src: "/img/instagram/4.png", alt: "Volum vipper" },
  { src: "/img/instagram/5.png", alt: "Mix/wispy" },
  { src: "/img/instagram/6.png", alt: "Farging av vipper" },
];

export default function Galleri() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Lukk"
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center text-white/50 hover:text-white hover:shadow-none bg-transparent transition-colors"
            onClick={() => setLightbox(null)}
          >
            <span className="absolute h-[1.5px] w-5 rotate-45 bg-current" />
            <span className="absolute h-[1.5px] w-5 -rotate-45 bg-current" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero heading */}
      <section className="pt-32 pb-12 text-center px-4">
        <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
        <h1
          className="text-3xl font-light tracking-[0.15em] text-white sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Galleri
        </h1>
        <p className="mt-4 text-[10px] tracking-[0.15em] text-white/50 sm:text-sm sm:tracking-[0.25em]">
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
      </section>

      {/* Photo grid */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
            {photos.map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(photo)}
                className="group relative aspect-square overflow-hidden hover:shadow-none"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[color:var(--color-gold)]/0 group-hover:ring-[color:var(--color-gold)]/55 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 px-3 py-2 bg-gradient-to-t from-black/75 to-transparent">
                  <p className="text-[9px] tracking-[0.25em] text-white/80">{photo.alt.toUpperCase()}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/lash_by_lin/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[color:var(--color-gold)] px-10 py-3 text-xs tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98]"
            >
              SE FLERE PÅ INSTAGRAM
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
