let initialized = false;
let initPromise: Promise<void> | null = null;

export function loadFacebookSDK(locale = "tr_TR"): Promise<void> {
  if (initialized) return Promise.resolve();
  if (initPromise) return initPromise;

  initPromise = new Promise((resolve) => {
    // fb-root must exist before the SDK initializes
    if (!document.getElementById("fb-root")) {
      const root = document.createElement("div");
      root.id = "fb-root";
      document.body.prepend(root);
    }

    (window as unknown as Record<string, unknown>)["fbAsyncInit"] = function () {
      (window as any).FB.init({ xfbml: true, version: "v20.0" });
      initialized = true;
      resolve();
    };

    // Script may have been injected already (e.g. hot reload)
    if (document.getElementById("facebook-jssdk")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.async = true;
    script.defer = true;
    script.src = `https://connect.facebook.net/${locale}/sdk.js`;
    document.body.appendChild(script);
  });

  return initPromise;
}

export function parseFacebookXFBML(el?: HTMLElement | null) {
  const FB = (window as any).FB;
  if (FB?.XFBML?.parse) {
    FB.XFBML.parse(el ?? undefined);
  }
}
