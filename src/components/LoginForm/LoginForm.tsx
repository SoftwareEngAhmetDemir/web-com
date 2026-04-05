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
    <div className="p-3">
      <RedCard text="LOG IN" />
      <CustomForm fields={fields} submitText="LOG IN" onSubmit={handleLogin} />
      <div>Register | Forgot Password</div>
      <div>Pin Forgot Password</div>
    </div>
  );
}
