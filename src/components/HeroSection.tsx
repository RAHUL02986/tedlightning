"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import heroBackground from "../../public/assets/hero-banner-1.png";
import heroSolar from "../../public/assets/hero-solar-installation.jpg";
import heroBanner2 from "../../public/assets/hero-banner-2.jpg";
import heroBanner3 from "../../public/assets/hero-banner-3.jpg";

interface Slide {
  image: StaticImageData;
  titleTopKey: string;
  titleMainKey: string;
  ctaKey: string;
  href: string;
}

const slidesData: Slide[] = [
  {
    image: heroBackground,
    titleTopKey: "hero.introducing",
    titleMainKey: "hero.solarPro",
    ctaKey: "hero.exploreNow",
    href: "/products",
  },
  {
    image: heroSolar,
    titleTopKey: "hero.precisionMeets",
    titleMainKey: "hero.performance",
    ctaKey: "hero.discoverMore",
    href: "/products",
  },
  {
    image: heroBanner2,
    titleTopKey: "hero.urbanLighting",
    titleMainKey: "hero.solutions",
    ctaKey: "hero.viewProjects",
    href: "/projects",
  },
  {
    image: heroBanner3,
    titleTopKey: "hero.quality",
    titleMainKey: "hero.manufacturing",
    ctaKey: "hero.aboutUs",
    href: "/about",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* Full-height carousel */}
      <div className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/50" />
          </div>
        ))}

        {/* Content */}
        <div className="container-main relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="heading-xl text-background mb-8">
              <span className="block text-background/80 text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-4">
                {t(slidesData[current].titleTopKey)}
              </span>
              {t(slidesData[current].titleMainKey)}
            </h1>

            <Link
              href={slidesData[current].href}
              className="link-explore text-background group inline-flex items-center gap-2"
            >
              <span>{t(slidesData[current].ctaKey)}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                current === index
                  ? "bg-background w-8"
                  : "bg-background/40 w-2 hover:bg-background/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
