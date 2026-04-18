export type ContactMessageInput = {
  name: string;
  email: string;
  message: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();
const supabaseTable = import.meta.env.VITE_SUPABASE_CONTACT_TABLE?.trim() || "contact_messages";

export function isContactDatabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function saveContactMessage(message: ContactMessageInput): Promise<void> {
  if (!isContactDatabaseConfigured() || !supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    name: message.name,
    email: message.email,
    message: message.message,
    source: "website",
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || "Failed to store contact message.");
  }
}
