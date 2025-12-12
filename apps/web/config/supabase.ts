import { Supabase } from "@repo/supabase/supabase";

export const client = new Supabase("", "").connections();
