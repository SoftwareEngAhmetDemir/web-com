import { Link } from "react-router-dom";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";

const forgetPinFields: FormField[] = [
  {
    name: "account_name",
    type: "text",
    placeholder: "Account Name (Between 5-15 Characters)",
    required: true,
    minLength: 5,
    maxLength: 12,
    errorMessage: "Account Name is required"
    // hasIcons: true, // to show key / eye icons if you want
  },
  {
    name: "e-mail",
    type: "email",
    placeholder: "Email Address",
    required: true,
    maxLength: 100,
    errorMessage: "Email is required"
    // hasIcons: true, // eye icon for password-like display
  }
  // reCAPTCHA will be handled separately
];

export default function ForgetPinForm() {
  const handleSubmit = (data: Record<string, string | boolean>) => {
    console.log("Forget PIN Form Submitted:", data);

    // Example API call
    /*
    fetch("/api/forget-pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => console.log("Success:", data))
      .catch(err => console.error("Failed:", err));
    */
  };

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">Forgot PIN</h1>
      <hr className="my-[20px]" />
      <CustomForm
        fields={forgetPinFields}
        submitText="Send Reset Email"
        onSubmit={handleSubmit}
        submitButtonClassName="w-full"
      />
      <div className="flex my-5">
        Already have an account? Now{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          log in
        </Link>
        .
      </div>
      <div className="flex my-3">
        Don't have an account? Now{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          register
        </Link>
      </div>
    </>
  );
}
