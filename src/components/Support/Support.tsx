import React from "react";
import { useTranslation } from "react-i18next";

export const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-[2rem] font-medium text-center">{t("support.title")}</h1>
      <hr className="my-[20px]" />
      <h1 className="text-[2rem] font-bold">{t("support.oops")}</h1>
      <h3>{t("support.loginRequired")}</h3>
    </div>
  );
};
