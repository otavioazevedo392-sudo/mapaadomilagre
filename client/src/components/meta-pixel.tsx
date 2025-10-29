import { useEffect } from 'react';

const PIXEL_ID = '873008855203511';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function MetaPixel() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Meta Pixel
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  return null;
}

// Utility functions for tracking events
export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
};

export const trackViewContent = (contentName?: string, value?: number) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    value: value,
    currency: 'BRL'
  });
};

export const trackAddToCart = (contentName: string, value: number) => {
  trackEvent('AddToCart', {
    content_name: contentName,
    value: value,
    currency: 'BRL'
  });
};

export const trackInitiateCheckout = (value: number) => {
  trackEvent('InitiateCheckout', {
    value: value,
    currency: 'BRL'
  });
};

export const trackPurchase = (value: number, transactionId?: string) => {
  trackEvent('Purchase', {
    value: value,
    currency: 'BRL',
    transaction_id: transactionId
  });
};

export const trackLead = (contentName?: string) => {
  trackEvent('Lead', {
    content_name: contentName
  });
};

export const trackCompleteRegistration = () => {
  trackEvent('CompleteRegistration');
};
