import * as Form from "@radix-ui/react-form";
import React from "react";
import { CustomInput } from "../Input/CustomInput";
import { GridButton } from "../GridButton/GridButton";

export type FormField = {
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  options?: string[];
  isCheckbox?: boolean;
  errorMessage?: string;
  minLengthMessage?: string;
  maxLengthMessage?: string;
  typeMismatchMessage?: string;
  patternMismatchMessage?: string;
};

interface CustomFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string | boolean>) => void;
  submitText?: string;
  submitButtonClassName?: string;
  customErrors?: Record<string, string>;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  fields,
  onSubmit,
  submitButtonClassName,
  submitText = "Submit",
  customErrors = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | boolean> = {};

    fields.forEach((field) => {
      if (field.isCheckbox) {
        data[field.name] = (formData.get(field.name) as string | null) === "on";
      } else {
        data[field.name] = formData.get(field.name)?.toString().trim() || "";
      }
    });

    onSubmit(data);
  };

  return (
    <Form.Root onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <Form.Field
          key={field.name}
          name={field.name}
          className="flex flex-col gap-1"
        >
          {field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="block w-full border border-gray-400 rounded px-3 py-2 text-black"
            >
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : field.isCheckbox ? (
            <Form.Control asChild>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={field.name}
                  required={field.required}
                />
                <label>{field.placeholder}</label>
              </div>
            </Form.Control>
          ) : (
            <Form.Control asChild>
              <CustomInput
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={field.defaultValue}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
                pattern={field.pattern}
              />
            </Form.Control>
          )}

          <Form.Message match="valueMissing" className="text-red-500 text-sm">
            {field.errorMessage || `${field.placeholder || field.name} is required`}
          </Form.Message>

          {field.minLength && field.minLengthMessage && (
            <Form.Message match="tooShort" className="text-red-500 text-sm">
              {field.minLengthMessage}
            </Form.Message>
          )}

          {field.maxLength && field.maxLengthMessage && (
            <Form.Message match="tooLong" className="text-red-500 text-sm">
              {field.maxLengthMessage}
            </Form.Message>
          )}

          {field.typeMismatchMessage && (
            <Form.Message match="typeMismatch" className="text-red-500 text-sm">
              {field.typeMismatchMessage}
            </Form.Message>
          )}

          {field.pattern && field.patternMismatchMessage && (
            <Form.Message match="patternMismatch" className="text-red-500 text-sm">
              {field.patternMismatchMessage}
            </Form.Message>
          )}

          {customErrors[field.name] && (
            <span className="text-red-500 text-sm">{customErrors[field.name]}</span>
          )}
        </Form.Field>
      ))}

      <Form.Submit asChild>
        <GridButton
          text={submitText}
          type="submit"
          className={submitButtonClassName || ""}
        />
      </Form.Submit>
    </Form.Root>
  );
};
