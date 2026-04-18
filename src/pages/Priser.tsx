import Header from "@/components/layout/Header";
import BookingModal from "@/components/ui/BookingModal";
import { priceCategories } from "@/data/siteContent";
import { useBookingModal } from "@/hooks/useBookingModal";
import { getStripePaymentLink, hasStripePaymentLinks } from "@/lib/payments";

export default function Priser() {
  const booking = useBookingModal();
  const paymentLinksEnabled = hasStripePaymentLinks();

  return (
    <main className="min-h-screen text-white">
      {booking.isOpen && <BookingModal onClose={booking.close} />}
      <Header onBookClick={booking.open} />

      <section className="relative isolate min-h-screen overflow-hidden bg-black">
        <img
          src="/img/Page cover/to-use-in-priser.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[65%_45%] min-[400px]:object-[45%_50%] sm:object-[65%_25%]"
          fetchPriority="high"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

        <div className="absolute inset-0 flex items-end pb-12 sm:pb-16">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h1
                className="text-4xl leading-[0.95] text-wrap-balance sm:text-5xl lg:text-6xl"
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
                Våre Priser
              </h1>

              <div className="mt-6 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                <div className="flex-1">
                  <div className="mb-3 h-px w-10 bg-[color:var(--color-gold)]/70" />
                  <p className="text-sm leading-7 text-white/85">
                    Her finner du en oversikt over prisene på våre vippebehandlinger.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="mb-3 h-px w-10 bg-[color:var(--color-gold)]/70" />
                  <p className="text-sm leading-7 text-white/85">
                    Velg behandlingen som passer best for deg og dine ønsker.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-stretch gap-4">
                <button
                  type="button"
                  onClick={booking.open}
                  className="flex-1 rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-lg border border-[color:var(--color-gold)] px-7 py-3 text-center text-[11px] tracking-[0.35em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.98]"
                >
                  Bestill Time
                </button>
                <a
                  href="#prisoversikt"
                  className="flex-1 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-none border border-white/35 px-7 py-3 text-center text-[11px] tracking-[0.35em] text-white/70 transition-colors duration-300 hover:border-white/70 hover:text-white active:scale-[0.98]"
                >
                  Se Priser
                </a>
              </div>

              {paymentLinksEnabled ? (
                <p className="mt-4 text-xs leading-relaxed text-white/70">
                  Stripe-betaling er aktivert for depositum. Du kan betale direkte fra prislisten
                  nedenfor.
                </p>
              ) : (
                <p className="mt-4 text-xs leading-relaxed text-white/55">
                  Betaling via Stripe aktiveres når betalingslenker er lagt inn i miljøvariablene.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-3 z-10">
          <a
            href="https://www.freepik.com/free-photo/thoughtful-young-woman-with-pink-flower_4096951.htm#fromView=search&page=2&position=48&uuid=5717f3dd-4178-4be1-bbe6-29820664b8ee&query=beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/5 transition-colors hover:text-white/20"
            style={{ fontSize: "4px", letterSpacing: 0 }}
          >
            freepik
          </a>
        </div>
      </section>

      <section id="prisoversikt" className="scroll-mt-24 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceCategories.map((category) => {
            const paymentLink = getStripePaymentLink(category.id);

            return (
              <article
                key={category.id}
                className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/65 backdrop-blur-[2px]"
              >
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

                <div className="border-t border-white/10 px-4 py-4">
                  {paymentLink ? (
                    <a
                      href={paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-gold)]/85 px-4 py-2 text-[10px] tracking-[0.25em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/12"
                    >
                      Betal Depositum →
                    </a>
                  ) : (
                    <p className="text-xs leading-relaxed text-white/50">
                      Bestilling og betaling skjer i dag via Timma.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
