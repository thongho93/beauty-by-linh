import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

export default function BookingModal({ onClose }: Props) {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "contain";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Bestill time"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(183,132,113,0.18),rgba(0,0,0,0.88)_55%)] backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-dvh w-full flex-col overflow-hidden border border-[color:var(--color-gold)]/30 bg-[color:var(--color-dark)] shadow-[0_35px_90px_rgba(0,0,0,0.55)] sm:h-[min(94dvh,920px)] sm:max-w-5xl sm:rounded-2xl sm:border-[color:var(--color-gold)]/40">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[color:var(--color-gold)]/80 to-transparent" />

        <div className="flex items-center justify-between border-b border-[color:var(--color-gold)]/20 bg-[linear-gradient(180deg,rgba(27,24,24,0.98),rgba(15,15,16,0.98))] px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-7 sm:py-4">
          <span className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--color-gold)] sm:text-sm">
            Bestill Time
          </span>
          <button
            type="button"
            aria-label="Lukk booking"
            onClick={onClose}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-gold)]/70 bg-black/15 text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/14 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/40 sm:h-10 sm:w-10"
          >
            <span className="absolute h-[1.5px] w-4 rotate-45 bg-current sm:w-3.5" />
            <span className="absolute h-[1.5px] w-4 -rotate-45 bg-current sm:w-3.5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 bg-[#ece7e3] p-0 sm:bg-[linear-gradient(180deg,#f3efed_0%,#ece7e3_100%)] sm:p-3">
          <div className="h-full w-full overflow-hidden bg-white sm:rounded-xl sm:border sm:border-black/8 sm:shadow-[0_18px_38px_rgba(21,18,17,0.22)]">
            <iframe
              id="reservationIframe47579"
              src="https://bestill.timma.no/reservation/lashesbylinh"
              title="Bestill time hos Lashes by Linh"
              width="100%"
              className="h-full w-full"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
