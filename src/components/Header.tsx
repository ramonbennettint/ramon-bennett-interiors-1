"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useStudio } from "@/context/StudioContext";

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useStudio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { href: "/studio", label: { en: "STUDIO", pt: "SOBRE" } },
    { href: "/founder", label: { en: "RAMON BENNETT", pt: "RAMON BENNETT" } },
    { href: "/services", label: { en: "EXPERTISE", pt: "SERVIÇOS" } },
  ];

  const rightNavItems = [
    { href: "/projects", label: { en: "PORTFOLIO", pt: "PORTFÓLIO" } },
    { href: "/journal", label: { en: "JOURNAL", pt: "BLOG" } },
    { href: "/contact", label: { en: "ENQUIRE", pt: "CONTATO" } },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-architectural border-b border-espresso/10 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        {/* FIRST LINE: Studio Name Only (Centered, No Logo, No Clocks, No London/Salvador) */}
        <div className="w-full border-b border-espresso/10 bg-white py-2.5 px-5 md:px-10">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="w-16 hidden sm:block" aria-hidden="true" />
            <Link
              href="/"
              className="mx-auto text-center font-serif text-xs sm:text-sm md:text-[15px] tracking-[0.32em] uppercase text-espresso font-normal hover:text-bronze transition-colors"
            >
              RAMON BENNETT INTERIORS
            </Link>
            <div className="w-16 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "pt" : "en")}
                aria-label="Toggle Language between English and Portuguese"
                className="text-[10px] font-sans uppercase tracking-[0.18em] text-umber hover:text-espresso transition-colors"
              >
                <span className={locale === "en" ? "text-espresso font-semibold underline underline-offset-4" : "opacity-60"}>
                  EN
                </span>
                <span className="mx-1 opacity-40">/</span>
                <span className={locale === "pt" ? "text-espresso font-semibold underline underline-offset-4" : "opacity-60"}>
                  PT
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* SECOND LINE: Centered Logo Navigation Bar (Sophie Paterson Layout) */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-3.5 md:py-4">
          {/* Desktop Navigation: Left 3 Links | Centered Logo | Right 3 Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:grid lg:grid-cols-12 items-center"
          >
            {/* Left Menu: STUDIO / RAMON BENNETT / EXPERTISE */}
            <div className="col-span-5 flex items-center justify-end gap-8 xl:gap-12 pr-6 xl:pr-10">
              {leftNavItems.map((item) => {
                const isActive =
                  item.href === "/studio" && pathname === "/"
                    ? false
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative py-1.5 text-[11.5px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                      isActive
                        ? "text-espresso font-medium bg-[#F4F2EE] px-2.5"
                        : "text-umber hover:text-espresso"
                    }`}
                  >
                    {item.label[locale]}
                  </Link>
                );
              })}
            </div>

            {/* Centered Logo Emblem */}
            <div className="col-span-2 flex items-center justify-center">
              <Link
                href="/"
                aria-label="Ramon Bennett Interiors Home"
                className="group relative flex items-center justify-center"
              >
                <div className="relative w-14 h-11 md:w-16 md:h-12 overflow-hidden">
                  <Image
                    src="/images/logo_seahorse.png"
                    alt="Ramon Bennett Interiors Logo"
                    fill
                    sizes="64px"
                    className="object-contain object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Right Menu: PORTFOLIO / JOURNAL / ENQUIRE */}
            <div className="col-span-5 flex items-center justify-start gap-8 xl:gap-12 pl-6 xl:pl-10">
              {rightNavItems.map((item) => {
                const isActive = pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative py-1.5 text-[11.5px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                      isActive
                        ? "text-espresso font-medium bg-[#F4F2EE] px-2.5"
                        : "text-umber hover:text-espresso"
                    }`}
                  >
                    {item.label[locale]}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile & Tablet Bar: Centered Logo + Hamburger Menu Trigger */}
          <div className="flex lg:hidden items-center justify-between">
            <div className="w-10" aria-hidden="true" />
            <Link href="/" className="relative w-12 h-10 overflow-hidden">
              <Image
                src="/images/logo_seahorse.png"
                alt="Ramon Bennett Interiors Logo"
                fill
                sizes="48px"
                className="object-contain object-center"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 text-espresso hover:text-bronze transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Navigation Drawer (Clean White Sophie Paterson Aesthetic) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white text-espresso pt-32 pb-20 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col items-center space-y-6 text-center pt-4">
              {allNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl sm:text-3xl tracking-[0.18em] uppercase text-espresso hover:text-bronze transition-colors py-2 border-b border-espresso/10 w-full max-w-xs"
                >
                  {item.label[locale]}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-espresso/10 text-center space-y-4">
              <p className="font-serif text-xs uppercase tracking-[0.28em] text-umber">
                RAMON BENNETT INTERIORS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
