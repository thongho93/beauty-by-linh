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
    img: "/img/instagram/7.jpg",
    imgPosition: "center 36%",
    details: ["Vippeløft", "Vippeløft med farging"],
  },
];

export default function Tjenester() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen text-white">
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* Hero — full viewport height */}
      <section className="relative isolate overflow-hidden bg-black min-h-screen">
        <img
          src="/img/Page cover/to-use-in-tjenester.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[45%_38%] min-[375px]:object-[50%_36%] min-[400px]:object-[56%_34%] sm:object-[75%_48%]"
        />

        {/* Gradient dim: light at top, dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

        {/* Content floats on top of image */}
        <div className="absolute inset-0 flex items-end pb-6 sm:pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-[min(100%,34rem)] overflow-hidden pr-2 min-[375px]:pr-0">
              <h1
                className="max-w-full text-[1.7rem] leading-[0.92] tracking-[0.005em] min-[375px]:text-[2.05rem] min-[400px]:text-[2.3rem] sm:text-[2.45rem] md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #EDD5C8 0%, #D4A898 40%, #B78471 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  width: "100%",
                  wordBreak: "normal",
                  overflowWrap: "normal",
                  paddingBottom: "0.15em",
                  filter: "drop-shadow(0 2px 12px rgba(183,132,113,0.45))",
                }}
              >
                Vippebehandlinger
              </h1>

              <div className="mt-4 grid max-w-xl grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                <div>
                  <div className="mb-3 h-px w-12 bg-[color:var(--color-gold)]/70" />
                  <p className="text-[0.92rem] leading-7 text-white/85 sm:text-sm sm:leading-7">
                    Løft blikket med skreddersydde vippebehandlinger utført med presisjon og ekspertise.
                  </p>
                </div>
                <div>
                  <div className="mb-3 h-px w-12 bg-[color:var(--color-gold)]/70" />
                  <p className="text-[0.92rem] leading-7 text-white/85 sm:text-sm sm:leading-7">
                    Vi tilbyr vippeextensions, farging og vippeløft for et naturlig og varig resultat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image attribution */}
        <div className="absolute bottom-2 right-3 z-10">
          <a
            href="https://www.freepik.com/free-ai-image/close-up-beautiful-woman-s-face_421084451.htm#fromView=search&page=2&position=6&uuid=e2376709-3f06-4327-b866-64c5fd54d478&query=eye+lashes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/5 hover:text-white/20 transition-colors"
            style={{ fontSize: "4px", letterSpacing: 0 }}
          >
            freepik
          </a>
        </div>
      </section>

      {/* Service cards */}
      <section id="tjenester-oversikt" className="scroll-mt-24 bg-black px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:mb-14">
            <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
            <h2
              className="text-[2rem] font-light tracking-[0.12em] text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Behandlinger
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[color:var(--color-gold)]/20 bg-[linear-gradient(160deg,rgba(15,15,17,0.98),rgba(9,9,11,0.95))] shadow-[0_22px_48px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-gold)]/45 hover:shadow-[0_28px_52px_rgba(0,0,0,0.52)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(183,132,113,0.15),transparent_55%)]" />
                {/* Image */}
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: service.imgPosition }}
                  />
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
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[color:var(--color-gold)]/35 pb-1 text-[0.86rem] font-semibold tracking-[0.18em] text-[color:var(--color-gold)] transition-all duration-300 hover:border-[color:var(--color-gold)] hover:text-[#d9ab99] hover:shadow-none"
                  >
                    Les mer{" "}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
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
