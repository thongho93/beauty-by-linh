interface ImportMetaEnv {
  readonly VITE_STRIPE_PAYMENT_LINK_NEW_SET?: string;
  readonly VITE_STRIPE_PAYMENT_LINK_REFILL?: string;
  readonly VITE_STRIPE_PAYMENT_LINK_LIFT?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SUPABASE_CONTACT_TABLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
