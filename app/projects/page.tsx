"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const heroSolar = "/assets/hero-solar-installation.jpg";
const heroProject = "/assets/hero-project.jpg";
const factoryInterior = "/assets/factory-interior.jpg";
const rdTeam = "/assets/rd-team.jpg";
const productFlood = "/assets/product-flood.jpg";
const productHighPower = "/assets/product-high-power.jpg";

const projectFilters = ["All", "Infrastructure", "Commercial", "Industrial", "Residential"];

const projects = [
  {
    id: "highway-lighting-nigeria",
    title: "Lagos-Ibadan Expressway",
    location: "Nigeria",
    category: "Infrastructure",
    image: heroSolar,
    description: "250+ solar street lights installed along the major expressway connecting Lagos and Ibadan.",
    specs: {
      lights: "250+",
      power: "100W",
      year: "2023",
    },
    featured: true,
  },
  {
    id: "industrial-park-vietnam",
    title: "Binh Duong Industrial Park",
    location: "Vietnam",
    category: "Industrial",
    image: heroProject,
    description: "Complete solar lighting solution for a 50-hectare industrial zone.",
    specs: {
      lights: "180",
      power: "150W",
      year: "2023",
    },
    featured: true,
  },
  {
    id: "municipal-project-philippines",
    title: "Cebu City Streets",
    location: "Philippines",
    category: "Infrastructure",
    image: factoryInterior,
    description: "City-wide solar street lighting upgrade covering main roads and intersections.",
    specs: {
      lights: "500+",
      power: "80W",
      year: "2022",
    },
  },
  {
    id: "commercial-complex-uae",
    title: "Dubai Business Park",
    location: "UAE",
    category: "Commercial",
    image: rdTeam,
    description: "Premium solar lighting for commercial complex parking and walkways.",
    specs: {
      lights: "120",
      power: "60W",
      year: "2023",
    },
  },
  {
    id: "residential-community-indonesia",
    title: "Jakarta Smart Village",
    location: "Indonesia",
    category: "Residential",
    image: productFlood,
    description: "Sustainable lighting solution for a modern residential community.",
    specs: {
      lights: "200",
      power: "40W",
      year: "2023",
    },
  },
  {
    id: "highway-project-kenya",
    title: "Nairobi-Mombasa Highway",
    location: "Kenya",
    category: "Infrastructure",
    image: productHighPower,
    description: "Solar lighting installation for the busiest highway in East Africa.",
    specs: {
      lights: "400+",
      power: "120W",
      year: "2022",
    },
  },
  {
    id: "port-lighting-bangladesh",
    title: "Chittagong Port Area",
    location: "Bangladesh",
    category: "Industrial",
    image: heroSolar,
    description: "High-powered solar flood lights for port operations and security.",
    specs: {
      lights: "80",
      power: "200W",
      year: "2023",
    },
  },
  {
    id: "shopping-center-thailand",
    title: "Pattaya Mall Complex",
    location: "Thailand",
    category: "Commercial",
    image: heroProject,
    description: "Exterior and parking lot solar lighting for shopping center.",
    specs: {
      lights: "95",
      power: "80W",
      year: "2023",
    },
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 lg:pt-28">
          {/* Hero Section */}
          <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={heroSolar}
                alt="Solar lighting project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
            <div className="container-main relative h-full flex flex-col justify-end pb-16">
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4">
                Our Work
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground max-w-2xl">
                Illuminating the World
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                Over 50,000 installations across 160+ countries. From highways to industrial parks.
              </p>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="container-main py-16 lg:py-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                Featured Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-background/70 text-sm mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                      <span className="text-background/40">•</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-background mb-2">
                      {project.title}
                    </h3>
                    <p className="text-background/70 text-sm line-clamp-2 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-background/20">
                      <div>
                        <span className="text-background/50 text-xs block">Lights</span>
                        <span className="text-background font-semibold">{project.specs.lights}</span>
                      </div>
                      <div>
                        <span className="text-background/50 text-xs block">Power</span>
                        <span className="text-background font-semibold">{project.specs.power}</span>
                      </div>
                      <div>
                        <span className="text-background/50 text-xs block">Year</span>
                        <span className="text-background font-semibold">{project.specs.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* All Projects */}
          <section className="bg-muted/30 py-16 lg:py-24">
            <div className="container-main">
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-medium uppercase tracking-wider bg-background/90 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>{project.specs.lights} units</span>
                          <span>{project.specs.power}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container-main py-16 lg:py-24">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Our team of experts is ready to help you design the perfect lighting solution for your infrastructure project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
