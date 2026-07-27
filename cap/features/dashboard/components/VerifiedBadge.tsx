"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export const VerifiedBadge: React.FC = () => {
  return (
    <div className="bg-[#d2e8d6] rounded-[22px] p-4 lg:p-5 flex items-center gap-3.5 shadow-2xs border border-[#c4e3c9]">
      <div className="w-11 h-11 rounded-full bg-[#a8dbae] flex items-center justify-center text-[#236335] shrink-0">
        <FiCheckCircle className="w-6 h-6 stroke-[2.2]" />
      </div>
      <div className="flex flex-col">
        <span className="text-[#1a542b] font-bold text-base tracking-tight">
          Verified
        </span>
        <span className="text-[#2b7040] text-xs font-medium opacity-90">
          Your Identity has been verified
        </span>
      </div>
    </div>
  );
};
