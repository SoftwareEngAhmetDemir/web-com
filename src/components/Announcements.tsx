import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { loadFacebookSDK, parseFacebookXFBML } from "../lib/facebookSDK";

export default function Announcements() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadFacebookSDK("tr_TR").then(() => {
      parseFacebookXFBML(containerRef.current);
    });
  }, []);

  return (
    <div className="announcements text-center">
      <div className="flex justify-center items-center w-full" ref={containerRef}>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/capo2wslik"
          data-tabs="timeline"
          data-width="500"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        />
      </div>
      <h1 className="text-[2rem] font-medium my-5">{t("announcements.title")}</h1>
      <hr className="my-[20px]" />
      <h3>{t("announcements.noAnnouncements")}</h3>
    </div>
  );
}
