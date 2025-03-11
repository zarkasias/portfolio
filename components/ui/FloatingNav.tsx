"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { GetStartedButton } from "./GetStartedButton";

export const FloatingNav = ({
  navItems,
  className,
  alwaysVisible = false,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  alwaysVisible?: boolean;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (alwaysVisible) return;
    
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const isVisible = alwaysVisible ? true : visible;

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-0 inset-x-0 border-b border-gray-700 bg-gray-900 z-[5000]",
          className
        )}
      >
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/cclogo-new.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <p className="ml-4 text-lg font-medium text-gray-100">Chambers Consulting</p>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  {navItem.name}
                </Link>
              ))}
              <GetStartedButton />
            </nav>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navItem.name}
                  </Link>
                ))}
                <GetStartedButton isMobile={true} />
              </div>
            </div>
          )}
        </div>
      </motion.header>
    </AnimatePresence>
  );
};
