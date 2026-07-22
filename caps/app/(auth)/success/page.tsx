"use client";

import dynamic from "next/dynamic";

const SuccessView = dynamic(
  () =>
    import("@/features/auth/components/SuccessView").then(
      (mod) => mod.SuccessView
    ),
  { ssr: false }
);

export default function SuccessPage() {
  return <SuccessView />;
}
