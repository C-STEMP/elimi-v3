"use client";

import React, { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setRole, setAssessmentType } from "@/store/slices/authSlice";
import { WelcomeView } from "./WelcomeView";
import { RoleSelectionView } from "./RoleSelectionView";
import { AssessmentTypeView } from "./AssessmentTypeView";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { AnimatePresence, motion } from "framer-motion";

type WizardStep = "welcome" | "role-selection" | "assessment-type" | "complete-profile";

export const OnboardingWizardView: React.FC = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<WizardStep>("welcome");

  const handleSelectRole = (roleId: string) => {
    dispatch(setRole(roleId));
    if (roleId === "candidate") {
      setTimeout(() => setStep("assessment-type"), 150);
    }
  };

  const handleSelectAssessmentType = (typeId: string) => {
    dispatch(setAssessmentType(typeId));
    setTimeout(() => setStep("complete-profile"), 150);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <WelcomeView onGetStarted={() => setStep("role-selection")} />
          </motion.div>
        )}

        {step === "role-selection" && (
          <motion.div
            key="role-selection"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <RoleSelectionView
              onSelectRole={handleSelectRole}
              onBack={() => setStep("welcome")}
            />
          </motion.div>
        )}

        {step === "assessment-type" && (
          <motion.div
            key="assessment-type"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <AssessmentTypeView
              onSelectType={handleSelectAssessmentType}
              onBack={() => setStep("role-selection")}
            />
          </motion.div>
        )}

        {step === "complete-profile" && (
          <motion.div
            key="complete-profile"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <PersonalInfoForm onBack={() => setStep("assessment-type")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
