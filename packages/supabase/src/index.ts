import { createClient } from '@supabase/supabase-js'

export class Supabase {
  supabaseurl: string;
  supabaseSecret: string;
  constructor(supabaseurl: string, supabaseSecret: string) {
    this.supabaseurl = supabaseurl;
    this.supabaseSecret = supabaseSecret;
  }

  public connections() {
    const client = createClient(this.supabaseurl,this.supabaseSecret)
    return client;
  }
}
