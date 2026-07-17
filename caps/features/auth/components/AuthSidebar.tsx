"use client";

import * as React from "react";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";

export const AuthSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex lg:w-[40%] bg-primary-solid flex-col justify-between p-12 xl:p-16 relative overflow-hidden select-none">
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-28 -right-60 w-105 h-105 rounded-full bg-white/6 pointer-events-none z-0"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 -left-42 w-90 h-90 rounded-full bg-secondary/15 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex flex-col gap-7">
          <div>
            <Logo theme="light" />
          </div>

          <div className="flex flex-col gap-7">
            <h2 className="text-neutral-burgundy text-3xl xl:text-[34px] font-bold leading-tight tracking-tight max-w-sm">
              Build a verified <br /> career in your trade.
            </h2>
            <p className="text-neutral-burgundy text-sm xl:text-base leading-tight max-w-lg font-normal font-work">
              Learn, get NSQ-certified, and get discovered by employers, all
              from one ELIMI account.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-px bg-white/20 mb-5" />
          <blockquote className="text-neutral-burgundy text-sm xl:text-[15px] leading-relaxed mb-3 font-medium max-w-lg">
            “ELIMI helped me get NSQ Level 3 certified as a carpenter after 9
            years on the job — no classroom needed.”
          </blockquote>
          <cite className="text-neutral-burgundy text-xs font-semibold tracking-wide not-italic">
            Tunde Balogun · Carpenter, Ibadan
          </cite>
        </div>
      </div>
    </div>
  );
};
