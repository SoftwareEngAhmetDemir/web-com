import { Link } from "react-router-dom";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import { LoadingSpinner } from "../ui/LoadingSpinner";

export default function ForgetPasswordForm() {
  const { t } = useTranslation();
  const { forgotPassword, isLoading, error, successMessage, clearMessages } =
    useAuthStore();

  const forgetPasswordFields: FormField[] = [
    {
      name: "account_name",
      type: "text",
      placeholder: t("forgotPassword.accountName"),
      required: true,
      minLength: 5,
      maxLength: 12,
      errorMessage: t("forgotPassword.validation.accountNameRequired"),
      minLengthMessage: t("forgotPassword.validation.accountNameMin"),
      maxLengthMessage: t("forgotPassword.validation.accountNameMax"),
    },
    {
      name: "e-mail",
      type: "email",
      placeholder: t("forgotPassword.email"),
      required: true,
      maxLength: 100,
      errorMessage: t("forgotPassword.validation.emailRequired"),
      typeMismatchMessage: t("forgotPassword.validation.emailInvalid"),
      maxLengthMessage: t("forgotPassword.validation.emailMax"),
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
        {t("forgotPassword.title")}
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
          fields={forgetPasswordFields}
          submitText={t("forgotPassword.sendResetEmail")}
          onSubmit={handleSubmit}
          submitButtonClassName="w-full"
        />
      </div>

      <div className="flex my-5">
        {t("forgotPassword.alreadyHaveAccount")}
        <Link to="/web" className="ml-1 text-blue-500 hover:underline">
          {t("forgotPassword.logIn")}
        </Link>
      </div>
      <div className="flex my-3">
        {t("forgotPassword.noAccount")}
        <Link to="/register" className="ml-1 text-blue-500 hover:underline">
          {t("forgotPassword.register")}
        </Link>
      </div>
    </>
  );
}
