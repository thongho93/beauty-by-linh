import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { galleryPhotos } from "@/data/siteContent";

export default function GalleriSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="galleri"
      className="relative flex min-h-0 flex-col justify-start bg-[#080808] px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:min-h-screen lg:justify-center lg:px-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-10">
          <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          <h2 className="font-['Playfair_Display'] text-xl font-light tracking-[0.15em] text-white text-wrap-balance sm:text-3xl md:text-4xl">
            Galleri
          </h2>
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
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 min-[500px]:grid-cols-3">
            {galleryPhotos.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => {
                  setZoomed(false);
                  setLightbox(image);
                }}
                className="group relative aspect-[16/9] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: image.position }}
                  loading="lazy"
                  width={640}
                  height={360}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[color:var(--color-gold)]/0 transition-all duration-300 group-hover:ring-[color:var(--color-gold)]/55" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/75 to-transparent px-3 py-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-[9px] tracking-[0.25em] text-white/80">
                    {image.alt.toUpperCase()}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            to="/galleri"
            className="inline-flex w-full max-w-[18rem] items-center justify-center border border-[color:var(--color-gold)] px-6 py-3 text-center text-[0.78rem] tracking-[0.2em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 min-[375px]:w-auto min-[375px]:max-w-none min-[375px]:px-10 min-[375px]:text-xs min-[375px]:tracking-[0.3em]"
          >
            Se Flere Bilder
          </Link>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galleri bilde"
        >
          <button
            type="button"
            aria-label="Lukk"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center bg-transparent text-white/70 transition-opacity hover:opacity-100"
          >
            <span className="absolute h-[1.5px] w-6 rotate-45 bg-current" />
            <span className="absolute h-[1.5px] w-6 -rotate-45 bg-current" />
          </button>

          <div
            className="relative overflow-hidden"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={() => setZoomed((value) => !value)}
              className="block select-none transition-transform duration-300"
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
