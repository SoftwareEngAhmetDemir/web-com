import { RedCard } from "../common/RedCard/RedCard";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data: Record<string, string | boolean>) => {
    if (!data["name"] || !data["password"] || !data["pin"]) {
      alert(t("login.fillAllFields"));
      return;
    }

    // Simulate a successful login with mock user data
    login({
      accountName: data["name"] as string,
      email: "saf*******@outlook.com",
      dragonCoins: 0,
      lastLogin: new Date().toLocaleString("en-GB", {
        day: "2-digit", month: "long", year: "numeric",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      }),
      registerDate: "20 February 2026 18:30:24",
      accountOwner: (data["name"] as string).toUpperCase(),
      accountStatus: t("panel.active"),
    });

    navigate("/dashboard");
  };

  const fields: FormField[] = [
    {
      name: "name",
      type: "text",
      placeholder: t("login.accountName"),
      required: true,
      errorMessage: "Name is required"
    },
    {
      name: "password",
      type: "password",
      placeholder: t("login.password"),
      required: true,
      errorMessage: "Password is required"
    },
    {
      name: "pin",
      type: "text",
      placeholder: t("login.pinCode"),
      required: true,
      errorMessage: "Pin is required"
    }
  ];

  return (
    <>
      <RedCard text={t("login.title")} />
      <div className="mb-4"></div>
      <div className="p-2">
        <CustomForm
          fields={fields}
          submitText={t("login.loginButton")}
          onSubmit={handleLogin}
        />
      </div>
      <div className="flex mt-3 gap-3">
        <Link className="no-underline hover:underline text-blue-500" to="/register">
          {t("login.register")}
        </Link>|
        <Link className="no-underline hover:underline text-blue-500" to="/forgot-password">
          {t("login.forgotPassword")}
        </Link>
      </div>
      <div className="my-3">
        <Link className="no-underline hover:underline text-blue-500" to="/forgot-pin">
          {t("login.forgotPin")}
        </Link>
      </div>
    </>
  );
}