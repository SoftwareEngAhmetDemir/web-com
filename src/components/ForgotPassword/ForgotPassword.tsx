import { Link } from "react-router-dom";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";

const forgetPasswordFields: FormField[] = [
  {
    name: "account_name",
    type: "text",
    placeholder: "Account Name (Between 5-15 Characters)",
    required: true,
    minLength: 5,
    maxLength: 12,
    errorMessage: "Account Name is required"
  },
  {
    name: "e-mail",
    type: "email",
    placeholder: "Email Address",
    required: true,
    maxLength: 100,
    errorMessage: "Email is required"
  }
  // You can handle recaptcha separately if needed
];

export default function ForgetPasswordForm() {
  const handleSubmit = (data: Record<string, string | boolean>) => {
    console.log("Forget Password Form Submitted:", data);

    // Example: send to API
    /*
    fetch("/api/forget-password", {
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
      <h1 className="text-[2rem] font-medium text-center">Forgot Password</h1>
      <hr className="my-[20px]" />
      <CustomForm
        fields={forgetPasswordFields}
        submitText="Send Reset Email"
        onSubmit={handleSubmit}
         submitButtonClassName="w-full"
      />
      <div className="flex my-5">
        Already have an account? Now
        <Link to="/" className="ml-1 text-blue-500 hover:underline">
          log in
        </Link>
      </div>
      <div className="flex my-3">
        Don't have an account? Now
        <Link to="/register" className="ml-1 text-blue-500 hover:underline">
          register
        </Link>
      </div>
    </>
  );
}
