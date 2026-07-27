"use client";

import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";

export interface PassportUploadProps {
  onImageChange?: (file: File | null) => void;
}

export const PassportUpload: React.FC<PassportUploadProps> = ({
  onImageChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onImageChange?.(file);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onImageChange?.(null);
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="relative w-32.5 sm:w-37.5 h-32.5 sm:h-37.5 bg-[#fdf2f5] border-2 border-dashed border-primary/10 rounded-2xl flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:bg-[#fbe8ed] transition-all group shrink-0 select-none"
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      {preview ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden group">
          <img
            src={preview}
            alt="Passport Preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-black"
          >
            ✕
          </button>
        </div>
      ) : (
        <>
          <FiUpload className="w-6.5 h-6.5 text-primary mb-1" />
          <span className="text-primary text-sm font-semibold leading-tight">
            Upload Passport
          </span>
          <span className="text-[10px] text-[#8e7a7e] font-normal leading-tight mt-1">
            <span className="text-primary">5mb</span> image max size
          </span>
        </>
      )}
    </div>
  );
};
