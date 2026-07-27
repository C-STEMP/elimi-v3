import * as React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5FAF8] text-text-dark selection:bg-primary selection:text-white">
      <main className="mx-auto p-4">{children}</main>
    </div>
  );
}
