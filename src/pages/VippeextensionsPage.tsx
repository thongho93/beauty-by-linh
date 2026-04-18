import { useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";
import { useBookingModal } from "@/hooks/useBookingModal";

const types = [
  {
    title: "Klassisk",
    description:
      "Én extension per naturlig vippe for et naturlig, definert blikk. Perfekt for deg som ønsker en subtil forbedring av vippelengde og krumming.",
  },
  {
    title: "Volum (2D–8D)",
    description:
      "Flere tynne extensions fannes til én naturlig vippe for et fyldigere og mer dramatisk utseende. Ideelt for deg som ønsker mer volum.",
  },
  {
    title: "Mix / Wispy",
    description:
      "En kombinasjon av klassiske og volumvipper for et teksturert, naturlig-dramatisk look med variert lengde og plassering.",
  },
  {
    title: "Mega Volum",
    description:
      "Det fyldigste og mest dramatiske resultatet vi tilbyr. Perfekt for scener, events eller deg som elsker maksimalt volum.",
  },
];

const faqs = [
  {
    q: "Hvor lenge varer vippeextensions?",
    a: "Extensions varer typisk 3–5 uker avhengig av ditt naturlige vippevekstssyklus og stell. Vi anbefaler påfyll hver 2–3 uke for å holde settet friskt.",
  },
  {
    q: "Skader extensions mine naturlige vipper?",
    a: "Nei. Når behandlingen utføres korrekt med riktige produkter og teknikk, er vippeextensions trygge for dine naturlige vipper.",
  },
  {
    q: "Hva bør jeg gjøre før timen?",
    a: "Kom uten maskara eller øyensminke. Unngå øyenkrem og oljeprodukter rundt øynene dagen før timen.",
  },
  {
    q: "Kan jeg bruke maskara på extensions?",
    a: "Vi anbefaler ikke maskara på extensions da det kan bryte ned limet. Settet gir allerede en fylt effekt som maskara.",
  },
];

export default function VippeextensionsPage() {
  const booking = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header onBookClick={booking.open} />
      {booking.isOpen && <BookingModal onClose={booking.close} />}

      <section
        className="relative flex items-end overflow-hidden bg-black"
        style={{ minHeight: "52vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/lashes-by-linh-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-8 pb-14 pt-32 lg:px-16">
          <p
            className="mb-3 text-xs tracking-[0.3em] text-[color:var(--color-gold)]/70"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TJENESTER
          </p>
          <h1
            className="text-4xl font-semibold text-white text-wrap-balance sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vippeextensions
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Få fyldige, vakre vipper skreddersydd etter dine ønsker, fra naturlig volumøkning til
            dramatisk effekt.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 py-16 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2
              className="text-2xl font-semibold text-white sm:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hva Er Vippeextensions?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Vippeextensions er syntetiske eller silkefibre som festes enkeltvis på dine naturlige
              vipper med et medisinsk godkjent lim. Resultatet er lengre, tykkere og mer kurvede
              vipper som varer i uker, uten bruk av maskara.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Vi tilpasser lengde, krumming, tykkelse og stil etter ditt ansikt og dine ønsker, slik
              at du får et resultat som føles naturlig og ser luksøst ut.
            </p>
            <button
              type="button"
              onClick={booking.open}
              className="mt-8 inline-flex items-center gap-3 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-none border border-[color:var(--color-gold)] px-6 py-3.5 text-sm tracking-[0.25em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.98]"
            >
              Bestill Time
            </button>
          </div>
          <div className="overflow-hidden rounded-bl-2xl rounded-tr-2xl">
            <img
              src="/img/lashes-by-linh-1.jpg"
              alt="Vippeextensions"
              className="h-80 w-full object-cover"
              style={{ objectPosition: "center 20%" }}
              loading="lazy"
              width={960}
              height={720}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl px-8 py-16 lg:px-16">
          <h2
            className="text-center text-2xl font-semibold text-white sm:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Våre Stiler
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-white/50">
            Velg stilen som passer deg. Vi veileder deg gjerne.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {types.map((type) => (
              <article
                key={type.title}
                className="rounded-bl-2xl rounded-tr-2xl border border-white/8 bg-[#111] p-6 transition-all duration-300 hover:border-[color:var(--color-gold)]/30 hover:shadow-[0_0_20px_rgba(183,132,113,0.08)]"
              >
                <h3
                  className="text-base font-semibold text-[color:var(--color-gold)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {type.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 py-16 lg:px-16">
        <h2
          className="text-2xl font-semibold text-white sm:text-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Slik Foregår Behandlingen
        </h2>
        <ol className="mt-8 space-y-6">
          {[
            {
              step: "01",
              title: "Konsultasjon",
              desc: "Vi kartlegger dine ønsker, vippenes tilstand og anbefaler riktig stil og lengde.",
            },
            {
              step: "02",
              title: "Forberedelse",
              desc: "Øynene renses og nedre vipper tapes forsiktig for å holde dem unna.",
            },
            {
              step: "03",
              title: "Påsetting",
              desc: "Extensions festes én og én på dine naturlige vipper med medisinsk godkjent lim. Prosessen tar 1,5–2,5 timer.",
            },
            {
              step: "04",
              title: "Tørking & avslutning",
              desc: "Limet tørker, du ser resultatet og vi gir deg tips for stell hjemme.",
            },
          ].map((item) => (
            <li key={item.step} className="flex items-start gap-6">
              <span
                className="shrink-0 text-3xl font-light text-[color:var(--color-gold)]/30"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/8 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl px-8 py-16 lg:px-16">
          <h2
            className="text-2xl font-semibold text-white sm:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vanlige Spørsmål
          </h2>
          <div className="mt-8 divide-y divide-white/8">
            {faqs.map((faq, index) => (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {faq.q}
                  <span className="ml-4 shrink-0 text-lg text-[color:var(--color-gold)]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="pb-5 text-sm leading-relaxed text-white/55">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 py-16 text-center lg:px-16">
        <h2
          className="text-2xl font-semibold text-white sm:text-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Klar For Nye Vipper?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/55">
          Book din time i dag og la oss skape det perfekte blikket for deg.
        </p>
        <button
          type="button"
          onClick={booking.open}
          className="mt-8 inline-flex items-center gap-3 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-none border border-[color:var(--color-gold)] px-8 py-4 text-sm tracking-[0.25em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.98]"
        >
          Bestill Time
        </button>
      </section>
    </>
  );
}
