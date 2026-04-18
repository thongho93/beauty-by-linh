import type { PriceCategory } from "@/data/siteContent";

export type StripePaymentConfig = {
  categoryId: PriceCategory["id"];
  href: string;
  label: string;
};

const paymentLinks: StripePaymentConfig[] = [
  {
    categoryId: "vipperextensions-nytt-sett",
    href: import.meta.env.VITE_STRIPE_PAYMENT_LINK_NEW_SET?.trim() ?? "",
    label: "Betal Depositum",
  },
  {
    categoryId: "pafyll-og-vedlikehold",
    href: import.meta.env.VITE_STRIPE_PAYMENT_LINK_REFILL?.trim() ?? "",
    label: "Betal Depositum",
  },
  {
    categoryId: "vippeloft-og-tillegg",
    href: import.meta.env.VITE_STRIPE_PAYMENT_LINK_LIFT?.trim() ?? "",
    label: "Betal Depositum",
  },
];

export function getStripePaymentLink(categoryId: PriceCategory["id"]): string | null {
  const match = paymentLinks.find(
    (entry) => entry.categoryId === categoryId && entry.href.length > 0,
  );
  return match?.href ?? null;
}

export function hasStripePaymentLinks(): boolean {
  return paymentLinks.some((entry) => entry.href.length > 0);
}
