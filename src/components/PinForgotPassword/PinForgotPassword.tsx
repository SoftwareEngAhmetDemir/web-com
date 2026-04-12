import { Link } from "react-router-dom";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import { LoadingSpinner } from "../ui/LoadingSpinner";

export default function ForgetPinForm() {
  const { t } = useTranslation();
  const { forgotPassword, isLoading, error, successMessage, clearMessages } =
    useAuthStore();

  const forgetPinFields: FormField[] = [
    {
      name: "account_name",
      type: "text",
      placeholder: t("forgotPin.accountName"),
      required: true,
      minLength: 5,
      maxLength: 12,
      errorMessage: t("forgotPin.validation.accountNameRequired"),
      minLengthMessage: t("forgotPin.validation.accountNameMin"),
      maxLengthMessage: t("forgotPin.validation.accountNameMax"),
    },
    {
      name: "e-mail",
      type: "email",
      placeholder: t("forgotPin.email"),
      required: true,
      maxLength: 100,
      errorMessage: t("forgotPin.validation.emailRequired"),
      typeMismatchMessage: t("forgotPin.validation.emailInvalid"),
      maxLengthMessage: t("forgotPin.validation.emailMax"),
    },
  ];

  const handleSubmit = async (data: Record<string, string | boolean>) => {
    clearMessages();
    try {
      await forgotPassword({ email: data["e-mail"] as string });
    } catch {
      // error is set in the store
    }
  };

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">
        {t("forgotPin.title")}
      </h1>
      <hr className="my-[20px]" />

      {error && (
        <div className="mb-4 px-3 py-2 text-sm text-red-400 bg-red-950/40 rounded">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="mb-4 px-3 py-2 text-sm text-green-400 bg-green-950/40 rounded">
          {successMessage}
        </div>
      )}

      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-black/60 backdrop-blur-sm">
            <LoadingSpinner text={t("list.loading")} size="md" />
          </div>
        )}
        <CustomForm
          fields={forgetPinFields}
          submitText={t("forgotPin.sendResetEmail")}
          onSubmit={handleSubmit}
          submitButtonClassName="w-full"
        />
      </div>

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
