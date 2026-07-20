import * as React from "react";
import { AuthSidebar } from "@/features/auth/components/AuthSidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex bg-white font-sans antialiased overflow-hidden">
      <AuthSidebar />

      <div className="flex-1 h-screen overflow-y-auto flex flex-col items-center p-6 md:p-10 xl:p-12 bg-white relative">
        <div className="w-full flex flex-col items-center my-auto py-6">{children}</div>
      </div>
    </div>
  );
}
