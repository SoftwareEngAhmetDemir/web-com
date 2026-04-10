import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import "./style.scss";
import { RedCard } from "../common/RedCard/RedCard";

export default function ControlPanel() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const infoRows = [
    { label: t("panel.accountName"),   value: user?.accountName },
    { label: t("panel.email"),         value: user?.email },
    { label: t("panel.dragonCoins"),   value: user?.dragonCoins },
    { label: t("panel.lastLogin"),     value: user?.lastLogin },
    { label: t("panel.registerDate"),  value: user?.registerDate },
    { label: t("panel.accountOwner"),  value: user?.accountOwner },
    { label: t("panel.accountStatus"), value: user?.accountStatus },
  ];

  const buttons = [
    { label: t("panel.loadEP"),          onClick: () => {} },
    { label: t("panel.useEPCoupon"),     onClick: () => {} },
    { label: t("panel.myEPCoupons"),     onClick: () => {} },
    { label: t("panel.supportSystem"),   onClick: () => navigate("/support") },
    { label: t("panel.changeEmail"),     onClick: () => {} },
    { label: t("panel.changePassword"),  onClick: () => navigate("/forgot-password") },
    { label: t("panel.changePinPassword"),   onClick: () => navigate("/forgot-pin") },
    { label: t("panel.changeDeleteCode"),    onClick: () => {} },
    { label: t("panel.requestVaultPassword"), onClick: () => {} },
    { label: t("panel.saveFromToday"),   onClick: () => {} },
    { label: t("panel.panelLogs"),       onClick: () => {} },
    { label: t("panel.logout"),          onClick: handleLogout, isLogout: true },
  ];

  return (
    <div className="cp-wrap">
      {/* Header */}
     
   <h1 className="text-[2rem] font-medium text-center">
    {t("panel.title")}</h1>
      <hr className="my-[20px]" />

      {/* Info rows */}
      <div className="cp-info">
        {infoRows.map((row, i) => (
          <div  key={row.label} >
             <RedCard classes={`c-row !border-0${i % 2 === 0 ? " !border-b border-b-red-800" : ""}`} style={i % 2 !== 0 ? { background: "transparent" } : undefined} text={<div className="flex" >
              <span className="cp-info-label w-[150px]">{row.label}:</span>
              <span className="cp-info-value">{row.value}</span>
             </div>} />
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="cp-buttons">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            className="cp-btn"
            onClick={btn.onClick}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}