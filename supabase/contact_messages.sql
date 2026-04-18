create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  source text default 'website',
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Allow anonymous inserts for website contact form"
  on public.contact_messages
  for insert
  to anon
  with check (true);
