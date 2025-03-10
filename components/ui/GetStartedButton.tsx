import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export const GetStartedButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const buttonClass = isMobile 
    ? "w-full text-left px-4 py-2 hover:bg-neutral-800" 
    : "px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 text-white hover:opacity-90 transition-all relative";

  const dropdownClass = isMobile
    ? "pl-8 space-y-2"
    : "absolute top-full right-0 mt-1 w-47 bg-neutral-900 border-2 border-neutral-600 rounded-lg shadow-lg overflow-hidden z-50";

  const linkClass = isMobile
    ? "block px-4 py-2 hover:bg-neutral-700 text-gray-300"
    : "block px-4 py-2 hover:bg-neutral-700 text-white";

  return (
    <div className="relative" ref={buttonRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
      >
        <div className="flex items-center gap-2">
          <img src="/icons/rocket.png" alt="Launch" className="w-6 h-6" />
          <span className="text-sm">Get Started</span>
          {!isMobile && (
            <span className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
              ▶
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <div className={dropdownClass}>
          <Link 
            href="/start-project" 
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </Link>
          <Link 
            href="/audit" 
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Get a Free Audit
          </Link>
        </div>
      )}
    </div>
  );
}; 