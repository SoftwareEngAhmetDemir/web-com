import React from "react";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  const { t } = useTranslation();

  const registerFields: FormField[] = [
    {
      name: "realName",
      type: "text",
      placeholder: t("register.realName"),
      required: true
    },
    {
      name: "account_name",
      type: "text",
      placeholder: t("register.accountName"),
      required: true
    },
    {
      name: "e-mail",
      type: "text",
      placeholder: t("register.email"),
      required: true
    },
    {
      name: "password",
      type: "password",
      placeholder: t("register.password"),
      required: true
    },
    {
      name: "passwordTwo",
      type: "password",
      placeholder: t("register.repeatPassword"),
      required: true
    },
    {
      name: "pinPassword",
      type: "password",
      placeholder: t("register.pinCode"),
      required: true
    },
    {
      name: "phone",
      type: "text",
      placeholder: t("register.phone"),
      required: true
    },
    {
      name: "deleteCode",
      type: "text",
      placeholder: t("register.deleteCode"),
      required: true
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
        "CHASTER"
      ],
      required: true
    },
    {
      name: "check",
      type: "checkbox",
      isCheckbox: true,
      placeholder: t("register.membershipAgreement"),
      required: true
    }
  ];

  const handleRegister = (data: Record<string, string | boolean>) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[2rem] font-medium text-center">{t("register.title")}</h1>
        <hr className="my-[20px]" />
        <CustomForm
          fields={registerFields}
          submitText={t("register.registerButton")}
          onSubmit={handleRegister}
        />
      </div>
      <div className="flex my-5">
        {t("register.alreadyHaveAccount")}
        <Link to="/" className="ml-1 text-blue-500 hover:underline">
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
