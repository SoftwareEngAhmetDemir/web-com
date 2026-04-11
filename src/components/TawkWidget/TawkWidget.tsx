import { useEffect } from "react";

function TawkWidget() {
  useEffect(() => {
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];

      s1.async = true;
      s1.src = "https://embed.tawk.to/677fe35349e2fd8dfe050870/1ih5p0020";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      (s0 as any).parentNode.insertBefore(s1, s0);
    })();

    // Optional cleanup if component unmounts
    return () => {
      const tawk = document.querySelector('script[src*="tawk.to"]');
      if (tawk) tawk.remove();
    };
  }, []);

  return null; // No visible component, script runs in background
}

export default TawkWidget;