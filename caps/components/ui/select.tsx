import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  error?: string;
  helperText?: React.ReactNode;
  options?: (string | SelectOption)[];
  placeholder?: string;
  containerClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className = "",
      containerClassName = "",
      label,
      error,
      helperText,
      options = [],
      placeholder = "Select",
      id,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const selectId = id || React.useId();

    return (
      <div className={`flex flex-col gap-1.5 w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="font-sans text-text-dark font-medium text-xs xl:text-sm leading-[1.4] select-none"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <select
            ref={ref}
            id={selectId}
            value={value}
            onChange={onChange}
            className={`
              w-full h-11 xl:h-12
              pl-4 pr-10 py-2.5
              bg-input-bg
              text-text-dark font-normal text-sm
              border border-transparent
              rounded-radius-200
              transition-all duration-200 ease-in-out
              outline-none
              appearance-none
              cursor-pointer
              
              focus:border-primary-solid/40
              focus:ring-2
              focus:ring-primary-solid/10
              
              ${!value ? "text-gray-400" : "text-text-dark"}
              ${error ? "border-primary-solid ring-2 ring-border-secondary" : ""}
              
              disabled:opacity-50
              disabled:cursor-not-allowed
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="text-gray-400">
                {placeholder}
              </option>
            )}
            {options.map((opt, idx) => {
              const optVal = typeof opt === "string" ? opt : opt.value;
              const optLabel = typeof opt === "string" ? opt : opt.label;
              return (
                <option key={idx} value={optVal} className="text-text-dark bg-white">
                  {optLabel}
                </option>
              );
            })}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center text-text-dark/60">
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && (
          <span className="text-primary-solid text-xs font-semibold leading-[1.4]">
            {error}
          </span>
        )}
        {!error && helperText && (
          <div className="text-neutral-secondary text-xs leading-[1.4]">
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
