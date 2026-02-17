import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    ? "w-full text-left px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground" 
    : "px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all relative";

  const dropdownClass = isMobile
    ? "pl-8 space-y-2 bg-primary border-border/50"
    : "absolute top-full right-0 mt-1 w-47 bg-primary border-2 border-border/50 rounded-lg shadow-lg overflow-hidden z-50";

  const linkClass = isMobile
    ? "block px-4 py-2 hover:bg-primary/90 text-primary-foreground"
    : "block px-4 py-2 hover:bg-neutral-700 text-primary-foreground";

  return (
    <div className="relative" ref={buttonRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
      >
        <div className="flex items-center gap-2">
          <Image 
            src="/images/icons/rocket.png" 
            alt="Launch" 
            width={24} 
            height={24} 
            className="w-6 h-6" 
          />
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