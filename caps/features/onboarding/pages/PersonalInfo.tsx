"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { PhoneInput } from "@/components/ui/phone-input";
import { PassportUpload } from "@/components/ui/passport-upload";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { StatusModal } from "@/components/ui/status-modal";
import { useAppDispatch } from "@/store/hooks";
import { setSidebarVariant } from "@/store/slices/authSlice";

export interface PersonalInfoProps {
  onBack?: () => void;
  onSuccess?: () => void;
}

const initialForm = {
  firstName: "",
  lastName: "",
  middleName: "",
  dob: "",
  gender: "",
  nationality: "",
  email: "",
  countryCode: "NGN",
  phoneNumber: "",
  state: "",
  lga: "",
  streetAddress: "",
  impairment: "",
};

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  onBack,
  onSuccess,
}) => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    dispatch(setSidebarVariant("default"));
  }, [dispatch]);

  const update = (field: keyof typeof initialForm, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.dob ||
      !form.gender ||
      !form.nationality
    ) {
      toast({
        type: "error",
        title: "Input Required",
        description: "Please fill in all required personal information fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/onboarding/success");
      }
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col gap-6 select-text max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        {/* Joined Continuous Status Bar - Step 3 of 3 (Complete Profile) */}

        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col place-self-end">
            <div className="w-full max-w-109.75 flex justify-start mb-6">
              <div className="w-46.5 h-2.5 bg-primary-solid/15 rounded-[10px] overflow-hidden">
                <div className="w-5/6 h-full bg-primary-solid rounded-[10px] transition-all duration-300" />
              </div>
            </div>

            <div className="flex flex-col gap-1 pt-1">
              <h1 className="text-2xl xl:text-3xl font-extrabold tracking-tight text-neutral-primary">
                Personal Information
              </h1>
              <p className="text-neutral-secondary text-xs sm:text-sm font-normal mt-1">
                Provide your details to complete your profile
              </p>
            </div>
          </div>

          <PassportUpload />
        </div>

        {/* Personal Information Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label={
              <span>
                First Name<span className="text-primary-solid ml-0.5">*</span>
              </span>
            }
            type="text"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            required
          />

          <Input
            label={
              <span>
                Last Name<span className="text-primary-solid ml-0.5">*</span>
              </span>
            }
            type="text"
            placeholder="Surname"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            required
          />

          <Input
            label="Middle Name"
            type="text"
            placeholder="Other names"
            value={form.middleName}
            onChange={(e) => update("middleName", e.target.value)}
          />

          <DatePicker
            label={
              <span>
                Date Of Birth
                <span className="text-primary-solid ml-0.5">*</span>
              </span>
            }
            placeholder="dd/mm/yyyy"
            value={form.dob}
            onChange={(val) => update("dob", val)}
            required
          />

          <Select
            label={
              <span>
                Gender<span className="text-primary-solid ml-0.5">*</span>
              </span>
            }
            placeholder="Select"
            options={["Male", "Female", "Prefer not to say"]}
            value={form.gender}
            onChange={(e) => update("gender", e.target.value)}
            required
          />

          <Select
            label={
              <span>
                Nationality<span className="text-primary-solid ml-0.5">*</span>
              </span>
            }
            placeholder="Select"
            options={[
              "Nigerian",
              "Ghanaian",
              "Kenyan",
              "South African",
              "Other",
            ]}
            value={form.nationality}
            onChange={(e) => update("nationality", e.target.value)}
            required
          />
        </div>

        {/* Section 2: Contact Information */}
        <div className="flex flex-col gap-4 mt-2">
          <h2 className="text-base sm:text-lg font-bold text-text-dark">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label={
                <span>
                  Email Address
                  <span className="text-primary-solid ml-0.5">*</span>
                </span>
              }
              type="email"
              placeholder="yourname@email.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
            />

            <PhoneInput
              label={
                <span>
                  Phone Number
                  <span className="text-primary-solid ml-0.5">*</span>
                </span>
              }
              countryCode={form.countryCode}
              onCountryCodeChange={(v) => update("countryCode", v)}
              phoneNumber={form.phoneNumber}
              onPhoneNumberChange={(v) => update("phoneNumber", v)}
            />
          </div>
        </div>

        {/* Section 3: Residential Address */}
        <div className="flex flex-col gap-4 mt-2">
          <h2 className="text-base sm:text-lg font-bold text-text-dark">
            Residential Address
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label={
                <span>
                  State of Residence
                  <span className="text-primary-solid ml-0.5">*</span>
                </span>
              }
              placeholder="Select"
              options={[
                "Lagos",
                "Oyo",
                "FCT Abuja",
                "Rivers",
                "Ogun",
                "Enugu",
                "Kano",
                "Delta",
              ]}
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
              required
            />

            <Select
              label={
                <span>
                  Local Government Area (LGA)
                  <span className="text-primary-solid ml-0.5">*</span>
                </span>
              }
              placeholder="Select"
              options={[
                "Ibadan North",
                "Ikeja",
                "Abuja Municipal",
                "Eti-Osa",
                "Port Harcourt",
                "Obafemi Owode",
              ]}
              value={form.lga}
              onChange={(e) => update("lga", e.target.value)}
              required
            />

            <div className="sm:col-span-2">
              <Input
                label={
                  <span>
                    Residential Address
                    <span className="text-primary-solid ml-0.5">*</span>
                  </span>
                }
                type="text"
                placeholder="Street Address"
                value={form.streetAddress}
                onChange={(e) => update("streetAddress", e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Section 4: Accessibility */}
        <div className="flex flex-col gap-4 mt-2">
          <h2 className="text-base sm:text-lg font-bold text-text-dark">
            Accessibility
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <Select
              label={
                <span>
                  Do you have any impairment?
                  <span className="text-primary-solid ml-0.5">*</span>
                </span>
              }
              placeholder="Select"
              options={[
                "No",
                "Visual impairment",
                "Hearing impairment",
                "Mobility impairment",
                "Other",
              ]}
              value={form.impairment}
              onChange={(e) => update("impairment", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onBack || (() => router.back())}
            className="flex items-center gap-2 text-sm font-medium text-neutral-secondary hover:text-text-dark transition-colors cursor-pointer"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back
          </button>

          <Button
            type="submit"
            variant="secondary"
            size="small"
            disabled={isSubmitting}
            className="px-8 h-11 bg-secondary hover:bg-secondary-hover text-white font-semibold text-sm rounded-lg flex items-center gap-2 shadow-sm cursor-pointer"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                Continue
                <FiArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>

      <StatusModal
        isOpen={showSuccessModal}
        type="success"
        title="Personal Information Saved"
        description="Your profile details have been saved successfully!"
        actionLabel="Continue"
        onAction={() => setShowSuccessModal(false)}
      />
    </motion.div>
  );
};
