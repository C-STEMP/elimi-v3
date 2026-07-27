"use client";

import React from "react";
import { FiClipboard, FiCheckSquare } from "react-icons/fi";

interface StatsCardsProps {
  activeCount?: number;
  completedCount?: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({
  activeCount = 0,
  completedCount = 0,
}) => {
  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      {/* Active Applications Card */}
      <div className="bg-white rounded-[22px] p-5 lg:p-6 flex items-start justify-between shadow-sm border border-gray-100/80 flex-1">
        <div className="flex flex-col gap-1 justify-center">
          <h3 className="text-gray-900 font-bold text-base tracking-tight">
            Active Applications
          </h3>
          <div className="text-gray-400 text-sm font-normal mt-1">
            <span className="font-extrabold text-xl text-gray-900 mr-1.5">
              {activeCount}
            </span>
            {activeCount === 1 ? "application" : "applications"}
          </div>
        </div>
        <div className="p-2 rounded-xl bg-[#fff8eb] text-[#fbab2a] shrink-0">
          <FiClipboard className="w-5 h-5 stroke-[2]" />
        </div>
      </div>

      {/* Completed Applications Card */}
      <div className="bg-white rounded-[22px] p-5 lg:p-6 flex items-start justify-between shadow-sm border border-gray-100/80 flex-1">
        <div className="flex flex-col gap-1 justify-center">
          <h3 className="text-gray-900 font-bold text-base tracking-tight">
            Completed
          </h3>
          <div className="text-gray-400 text-sm font-normal mt-1">
            <span className="font-extrabold text-xl text-gray-900 mr-1.5">
              {completedCount}
            </span>
            {completedCount === 1 ? "application" : "applications"}
          </div>
        </div>
        <div className="p-2 rounded-xl bg-[#eefbf1] text-[#34a853] shrink-0">
          <FiCheckSquare className="w-5 h-5 stroke-[2]" />
        </div>
      </div>
    </div>
  );
};
