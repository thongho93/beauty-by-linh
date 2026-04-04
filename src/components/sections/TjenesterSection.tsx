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

export default function TjenesterSection() {
  return (
    <section id="tjenester" className="pt-24 pb-10 px-4">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          <h2
            className="text-3xl font-light tracking-[0.15em] text-white md:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tjenester
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed tracking-wide text-white/55">
            Vi spesialiserer oss på vippebehandlinger som fremhever din naturlige skjønnhet.
            Alle behandlinger utføres med høykvalitetsprodukter og omhu for ditt velvære.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-white/8 bg-[#111] transition-all duration-300 hover:border-[color:var(--color-gold)]/30 hover:shadow-[0_0_24px_rgba(183,132,113,0.1)]"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
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
              <div className="flex flex-1 flex-col px-6 py-6">
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
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-[color:var(--color-gold)] transition-opacity duration-200 hover:opacity-70"
                >
                  Les mer <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
