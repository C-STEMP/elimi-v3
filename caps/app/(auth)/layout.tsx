import * as React from "react";
import { AuthSidebar } from "@/features/auth/components/AuthSidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex bg-white font-sans antialiased">
      <AuthSidebar />

      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 xl:p-16 bg-white min-h-screen relative">
        <div className="w-full max-w-110 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
