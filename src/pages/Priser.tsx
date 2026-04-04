import { useState } from "react";
import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";

type PriceItem = {
  name: string;
  price: string;
};

type PriceCategory = {
  id: string;
  title: string;
  label: string;
  items: PriceItem[];
};

const priceCategories: PriceCategory[] = [
  {
    id: "vipperextensions-nytt-sett",
    title: "Vippeextensions nytt sett",
    label: "Vippeextensions by Linh",
    items: [
      { name: "Klassisk nytt sett", price: "799 kr" },
      { name: "Volum 2D–8D nytt sett", price: "999 kr" },
      { name: "Mix / wispy nytt sett", price: "999 kr" },
      { name: "Mega volum nytt sett", price: "1 299 kr" },
      { name: "Brune vipper", price: "+49 kr" },
    ],
  },
  {
    id: "pafyll-og-vedlikehold",
    title: "Påfyll & vedlikehold",
    label: "Påfyll by Linh",
    items: [
      { name: "Klassisk påfyll under 3 uker", price: "699 kr" },
      { name: "Mix / wispy påfyll under 3 uker", price: "799 kr" },
      { name: "Volum påfyll under 3 uker", price: "799 kr" },
      { name: "Mega volum under 2–3 uker", price: "1 199 kr" },
      { name: "Rask påfyll klassisk under 2 uker", price: "599 kr" },
      { name: "Rask påfyll volum / mix / wispy", price: "699 kr" },
      { name: "Ekstra gebyr fra andre steder", price: "+100 kr" },
    ],
  },
  {
    id: "vippeloft-og-tillegg",
    title: "Vippeløft & tillegg",
    label: "Vippeløft by Linh",
    items: [
      { name: "Vippeløft", price: "699 kr" },
      { name: "Vippeløft med farging", price: "799 kr" },
      { name: "Fjerning av vippeextensions", price: "199 kr" },
      { name: "Farging av vipper", price: "199 kr" },
    ],
  },
];

export default function Priser() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen text-white">
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* Hero — full viewport height */}
      <section className="relative isolate overflow-hidden bg-black min-h-screen">
        {/* Background image */}
        <img
          src="/img/Page cover/to-use-in-priser.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "65% 25%", transformOrigin: "center center" }}
        />

        {/* Gradient dim: light at top, dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

        {/* Content floats on top of image */}
        <div className="absolute inset-0 flex items-end pb-12 sm:pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h1
                className="text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #EDD5C8 0%, #D4A898 40%, #B78471 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  paddingBottom: "0.15em",
                  filter: "drop-shadow(0 2px 12px rgba(183,132,113,0.45))",
                }}
              >
                Våre priser
              </h1>

              <div className="mt-6 flex gap-4 max-w-xl">
                <div className="flex-1">
                  <div className="mb-3 h-px w-10 bg-[color:var(--color-gold)]/70" />
                  <p className="text-sm leading-7 text-white/85">
                    Her finner du en oversikt over prisene<br />på våre vippebehandlinger.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="mb-3 h-px w-10 bg-[color:var(--color-gold)]/70" />
                  <p className="text-sm leading-7 text-white/85">
                    Velg behandlingen som passer<br />best for deg og dine ønsker.
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none border border-[color:var(--color-gold)] px-7 py-3 text-[11px] tracking-[0.35em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_20px_rgba(183,132,113,0.3)] active:scale-[0.98]"
                >
                  Bestill time
                </button>
                <a
                  href="#prisoversikt"
                  className="rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none border border-white/35 px-7 py-3 text-[11px] tracking-[0.35em] text-white/70 transition-all duration-300 hover:border-white/70 hover:text-white active:scale-[0.98]"
                >
                  Se priser
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image attribution */}
        <div className="absolute bottom-2 right-3 z-10">
          <a
            href="https://www.freepik.com/free-photo/thoughtful-young-woman-with-pink-flower_4096951.htm#fromView=search&page=2&position=48&uuid=5717f3dd-4178-4be1-bbe6-29820664b8ee&query=beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/5 hover:text-white/20 transition-colors" style={{ fontSize: "4px", letterSpacing: 0 }}
          >
freepik
          </a>
        </div>
      </section>

      <section id="prisoversikt" className="scroll-mt-24 px-5 pt-6 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceCategories.map((category) => (
            <article
              key={category.id}
              className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/65 backdrop-blur-[2px]"
            >
              {/* Category title */}
              <div className="border-b border-white/10 px-4 py-4">
                <h2
                  className="text-2xl font-semibold leading-tight tracking-[0.01em]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #D4A898 0%, #B78471 50%, #8B5E52 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {category.title}
                </h2>
              </div>

              {/* Price rows */}
              <div className="flex flex-1 flex-col divide-y divide-white/8 px-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3 py-3">
                    <span
                      className="text-base leading-snug text-[#d6c8bf]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="shrink-0 text-base text-[#d6c8bf]/80"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}