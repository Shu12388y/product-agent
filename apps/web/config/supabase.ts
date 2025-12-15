import { Supabase } from "@repo/supabase/supabase";
import { env } from "./envLoader";

export const client = new Supabase(
  env.SUPABASEURL!,
  env.SUPABASEKEY!
).connections();
