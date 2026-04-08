import { Link } from "react-router-dom";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { useTranslation } from "react-i18next";

export default function ForgetPinForm() {
  const { t } = useTranslation();

  const forgetPinFields: FormField[] = [
    {
      name: "account_name",
      type: "text",
      placeholder: t("forgotPin.accountName"),
      required: true,
      minLength: 5,
      maxLength: 12,
      errorMessage: "Account Name is required"
    },
    {
      name: "e-mail",
      type: "email",
      placeholder: t("forgotPin.email"),
      required: true,
      maxLength: 100,
      errorMessage: "Email is required"
    }
  ];

  const handleSubmit = (data: Record<string, string | boolean>) => {
    console.log("Forget PIN Form Submitted:", data);
  };

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">{t("forgotPin.title")}</h1>
      <hr className="my-[20px]" />
      <CustomForm
        fields={forgetPinFields}
        submitText={t("forgotPin.sendResetEmail")}
        onSubmit={handleSubmit}
        submitButtonClassName="w-full"
      />
      <div className="flex my-5">
        {t("forgotPin.alreadyHaveAccount")}{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          {t("forgotPin.logIn")}
        </Link>
        .
      </div>
      <div className="flex my-3">
        {t("forgotPin.noAccount")}{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          {t("forgotPin.register")}
        </Link>
      </div>
    </>
  );
}
