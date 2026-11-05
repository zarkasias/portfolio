'use client';

import { useState, useEffect } from 'react';
import { hasGivenConsent, setConsentStatus } from '@/lib/consent';
import type { ConsentStatus } from '@/lib/consent';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consents, setConsents] = useState<ConsentStatus>({
    analytics: false,
    preferences: false
  });

  useEffect(() => {
    // Force immediate check when component mounts
    // This is simpler and more reliable
    const hasConsent = hasGivenConsent();
    setShowBanner(!hasConsent);
    
    // Add a fallback check that runs after a delay
    // in case client-side hydration isn't complete yet
    setTimeout(() => {
      setShowBanner(!hasGivenConsent());
    }, 500);
  }, []);
  
  const acceptAll = () => {
    const consentStatus: ConsentStatus = {
      analytics: true,
      preferences: true
    };
    
    setConsentStatus(consentStatus);
    setShowBanner(false);
  };
  
  const acceptNecessary = () => {
    const consentStatus: ConsentStatus = {
      analytics: false,
      preferences: false
    };
    
    setConsentStatus(consentStatus);
    setShowBanner(false);
  };
  
  const savePreferences = () => {
    setConsentStatus(consents);
    setShowBanner(false);
  };
  
  const toggleCustomize = () => {
    setShowCustomize(!showCustomize);
  };
  
  const handleConsentChange = (key: keyof ConsentStatus) => {
    setConsents(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-sm text-gray-300">
            <p>Analytics cookies stay off unless you accept them.</p>
            <p className="mt-1">
              Without cookies, Google Analytics may still receive limited visit data.{' '}
              <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={toggleCustomize}
              className="px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded hover:bg-gray-800 transition"
            >
              {showCustomize ? 'Hide Options' : 'Customize'}
            </button>
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded hover:bg-gray-800 transition"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            >
              Accept All
            </button>
          </div>
        </div>
        
        {showCustomize && (
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-gray-200 font-medium mb-3">Customize Cookie Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="analytics-consent"
                  checked={consents.analytics}
                  onChange={() => handleConsentChange('analytics')}
                  className="rounded text-blue-600 focus:ring-blue-600"
                />
                <label htmlFor="analytics-consent" className="text-sm text-gray-300">
                  Analytics cookies show me how visitors use this site
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="preferences-consent"
                  checked={consents.preferences}
                  onChange={() => handleConsentChange('preferences')}
                  className="rounded text-blue-600 focus:ring-blue-600"
                />
                <label htmlFor="preferences-consent" className="text-sm text-gray-300">
                  Preference cookies remember choices you make on this site
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={savePreferences}
                  className="px-4 py-2 text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 