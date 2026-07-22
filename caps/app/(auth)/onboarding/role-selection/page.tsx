"use client";

import dynamic from "next/dynamic";

const RoleSelection = dynamic(
  () =>
    import("@/features/onboarding/components/RoleSelection").then(
      (mod) => mod.RoleSelection
    ),
  { ssr: false }
);

export default function RoleSelectionPage() {
  return <RoleSelection />;
}
