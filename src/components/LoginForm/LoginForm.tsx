import { RedCard } from "../common/RedCard/RedCard";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";

export default function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, isLoading, error, clearMessages } = useAuthStore();

  const handleLogin = async (data: Record<string, string | boolean>) => {
    clearMessages();

    if (!data["name"] || !data["password"] || !data["pin"]) {
      alert(t("login.fillAllFields"));
      return;
    }

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
      errorMessage: "Name is required",
    },
    {
      name: "password",
      type: "password",
      placeholder: t("login.password"),
      required: true,
      errorMessage: "Password is required",
    },
    {
      name: "pin",
      type: "text",
      placeholder: t("login.pinCode"),
      required: true,
      errorMessage: "Pin is required",
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

      <div className="p-2">
        <CustomForm
          fields={fields}
          submitText={isLoading ? "..." : t("login.loginButton")}
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
