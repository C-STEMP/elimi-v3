"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { eyeClosedIcon, googleIcon } from "@/assets";
import { FiEye } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const SignUpEmailForm: React.FC = () => {
  const [email, setEmail] = useState("chidi.umeh@email.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast({
        type: "error",
        title: "Input Required",
        description: "Please fill in all required fields.",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        type: "error",
        title: "Password Mismatch",
        description: "Password and Confirm Password do not match.",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(
        `/verify?email=${encodeURIComponent(email.trim())}&flow=signup`,
      );
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col justify-center select-text"
    >
      <div className="mb-6 text-left">
        <h1 className="text-2xl xl:text-3xl font-extrabold tracking-tight text-neutral-primary">
          Create your account
        </h1>
        <p className="text-neutral-secondary text-[14px] xl:text-[15px] leading-relaxed mt-1 max-w-sm font-normal">
          Join artisans building verified, NSQ-certified careers.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <Input
          label={
            <span>
              Email Address<span className="text-primary-solid ml-0.5">*</span>
            </span>
          }
          type="email"
          name="email"
          placeholder="chidi.umeh@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />

        <Input
          label={
            <span>
              Password<span className="text-primary-solid ml-0.5">*</span>
            </span>
          }
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          suffix={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none flex items-center justify-center p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FiEye className="w-5 h-5 text-text-dark/70" />
              ) : (
                <Image
                  src={eyeClosedIcon}
                  alt="Hide password"
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                />
              )}
            </button>
          }
          required
          disabled={isSubmitting}
        />

        <div className="flex flex-col gap-1">
          <Input
            label={
              <span>
                Confirm Password
                <span className="text-primary-solid ml-0.5">*</span>
              </span>
            }
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="••••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            suffix={
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="focus:outline-none flex items-center justify-center p-1"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <FiEye className="w-5 h-5 text-text-dark/70" />
                ) : (
                  <Image
                    src={eyeClosedIcon}
                    alt="Hide password"
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                  />
                )}
              </button>
            }
            required
            disabled={isSubmitting}
          />
          <p className="text-xs xl:text-xs text-text-dark italic leading-relaxed max-w-110 font-normal mt-1">
            Your password must be at least 8 characters long and include one
            uppercase letter, one lowercase letter, one number, and one special
            character (e.g., @, #, $, %).
          </p>
        </div>

        <div className="w-full max-w-110 flex justify-end -mt-1 select-none">
          <Link
            href={`/verify?email=${encodeURIComponent(email)}&flow=signup`}
            className="text-primary-solid font-bold text-xs xl:text-sm hover:text-primary-hover transition-colors"
          >
            Re-enter OTP
          </Link>
        </div>

        <div className="w-full">
          <Button
            type="submit"
            variant="secondary"
            size="normal"
            className="w-full max-w-110 h-12.5 text-white font-bold text-base bg-secondary hover:bg-secondary-hover focus:ring-secondary/30 transition-all shadow-sm cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 justify-center text-white font-semibold leading-tight">
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
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </Button>
        </div>

        <div className="w-full max-w-110 flex items-center gap-4 my-1 select-none">
          <div className="flex-1 h-px bg-border-gray/70" />
          <span className="text-neutral-secondary text-xs font-normal">or</span>
          <div className="flex-1 h-px bg-border-gray/70" />
        </div>

        <div className="w-full flex flex-col gap-3">
          <Button
            type="button"
            variant="outline"
            size="normal"
            onClick={() =>
              toast({
                type: "info",
                title: "Google Sign-In",
                description: "Connecting to Google Authentication...",
              })
            }
            disabled={isSubmitting}
            className="w-full max-w-110 h-12.5 text-text-dark font-medium text-sm xl:text-base cursor-pointer"
          >
            <Image
              src={googleIcon}
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5 mr-3 shrink-0"
              style={{ width: "auto", height: "auto" }}
            />
            Continue with Google
          </Button>

          <Button
            type="button"
            variant="outline"
            size="normal"
            onClick={() =>
              toast({
                type: "info",
                title: "Apple Sign-In",
                description: "Connecting to Apple Authentication...",
              })
            }
            disabled={isSubmitting}
            className="w-full max-w-110 h-12.5 text-text-dark font-medium text-sm xl:text-base cursor-pointer"
          >
            <FaApple className="w-5 h-5 mr-3 shrink-0 text-black" />
            Continue with Apple
          </Button>
        </div>

        <div className="w-full max-w-110 text-center mt-2 text-sm select-none">
          <span className="text-neutral-secondary font-normal">
            Already have an account?
          </span>
          <Link
            href="/signin"
            className="text-primary-solid font-bold ml-1 hover:text-primary-hover transition-colors"
          >
            Sign In
          </Link>
        </div>
      </form>
    </motion.div>
  );
};
