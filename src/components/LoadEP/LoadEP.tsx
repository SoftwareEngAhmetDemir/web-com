import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/authStore";

const OYUNPAY_KEY = "IUdNM1laJC989oshVyFLotQE56FGc3dM";

function buildToken(userAccount: string, userID: string | number, userGSM = "", userEmail = "") {
  const payload = JSON.stringify({ userAccount, userID: String(userID), userGSM, userEmail });
  return btoa(payload);
}

export default function LoadEP() {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const handlePay = () => {
    const token = buildToken(
      user?.userName ?? "",
      user?.id ?? "",
      user?.phoneNumber ?? "",
      user?.email ?? ""
    );
    const url = `https://www.oyunalisveris.com/oyunpay/api?token=${token}&key=${OYUNPAY_KEY}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">
        {t("panel.loadEP")}
      </h1>
      <hr className="my-[20px]" />

      <div className="flex flex-col items-center mt-4">
        <button
          onClick={handlePay}
          className="cursor-pointer bg-transparent border-0 p-0 rounded-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 relative"
          title="OyunPay ile EP Yükle"
          aria-label="OyunPay ile EP Yükle"
        >
          <img
            src="https://capomt2.com/web/assets/market/images/ltr-box2.png"
            alt=""
            className="block max-w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://capomt2.com/web/assets/market/images/oyunpay.png"
              alt="OyunPay"
              style={{ height: "67px", paddingTop: "15px", paddingBottom: "15px" }}
            />
          </div>
        </button>
      </div>
    </>
  );
}
