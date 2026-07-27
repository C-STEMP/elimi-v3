"use client";

import React from "react";
import Link from "next/link";
import { FiChevronRight, FiFolder } from "react-icons/fi";

export interface ApplicationItem {
  id: string;
  title: string;
  subtitle: string;
  status: "Not Started" | "In Progress" | "Completed";
}

interface ApplicationsListProps {
  applications?: ApplicationItem[];
}

export const ApplicationsList: React.FC<ApplicationsListProps> = ({
  applications = [],
}) => {
  const hasApplications = applications.length > 0;

  return (
    <div className="bg-white rounded-[22px] p-6 lg:p-7 shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-75">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 font-bold text-lg tracking-tight">
          My Applications
        </h3>
        {hasApplications && (
          <Link
            href="/dashboard/applications"
            className="text-[#a31d38] text-xs font-semibold flex items-center gap-0.5 hover:underline cursor-pointer transition-colors"
          >
            View All
            <FiChevronRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        )}
      </div>

      {/* Body Content */}
      {!hasApplications ? (
        /* Empty State */
        <div className="flex-1 flex flex-col items-center justify-center py-10 text-center">
          <div className="w-20 h-20 rounded-full bg-[#fdf4f5] flex items-center justify-center mb-4 border border-[#fbd8de]">
            <FiFolder className="w-8 h-8 text-[#e07b8d] stroke-[1.5]" />
          </div>
          <h4 className="text-gray-900 font-bold text-base mb-1.5">
            No applications yet
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Click &quot;Create Application&quot; in the top header to get
            started with your Recognition of Prior Learning journey.
          </p>
        </div>
      ) : (
        /* Populated State List */
        <div className="flex flex-col gap-3.5 flex-1 justify-center">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-[#f7f8fb] rounded-xl p-4 flex items-center justify-between border-l-[5px] border-[#fbab2a] hover:bg-[#f0f2f7] transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 font-bold text-base">
                    {app.title}
                  </span>
                  <span className="bg-[#d9dce0] text-gray-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                    {app.status}
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-normal">
                  {app.subtitle}
                </span>
              </div>
              <FiChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
