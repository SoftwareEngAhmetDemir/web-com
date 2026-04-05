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
      <h1>Forgot PIN</h1>
      <CustomForm
        fields={forgetPinFields}
        submitText="Send Reset Email"
        onSubmit={handleSubmit}
      />
    </>
  );
}
