// Gallery images — add more by dropping photos into /public/img/instagram/
// Note: HEIC files need to be converted to JPG to display in browsers.
const galleryImages = [
  { src: "/img/instagram/A5515D00-80F9-4780-BC7A-402FED0D49ED.JPG", alt: "Vippeextensions", position: "center center" },
  { src: "/img/instagram/IMG_2526.JPG", alt: "Vippeløft", position: "center center" },
  { src: "/img/lashes-by-linh-1.jpg", alt: "Klassisk sett", position: "center 20%" },
  { src: "/img/lashes-by-linh-1.jpg", alt: "Volum vipper", position: "center 40%" },
  { src: "/img/lashes-by-linh-1.jpg", alt: "Mix/wispy", position: "center 60%" },
  { src: "/img/lashes-by-linh-1.jpg", alt: "Farging av vipper", position: "center 50%" },
];

export default function GalleriSection() {
  return (
    <section id="galleri" className="pt-10 pb-24 px-4">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
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

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group aspect-square overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: img.position }}
              />
            </div>
          ))}
        </div>

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
