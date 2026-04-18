import { useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";

const photos = [
  { src: "/img/instagram/1.png", alt: "Vippeextensions", position: "center center" },
  { src: "/img/instagram/2.png", alt: "Vippeløft", position: "center center" },
  { src: "/img/instagram/3.png", alt: "Klassisk sett", position: "center center" },
  { src: "/img/instagram/4.png", alt: "Volum vipper", position: "center center" },
  { src: "/img/instagram/5.png", alt: "Mix/wispy", position: "center center" },
  { src: "/img/instagram/6.png", alt: "Farging av vipper", position: "center center" },
];

export default function Galleri() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightbox, setLightbox] = useState<(typeof photos)[number] | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(183,132,113,0.12),transparent_36%),radial-gradient(circle_at_90%_80%,rgba(183,132,113,0.08),transparent_32%)]" />
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Lukk"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-gold)]/40 bg-black/30 text-[color:var(--color-gold)] transition-all duration-300 hover:border-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_14px_rgba(183,132,113,0.3)]"
            onClick={() => setLightbox(null)}
          >
            <span className="absolute h-[1.5px] w-5 rotate-45 bg-current" />
            <span className="absolute h-[1.5px] w-5 -rotate-45 bg-current" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[92vw] overflow-hidden rounded-2xl border border-[color:var(--color-gold)]/25 bg-[#0f0f11] shadow-[0_26px_65px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[86vh] max-w-[92vw] object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 py-4">
              <p className="text-[0.66rem] tracking-[0.24em] text-white/85">{lightbox.alt.toUpperCase()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero heading */}
      <section className="relative px-4 pb-10 pt-32 text-center">
        <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/60" />
        <h1
          className="text-4xl font-light tracking-[0.12em] text-white sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Galleri
        </h1>
        <p className="mt-3 text-[0.62rem] tracking-[0.22em] text-white/35 sm:text-[0.7rem]">
          SIGNATURARBEIDER FRA STUDIOEN
        </p>
        <p className="mt-4 text-[10px] tracking-[0.15em] text-white/50 sm:text-sm sm:tracking-[0.25em]">
          FØLG OSS PÅ{" "}
          <a
            href="https://www.instagram.com/lash_by_lin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-gold)] transition-colors duration-300 hover:text-[#d8aa98]"
          >
            @LASH_BY_LIN
          </a>
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/60" />
      </section>

      {/* Photo grid */}
      <section className="relative px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 hidden justify-center sm:flex">
            <div className="h-px w-44 bg-gradient-to-r from-transparent via-[color:var(--color-gold)]/55 to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {photos.map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(photo)}
                className="group relative aspect-square overflow-hidden rounded-[0.85rem] border border-[color:var(--color-gold)]/14 bg-[#0e0e10] shadow-[0_16px_30px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-gold)]/42 hover:shadow-[0_22px_42px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                  style={{ objectPosition: photo.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-black/4" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_80%_20%,rgba(183,132,113,0.25),transparent_48%)]" />
                <div className="absolute inset-x-0 bottom-0 px-3 py-2.5">
                  <p className="text-[0.58rem] tracking-[0.22em] text-white/82 sm:text-[0.62rem]">{photo.alt.toUpperCase()}</p>
                  <p className="mt-1 text-[0.5rem] tracking-[0.24em] text-[color:var(--color-gold)]/75 sm:text-[0.54rem]">
                    LASHES BY LINH
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center sm:mt-14">
            <a
              href="https://www.instagram.com/lash_by_lin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none border border-[color:var(--color-gold)]/85 px-10 py-3 text-xs tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/12 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98]"
            >
              SE FLERE PÅ INSTAGRAM
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
