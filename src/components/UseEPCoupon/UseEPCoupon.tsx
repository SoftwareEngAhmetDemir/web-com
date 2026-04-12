import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { GridButton } from "../common/GridButton/GridButton";
import { CustomInput } from "../common/Input/CustomInput";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { useAuthStore } from "../../store/authStore";

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // test key — replace with production key

declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, params: object) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

export default function UseEPCoupon() {
  const { t } = useTranslation();
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user } = useAuthStore();

  // Load reCAPTCHA script once
  useEffect(() => {
    const scriptId = "recaptcha-script";

    const renderWidget = () => {
      if (captchaRef.current && window.grecaptcha && widgetIdRef.current === null) {
        widgetIdRef.current = window.grecaptcha.render(captchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "dark",
        });
      }
    };

    if (window.grecaptcha) {
      renderWidget();
      return;
    }

    window.onRecaptchaLoad = renderWidget;

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    return () => {
      window.onRecaptchaLoad = undefined;
    };
  }, []);

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!code.trim()) {
      setError(t("coupon.validation.codeRequired"));
      return;
    }

    const captchaToken = window.grecaptcha?.getResponse(widgetIdRef.current ?? undefined);
    if (!captchaToken) {
      setError(t("coupon.validation.captchaRequired"));
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/coupon/use", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          code: code.trim(),
          captchaToken,
          userName: user?.userName,
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        setError(err?.message ?? t("coupon.errorGeneric"));
      } else {
        setSuccess(t("coupon.successMessage"));
        setCode("");
        window.grecaptcha?.reset(widgetIdRef.current ?? undefined);
      }
    } catch {
      setError(t("coupon.errorGeneric"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <h1 className="text-[2rem] font-medium text-center">
        {t("panel.useEPCoupon")}
      </h1>
      <hr className="my-[20px]" />

    

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded">
          <LoadingSpinner text={t("list.loading")} size="md" />
        </div>
      )}

      {error && (
        <div className="mb-4 px-3 py-2 text-sm text-red-400 bg-red-950/40 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 px-3 py-2 text-sm text-green-400 bg-green-950/40 rounded">
          {success}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <CustomInput
          type="text"
          placeholder={t("coupon.codePlaceholder")}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        {/* <div ref={captchaRef} /> */}

        <GridButton
          text={t("coupon.submitButton")}
          type="button"
          onClick={handleSubmit}
          className="w-full"
        />
      </div>
    </div>
  );
}
