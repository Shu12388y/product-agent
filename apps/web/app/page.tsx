import React from "react";
import { SignupForm } from "@/components/_components/signup";
import { AuthProvider } from "@/context/auth.context";

function Page() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthProvider>
          <SignupForm />
        </AuthProvider>
      </div>
    </div>
  );
}

export default Page;
