import { Link, useNavigate } from "react-router-dom";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import { LoadingSpinner } from "../ui/LoadingSpinner";

export default function ChangeEmail() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isLoading, error, successMessage, clearMessages } = useAuthStore();

  const fields: FormField[] = [
    {
      name: "currentPassword",
      type: "password",
      placeholder: t("changeEmail.currentPassword"),
      required: true,
      minLength: 6,
      errorMessage: t("changeEmail.validation.currentPasswordRequired"),
      minLengthMessage: t("changeEmail.validation.currentPasswordMin"),
    },
    {
      name: "newEmail",
      type: "email",
      placeholder: t("changeEmail.newEmail"),
      required: true,
      maxLength: 100,
      errorMessage: t("changeEmail.validation.newEmailRequired"),
      typeMismatchMessage: t("changeEmail.validation.newEmailInvalid"),
      maxLengthMessage: t("changeEmail.validation.newEmailMax"),
    },
    {
      name: "confirmEmail",
      type: "email",
      placeholder: t("changeEmail.confirmEmail"),
      required: true,
      maxLength: 100,
      errorMessage: t("changeEmail.validation.confirmEmailRequired"),
      typeMismatchMessage: t("changeEmail.validation.confirmEmailInvalid"),
    },
  ];

  const handleSubmit = async (data: Record<string, string | boolean>) => {
    clearMessages();

    if (data["newEmail"] !== data["confirmEmail"]) {
      useAuthStore.setState({ error: t("changeEmail.validation.emailMismatch") });
      return;
    }

    try {
      const response = await fetch("/api/auth/change-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          currentPassword: data["currentPassword"],
          newEmail: data["newEmail"],
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        useAuthStore.setState({ error: err?.message ?? t("changeEmail.errorGeneric") });
        return;
      }

      useAuthStore.setState({ successMessage: t("changeEmail.successMessage") });
      setTimeout(() => navigate("/controlPanel"), 2000);
    } catch {
      useAuthStore.setState({ error: t("changeEmail.errorGeneric") });
    }
  };

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">
        {t("changeEmail.title")}
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
          fields={fields}
          submitText={t("changeEmail.submitButton")}
          onSubmit={handleSubmit}
          submitButtonClassName="w-full"
        />
      </div>

      <div className="flex my-5">
        <Link to="/controlPanel" className="text-blue-500 hover:underline">
          {t("changeEmail.backToDashboard")}
        </Link>
      </div>
    </>
  );
}
