"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { handleLogin } from "@/lib/handler";
import { useAuth } from "@/context/auth.context";
import { useRouter } from "next/navigation";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { SessionAction, useLoading, loading } = useAuth();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        onSubmit={async (e) => {
          useLoading(true);
          const userSession = await handleLogin(e);
          SessionAction(userSession?.access_token);
          useLoading(false);
          if (userSession?.access_token) {
            router.push("/dashboard/feedback");
          }
        }}
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Product AI Agent</h1>
            <FieldDescription>
              Don&apos;t have an account? <a href="#">Sign Up</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="*********"
              required
            />
          </Field>
          <Field>
            <Button type="submit">{loading ? "Loading..." : "Log In"}</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
