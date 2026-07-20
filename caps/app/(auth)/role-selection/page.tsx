"use client";

import dynamic from "next/dynamic";

const OnboardingWizardView = dynamic(
  () =>
    import("@/features/auth/components/OnboardingWizardView").then(
      (mod) => mod.OnboardingWizardView
    ),
  { ssr: false }
);

export default function RoleSelectionPage() {
  return <OnboardingWizardView />;
}
