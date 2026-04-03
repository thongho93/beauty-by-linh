import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

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
  const [expandedId, setExpandedId] = useState<string>("vipperextensions-nytt-sett");

  return (
    <main className="min-h-screen text-white">
      <Header />

      <section className="relative isolate overflow-hidden min-h-[72vh]">
        <img
          src="/img/priser-hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "72% center" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-32 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <h1
              className="max-w-xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                textShadow: "0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              Våre priser
            </h1>

            <div className="mt-8 flex max-w-xl gap-4">
              <div className="mt-2 h-px w-10 shrink-0 bg-[color:var(--color-gold)]/70" />
              <p className="text-base leading-8 text-white/85 sm:text-lg">
                Her finner du en oversikt over prisene på våre behandlinger innen
                vippeextensions og vippeløft. Velg behandlingen som passer best
                for deg, enten du ønsker et naturlig resultat eller mer fylde og
                definisjon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-8 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1100px] space-y-3">
          {priceCategories.map((category) => {
            const isExpanded = expandedId === category.id;

            return (
              <article
                key={category.id}
                className="overflow-hidden rounded-[22px] border border-white/10 bg-black/65 backdrop-blur-[2px]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? "" : category.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/[0.02] sm:px-6 sm:py-6"
                  aria-expanded={isExpanded}
                >
                  <h2
                    className="text-xl sm:text-2xl lg:text-[2.2rem] tracking-[0.01em]"
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

                  <span
                    className="text-xl sm:text-2xl shrink-0"
                    aria-hidden="true"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#B78471",
                    }}
                  >
                    {isExpanded ? "←" : "→"}
                  </span>
                </button>

                {isExpanded && (
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                    <div
                      className="mb-5 rounded-lg px-3 py-2 sm:px-4"
                      style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
                    >
                      <p className="text-base font-semibold text-white sm:text-lg">
                        {category.label}
                      </p>
                    </div>

                    {category.items.length > 0 ? (
                      <div className="divide-y divide-white/10">
                        {category.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between md:gap-4"
                          >
                            <h3
                              className="max-w-4xl text-lg leading-tight text-[#d6c8bf] sm:text-xl"
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 600,
                              }}
                            >
                              {item.name}
                            </h3>

                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
                              <span
                                className="min-w-[90px] text-left text-lg text-[#d6c8bf] sm:text-right sm:text-xl"
                                style={{
                                  fontFamily: "'Cormorant Garamond', serif",
                                  fontWeight: 600,
                                }}
                              >
                                {item.price}
                              </span>

                              <Link
                                to="/#kontakt"
                                className="inline-flex min-w-[120px] items-center justify-center rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-lg px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                                style={{ background: "linear-gradient(135deg, #7A4E42 0%, #9B6455 50%, #B78471 100%)" }}
                              >
                                Book time
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="py-6 text-lg text-white/65 sm:text-xl">
                        Prisliste kommer snart.
                      </p>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}