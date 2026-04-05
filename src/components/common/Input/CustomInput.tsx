import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

/**
 * Just a reusable styled input.
 * It is NOT wrapped in Form.Control; parent handles that.
 */
export const CustomInput: React.FC<CustomInputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`
        block
        w-full
        focus:text-white!
        bg-[#250000]
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
};