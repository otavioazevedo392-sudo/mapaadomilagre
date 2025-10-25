import { useEffect, useState } from "react";

export function useBackRedirect() {
  const [showBackOffer, setShowBackOffer] = useState(false);
  const [hasShownOffer, setHasShownOffer] = useState(false);

  useEffect(() => {
    if (hasShownOffer) return;

    const handlePopState = () => {
      if (!hasShownOffer) {
        setShowBackOffer(true);
        setHasShownOffer(true);
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [hasShownOffer]);

  const closeBackOffer = () => {
    setShowBackOffer(false);
  };

  return {
    showBackOffer,
    closeBackOffer,
  };
}
