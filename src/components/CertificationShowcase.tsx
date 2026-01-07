"use client";

import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Use public assets (served from /assets/*)
const factoryQuality = "/assets/factory-quality.jpg";
const factoryProduction = "/assets/factory-production.jpg";
const factoryRd = "/assets/factory-rd.jpg";
const factoryWarehouse = "/assets/factory-warehouse.jpg";
const factoryInterior = "/assets/factory-interior.jpg";
const rdTeam = "/assets/rd-team.jpg";

interface Certificate {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: "iso-9001",
    src: factoryQuality,
    alt: "ISO 9001:2015 Quality Management Certificate",
    title: "ISO 9001:2015",
    description: "Quality Management System Certification"
  },
  {
    id: "iso-14001",
    src: factoryProduction,
    alt: "ISO 14001:2015 Environmental Management Certificate",
    title: "ISO 14001:2015",
    description: "Environmental Management System Certification"
  },
  {
    id: "ce-marking",
    src: factoryRd,
    alt: "CE Marking Compliance Certificate",
    title: "CE Marking",
    description: "European Conformity Compliance Certificate"
  },
  {
    id: "rohs",
    src: factoryWarehouse,
    alt: "RoHS Compliance Certificate",
    title: "RoHS Compliant",
    description: "Restriction of Hazardous Substances Directive"
  },
  {
    id: "iec",
    src: factoryInterior,
    alt: "IEC 62124 Solar Photovoltaic Certificate",
    title: "IEC 62124",
    description: "Solar Photovoltaic System Design Qualification"
  },
  {
    id: "ul",
    src: rdTeam,
    alt: "UL Certification for Electrical Safety",
    title: "UL Listed",
    description: "Electrical Safety Standards Compliance"
  }
];

export const CertificationShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? certificates.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === certificates.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const selectedCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  return (
    <>
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
              Quality Assurance & Compliance
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our products meet international standards for quality, safety, and environmental compliance.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="w-full aspect-square relative">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{cert.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{cert.description}</p>
                </div>

                {/* Always visible badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-foreground">{cert.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a distributor, EPC contractor, or project buyer, we'd like to understand your requirements.
            </p>
            <Link href="/#contact">
              <Button size="lg">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors bg-black/40 rounded-full p-2"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors bg-black/40 rounded-full p-2"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            {selectedCert && (
              <div className="flex flex-col relative w-full h-[70vh]">
                <Image
                  src={selectedCert.src}
                  alt={selectedCert.alt}
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 768px) 90vw, 800px"
                />
                <div className="absolute bottom-0 w-full p-6 text-center bg-black/40">
                  <h3 className="text-white text-2xl font-bold">{selectedCert.title}</h3>
                  <p className="text-white/70 mt-2">{selectedCert.description}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
