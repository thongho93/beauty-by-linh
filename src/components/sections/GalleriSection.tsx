import { useEffect, useState } from "react";

// Gallery images — add more by dropping photos into /public/img/instagram/
// Note: HEIC files need to be converted to JPG to display in browsers.
const galleryImages = [
  { src: "/img/instagram/1.png", alt: "Vippeextensions", position: "center center" },
  { src: "/img/instagram/2.png", alt: "Vippeløft", position: "center center" },
  { src: "/img/instagram/3.png", alt: "Klassisk sett", position: "center center" },
  { src: "/img/instagram/4.png", alt: "Volum vipper", position: "center center" },
  { src: "/img/instagram/5.png", alt: "Mix/wispy", position: "center center" },
  { src: "/img/instagram/6.png", alt: "Farging av vipper", position: "center center" },
];

export default function GalleriSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    setZoomed(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="galleri" className="relative bg-[#080808] px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 min-h-0 lg:min-h-screen flex flex-col justify-start lg:justify-center">
      {/* Top/bottom atmosphere fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          <h2 className="font-['Playfair_Display'] text-xl sm:text-3xl font-light tracking-[0.15em] text-white md:text-4xl">
            Galleri
          </h2>
          <p className="mt-4 text-[10px] tracking-[0.15em] sm:text-sm sm:tracking-[0.25em] text-white/50">
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

        {/* Symmetric 3×2 photo grid — equal images, equal gaps */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 min-[500px]:grid-cols-3">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(img)}
                className="group relative aspect-[16/9] overflow-hidden hover:shadow-none"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: img.position }}
                />
                {/* Gold border on hover */}
                <div className="absolute inset-0 ring-1 ring-inset ring-[color:var(--color-gold)]/0 group-hover:ring-[color:var(--color-gold)]/55 transition-all duration-300" />
                {/* Label slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 px-3 py-2 bg-gradient-to-t from-black/75 to-transparent">
                  <p className="text-[9px] tracking-[0.25em] text-white/80">{img.alt.toUpperCase()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center sm:mt-10">
          <a
            href="/galleri"
            className="inline-flex w-full max-w-[18rem] items-center justify-center border border-[color:var(--color-gold)] px-6 py-3 text-center text-[0.78rem] tracking-[0.2em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98] min-[375px]:w-auto min-[375px]:max-w-none min-[375px]:px-10 min-[375px]:text-xs min-[375px]:tracking-[0.3em]"
          >
            SE FLERE BILDER
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Lukk"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center text-white/70 transition-opacity hover:opacity-100 hover:shadow-none bg-transparent"
          >
            <span className="absolute h-[1.5px] w-6 rotate-45 bg-current" />
            <span className="absolute h-[1.5px] w-6 -rotate-45 bg-current" />
          </button>

          <div
            className="relative overflow-hidden"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={() => setZoomed((z) => !z)}
              className="block transition-transform duration-300 select-none"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                transform: zoomed ? "scale(2)" : "scale(1)",
                transformOrigin: "center center",
                cursor: zoomed ? "zoom-out" : "zoom-in",
              }}
            />
          </div>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/40">
            {zoomed ? "KLIKK FOR Å ZOOME UT" : "KLIKK FOR Å ZOOME INN"}
          </p>
        </div>
      )}
    </section>
  );
}
