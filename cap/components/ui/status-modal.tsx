import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { successCheckmarkImg } from "@/assets";

interface StatusModalProps {
  isOpen: boolean;
  onClose?: () => void;
  type: "success" | "error";
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  iconSrc?: string;
}

export const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  description,
  actionLabel,
  onAction,
  iconSrc,
}) => {
  if (!isOpen) return null;

  const renderIcon = () => {
    if (iconSrc) {
      return (
        <Image
          src={iconSrc}
          alt={title}
          width={140}
          height={140}
          className="object-contain"
          style={{ width: "140px", height: "140px" }}
          priority
        />
      );
    }

    if (type === "success") {
      return (
        <Image
          src={successCheckmarkImg}
          alt="Success Checkmark"
          width={140}
          height={140}
          className="object-contain"
          style={{ width: "140px", height: "140px" }}
          priority
        />
      );
    }

    return (
      <div className="w-35 h-35 flex items-center justify-center bg-red-50 rounded-full border-4 border-red-100 shadow-sm animate-pulse">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#B3261E" />
          <path
            d="M8 8L16 16M16 8L8 16"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-4xl p-10 max-w-105 w-full flex flex-col items-center text-center shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-neutral-secondary hover:text-text-dark transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="w-35 h-35 relative flex items-center justify-center">
          {renderIcon()}
        </div>

        <h2 className="text-2xl font-extrabold text-neutral-primary mt-6 tracking-tight">
          {title}
        </h2>

        <p className="text-neutral-secondary text-[14px] leading-relaxed mt-2 font-normal max-w-70">
          {description}
        </p>

        {actionLabel && onAction && (
          <Button
            onClick={onAction}
            variant="secondary"
            size="normal"
            className="w-full h-12.5 text-white font-bold text-base bg-secondary hover:bg-secondary-hover mt-8 transition-all shadow-sm cursor-pointer"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};
