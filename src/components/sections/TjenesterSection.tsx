import { useState, useRef } from "react";

interface Service {
  title: string;
  description: string;
  img?: string;
  imgPosition?: string;
}

const services: Service[] = [
  {
    title: "Vippeextensions",
    description:
      "Få fyldige, vakre vipper skreddersydd etter dine ønsker. Vi tilbyr alt fra naturlig volumøkning til dramatisk effekt – med langvarige resultater som fremhever blikket ditt.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 30%",
  },
  {
    title: "Farging av vipper",
    description:
      "Gi vippene dine dybde og intensitet med profesjonell vippefarging. Perfekt for deg som ønsker et definert blikk uten å bruke maskara hver dag.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 20%",
  },
  {
    title: "Vippeløft",
    description:
      "Løft og krum dine naturlige vipper for en åpen, frisk effekt som varer i 6–8 uker. En elegant behandling som fremhever det du allerede har.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 10%",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-white/8 bg-[#111] transition-all duration-300 hover:border-[color:var(--color-gold)]/30 hover:shadow-[0_0_24px_rgba(183,132,113,0.1)]">
      {/* Image */}
      <div className="h-44 overflow-hidden">
        {service.img ? (
          <img
            src={service.img}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: service.imgPosition ?? "center" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a]">
            <span className="text-4xl text-[color:var(--color-gold)]/30">✦</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 py-4">
        <h3
          className="text-lg font-semibold tracking-wide text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
          {service.description}
        </p>
        <a
          href="#kontakt"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-[color:var(--color-gold)] transition-opacity duration-200 hover:opacity-70"
        >
          Les mer <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}

export default function TjenesterSection() {
  const [mobileIdx, setMobileIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const mobilePrev = () => setMobileIdx((i) => Math.max(0, i - 1));
  const mobileNext = () => setMobileIdx((i) => Math.min(services.length - 1, i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) mobileNext();
      else mobilePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="tjenester" className="py-16 px-10 sm:px-24 lg:px-16 min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-5xl w-full">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          <h2
            className="text-xl sm:text-3xl font-light tracking-[0.15em] text-white md:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tjenester
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm leading-relaxed tracking-wide text-white/55">
            Vi spesialiserer oss på vippebehandlinger som fremhever din naturlige skjønnhet.
            Alle behandlinger utføres med høykvalitetsprodukter og omhu for ditt velvære.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
        </div>

        {/* ── MOBILE — 1 card at a time with swipe ── */}
        <div className="sm:hidden">
          <div
            key={mobileIdx}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <ServiceCard service={services[mobileIdx]} />
          </div>
          <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>

          {/* Dots + arrows */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Forrige"
              onClick={mobilePrev}
              disabled={mobileIdx === 0}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] hover:shadow-none disabled:opacity-20 disabled:cursor-default bg-transparent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5">
              {services.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Tjeneste ${i + 1}`}
                  onClick={() => setMobileIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 hover:shadow-none ${
                    i === mobileIdx
                      ? "w-5 bg-[color:var(--color-gold)]"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Neste"
              onClick={mobileNext}
              disabled={mobileIdx === services.length - 1}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] hover:shadow-none disabled:opacity-20 disabled:cursor-default bg-transparent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── DESKTOP — grid ── */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
