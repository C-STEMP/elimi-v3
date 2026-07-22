"use client";

import dynamic from "next/dynamic";

const RPLPersonalInfo = dynamic(
  () =>
    import("@/features/rpl/components/PersonalInfo").then(
      (mod) => mod.RPLPersonalInfo
    ),
  { ssr: false }
);

export default function RPLPersonalInfoPage() {
  return <RPLPersonalInfo />;
}
