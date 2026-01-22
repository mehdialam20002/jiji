-- PROFILES TABLE
create table profiles (
  id uuid primary key,
  name text,
  created_at timestamp default now()
);

-- QUERIES TABLE
create table queries (
  id uuid primary key default gen_random_uuid(),
  query_text text not null,
  created_at timestamp default now()
);

-- RESOURCES TABLE
create table resources (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  title text not null,
  type text check (type in ('ppt', 'video')),
  file_url text not null,
  created_at timestamp default now()
);
