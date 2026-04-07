import * as Form from "@radix-ui/react-form";
import React from "react";
import { CustomInput } from "../Input/CustomInput";
import { GridButton } from "../GridButton/GridButton";

export type FormField = {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  options?: string[]; // for select
  isCheckbox?: boolean;
  errorMessage?: string;
};

interface CustomFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string | boolean>) => void;
  submitText?: string;
  submitButtonClassName?: string;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  fields,
  onSubmit,
  submitButtonClassName,
  submitText = "Submit"
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
            <div className="flex items-center gap-2">
              <input type="checkbox" name={field.name} />
              <label>{field.placeholder}</label>
            </div>
          ) : (
            <Form.Control asChild>
              <CustomInput
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
              />
            </Form.Control>
          )}

          {field.required && field.errorMessage && (
            <Form.Message match="valueMissing" className="text-red-500 text-sm">
              {field.errorMessage}
            </Form.Message>
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
