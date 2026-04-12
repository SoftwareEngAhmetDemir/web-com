import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import "./style.scss";
import { RedCard } from "../common/RedCard/RedCard";
import dayjs from "dayjs";

export default function ControlPanel() {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/web");
  };

  const infoRows = [
    { label: t("panel.accountName"),   value: user?.userName },
    { label: t("panel.email"),         value: user?.email },
    { label: t("panel.dragonCoins"),   value: user?.dragonMoney ?? 0 },
    { label: t("panel.lastLogin"),     value: user?.lastLoginAt ? dayjs(user.lastLoginAt).format("DD MMMM YYYY HH:mm:ss") : undefined },
    { label: t("panel.registerDate"),  value: user?.createdAt ? dayjs(user.createdAt).format("DD MMMM YYYY HH:mm:ss") : undefined },
    { label: t("panel.accountOwner"),  value: user?.fullName },
    { label: t("panel.accountStatus"), value: user?.isActive ? t("panel.active") : t("panel.inactive") },
  ];

  const buttons = [
    { label: t("panel.loadEP"),              onClick: () => {} },
    { label: t("panel.useEPCoupon"),         onClick: () => {} },
    { label: t("panel.myEPCoupons"),         onClick: () => {} },
    { label: t("panel.supportSystem"),       onClick: () => navigate("/support") },
    { label: t("panel.changeEmail"),         onClick: () => {} },
    { label: t("panel.changePassword"),      onClick: () => navigate("/forgot-password") },
    { label: t("panel.changePinPassword"),   onClick: () => navigate("/forgot-pin") },
    { label: t("panel.changeDeleteCode"),    onClick: () => {} },
    { label: t("panel.requestVaultPassword"), onClick: () => {} },
    { label: t("panel.saveFromToday"),       onClick: () => {} },
    { label: t("panel.panelLogs"),           onClick: () => {} },
    { label: t("panel.logout"),              onClick: handleLogout, isLogout: true },
  ];

  return (
    <div className="cp-wrap">
      <h1 className="text-[2rem] font-medium text-center">
        {t("panel.title")}
      </h1>
      <hr className="my-[20px]" />

      <div className="cp-info">
        {infoRows.map((row, i) => (
          <div key={row.label}>
            <RedCard
              classes={`c-row !border-0${
                i % 2 === 0 ? " !border-b border-b-red-800" : ""
              }`}
              style={i % 2 !== 0 ? { background: "transparent" } : undefined}
              text={
                <div className="flex flex-wrap gap-x-2">
                  <span className="cp-info-label w-full sm:w-[150px] shrink-0">{row.label}:</span>
                  <span className="cp-info-value break-all">{row.value ?? "—"}</span>
                </div>
              }
            />
          </div>
        ))}
      </div>

      <div className="cp-buttons grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
        {buttons.map((btn) => (
          <button key={btn.label} className="cp-btn" onClick={btn.onClick}>
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
