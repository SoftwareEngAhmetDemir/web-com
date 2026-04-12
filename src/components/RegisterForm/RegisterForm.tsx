import { useState } from "react";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import { LoadingSpinner } from "../ui/LoadingSpinner";

export default function RegisterForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register, isLoading, error, successMessage, clearMessages } =
    useAuthStore();

  const [customErrors, setCustomErrors] = useState<Record<string, string>>({});

  const registerFields: FormField[] = [
    {
      name: "realName",
      type: "text",
      placeholder: t("register.realName"),
      required: true,
      minLength: 2,
      maxLength: 64,
      errorMessage: t("register.validation.realNameRequired"),
      minLengthMessage: t("register.validation.realNameMin"),
      maxLengthMessage: t("register.validation.realNameMax"),
    },
    {
      name: "account_name",
      type: "text",
      placeholder: t("register.accountName"),
      required: true,
      minLength: 5,
      maxLength: 12,
      pattern: "[A-Za-z0-9_]{5,12}",
      errorMessage: t("register.validation.accountNameRequired"),
      minLengthMessage: t("register.validation.accountNameMin"),
      maxLengthMessage: t("register.validation.accountNameMax"),
      patternMismatchMessage: t("register.validation.accountNamePattern"),
    },
    {
      name: "e-mail",
      type: "email",
      placeholder: t("register.email"),
      required: true,
      maxLength: 100,
      errorMessage: t("register.validation.emailRequired"),
      typeMismatchMessage: t("register.validation.emailInvalid"),
      maxLengthMessage: t("register.validation.emailMax"),
    },
    {
      name: "password",
      type: "password",
      placeholder: t("register.password"),
      required: true,
      minLength: 6,
      maxLength: 64,
      errorMessage: t("register.validation.passwordRequired"),
      minLengthMessage: t("register.validation.passwordMin"),
      maxLengthMessage: t("register.validation.passwordMax"),
    },
    {
      name: "passwordTwo",
      type: "password",
      placeholder: t("register.repeatPassword"),
      required: true,
      minLength: 6,
      errorMessage: t("register.validation.confirmPasswordRequired"),
      minLengthMessage: t("register.validation.passwordMin"),
    },
    {
      name: "pinPassword",
      type: "text",
      placeholder: t("register.pinCode"),
      required: true,
      minLength: 4,
      maxLength: 6,
      pattern: "\\d{4,6}",
      errorMessage: t("register.validation.pinRequired"),
      minLengthMessage: t("register.validation.pinMin"),
      maxLengthMessage: t("register.validation.pinMax"),
      patternMismatchMessage: t("register.validation.pinPattern"),
    },
    {
      name: "phone",
      type: "text",
      placeholder: t("register.phone"),
      required: true,
      minLength: 7,
      maxLength: 20,
      pattern: "[\\d\\s\\+\\-\\(\\)]{7,20}",
      errorMessage: t("register.validation.phoneRequired"),
      minLengthMessage: t("register.validation.phoneMin"),
      patternMismatchMessage: t("register.validation.phonePattern"),
    },
    {
      name: "deleteCode",
      type: "text",
      placeholder: t("register.deleteCode"),
      required: true,
      minLength: 4,
      maxLength: 16,
      errorMessage: t("register.validation.deleteCodeRequired"),
      minLengthMessage: t("register.validation.deleteCodeMin"),
      maxLengthMessage: t("register.validation.deleteCodeMax"),
    },
    {
      name: "referans",
      type: "select",
      options: [
        t("register.whereDidYouFindUs"),
        "Capo2 Kitle",
        "Metin2 Tartışma Sohbet",
        "SMS",
        "Turkmmo",
        "Capoeiraa",
        "BonusGamer",
        "Berserker",
        "Rause",
        "Claus",
        "JantiPlayer",
        "HATRED",
        "Peria",
        "AuswitchTR",
        "Lusian",
        "Luxx",
        "İrolika",
        "Pentagram",
        "Swayzewn",
        "FurkanPektaş",
        "Acapella",
        "Sumina",
        "Recould",
        "realOxygeN",
        "MATKAP",
        "itemci",
        "OhaMenace",
        "TURSUSUYU",
        "PamukŞeker",
        "DEDE1881",
        "TEDDYMONTANA",
        "HuaTV",
        "sansarkerem",
        "CHASTER",
      ],
      required: true,
    },
    {
      name: "check",
      type: "checkbox",
      isCheckbox: true,
      placeholder: t("register.membershipAgreement"),
      required: true,
      errorMessage: t("register.validation.agreementRequired"),
    },
  ];

  const handleRegister = async (data: Record<string, string | boolean>) => {
    clearMessages();

    const errors: Record<string, string> = {};

    if (data["password"] !== data["passwordTwo"]) {
      errors["passwordTwo"] = t("register.validation.passwordMismatch");
    }

    if (!data["check"]) {
      errors["check"] = t("register.validation.agreementRequired");
    }

    if (Object.keys(errors).length > 0) {
      setCustomErrors(errors);
      return;
    }

    setCustomErrors({});

    try {
      await register({
        fullName: data["realName"] as string,
        userName: data["account_name"] as string,
        email: data["e-mail"] as string,
        password: data["password"] as string,
        confirmPassword: data["passwordTwo"] as string,
        pin: data["pinPassword"] as string,
        phoneNumber: data["phone"] as string,
        howDidYouFindUs: data["referans"] as string,
        membershipAgreementAccepted: data["check"] === true,
      });
      navigate("/web");
    } catch {
      // error is set in the store
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[2rem] font-medium text-center">
          {t("register.title")}
        </h1>
        <hr className="my-[20px]" />

        {error && (
          <div className="mb-4 px-3 py-2 text-sm text-red-400 bg-red-950/40 rounded text-left">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 px-3 py-2 text-sm text-green-400 bg-green-950/40 rounded text-left">
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
            fields={registerFields}
            submitText={t("register.registerButton")}
            onSubmit={handleRegister}
            customErrors={customErrors}
          />
        </div>
      </div>

      <div className="flex my-5">
        {t("register.alreadyHaveAccount")}
        <Link to="/web" className="ml-1 text-blue-500 hover:underline">
          {t("register.logIn")}
        </Link>
      </div>
      <div className="flex my-3">
        {t("register.forgotPasswordText")}
        <Link to="/forgot-password" className="ml-1 text-blue-500 hover:underline">
          {t("register.resetPassword")}
        </Link>
      </div>
      <div className="flex my-3">
        {t("register.forgotPinText")}
        <Link to="/forgot-pin" className="ml-1 text-blue-500 hover:underline">
          {t("register.resetPin")}
        </Link>
      </div>
    </div>
  );
}
