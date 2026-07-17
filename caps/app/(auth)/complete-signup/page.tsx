import { Suspense } from "react";
import { CompleteSignUpForm } from "@/features/auth/components/CompleteSignUpForm";

export default function CompleteSignUpPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-solid" />
      </div>
    }>
      <CompleteSignUpForm />
    </Suspense>
  );
}
