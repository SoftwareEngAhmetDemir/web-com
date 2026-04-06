import * as Form from "@radix-ui/react-form";
import { RedCard } from "../common/RedCard/RedCard";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";

export default function LoginForm() {
  // Submit handler
  const handleLogin = (data: Record<string, string>) => {
    console.log("Form data:", data);
    if (!data.name || !data.password || !data.pin) {
      alert("Please fill in all fields!");
      return;
    }
    // Send to API...
  };
  const fields: FormField[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Account Name",
      required: true,
      errorMessage: "Name is required"
    },
    {
      name: "password",
      type: "password",
      placeholder: "Your password",
      required: true,
      errorMessage: "Password is required"
    },
    {
      name: "pin",
      type: "text",
      placeholder: "Pin Code",
      required: true,
      errorMessage: "Pin is required"
    }
  ];
  return (
    <>
      <RedCard text="LOG IN" />
      <div className="mb-4"></div>
      <div className="p-2">
        <CustomForm
          fields={fields}
          submitText="LOG IN"
          onSubmit={handleLogin}
        />
      </div>
      <div>Register | Forgot Password</div>
      <div>Pin Forgot Password</div>
    </>
  );
}
