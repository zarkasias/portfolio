import { parseCookies, setCookie, destroyCookie } from 'nookies';

export type ConsentStatus = {
  analytics: boolean;
  preferences: boolean;
};

const CONSENT_COOKIE_NAME = 'cookie_consent';

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

// Function to clear consent cookie for testing purposes
export function clearConsentCookie(): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Use nookies to properly destroy the cookie
    destroyCookie(null, CONSENT_COOKIE_NAME);
    
    // Also try the direct cookie setting approach with various paths and domains
    const domain = window.location.hostname;
    const possiblePaths = ['/', '/app', ''];
    const possibleDomains = [
      domain,
      `.${domain}`,
      domain.split('.').slice(1).join('.'),
      `.${domain.split('.').slice(1).join('.')}`,
      ''
    ];
    
    // Try all combinations of paths and domains to ensure cookie is cleared
    possiblePaths.forEach(path => {
      possibleDomains.forEach(cookieDomain => {
        // Standard expiration approach
        document.cookie = `${CONSENT_COOKIE_NAME}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT${cookieDomain ? `; domain=${cookieDomain}` : ''}`;
        
        // Max-age approach for some browsers
        document.cookie = `${CONSENT_COOKIE_NAME}=; path=${path}; max-age=0${cookieDomain ? `; domain=${cookieDomain}` : ''}`;
      });
    });
    
    // Clear Google Analytics cookies as well
    const gaCookies = ['_ga', '_gid', '_gat', '_ga_.*'];
    gaCookies.forEach(cookie => {
      const cookieName = cookie.includes('*') 
        ? Object.keys(parseCookies()).find(name => new RegExp(cookie).test(name))
        : cookie;
      
      if (cookieName) {
        destroyCookie(null, cookieName);
        document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
    });
  } catch (error) {
    console.error('Error clearing cookies:', error);
  }
} 