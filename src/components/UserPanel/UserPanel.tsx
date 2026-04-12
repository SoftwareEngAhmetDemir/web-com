import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";
import "./style.scss";

export default function UserPanel() {
  const { t } = useTranslation();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/web");
  };

  const buttons = [
    { label: t("panel.controlPanel"),  onClick: () => navigate("/controlPanel") },
    { label: t("panel.supportSystem"), onClick: () => navigate("/support") },
    { label: t("panel.changePassword"), onClick: () => navigate("/forgot-password") },
    { label: t("panel.logout"),         onClick: handleLogout, isLogout: true },
  ];

  return (
    <div className="up-wrap">
      <div className="up-header">
        <span>{t("panel.title")}</span>
      </div>
      <div className="up-buttons">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            className={`up-btn${btn.isLogout ? " up-btn--logout" : ""}`}
            onClick={btn.onClick}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}