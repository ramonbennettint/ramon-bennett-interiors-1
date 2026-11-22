"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

export default function Footer() {
  const { locale } = useStudio();

  return (
    <footer className="bg-white text-espresso border-t border-espresso/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-espresso/10">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="inline-flex items-center gap-3.5">
            <div className="relative w-12 h-10">
              <Image
                src="/images/logo_seahorse.png"
                alt="Ramon Bennett Interiors"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-lg tracking-[0.22em] uppercase text-espresso">
                RAMON BENNETT INTERIORS
              </p>
            </div>
          </Link>
          <p className="text-sm text-umber font-light leading-relaxed max-w-sm">
            {locale === "en"
              ? "An international perspective, a 30-year family tradition in bespoke joinery, and a deeply personal approach to interior architecture."
              : "Uma perspectiva internacional, 30 anos de tradição familiar em alta marcenaria e uma abordagem profundamente pessoal à arquitetura de interiores."}
          </p>
          <div className="flex items-center gap-5 pt-2">
            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-espresso hover:text-bronze transition-colors"
            >
              <Instagram className="w-4 h-4 text-bronze" />
              <span>@ramonbennettinteriors</span>
            </a>
          </div>
        </div>

        {/* London & Salvador Studios */}
        {STUDIO_CONFIG.offices.map((office) => (
          <div key={office.city} className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-bronze font-medium">
              {office.city}
            </p>
            <p className="font-serif text-xl text-espresso font-light">
              {office.role[locale]}
            </p>
            <div className="space-y-2 text-sm text-umber font-light pt-1">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                <span>{office.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
                <a
                  href={`tel:${office.phone}`}
                  className="hover:text-espresso transition-colors tabular-nums"
                >
                  {office.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
                <a
                  href={`mailto:${office.email}`}
                  className="hover:text-espresso transition-colors"
                >
                  {office.email}
                </a>
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Directory matching requested Menu Labels */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-bronze font-medium">
            {locale === "en" ? "NAVIGATION" : "NAVEGAÇÃO"}
          </p>
          <ul className="space-y-2.5 text-xs uppercase tracking-[0.2em] text-umber">
            <li>
              <Link href="/studio" className="hover:text-espresso transition-colors">
                {locale === "en" ? "STUDIO" : "SOBRE"}
              </Link>
            </li>
            <li>
              <Link href="/founder" className="hover:text-espresso transition-colors">
                RAMON BENNETT
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-espresso transition-colors">
                {locale === "en" ? "EXPERTISE" : "SERVIÇOS"}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-espresso transition-colors">
                {locale === "en" ? "PORTFOLIO" : "PORTFÓLIO"}
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-espresso transition-colors">
                {locale === "en" ? "JOURNAL" : "BLOG"}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-espresso transition-colors">
                {locale === "en" ? "ENQUIRE" : "CONTATO"}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Colophon */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-umber/80">
        <p>© {new Date().getFullYear()} RAMON BENNETT INTERIORS. ALL RIGHTS RESERVED.</p>
        <p>LONDON · SALVADOR</p>
      </div>
    </footer>
  );
}
