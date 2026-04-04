import Container from "@/components/layout/Container";

const footerLinks: Array<{
  title: string;
  items: Array<{ label: string; href: string; external?: boolean }>;
}> = [
  {
    title: "TJENNESTER",
    items: [
      { label: "Vipper", href: "#tjenester" },
      { label: "Bryn", href: "#tjenester" },
    ],
  },
  {
    title: "INFORMASJON",
    items: [
      { label: "Om", href: "#om" },
      { label: "Galleri", href: "#galleri" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "KONTAKT",
    items: [
      { label: "Telefon: +47 92 34 58 17", href: "tel:+4792345817" },
      { label: "Adresse: Fyrstikkbakken 14C, 0665 Oslo", href: "https://maps.google.com/?q=Fyrstikkbakken+14C,+0665+Oslo", external: true },
      { label: "E-post: nguyentruclinh.hcm@gmail.com", href: "mailto:nguyentruclinh.hcm@gmail.com" },
    ],
  },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-[color:var(--color-gold)]/35 text-[color:var(--color-gold)]/80 transition-all duration-300 hover:text-[color:var(--color-gold)] hover:border-[color:var(--color-gold)] hover:shadow-[0_0_0_3px_rgba(183,132,113,0.12)]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[color:var(--color-dark)] text-[color:var(--color-light)]">
      <Container>
        <div className="py-14">
          <div className="grid gap-10 md:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <div className="text-base font-medium tracking-[0.3em] text-[color:var(--color-gold)]">
                  {col.title}
                </div>
                <ul className="mt-6 space-y-3 text-base">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-white/80 transition-colors duration-200 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="text-sm tracking-[0.2em] text-[color:var(--color-gold)]/75">
              Meld deg på nyheter
            </div>

            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="w-full">
                <span className="sr-only">E-post</span>
                <input
                  type="email"
                  placeholder="Skriv inn e-post"
                  className="w-full border-b border-[color:var(--color-gold)]/35 bg-transparent px-0 py-3 text-[color:var(--color-light)] placeholder:text-white/40 focus:outline-none focus:border-[color:var(--color-gold)]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center border border-[color:var(--color-gold)] bg-transparent px-6 py-3 text-sm tracking-[0.2em] text-[color:var(--color-gold)] transition-all duration-300 hover:bg-[color:var(--color-gold)]/10 hover:shadow-[0_0_0_3px_rgba(183,132,113,0.12)] active:scale-[0.99]"
              >
                Send <span className="ml-3 text-lg leading-none">→</span>
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3">
              <SocialIcon href="https://instagram.com/" label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://tiktok.com/" label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 3v11.5a4.5 4.5 0 1 1-4-4.47V7.5A7.5 7.5 0 1 0 17.5 15V7.7c1.3 1.1 2.9 1.8 4.5 1.95V6.7c-2.1-.2-3.8-1.3-4.6-3.7H14Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://facebook.com/" label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 8.5V7.3c0-.9.6-1.3 1.2-1.3h1.8V3h-2.6C12.4 3 11 4.6 11 6.8V8.5H9v3h2V21h3v-9.5h2.4l.6-3H14Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Lashes by Linh</div>
          <div className="flex items-center gap-6">
            <a href="#vilkar" className="transition-opacity hover:opacity-90">
              Vilkår
            </a>
            <a href="#personvern" className="transition-opacity hover:opacity-90">
              Personvern
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
