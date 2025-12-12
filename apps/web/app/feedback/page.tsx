"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Card className="w-[90vw] max-w-lg shadow-xl border border-gray-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-semibold">
                  We Value Your Feedback
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col space-y-6">
                <Textarea
                  placeholder="Share your thoughts..."
                  className="h-40 resize-none"
                />
                <Button className="w-full py-6 text-md">Submit Feedback</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://images.pexels.com/photos/7564196/pexels-photo-7564196.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default Page;
