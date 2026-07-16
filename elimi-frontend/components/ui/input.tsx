import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  suffix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      type = "text",
      label,
      error,
      helperText,
      suffix,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || React.useId();

    return (
      <div className="flex flex-col gap-2 w-full max-w-110 min-w-30">
        {label && (
          <label
            htmlFor={inputId}
            className="font-sans text-text-dark font-normal text-base leading-[1.4] select-none"
            style={{ fontStyle: "normal" }}
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            ref={ref}
            type={type}
            id={inputId}
            className={`
              w-full h-12.5
              pl-4 ${suffix ? "pr-12" : "pr-4"} py-3
              bg-input-bg
              text-text-dark
              border
              rounded-radius-200
              transition-all duration-200 ease-in-out
              outline-none
                                                                                     
              focus:border-none
              focus:ring-2
              focus:ring-border-secondary
              
              /* Error override styling if error is present */
              ${error ? "border-primary-solid ring-2 ring-border-secondary" : ""}
              
              disabled:opacity-50
              disabled:cursor-not-allowed
              ${className}
            `}
            {...props}
          />
          {suffix && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-text-dark/50 hover:text-text-dark transition-colors cursor-pointer select-none">
              {suffix}
            </div>
          )}
        </div>
        {error && (
          <span className="text-primary-solid text-xs font-semibold leading-[1.4] transition-all duration-200 animate-fadeIn">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span className="text-gray-500 text-xs leading-[1.4]">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
