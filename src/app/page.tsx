"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";
import { useStudio } from "@/context/StudioContext";
import StudioDispatches from "@/components/StudioDispatches";

export default function HomePage() {
  const { locale, openConcierge, projects, heroVideoUrl } = useStudio();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const videoSrc = heroVideoUrl || "/videos/hero_ambient_loop.mp4";
  const videoPoster = "/images/01_hero_salvador_london_penthouse.jpg";
  const latestThreeProjects = projects.slice(0, 3);

  return (
    <div className="bg-white text-espresso selection:bg-espresso selection:text-white">
      {/* 2.1. FULL-WIDTH VIDEO (Katharine Pooley Approach: Immediately below navbar, edge-to-edge, no margins or side spacing) */}
      <section className="relative w-full h-[76vh] sm:h-[84vh] lg:h-[88vh] overflow-hidden bg-obsidian">
        {!videoFailed ? (
          <video
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={videoPoster}
              alt="Ramon Bennett Interiors — London & Salvador"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center animate-micro-life"
            />
          </div>
        )}

        {/* Subtle Katharine-Pooley-style bottom gradient & optional full-film trigger */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-6 sm:px-12 py-8 flex items-end justify-between">
          <div className="text-white/90 text-[11px] uppercase tracking-[0.28em] font-sans">
            {locale === "en"
              ? "LONDON · SALVADOR"
              : "LONDRES · SALVADOR"}
          </div>
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-white text-espresso px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>
              {locale === "en" ? "Watch Studio Film" : "Assistir Filme"}
            </span>
          </button>
        </div>
      </section>

      {/* 2.2. STUDIO INTRODUCTION (Immediately after the first video) */}
      <section className="bg-white py-20 sm:py-24 lg:py-32 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-light tracking-tight leading-[1.12] text-espresso"
          >
            {locale === "en"
              ? "The Art of Understanding: Sculpted Between Two Continents"
              : "A Arte de Compreender: Esculpida Entre Dois Continentes"}
          </motion.h1>

          <div className="w-16 h-[1px] bg-bronze/60 mx-auto" />

          <p className="text-umber text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto pt-2">
            {locale === "en"
              ? "Every space tells a story. Ours begins by listening. Uniting London spatial psychology with thirty years of master bespoke joinery in Salvador, we craft timeless interiors defined by emotional resonance and architectural precision."
              : "Cada espaço conta uma história. A nossa começa pela escuta. Unindo a psicologia espacial de Londres a trinta anos de alta marcenaria artesanal em Salvador, esculpimos interiores atemporais definidos por equilíbrio emocional e precisão arquitetônica."}
          </p>
        </div>
      </section>

      {/* 2.3. STUDIO STORY AND TEAM (Sophie Paterson Editorial Presentation) */}
      <section className="bg-white pb-24 lg:pb-36 px-5 md:px-10 border-b border-espresso/10">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photograph representing the studio's story and its team */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4 sm:gap-6 items-end">
                {/* Primary Portrait: Founder Ramon Bennett */}
                <div className="col-span-7 relative aspect-[3/4] overflow-hidden bg-[#F8F8F6]">
                  <Image
                    src="/images/people_ramon.png"
                    alt="Ramon Bennett — Founder & Creative Director"
                    fill
                    sizes="(max-width: 1024px) 60vw, 35vw"
                    className="object-cover object-top transition-transform duration-1000 ease-editorial hover:scale-105"
                  />
                </div>

                {/* Archival Joinery & Team Heritage Stack (Márcia Ribeiro & Mariana Figueiredo) */}
                <div className="col-span-5 space-y-4 sm:space-y-6">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F8F6]">
                    <Image
                      src="/images/studio_craftsmanship_1.jpg"
                      alt="Márcia Ribeiro — 30 Years of Master Bespoke Joinery"
                      fill
                      sizes="(max-width: 1024px) 40vw, 25vw"
                      className="object-cover object-center transition-transform duration-1000 ease-editorial hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 bg-[#F8F8F6] border border-espresso/10 space-y-1.5">
                    <p className="font-serif text-base sm:text-lg text-espresso font-normal">
                      {locale === "en"
                        ? "A Three-Decade Family Lineage"
                        : "Três Décadas de Tradição Familiar"}
                    </p>
                    <p className="text-xs text-umber font-light leading-relaxed">
                      {locale === "en"
                        ? "Ramon Bennett alongside master joiner Márcia Ribeiro and operations director Mariana Figueiredo."
                        : "Ramon Bennett ao lado da mestre em marcenaria Márcia Ribeiro e da diretora de operações Mariana Figueiredo."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Narrative Column (Sophie Paterson style) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-bronze block">
                {locale === "en" ? "THE STUDIO & TEAM" : "O ESTÚDIO & EQUIPE"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-espresso leading-[1.14]">
                {locale === "en"
                  ? "An International Perspective. A Family Tradition. A Deeply Personal Approach."
                  : "Uma Perspectiva Internacional. Uma Tradição Familiar. Uma Abordagem Profundamente Pessoal."}
              </h2>

              <div className="space-y-4 text-umber text-sm sm:text-base leading-relaxed font-light">
                <p>
                  {locale === "en"
                    ? "Founded by Ramon Bennett after seventeen years in London across Human Sciences, Law, and Psychotherapy, our studio bridges European architectural restraint with the warmth of Brazilian craftsmanship."
                    : "Fundado por Ramon Bennett após dezessete anos em Londres dedicados às Ciências Humanas, Direito e Psicoterapia, nosso estúdio une o rigor arquitetônico europeu ao calor da marcenaria artesanal brasileira."}
                </p>
                <p>
                  {locale === "en"
                    ? "Together with his aunt Márcia Ribeiro—who brings over thirty years of master bespoke joinery in Salvador—and his sister Mariana Figueiredo, who governs legal and operational delivery, the team executes every commission from initial spatial psychology diagnosis to bespoke fabrication."
                    : "Ao lado de sua tia Márcia Ribeiro — com mais de trinta anos de maestria em marcenaria sob medida em Salvador — e de sua irmã Mariana Figueiredo, que lidera a governança jurídica e executiva, a equipe conduz cada obra do diagnóstico inicial à fabricação própria."}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2.5 border border-espresso px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-espresso hover:bg-espresso hover:text-white transition-colors duration-300"
                >
                  <span>
                    {locale === "en" ? "Discover Our Story" : "Conheça Nossa História"}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/founder"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-umber hover:text-espresso border-b border-umber/40 pb-1 transition-colors"
                >
                  <span>{locale === "en" ? "Meet Ramon Bennett" : "Ramon Bennett"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.4. LATEST PROJECTS (Sophie Paterson Layout: Title "Latest Projects" + 3 clickable projects with their own images) */}
      <section className="bg-white py-24 lg:py-32 px-5 md:px-10">
        <div className="max-w-[1440px] mx-auto space-y-14">
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.14em] uppercase text-espresso">
              {locale === "en" ? "Latest Projects" : "Projetos Recentes"}
            </h2>
            <div className="w-12 h-[1px] bg-bronze/60 mx-auto" />
          </div>

          {/* 3 Selected Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {latestThreeProjects.map((project, index) => {
              const projectImages = [
                "/images/03_after_alphaville_transformed.jpg",
                "/images/08_after_kensington_london_sanctuary.jpg",
                "/images/05_rua_do_palacio_hospitality_lounge.jpg",
              ];
              const displayImage = projectImages[index] || project.afterImage;

              return (
                <article key={project.slug} className="group text-center space-y-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block relative aspect-[4/5] w-full overflow-hidden bg-[#F8F8F6]"
                  >
                    <Image
                      src={displayImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                  </Link>

                  <div className="space-y-1.5 px-2">
                    <p className="text-[10.5px] uppercase tracking-[0.24em] text-umber">
                      {project.location}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-block"
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-espresso group-hover:text-bronze transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <div className="pt-1">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-espresso border-b border-espresso/30 pb-0.5 group-hover:border-bronze group-hover:text-bronze transition-colors"
                      >
                        <span>
                          {locale === "en" ? "Explore Project" : "Ver Projeto"}
                        </span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.5. INSTAGRAM SECTION (Sophie Paterson Layout: INSTAGRAM on left-hand side, 8 images on right-hand side) */}
      <StudioDispatches />

      {/* 2.6. FINAL CALL-TO-ACTION SECTION (1508 Interiors Approach: Full-width image + "Every Space Has A Story. Let's Discover Yours" + "Begin Your Story") */}
      <section className="relative w-full h-[65vh] min-h-[480px] overflow-hidden bg-obsidian flex items-center justify-center">
        <Image
          src="/images/home_golden_living_room.png"
          alt="Every Space Has A Story. Let's Discover Yours — Ramon Bennett Interiors"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12]">
            {locale === "en"
              ? "Every Space Has A Story. Let's Discover Yours"
              : "Cada Espaço Tem Uma História. Vamos Descobrir a Sua"}
          </h2>

          <div>
            <button
              type="button"
              onClick={() => openConcierge()}
              className="inline-flex items-center gap-3 bg-white text-espresso hover:bg-bronze hover:text-white px-9 py-4 text-xs uppercase tracking-[0.26em] font-medium transition-colors duration-300"
            >
              <span>
                {locale === "en" ? "Begin Your Story" : "Comece Sua História"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FULLSCREEN STUDIO FILM MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-obsidian text-white border border-white/20 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 block">
                  RAMON BENNETT INTERIORS
                </span>
                <p className="font-serif text-2xl text-white font-light">
                  {locale === "en"
                    ? "The Art of Understanding: Sculpted Between Two Continents"
                    : "A Arte de Compreender: Esculpida Entre Dois Continentes"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-2 border border-white/25 hover:border-white text-white transition-colors"
                aria-label="Close Cinema"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black overflow-hidden">
              <video
                src={videoSrc}
                poster={videoPoster}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
