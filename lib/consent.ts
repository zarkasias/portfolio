import { parseCookies, setCookie } from 'nookies';

export type ConsentStatus = {
  analytics: boolean;
  preferences: boolean;
};

const CONSENT_COOKIE_NAME = 'cookie_consent';

export const OPEN_COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

export function getConsentStatus(): ConsentStatus | null {
  if (typeof window === 'undefined') return null;
  
  const cookies = parseCookies();
  const consentCookie = cookies[CONSENT_COOKIE_NAME];
  
  if (!consentCookie) return null;
  
  try {
    return JSON.parse(consentCookie) as ConsentStatus;
  } catch (error) {
    console.error('Error parsing consent cookie:', error);
    return null;
  }
}

export function setConsentStatus(status: ConsentStatus): void {
  setCookie(null, CONSENT_COOKIE_NAME, JSON.stringify(status), {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: '/',
    sameSite: 'strict'
  });
  
  updateGoogleConsent(status);

  if (!status.analytics) clearAnalyticsCookies();
}

export function updateGoogleConsent(status: ConsentStatus): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      // Behavioral analytics consent signal
      'analytics_storage': status.analytics ? 'granted' : 'denied',
      
      // Advertising is not used, so these stay denied even for older cookies
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      
      // Other storage settings
      'functionality_storage': status.preferences ? 'granted' : 'denied',
      'personalization_storage': status.preferences ? 'granted' : 'denied',
      'security_storage': 'granted' // Always granted as it's essential
    });
  }
}

export function hasGivenConsent(): boolean {
  // Server-side or during SSR, assume no consent
  if (typeof window === 'undefined') return false;
  
  // Direct access to document.cookie for more reliable detection
  return document.cookie.indexOf(CONSENT_COOKIE_NAME + '=') !== -1;
}

// Google Analytics sets its cookies on the parent domain, so expire them on
// each level of the current hostname.
function clearAnalyticsCookies(): void {
  const parts = window.location.hostname.split('.');
  const domains = [''];
  for (let i = 0; i < parts.length - 1; i++) {
    const domain = parts.slice(i).join('.');
    domains.push(`; domain=${domain}`, `; domain=.${domain}`);
  }

  Object.keys(parseCookies())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; path=/; max-age=0${domain}`;
      });
    });
}
