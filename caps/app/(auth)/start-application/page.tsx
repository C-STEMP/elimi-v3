"use client";

import dynamic from "next/dynamic";

const StartApplicationForm = dynamic(
  () =>
    import("@/features/auth/components/StartApplicationForm").then(
      (mod) => mod.StartApplicationForm
    ),
  { ssr: false }
);

export default function StartApplicationPage() {
  return <StartApplicationForm />;
}
