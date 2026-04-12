import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface MembershipAgreementModalProps {
  onClose: () => void;
}

export function MembershipAgreementModal({ onClose }: MembershipAgreementModalProps) {
  const { t } = useTranslation();
  const paragraphs = t("register.agreementParagraphs", { returnObjects: true }) as string[];

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-8 mx-4 rounded-lg border border-[#4b0000] bg-[var(--bg-input)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-[#4b0000] bg-[var(--bg-input)] rounded-t-lg">
          <h2
            className="text-lg font-bold tracking-wide"
            style={{ color: "rgb(222, 105, 74)" }}
          >
            {t("register.agreementTitle")}
          </h2>
          <button
            onClick={onClose}
            className="text-yellow-400 hover:text-white transition-colors text-2xl leading-none cursor-pointer bg-transparent border-0 p-0"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4 text-sm leading-relaxed text-yellow-400">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={i === 0 ? "font-bold text-base" : ""}
              style={i === 0 ? { color: "rgb(222, 105, 74)" } : undefined}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex justify-end px-6 py-4 border-t border-[#4b0000] bg-[var(--bg-input)] rounded-b-lg">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-bold uppercase tracking-widest border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors rounded cursor-pointer bg-transparent"
          >
            {t("register.agreementClose")}
          </button>
        </div>
      </div>
    </div>
  );
}
