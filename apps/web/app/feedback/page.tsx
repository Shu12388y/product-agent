"use client";

import React, { Suspense } from "react";
import FeedbackPage from "./_components/feedback";

export default function Page() {
  return (
    <Suspense fallback={"Loading..."}>
      <FeedbackPage />
    </Suspense>
  );
}
