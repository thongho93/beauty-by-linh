import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <main>
      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url(/img/lashes-by-linh-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "85% 100%",
        }}
      >
        <div
          className="absolute inset-0 scale-[1.02]"
          style={{
            backgroundImage: "url(/img/lashes-by-linh-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "85% 100%",
            transformOrigin: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />

        <Header />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="text-center text-white">
            <div className="mx-auto mb-6 grid h-24 w-24 place-items-center border border-white/60">
              <span className="text-4xl tracking-wide">BL</span>
            </div>

            <div className="text-3xl tracking-[0.3em]">BEAUTY BY LINH</div>
            <div className="mt-2 text-xs tracking-[0.5em] text-white/70">OSLO</div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70">
          <div className="text-xl">↓</div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl">Neste seksjon</h2>
        <p className="mt-2 text-neutral-600">Her kommer innholdet under hero.</p>
      </section>
    </main>
  );
}
