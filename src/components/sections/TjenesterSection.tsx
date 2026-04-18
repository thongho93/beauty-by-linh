import { useState, useRef } from "react";

interface Service {
  title: string;
  description: string;
  img?: string;
  imgPosition?: string;
  href?: string;
}

const services: Service[] = [
  {
    title: "Vippeextensions",
    description:
      "Få fyldige, vakre vipper skreddersydd etter dine ønsker. Vi tilbyr alt fra naturlig volumøkning til dramatisk effekt – med langvarige resultater som fremhever blikket ditt.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 30%",
    href: "/vippeextensions",
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
    img: "/img/instagram/7.jpg",
    imgPosition: "center 36%",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[color:var(--color-gold)]/20 bg-[linear-gradient(160deg,rgba(15,15,17,0.98),rgba(9,9,11,0.95))] shadow-[0_22px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-gold)]/45 hover:shadow-[0_28px_52px_rgba(0,0,0,0.52)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(183,132,113,0.15),transparent_55%)]" />
      {/* Image */}
      <div className="relative h-44 overflow-hidden sm:h-48">
        {service.img ? (
          <img
            src={service.img}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: service.imgPosition ?? "center" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a]">
            <span className="text-4xl text-[color:var(--color-gold)]/30">✦</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-gold)]/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3
          className="text-[2rem] font-semibold leading-none tracking-[0.01em] text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {service.title}
        </h3>
        <p className="mt-4 flex-1 text-[0.98rem] leading-[1.62] text-white/62">
          {service.description}
        </p>
        <a
          href={service.href ?? "#kontakt"}
          className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[color:var(--color-gold)]/35 pb-1 text-[0.86rem] font-semibold tracking-[0.18em] text-[color:var(--color-gold)] transition-all duration-300 hover:border-[color:var(--color-gold)] hover:text-[#d9ab99] hover:shadow-none"
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
