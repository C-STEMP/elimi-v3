"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeaderBanner } from "@/features/dashboard/components/HeaderBanner";
import { LearningPromoCard } from "@/features/dashboard/components/LearningPromoCard";
import { StatsCards } from "@/features/dashboard/components/StatsCards";
import {
  ApplicationsList,
  ApplicationItem,
} from "@/features/dashboard/components/ApplicationsList";
import {
  UpcomingCard,
  InterviewData,
} from "@/features/dashboard/components/UpcomingCard";
import {
  FacilitatorCard,
  FacilitatorData,
} from "@/features/dashboard/components/FacilitatorCard";
import { VerifiedBadge } from "@/features/dashboard/components/VerifiedBadge";
import { useAppSelector } from "@/store/hooks";
import { userAvatar } from "@/assets";

const POPULATED_APPLICATIONS: ApplicationItem[] = [
  {
    id: "app-1",
    title: "Carpentry",
    subtitle: "Recognition Of Prior Learning",
    status: "Not Started",
  },
  {
    id: "app-2",
    title: "Carpentry",
    subtitle: "Recognition Of Prior Learning",
    status: "Not Started",
  },
  {
    id: "app-3",
    title: "Carpentry",
    subtitle: "Recognition Of Prior Learning",
    status: "Not Started",
  },
];

const POPULATED_INTERVIEW: InterviewData = {
  title: "Panel Interview",
  date: "22-07-2026",
  time: "12:00PM",
};

const POPULATED_FACILITATOR: FacilitatorData = {
  name: "Ngozi Eze",
  avatar: userAvatar,
  role: "Facilitator · Carpentry (Level 3)",
  tags: ["Carpentry", "RPL Coordinator"],
};

export const Dashboard: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const firstName = user?.fullName?.split(" ")[0] || "Chidi";

  const [demoState, setDemoState] = useState<"empty" | "populated">("empty");

  const applications = demoState === "populated" ? POPULATED_APPLICATIONS : [];
  const activeCount = demoState === "populated" ? 3 : 0;
  const completedCount = demoState === "populated" ? 1 : 0;
  const interview = demoState === "populated" ? POPULATED_INTERVIEW : null;
  const facilitator = demoState === "populated" ? POPULATED_FACILITATOR : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full flex flex-col gap-2"
    >
      <HeaderBanner
        userName={firstName}
      />

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7">
              <LearningPromoCard />
            </div>
            <div className="md:col-span-5">
              <StatsCards
                activeCount={activeCount}
                completedCount={completedCount}
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <UpcomingCard interview={interview} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 flex flex-col">
            <ApplicationsList applications={applications} />
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="flex-1 flex flex-col">
              <FacilitatorCard facilitator={facilitator} />
            </div>
            <VerifiedBadge />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
