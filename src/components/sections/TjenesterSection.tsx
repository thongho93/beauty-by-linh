import { useRef, useState, type TouchEvent } from "react";
import { Link } from "react-router-dom";
import { services, type ServiceItem } from "@/data/siteContent";

function ServiceCard({ service }: { service: ServiceItem }) {
  const ctaHref = service.href ?? "/#kontakt";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[color:var(--color-gold)]/20 bg-[linear-gradient(160deg,rgba(15,15,17,0.98),rgba(9,9,11,0.95))] shadow-[0_22px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-gold)]/45 hover:shadow-[0_28px_52px_rgba(0,0,0,0.52)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,132,113,0.15),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-40 overflow-hidden sm:h-44 lg:h-36 xl:h-40">
        <img
          src={service.img}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: service.imgPosition }}
          loading="lazy"
          width={960}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-gold)]/55 to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 lg:px-5 lg:pb-5 lg:pt-4">
        <h3
          className="text-[1.72rem] font-semibold leading-none tracking-[0.01em] text-white sm:text-[1.9rem] lg:text-[1.56rem] xl:text-[1.7rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {service.title}
        </h3>
        <p className="mt-3.5 flex-1 text-[0.94rem] leading-[1.55] text-white/62 lg:line-clamp-2 xl:line-clamp-3">
          {service.description}
        </p>

        <Link
          to={ctaHref}
          className="mt-4 inline-flex w-fit items-center gap-2 border-b border-[color:var(--color-gold)]/35 pb-1 text-[0.8rem] font-semibold tracking-[0.18em] text-[color:var(--color-gold)] transition-all duration-300 hover:border-[color:var(--color-gold)] hover:text-[#d9ab99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/45 sm:mt-5 sm:text-[0.84rem] lg:mt-4"
        >
          Les Mer{" "}
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function TjenesterSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => setMobileIndex((index) => Math.max(0, index - 1));
  const goNext = () => setMobileIndex((index) => Math.min(services.length - 1, index + 1));

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }

    const difference = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 40) {
      if (difference > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="tjenester"
      className="flex min-h-screen flex-col justify-center px-5 py-12 sm:px-10 sm:py-14 lg:min-h-[calc(100svh-4.5rem)] lg:justify-start lg:px-12 lg:py-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 text-center lg:mb-4">
          <div className="mx-auto mb-3 h-px w-14 bg-[color:var(--color-gold)]/50" />
          <h2
            className="text-lg font-light tracking-[0.12em] text-white text-wrap-balance sm:text-[1.7rem] md:text-[2.05rem] lg:text-[2.35rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tjenester
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[0.72rem] leading-relaxed tracking-wide text-white/55 sm:text-[0.82rem] lg:max-w-[50rem] lg:text-[0.9rem] lg:leading-[1.4]">
            Vi spesialiserer oss på vippebehandlinger som fremhever din naturlige skjønnhet. Alle
            behandlinger utføres med høykvalitetsprodukter og omhu for ditt velvære.
          </p>
          <div className="mx-auto mt-3 h-px w-14 bg-[color:var(--color-gold)]/50" />
        </div>

        <div className="sm:hidden">
          <div
            key={mobileIndex}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="animate-fade-up-in"
          >
            <ServiceCard service={services[mobileIndex]} />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Forrige"
              onClick={goPrev}
              disabled={mobileIndex === 0}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-transparent text-white/40 transition-colors duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] disabled:cursor-default disabled:opacity-20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="flex items-center gap-1.5">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  aria-label={`Tjeneste ${index + 1}`}
                  onClick={() => setMobileIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === mobileIndex
                      ? "w-5 bg-[color:var(--color-gold)]"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Neste"
              onClick={goNext}
              disabled={mobileIndex === services.length - 1}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-transparent text-white/40 transition-colors duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] disabled:cursor-default disabled:opacity-20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
