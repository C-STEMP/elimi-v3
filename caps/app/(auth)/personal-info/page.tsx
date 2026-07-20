import { Suspense } from "react";
import { PersonalInfoForm } from "@/features/auth/components/PersonalInfoForm";

export default function PersonalInfoPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-solid" />
        </div>
      }
    >
      <PersonalInfoForm />
    </Suspense>
  );
}
