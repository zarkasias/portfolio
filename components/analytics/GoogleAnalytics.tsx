'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { getConsentStatus, updateGoogleConsent, hasGivenConsent, clearConsentCookie } from '@/lib/consent';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    
    // Check for existing consent
    const consentStatus = getConsentStatus();
    
    if (consentStatus && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      updateGoogleConsent(consentStatus);
    }
    
    // Add utility functions to window object (for development use)
    if (typeof window !== 'undefined') {
      // Function to check consent status
      window.checkConsentStatus = () => {
        return hasGivenConsent();
      };
      
      // Function to clear consent
      window.clearConsent = () => {
        clearConsentCookie();
        window.location.reload();
      };
      
      // More powerful function to clear all site data
      window.resetAllSiteData = () => {
        // First clear all cookies
        clearConsentCookie();
        
        // Create a visually appealing message for the user
        const messageDiv = document.createElement('div');
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '0';
        messageDiv.style.left = '0';
        messageDiv.style.width = '100%';
        messageDiv.style.padding = '20px';
        messageDiv.style.backgroundColor = '#4a5568';
        messageDiv.style.color = 'white';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.zIndex = '9999';
        messageDiv.style.fontFamily = 'system-ui, sans-serif';
        messageDiv.innerHTML = 'Clearing all site data and reloading...';
        
        document.body.appendChild(messageDiv);
        
        // Use the Cache API to clear caches
        if ('caches' in window) {
          caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => caches.delete(key)));
          });
        }
        
        // Use localStorage and sessionStorage clearing
        try {
          localStorage.clear();
          sessionStorage.clear();
        } catch (e) {
          console.error('Error clearing storage:', e);
        }
        
        // If browser supports Clear-Site-Data header simulation
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = '/api/clear-site-data';
        document.body.appendChild(iframe);
        
        // Wait a bit then hard reload the page
        setTimeout(() => {
          window.location.href = window.location.href.split('#')[0] + 
            '?cache=' + Date.now();
        }, 1000);
      };
    }
  }, [GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is not defined');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Set default consent to denied
          gtag('consent', 'default', {
            // Behavioral analytics consent
            'analytics_storage': 'denied',
            
            // Advertising consent signals
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            
            // Other storage settings
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            
            'wait_for_update': 500
          });
          
          // Configure GA with consent mode
          gtag('config', '${GA_MEASUREMENT_ID}', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
} 