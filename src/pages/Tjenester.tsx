import { useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";

const services = [
  {
    title: "Vippeextensions",
    description:
      "Få fyldige, vakre vipper skreddersydd etter dine ønsker. Vi tilbyr alt fra naturlig volumøkning til dramatisk effekt – med langvarige resultater som fremhever blikket ditt.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 30%",
    details: [
      "Klassisk nytt sett",
      "Volum 2D–8D nytt sett",
      "Mix / wispy nytt sett",
      "Mega volum nytt sett",
    ],
  },
  {
    title: "Farging av vipper",
    description:
      "Gi vippene dine dybde og intensitet med profesjonell vippefarging. Perfekt for deg som ønsker et definert blikk uten å bruke maskara hver dag.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 20%",
    details: ["Vippefarging", "Brynfarging"],
  },
  {
    title: "Vippeløft",
    description:
      "Løft og krum dine naturlige vipper for en åpen, frisk effekt som varer i 6–8 uker. En elegant behandling som fremhever det du allerede har.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 10%",
    details: ["Vippeløft", "Vippeløft med farging"],
  },
];

export default function Tjenester() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen text-white">
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-screen">
        <img
          src="/img/lashes-by-linh-1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <h1
              className="text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                textShadow: "0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              Vipper og bryn
            </h1>

            <div className="mt-8 flex max-w-xl gap-4">
              <div className="mt-2 h-px w-10 shrink-0 bg-[color:var(--color-gold)]/70" />
              <p className="text-base leading-8 text-white/85 sm:text-lg">
                Fremhev ditt naturlige utseende med våre behandlinger for vipper
                og bryn! Vi tilbyr alt fra forming og farging til
                vippeextensions, slik at du får perfekte rammer for øynene.
                Skreddersydd for å fremheve din unike skjønnhet.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-lg px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
              >
                Bestill time
              </button>
              <a
                href="#tjenester-oversikt"
                className="rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-lg px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #D4A898 0%, #B78471 50%, #8B5E52 100%)" }}
              >
                Se tjenester
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section id="tjenester-oversikt" className="scroll-mt-24 py-20 px-4 bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
            <h2
              className="text-3xl font-light tracking-[0.15em] text-white md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Behandlinger
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-lg border border-white/8 bg-[#111] transition-all duration-300 hover:border-[color:var(--color-gold)]/30 hover:shadow-[0_0_24px_rgba(183,132,113,0.1)]"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: service.imgPosition }}
                  />
                </div>

                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3
                    className="text-lg font-semibold tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #D4A898 0%, #B78471 50%, #8B5E52 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-white/40">
                        <span className="h-px w-3 bg-[color:var(--color-gold)]/40 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="mt-6 rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-lg px-5 py-2.5 text-xs font-bold tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
                  >
                    Bestill time
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
