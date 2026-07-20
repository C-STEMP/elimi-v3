"use client";

import React from "react";
import { RoleCard } from "@/components/ui/role-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setAssessmentType } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

export interface AssessmentOption {
  id: string;
  title: string;
  description: string;
}

const ASSESSMENT_OPTIONS: AssessmentOption[] = [
  {
    id: "rpl",
    title: "RPL",
    description: "Recognition of Prior Learning",
  },
  {
    id: "nsq",
    title: "NSQ",
    description: "National Skills Qualification",
  },
];

export interface AssessmentTypeViewProps {
  onSelectType?: (typeId: string) => void;
  onBack?: () => void;
}

export const AssessmentTypeView: React.FC<AssessmentTypeViewProps> = ({
  onSelectType,
  onBack,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Local state for assessment type selection initialized to null (no card active by default)
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  const handleSelectType = (id: string) => {
    setSelectedType(id);
    dispatch(setAssessmentType(id));

    if (onSelectType) {
      onSelectType(id);
    } else {
      setTimeout(() => {
        router.push("/complete-profile");
      }, 200);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.push("/role-selection");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col justify-center select-text max-w-110"
    >
      {/* Joined Continuous Status Bar - Step 2 of 3 (2/3 filled) */}
      <div className="w-full max-w-[439px] flex justify-start mb-6">
        <div className="w-[186px] h-[10px] bg-primary-solid/15 rounded-[10px] overflow-hidden">
          <div className="w-2/3 h-full bg-primary-solid rounded-[10px] transition-all duration-300" />
        </div>
      </div>

      {/* Heading & Subtitle */}
      <div className="mb-6 text-left">
        <h1 className="text-2xl xl:text-3xl font-extrabold tracking-tight text-[#241014]">
          Select Assessment Type
        </h1>
        <p className="text-neutral-secondary text-sm leading-relaxed mt-1 font-normal">
          Choose the assessment you are interested in
        </p>
      </div>

      {/* Option Cards: Yellow then Red */}
      <div className="w-full flex flex-col gap-3 xl:gap-6">
        {ASSESSMENT_OPTIONS.map((option, idx) => (
          <RoleCard
            key={option.id}
            id={option.id}
            index={idx}
            title={option.title}
            description={option.description}
            isSelected={selectedType === option.id}
            onSelect={handleSelectType}
          />
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-8 flex items-center">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-2 text-neutral-secondary hover:text-neutral-primary font-semibold text-sm transition-colors cursor-pointer select-none focus:outline-none"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    </motion.div>
  );
};
