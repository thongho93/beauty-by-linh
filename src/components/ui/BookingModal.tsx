import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

export default function BookingModal({ onClose }: Props) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // Load iframeResizer script
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/2.8.3/iframeResizer.min.js";
    script.onload = () => {
      // @ts-expect-error iFrameResize is loaded globally
      if (typeof iFrameResize === "function") iFrameResize({ checkOrigin: false }, "#reservationIframe65851");
    };
    document.body.appendChild(script);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      document.body.removeChild(script);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden border border-[color:var(--color-gold)]/30 bg-[color:var(--color-dark)] h-[92vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[color:var(--color-gold)]/20 px-6 py-4">
          <span className="text-sm tracking-[0.3em] text-[color:var(--color-gold)]">
            Bestill time
          </span>
          <button
            type="button"
            aria-label="Lukk booking"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center border border-[color:var(--color-gold)] bg-transparent text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_16px_rgba(183,132,113,0.25)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/40"
          >
            <span className="absolute h-[1.5px] w-4 rotate-45 bg-current" />
            <span className="absolute h-[1.5px] w-4 -rotate-45 bg-current" />
          </button>
        </div>

        {/* Iframe */}
        <iframe
          id="reservationIframe65851"
          src="https://bestill.timma.no/reservation/lashesbylinh"
          title="Book a lash appointment"
          width="100%"
          className="flex-1 min-h-0"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
