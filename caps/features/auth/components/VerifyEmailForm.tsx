"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const VerifyEmailForm: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

  const email = searchParams.get("email") || "";
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    const firstEmptyIndex = code.findIndex((val) => val === "");
    const focusIndex = firstEmptyIndex !== -1 ? firstEmptyIndex : 0;
    inputsRef.current[focusIndex]?.focus();
  }, []);

  useEffect(() => {
    if (!mountedRef.current || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;

    const newCode = [...code];
    newCode[index] = val.slice(-1);
    setCode(newCode);

    if (val && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        inputsRef.current[index - 1]?.focus();
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedData[i] || "";
      }
      setCode(newCode);

      const nextFocusIndex = Math.min(pastedData.length, 5);
      inputsRef.current[nextFocusIndex]?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResend = () => {
    setTimeLeft(59); 
    toast({
      type: "success",
      title: "Code Resent",
      description:
        "A new verification code has been sent to your email address.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");

    if (fullCode.length < 6) {
      toast({
        type: "error",
        title: "Incomplete Code",
        description: "Please enter the full 6-digit code.",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);

      if (fullCode === "482000" || fullCode === "482123") {
        toast({
          type: "success",
          title: "Email Verified",
          description: "Your email address has been verified successfully.",
        });
        setTimeout(() => {
          const flow = searchParams.get("flow") || "forgot";
          if (flow === "signup") {
            router.push(`/complete-signup?email=${encodeURIComponent(email)}`);
          } else {
            router.push("/change-password");
          }
        }, 1500);
      } else {
        toast({
          type: "error",
          title: "Verification Failed",
          description: "Invalid verification code. Please try again.",
        });
      }
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col justify-center select-text"
    >
      <div className="mb-8 text-left">
        <h1 className="text-2xl xl:text-3xl font-extrabold tracking-tight text-neutral-primary">
          Verify your email
        </h1>
        <p className="text-neutral-secondary text-[14px] xl:text-[15px] leading-relaxed mt-2 max-w-sm font-normal">
          We sent a 6-digit code to{" "}
          <span className="font-semibold">{email}</span>. It expires in 10
          minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="flex justify-between gap-2 max-w-110">
          {code.map((val, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              disabled={isSubmitting}
              className={`w-12 h-14 md:w-13 md:h-15 rounded-radius-200 border text-center text-xl font-bold outline-none transition-all duration-200
                ${val ? "bg-input-bg border-transparent text-text-dark" : "bg-white border-border-gray/60"}
                focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white
              `}
            />
          ))}
        </div>

        <div className="w-full mt-2">
          <Button
            type="submit"
            variant="secondary"
            size="normal"
            className="w-full max-w-110 h-12.5 text-white! font-bold text-base bg-secondary hover:bg-secondary-hover focus:ring-secondary/30 transition-all shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 justify-center text-neutral-burgundy font-semibold leading-tight">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Verifying...
              </span>
            ) : (
              "Verify Email"
            )}
          </Button>
        </div>

        <div className="text-center text-sm font-bold text-text-dark -mt-1 select-none">
          {formatTime(timeLeft)}
        </div>

        <div className="w-full max-w-110 text-center text-sm select-none">
          <span className="text-neutral-secondary font-normal">
            Didn't get a code?
          </span>
          <button
            type="button"
            onClick={handleResend}
            className="text-primary-solid font-bold ml-1 hover:text-primary-hover transition-colors focus:outline-none cursor-pointer"
          >
            Resend
          </button>
        </div>
      </form>
    </motion.div>
  );
};
