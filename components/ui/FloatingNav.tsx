"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { contactPhone } from "@/data";

export const FloatingNav = ({
  navItems,
}: {
  navItems: { name: string; link: string; isCta?: boolean }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[5000] border-b border-border bg-background/95 backdrop-blur">
      <div className="page-width">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/#home"
            onClick={() => setIsMenuOpen(false)}
            className="min-w-0 whitespace-nowrap font-heading text-xl font-semibold text-foreground"
          >
            Chambers Consulting
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {contactPhone && (
              <a
                href={contactPhone.href}
                className="inline-flex items-center gap-2 whitespace-nowrap font-medium text-foreground underline-offset-4 hover:underline"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {contactPhone.display}
              </a>
            )}
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={
                  item.isCta
                    ? "btn-cta !min-h-10 !px-4 !py-2"
                    : "whitespace-nowrap font-medium text-foreground underline-offset-4 hover:underline"
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 lg:hidden">
            {contactPhone && (
              <a
                href={contactPhone.href}
                className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-secondary"
              >
                <Phone aria-hidden="true" className="h-6 w-6" />
                <span className="sr-only">Call {contactPhone.display}</span>
              </a>
            )}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav aria-label="Mobile" className="space-y-1 pb-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={
                  item.isCta
                    ? "btn-cta mt-2 w-full"
                    : "block rounded-lg py-2.5 text-lg font-medium text-foreground"
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
