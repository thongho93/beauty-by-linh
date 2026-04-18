import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import {
  isContactDatabaseConfigured,
  saveContactMessage,
  type ContactMessageInput,
} from "@/lib/contactDatabase";

const footerLinks: Array<{
  title: string;
  items: Array<{ label: string; href: string; external?: boolean; route?: boolean }>;
}> = [
  {
    title: "TJENESTER",
    items: [
      { label: "Vippeextensions", href: "/vippeextensions", route: true },
      { label: "Farging av vipper", href: "/tjenester#tjenester-oversikt", route: true },
      { label: "Vippeløft", href: "/tjenester#tjenester-oversikt", route: true },
    ],
  },
  {
    title: "INFORMASJON",
    items: [
      { label: "Om", href: "/#om", route: true },
      { label: "Galleri", href: "/galleri", route: true },
      { label: "Kontakt", href: "/#kontakt", route: true },
    ],
  },
  {
    title: "KONTAKT",
    items: [
      { label: "Telefon: +47 92 34 58 17", href: "tel:+4792345817" },
      {
        label: "Adresse: Fyrstikkbakken 14C, 0665 Oslo",
        href: "https://maps.google.com/?q=Fyrstikkbakken+14C,+0665+Oslo",
        external: true,
      },
      {
        label: "E-post: nguyentruclinh.hcm@gmail.com",
        href: "mailto:nguyentruclinh.hcm@gmail.com",
      },
    ],
  },
];

type Feedback = {
  type: "idle" | "success" | "warning";
  message: string;
};

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-[color:var(--color-gold)]/35 text-[color:var(--color-gold)]/80 transition-colors duration-300 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/40"
    >
      {children}
    </a>
  );
}

function openMailClient({ name, email, message }: ContactMessageInput) {
  const subject = encodeURIComponent(`Henvendelse fra ${name}`);
  const body = encodeURIComponent(`Fra: ${name}\nE-post: ${email}\n\n${message}`);
  window.location.href = `mailto:nguyentruclinh.hcm@gmail.com?subject=${subject}&body=${body}`;
}

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>({ type: "idle", message: "" });

  const isValid = name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: "idle", message: "" });

    const payload: ContactMessageInput = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      if (isContactDatabaseConfigured()) {
        await saveContactMessage(payload);
        setFeedback({
          type: "success",
          message: "Takk! Meldingen er sendt. Vi svarer deg så snart som mulig.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        openMailClient(payload);
        setFeedback({
          type: "warning",
          message: "Database ikke konfigurert enda. Vi åpnet e-postklienten din i stedet.",
        });
      }
    } catch {
      openMailClient(payload);
      setFeedback({
        type: "warning",
        message: "Kunne ikke sende via database. E-postklienten ble åpnet som reserve.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="kontakt"
      className="mt-20 border-t border-white/10 bg-[color:var(--color-dark)] text-[color:var(--color-light)]"
    >
      <Container>
        <div className="py-14">
          <div className="grid gap-10 md:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <div className="text-base font-medium tracking-[0.3em] text-[color:var(--color-gold)]">
                  {column.title}
                </div>
                <ul className="mt-6 space-y-3 text-base">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      {item.route ? (
                        <Link
                          to={item.href}
                          className="text-white/80 transition-colors duration-200 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="text-white/80 transition-colors duration-200 hover:text-white"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="text-sm tracking-[0.2em] text-[color:var(--color-gold)]/75">
              SEND OSS EN MELDING
            </div>

            <form onSubmit={handleSubmit} className="mt-5 flex max-w-lg flex-col gap-4" noValidate>
              <label className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.15em] text-white/50">Navn</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ditt navn…"
                  className="w-full border-b border-[color:var(--color-gold)]/35 bg-transparent px-0 py-2.5 text-[color:var(--color-light)] placeholder:text-white/30 focus:border-[color:var(--color-gold)] focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.15em] text-white/50">E-post</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Din e-postadresse…"
                  className="w-full border-b border-[color:var(--color-gold)]/35 bg-transparent px-0 py-2.5 text-[color:var(--color-light)] placeholder:text-white/30 focus:border-[color:var(--color-gold)] focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.15em] text-white/50">Melding</span>
                <textarea
                  name="message"
                  autoComplete="off"
                  required
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Skriv din melding her…"
                  className="w-full resize-none border-b border-[color:var(--color-gold)]/35 bg-transparent px-0 py-2.5 text-[color:var(--color-light)] placeholder:text-white/30 focus:border-[color:var(--color-gold)] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="mt-1 inline-flex items-center justify-center self-start border border-[color:var(--color-gold)] bg-transparent px-6 py-3 text-sm tracking-[0.2em] text-[color:var(--color-gold)] transition-colors duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
              >
                {isSubmitting ? "Sender…" : "Send"}
                <span className="ml-3 text-lg leading-none">→</span>
              </button>

              <p
                className={`min-h-6 text-sm ${
                  feedback.type === "success" ? "text-green-300" : "text-white/65"
                }`}
                aria-live="polite"
              >
                {feedback.message}
              </p>
            </form>

            <div className="mt-8 flex items-center gap-3">
              <SocialIcon href="https://www.instagram.com/lash_by_lin/" label="Instagram">
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
            </div>
          </div>

          <div className="mt-10 grid gap-5 border-t border-white/10 pt-6 text-sm text-white/55 sm:grid-cols-2">
            <section id="vilkar" className="scroll-mt-24">
              <h3 className="text-xs tracking-[0.18em] text-[color:var(--color-gold)]/75">
                VILKÅR
              </h3>
              <p className="mt-2 leading-relaxed">
                Avbestilling må skje i god tid før timen. Ved for sen avbestilling kan gebyr
                forekomme.
              </p>
            </section>
            <section id="personvern" className="scroll-mt-24">
              <h3 className="text-xs tracking-[0.18em] text-[color:var(--color-gold)]/75">
                PERSONVERN
              </h3>
              <p className="mt-2 leading-relaxed">
                Kontaktinformasjon brukes kun for å følge opp henvendelser og deles ikke med
                tredjeparter.
              </p>
            </section>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Lashes by Linh</div>
          <div className="flex items-center gap-6">
            <Link to="/#vilkar" className="transition-opacity hover:opacity-90">
              Vilkår
            </Link>
            <Link to="/#personvern" className="transition-opacity hover:opacity-90">
              Personvern
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
