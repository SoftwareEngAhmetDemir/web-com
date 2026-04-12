import { RedCard } from "../common/RedCard/RedCard";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import { LoadingSpinner } from "../ui/LoadingSpinner";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, isLoading, error, clearMessages } = useAuthStore();

  const handleLogin = async (data: Record<string, string | boolean>) => {
    clearMessages();
    try {
      await login({
        userNameOrEmail: data["name"] as string,
        password: data["password"] as string,
        pin: data["pin"] as string,
      });
      navigate("/dashboard");
    } catch {
      // error is set in the store — no additional handling needed
    }
  };

  const fields: FormField[] = [
    {
      name: "name",
      type: "text",
      placeholder: t("login.accountName"),
      required: true,
      minLength: 3,
      maxLength: 32,
      errorMessage: t("login.validation.accountNameRequired"),
      minLengthMessage: t("login.validation.accountNameMin"),
      maxLengthMessage: t("login.validation.accountNameMax"),
    },
    {
      name: "password",
      type: "password",
      placeholder: t("login.password"),
      required: true,
      minLength: 6,
      errorMessage: t("login.validation.passwordRequired"),
      minLengthMessage: t("login.validation.passwordMin"),
    },
    {
      name: "pin",
      type: "text",
      placeholder: t("login.pinCode"),
      required: true,
      minLength: 4,
      maxLength: 6,
      pattern: "\\d{4,6}",
      errorMessage: t("login.validation.pinRequired"),
      minLengthMessage: t("login.validation.pinMin"),
      maxLengthMessage: t("login.validation.pinMax"),
      patternMismatchMessage: t("login.validation.pinPattern"),
    },
  ];

  return (
    <>
      <RedCard text={t("login.title")} />
      <div className="mb-4" />

      {error && (
        <div className="mb-3 px-2 py-2 text-sm text-red-400 bg-red-950/40 rounded">
          {error}
        </div>
      )}

      <div className="relative p-2">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded bg-black/60 backdrop-blur-sm">
            <LoadingSpinner text={t("list.loading")} size="md" />
          </div>
        )}
        <CustomForm
          fields={fields}
          submitText={t("login.loginButton")}
          onSubmit={handleLogin}
        />
      </div>

      <div className="flex mt-3 gap-3">
        <Link
          className="no-underline hover:underline text-blue-500"
          to="/register"
        >
          {t("login.register")}
        </Link>
        |
        <Link
          className="no-underline hover:underline text-blue-500"
          to="/forgot-password"
        >
          {t("login.forgotPassword")}
        </Link>
      </div>
      <div className="my-3">
        <Link
          className="no-underline hover:underline text-blue-500"
          to="/forgot-pin"
        >
          {t("login.forgotPin")}
        </Link>
      </div>
    </>
  );
}
