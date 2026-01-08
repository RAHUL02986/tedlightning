import { Award, Shield, Wrench, Clock, Building2, Factory, Building, MapPin, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// Factory images

import Image from "next/image";

const features = [
  {
    icon: Award,
    title: "CB Certification",
    description: "World's first high-power integrated solar street light with CB IECEE Saber certification."
  },
  {
    icon: Shield,
    title: "ISO9001:2015",
    description: "All raw materials are 100% tested. 3-day aging inspection before shipping."
  },
  {
    icon: Wrench,
    title: "Original Design",
    description: "Global unique patent design. German Red Dot Award winner."
  },
  {
    icon: Clock,
    title: "10-15 Years Lifespan",
    description: "Real lifespan for government projects, not marketing claims."
  }
];

const factoryImages = [
  {
    src: "/assets/factory-interior.jpg",
    title: "20,000 m² Factory",
    subtitle: "Modern Production Base"
  },
  {
    src: "/assets/factory-production.jpg",
    title: "Production Line",
    subtitle: "Precision Manufacturing"
  },
  {
    src: "/assets/factory-quality.jpg",
    title: "Quality Control",
    subtitle: "100% Testing Standards"
  },
  {
    src: "/assets/factory-warehouse.jpg",
    title: "Global Logistics",
    subtitle: "Worldwide Distribution"
  },
  {
    src: "/assets/factory-rd.jpg",
    title: "R&D Center",
    subtitle: "Innovation Hub"
  },
];

const applications = [
  { icon: Building2, title: "Municipal & government infrastructure" },
  { icon: Factory, title: "Industrial parks & logistics facilities" },
  { icon: Building, title: "Commercial compounds & campuses" },
  { icon: MapPin, title: "Remote & off-grid locations" },
  { icon: Zap, title: "Hybrid solar + grid outdoor projects" },
];

const stats = [
  { number: 160, suffix: "+", label: "Countries" },
  { number: 50000, suffix: "+", label: "Projects" },
  { number: 15, suffix: "+", label: "Years" },
  { number: 120, suffix: "+", label: "Team Members" },
];

export function CompanySection() {
  return (
    <section id="company" className="section-padding bg-muted/30">
      <div className="container-main">
        {/* About Header */}
        <div className="text-center mb-12">
          <span className="section-label">About TedLighting</span>
          <h2 className="heading-md mb-4">
            <span className="text-primary">Manufacturer</span> Focus, Not a Trading Story
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            TedLighting is a professional solar-powered street light manufacturer with
            high quality and ten years of experience. We control the entire production
            process—from component sourcing to final assembly.
          </p>
        </div>

        {/* Factory Gallery - Bento Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Large featured image */}
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl">
            <Image
              src={factoryImages[0].src}
              alt={factoryImages[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-medium text-background mb-1">{factoryImages[0].title}</h3>
              <p className="text-background/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{factoryImages[0].subtitle}</p>
            </div>
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16 group-hover:h-16" />
          </div>

          {/* Smaller images */}
          {factoryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              {/* Blur backdrop on hover */}
              <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                <h4 className="text-lg font-medium text-background text-center px-4">{image.title}</h4>
                <p className="text-background/70 text-sm text-center mt-1">{image.subtitle}</p>
              </div>
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
              {/* Animated corner lines */}
              <div className="absolute top-2 left-2 w-0 h-0 border-l-2 border-t-2 border-primary group-hover:w-6 group-hover:h-6 transition-all duration-500 delay-100" />
              <div className="absolute bottom-2 right-2 w-0 h-0 border-r-2 border-b-2 border-primary group-hover:w-6 group-hover:h-6 transition-all duration-500 delay-100" />
            </div>
          ))}
        </div>

        {/* Stats Row - below gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-20">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              duration={2500}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="p-3 rounded-lg bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div>
          <div className="text-center mb-10">
            <span className="section-label">Applications</span>
            <h3 className="heading-sm">Where We Deploy</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {applications.map((app) => (
              <div
                key={app.title}
                className="bg-background border border-border rounded-lg p-5 hover:border-primary/50 transition-colors group text-center"
              >
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-3">
                  <app.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {app.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
