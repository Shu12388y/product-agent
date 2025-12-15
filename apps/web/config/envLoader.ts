const _env = {
  SUPABASEURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  SUPABASEKEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
};

for (const keys in _env) {
  if (keys.length === 0 || keys === "" || keys === undefined) {
    throw new Error(`This is missing ${keys}`);
  }
}

export const env = Object.freeze(_env);
