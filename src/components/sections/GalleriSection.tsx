// Gallery images — add more by dropping photos into /public/img/instagram/
// Note: HEIC files need to be converted to JPG to display in browsers.
const galleryImages = [
  { src: "/img/instagram/A5515D00-80F9-4780-BC7A-402FED0D49ED.JPG", alt: "Vippeextensions", position: "center center" },
  { src: "/img/instagram/IMG_2526.JPG", alt: "Vippeløft", position: "center center" },
  { src: "/img/instagram/IMG_1133.jpg", alt: "Klassisk sett", position: "center center" },
  { src: "/img/instagram/IMG_2535.jpg", alt: "Volum vipper", position: "center center" },
  { src: "/img/instagram/IMG_8417.jpg", alt: "Mix/wispy", position: "center center" },
  { src: "/img/instagram/IMG_8496.jpg", alt: "Farging av vipper", position: "center center" },
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
        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl">
        <div className="grid grid-cols-3 gap-[3px]">
          {galleryImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/lash_by_lin/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: img.position }}
              />
              {/* Instagram-style hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7 drop-shadow">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
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
