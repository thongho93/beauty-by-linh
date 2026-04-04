import { useState, useRef } from "react";

const reviews = [
  // Page 1
  {
    name: "Jullia",
    text: "Hun er veldig nøye og forklarer alt grundig på forhånd, noe som gjør at man føler seg trygg. Resultatet ble helt fantastisk, mye bedre enn jeg hadde forventet. Jeg fikk også en ekstra vippbørste i gave, og hun er alltid smilende og hyggelig. Linh er virkelig til å stole på.",
    service: "Nytt sett Mega Volume",
    stars: 5,
  },
  {
    name: "Tina M",
    text: "Tok volum vipper, veldig fornøyd! Lin er utrolig dyktig – jeg er veldig sensitiv for smerte rundt øyelokkene, men Lin var så forsiktig og bevegde seg rolig at jeg ikke merket noe til napping i vippene. Behagelig atmosfære, og en veldig koselig dame!",
    service: "Vippeextensions, nytt sett Volum 2D–8D",
    stars: 5,
  },
  {
    name: "Anniken B",
    text: "Alltid 10/10. Vil ikke dra noe annet sted. Aldri ubehag, ingen svie, aldri kleint, bare deilig rolig musikk, hun følger med og justerer og ordner underveis så det alltid blir helt perfekt.",
    service: "Permanent vippeløft og farging av vipper",
    stars: 5,
  },
  // Page 2
  {
    name: "Hanne K",
    text: "Linh er en veldig behagelig og dyktig vippedesigner, jeg er alltid fornøyd når jeg har vært hos henne.",
    service: "Vippeextensions påfyll wispy/mix under 3 uker",
    stars: 5,
  },
  {
    name: "Tien T",
    text: "Mitt favoritt sted å dra til når jeg skal ta vipper. Lin er kjempe flink å klare og alltid å ordne vippene mine selv om de er kjempe svake og gi meg gode råd!",
    service: "Vippeextensions, nytt sett (klassisk)",
    stars: 5,
  },
  {
    name: "Katie H",
    text: "Har vært fast kunde her nesten et år og like fornøyd hver gang. Like serviceinnstilt og hyggelig prat.. ikke minst fine vipper når man går ut av døra.. Vi sees!",
    service: "Vippeextensions, nytt sett (klassisk)",
    stars: 5,
  },
  // Page 3
  {
    name: "Tanja C",
    text: "Min faste vippeteknikker i ett år nå, utrolig nøye, rask, og kvalitets levering på vippene som varer lenge og ser nydelig ut fortsatt når det nærmer seg påfyll! Alltid superflink med å levere akkurat det jeg ønsker.",
    service: "Vippeextensions påfyll volum under 3 uker",
    stars: 5,
  },
  {
    name: "Veronica",
    text: "Min faste vippetekniker gjennom 12 år har dessverre flyttet og jeg var nødt til å finne en ny. Har prøvd mange i Oslo, men ikke vært fornøyd. Heldigvis fant jeg Linh som var utrolig flink. Vippene mine er helt nydelige nå, fikk så mye volum som jeg ønsket. Prisen er bra og lokalet var behagelig. Anbefales!",
    service: "Vippeextensions påfyll volum under 3 uker",
    stars: 5,
  },
  {
    name: "Tanja C",
    text: "Linh er seriøst den flinkeste vippeteknikeren jeg har vært hos, hun er super fleksibel med timene, utøver en kjempenøye jobb og vippene varer lenge! Alltid super fornøyd med resultatet.",
    service: "Vippeextensions påfyll volum eller mix",
    stars: 5,
  },
];

const PER_PAGE = 3;
const totalPages = Math.ceil(reviews.length / PER_PAGE);

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[color:var(--color-gold)]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex flex-col rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-white/6 bg-[#111] px-5 py-5 transition-all duration-300 hover:border-[color:var(--color-gold)]/25 hover:shadow-[0_0_24px_rgba(183,132,113,0.07)]">
      <span
        className="mb-4 block text-4xl leading-none text-[color:var(--color-gold)]/30"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        "
      </span>
      <Stars count={review.stars} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">{review.text}</p>
      <div className="my-5 h-px bg-white/8" />
      <p className="text-sm font-medium text-white/90 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
        {review.name}
      </p>
      {review.service && (
        <p className="mt-1 text-[10px] tracking-[0.15em] text-white/35">{review.service.toUpperCase()}</p>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  // Desktop: 3 per page
  const [page, setPage] = useState(0);
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  // Mobile: 1 card at a time
  const [mobileIdx, setMobileIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const mobilePrev = () => setMobileIdx((i) => Math.max(0, i - 1));
  const mobileNext = () => setMobileIdx((i) => Math.min(reviews.length - 1, i + 1));

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
    <section className="relative py-16 px-10 sm:px-16">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
          <h2 className="font-['Playfair_Display'] text-xl sm:text-3xl font-light tracking-[0.15em] text-white md:text-4xl">
            Hva kundene sier
          </h2>
          <p className="mt-4 text-[10px] tracking-[0.15em] sm:text-sm sm:tracking-[0.25em] text-white/40">100+ ANMELDELSER PÅ TIMMA</p>
          <div className="mx-auto mt-4 h-px w-16 bg-[color:var(--color-gold)]/50" />
        </div>

        {/* ── MOBILE slider (≤ sm) — 1 card at a time with swipe ── */}
        <div className="sm:hidden">
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ animation: "fadeIn 0.3s ease" }}
            key={mobileIdx}
          >
            <ReviewCard review={reviews[mobileIdx]} />
          </div>
          <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>

          {/* Mobile dots + arrows */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Forrige"
              onClick={mobilePrev}
              disabled={mobileIdx === 0}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] hover:shadow-none disabled:opacity-20 disabled:cursor-default bg-transparent"
            >
              <ChevronLeft />
            </button>

            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Anmeldelse ${i + 1}`}
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
              disabled={mobileIdx === reviews.length - 1}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] hover:shadow-none disabled:opacity-20 disabled:cursor-default bg-transparent"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* ── DESKTOP slider (sm+) — 3 cards per page ── */}
        <div className="hidden sm:block">
          <div className="relative flex items-center gap-3">
            <button
              type="button"
              aria-label="Forrige"
              onClick={prev}
              disabled={page === 0}
              className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] hover:shadow-none disabled:opacity-20 disabled:cursor-default bg-transparent"
            >
              <ChevronLeft />
            </button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIdx) => (
                  <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-3 gap-4">
                    {reviews.slice(pageIdx * PER_PAGE, pageIdx * PER_PAGE + PER_PAGE).map((review, i) => (
                      <ReviewCard key={i} review={review} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Neste"
              onClick={next}
              disabled={page === totalPages - 1}
              className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-[color:var(--color-gold)]/40 hover:text-[color:var(--color-gold)] hover:shadow-none disabled:opacity-20 disabled:cursor-default bg-transparent"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Desktop dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Side ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 hover:shadow-none ${
                  i === page
                    ? "w-6 bg-[color:var(--color-gold)]"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Link to Timma */}
        <div className="mt-12 text-center">
          <a
            href="https://timma.no/salong/lashes-by-linh#:~:text=today%2008%3A00-,Reviews,-(100)"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[color:var(--color-gold)] px-10 py-3 text-xs tracking-[0.3em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98]"
          >
            SE ALLE ANMELDELSER
          </a>
        </div>
      </div>
    </section>
  );
}
