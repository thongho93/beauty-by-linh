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
                background: "linear-gradient(135deg, #D4A898 0%, #B78471 50%, #8B5E52 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                paddingBottom: "0.15em",
              }}
            >
              Vipper og bryn
            </h1>

            <div className="mt-8 flex max-w-xl gap-4">
              <div className="mt-2 h-px w-10 shrink-0 bg-[color:var(--color-gold)]/70" />
              <p className="text-base leading-8 text-white/85 sm:text-lg">
                Fremhev blikket ditt med profesjonelle vippebehandlinger
                skreddersydd for deg. Vi spesialiserer oss på vippeextensions
                og vippeløft – for et naturlig, fyldige eller dramatisk resultat
                som varer.
              </p>
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
                className="group flex flex-col overflow-hidden rounded-2xl bg-[#1a1412] transition-all duration-300 hover:shadow-[0_0_32px_rgba(183,132,113,0.12)]"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden rounded-xl m-3">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: service.imgPosition }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 pb-8 pt-4">
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-white/75">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="mt-6 flex items-center gap-1.5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-70 w-fit"
                  >
                    Les mer <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
