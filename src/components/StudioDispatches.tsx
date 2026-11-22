"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import { STUDIO_CONFIG } from "@/data/studioData";

const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    image: "/images/03_after_alphaville_transformed.jpg",
    alt: "Alphaville I Flagship Living Pavilion — Fluted Freijó Joinery & Travertine",
  },
  {
    id: "ig-2",
    image: "/images/08_after_kensington_london_sanctuary.jpg",
    alt: "Kensington SW7 London Townhouse — Restorative Herringbone Oak & Linen",
  },
  {
    id: "ig-3",
    image: "/images/05_rua_do_palacio_hospitality_lounge.jpg",
    alt: "Rua do Palácio Historic Salvador — Heritage Stone Arches & Hospitality Lounge",
  },
  {
    id: "ig-4",
    image: "/images/residential_alphaville_1.png",
    alt: "Alphaville II Collector's Salon — Custom Boiserie & Classical Plinths",
  },
  {
    id: "ig-5",
    image: "/images/residential_alphaville_2.png",
    alt: "Alphaville I Conversation Salon — Curved Terracotta Velvet Daybed",
  },
  {
    id: "ig-6",
    image: "/images/12_salvador_atelier_woodworking.jpg",
    alt: "Salvador Bespoke Joinery Atelier — Hand-Fitted Brass & Solid Freijó Hardwood",
  },
  {
    id: "ig-7",
    image: "/images/10_neurodesign_master_suite_2400k.jpg",
    alt: "Circadian Master Suite Sanctuary — 2400K Warm Architectural Lighting",
  },
  {
    id: "ig-8",
    image: "/images/home_courtyard_pool.jpg",
    alt: "Biophilic Courtyard Architecture — Hand-Laid Regional Stone & Still Water",
  },
];

export default function StudioDispatches() {
  const { locale } = useStudio();

  return (
    <section
      id="instagram"
      className="py-20 lg:py-28 bg-white text-espresso border-t border-espresso/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Sophie Paterson Layout: Word INSTAGRAM on the left-hand side, 8 images on the right-hand side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: INSTAGRAM */}
          <div className="lg:col-span-3 flex flex-col items-start justify-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.22em] uppercase text-espresso font-light">
              INSTAGRAM
            </h2>
            <a
              href={STUDIO_CONFIG.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-umber hover:text-espresso transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-bronze" />
              <span>@ramonbennettinteriors</span>
            </a>
            <div className="pt-2">
              <a
                href={STUDIO_CONFIG.instagramStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-espresso/40 pb-1 text-[11px] uppercase tracking-[0.24em] text-espresso hover:text-bronze hover:border-bronze transition-colors"
              >
                <span>{locale === "en" ? "Follow Our Studio" : "Seguir o Estúdio"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 8 Images from the Studio's Professional Instagram Account (4x2 Grid) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {INSTAGRAM_POSTS.map((post) => (
                <a
                  key={post.id}
                  href={STUDIO_CONFIG.instagramStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square w-full overflow-hidden bg-[#F8F8F6] block"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/25 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
