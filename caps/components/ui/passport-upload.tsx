"use client";

import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";

export interface PassportUploadProps {
  onImageChange?: (file: File | null) => void;
}

export const PassportUpload: React.FC<PassportUploadProps> = ({ onImageChange }) => {
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
      className="relative w-[130px] sm:w-[150px] h-[130px] sm:h-[150px] bg-[#fdf2f5] border-2 border-dashed border-[#e5a2b1] rounded-2xl flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:bg-[#fbe8ed] transition-all group shrink-0 select-none"
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
          <img src={preview} alt="Passport Preview" className="w-full h-full object-cover" />
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
          <div className="w-8 h-8 rounded-full bg-[#f8d7df] flex items-center justify-center text-[#75152b] mb-2 group-hover:scale-105 transition-transform">
            <FiUpload className="w-4 h-4 text-[#75152b]" />
          </div>
          <span className="text-[#75152b] text-xs font-semibold leading-tight">
            Upload Passport
          </span>
          <span className="text-[10px] text-[#8e7a7e] font-normal leading-tight mt-1">
            5mb image max size
          </span>
        </>
      )}
    </div>
  );
};
