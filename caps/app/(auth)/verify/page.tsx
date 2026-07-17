import { Suspense } from "react";
import { VerifyEmailForm } from "@/features/auth/components/VerifyEmailForm";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-solid" />
      </div>
    }>
      <VerifyEmailForm />
    </Suspense>
  );
}
