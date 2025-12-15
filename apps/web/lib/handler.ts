import { client } from "@/config/supabase";
import { toast } from "sonner";

export const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const email = form.get("email");
  const password = form.get("password");
  if (!email || !password) {
    toast.error("Email and Password is required");
    throw new Error("Email and password is required");
  }



  const response = await client.auth
    .signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })
  return response.data.session
};
