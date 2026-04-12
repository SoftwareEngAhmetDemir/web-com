import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`
          block
          w-full
          focus:text-white!
          bg-[var(--bg-input)]
          border border-[#4b0000]
          rounded-none
          placeholder-yellow-400
          text-base
          leading-6
          transition
          duration-150
          ease-in-out
          focus:outline-none
          focus:border-yellow-400
          focus:shadow-outline
          p-2
          ${className || ""}
        `}
      />
    );
  }
);

CustomInput.displayName = "CustomInput";
