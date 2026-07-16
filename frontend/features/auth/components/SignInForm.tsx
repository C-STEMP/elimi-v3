"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("chidi.umeh@email.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col justify-center select-text">
      <div className="mb-8 text-left">
        <h1 className="text-2xl xl:text-3xl font-extrabold tracking-tight text-neutral-primary">
          Sign in to ELIMI
        </h1>
        <p className="text-neutral-secondary text-[14px] xl:text-[15px] leading-relaxed mt-2 max-w-sm font-normal">
          Access Elimi learning, your NSQ assessments, and WorkMaster profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="yourname@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••••••••"
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
                <FiEye className="w-5 h-5" />
              ) : (
                <FiEyeOff className="w-5 h-5" />
              )}
            </button>
          }
          required
          disabled={isSubmitting}
        />

        <div className="flex justify-between items-center w-full max-w-110 text-sm -mt-1 select-none">
          <a
            href="#otp"
            className="text-primary-solid font-bold text-xs xl:text-sm hover:text-primary-hover transition-colors"
          >
            Enter OTP
          </a>
          <a
            href="#forgot"
            className="text-primary-solid font-bold text-xs xl:text-sm hover:text-primary-hover transition-colors"
          >
            Forgot password?
          </a>
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
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>

        {error && (
          <div className="w-full max-w-110 p-3 border border-primary/20 bg-primary/5 rounded-radius-200 text-primary text-xs font-semibold mt-1">
            {error}
          </div>
        )}
        {success && (
          <div className="w-full max-w-110 p-3 border border-emerald-200 bg-emerald-50 rounded-radius-200 text-emerald-800 text-xs font-semibold mt-1">
            ✓ Logged in successfully as {email}
          </div>
        )}

        <div className="w-full max-w-110 flex items-center gap-4 my-3 select-none">
          <div className="flex-1 h-[1.5px] bg-border-gray" />
          <span className="text-neutral-secondary text-xs xl:text-sm font-medium whitespace-nowrap">
            or continue with
          </span>
          <div className="flex-1 h-[1.5px] bg-border-gray" />
        </div>

        <button
          type="button"
          onClick={() => alert("Google SSO Integration Clicked")}
          disabled={isSubmitting}
          className="w-full max-w-110 h-12.5 flex items-center justify-center border border-border-gray hover:bg-bg-light transition-all rounded-radius-200 bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-gray-100 font-semibold text-text-dark text-sm xl:text-base disabled:opacity-50 select-none active:scale-[0.98] cursor-pointer"
        >
          <FcGoogle className="w-5 h-5 mr-3 shrink-0" />
          Continue with Google
        </button>

        <div className="w-full max-w-110 text-center mt-3 text-sm select-none">
          <span className="text-neutral-secondary font-normal">
            Don't have an account?
          </span>
          <a
            href="#signup"
            className="text-primary-solid font-bold ml-1 hover:text-primary-hover transition-colors"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};
