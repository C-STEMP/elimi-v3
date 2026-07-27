"use client";

import React from "react";
import { FiVideo } from "react-icons/fi";

export interface InterviewData {
  title: string;
  date: string;
  time: string;
  liveUrl?: string;
}

interface UpcomingCardProps {
  interview?: InterviewData | null;
}

export const UpcomingCard: React.FC<UpcomingCardProps> = ({ interview }) => {
  const isScheduled = !!interview;

  return (
    <div className="bg-[#1c1d21] rounded-[22px] p-6 text-white shadow-sm flex flex-col justify-between h-full min-h-[220px]">
      <div>
        <h4 className="text-gray-300 text-xs font-medium mb-3 tracking-wide">
          Upcoming
        </h4>

        {!isScheduled ? (
          <div>
            <h3 className="text-base font-bold text-white mb-2">
              No interview scheduled
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Once scheduled, details and live links will appear here.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-extrabold text-white mb-5 tracking-tight">
              {interview.title}
            </h3>

            <div className="flex items-center gap-10 mb-6">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                  DATE
                </span>
                <span className="text-white font-bold text-xs">
                  {interview.date}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                  TIME
                </span>
                <span className="text-white font-bold text-xs">
                  {interview.time}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto">
        {!isScheduled ? (
          <button
            type="button"
            disabled
            className="w-full bg-[#2a2c33] text-gray-500 font-semibold text-xs py-3 rounded-xl cursor-not-allowed text-center select-none"
          >
            Waiting for Schedule
          </button>
        ) : (
          <button
            type="button"
            className="w-full bg-white hover:bg-gray-100 active:scale-95 text-[#a31d38] font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <FiVideo className="w-4 h-4 stroke-[2.5]" />
            Join Live
          </button>
        )}
      </div>
    </div>
  );
};
