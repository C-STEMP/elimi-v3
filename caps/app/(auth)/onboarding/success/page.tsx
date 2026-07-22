"use client";

import dynamic from "next/dynamic";

const Success = dynamic(
  () =>
    import("@/features/onboarding/components/Success").then(
      (mod) => mod.Success
    ),
  { ssr: false }
);

export default function SuccessPage() {
  return <Success />;
}
