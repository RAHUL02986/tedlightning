"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const heroSolar = "/assets/hero-solar-installation.jpg";
const heroProject = "/assets/hero-project.jpg";
const factoryInterior = "/assets/factory-interior.jpg";
const rdTeam = "/assets/rd-team.jpg";
const productFlood = "/assets/product-flood.jpg";
const productHighPower = "/assets/product-high-power.jpg";

const categories = ["All", "Industry News", "Technical", "Case Studies", "Company"];

const blogPosts = [
  {
    id: "solar-lighting-future-2024",
    title: "The Future of Solar Street Lighting: 2024 Trends and Innovations",
    excerpt: "Explore the latest advancements in solar lighting technology, from AI-powered controls to next-generation LiFePO4 batteries.",
    image: heroSolar,
    category: "Industry News",
    author: "TedLighting Team",
    date: "December 15, 2024",
    featured: true,
  },
  {
    id: "choosing-right-solar-light",
    title: "How to Choose the Right Solar Street Light for Your Project",
    excerpt: "A comprehensive guide to selecting solar lighting systems based on location, usage patterns, and project requirements.",
    image: heroProject,
    category: "Technical",
    author: "Engineering Team",
    date: "December 10, 2024",
    featured: true,
  },
  {
    id: "nigeria-highway-case-study",
    title: "Case Study: Lagos-Ibadan Expressway Solar Lighting Project",
    excerpt: "How we delivered 250+ solar street lights for one of Africa's busiest highways with 99.5% uptime.",
    image: factoryInterior,
    category: "Case Studies",
    author: "Project Team",
    date: "December 5, 2024",
  },
  {
    id: "lifepo4-battery-advantages",
    title: "Why LiFePO4 Batteries Are the Gold Standard for Solar Lighting",
    excerpt: "Understanding the benefits of lithium iron phosphate batteries over traditional lead-acid alternatives.",
    image: rdTeam,
    category: "Technical",
    author: "R&D Team",
    date: "November 28, 2024",
  },
  {
    id: "smart-city-integration",
    title: "Integrating Solar Lighting into Smart City Infrastructure",
    excerpt: "How IoT-enabled solar lights are transforming urban infrastructure with real-time monitoring and control.",
    image: productFlood,
    category: "Industry News",
    author: "TedLighting Team",
    date: "November 20, 2024",
  },
  {
    id: "manufacturing-excellence",
    title: "Inside TedLighting: Our Manufacturing Process Explained",
    excerpt: "A behind-the-scenes look at how we design, test, and produce world-class solar lighting systems.",
    image: productHighPower,
    category: "Company",
    author: "Operations Team",
    date: "November 15, 2024",
  },
  {
    id: "solar-vs-grid-lighting",
    title: "Solar vs Grid-Powered Street Lights: A Cost-Benefit Analysis",
    excerpt: "Breaking down the long-term costs and benefits of solar lighting compared to traditional grid-connected systems.",
    image: heroSolar,
    category: "Technical",
    author: "Engineering Team",
    date: "November 10, 2024",
  },
  {
    id: "africa-solar-growth",
    title: "Solar Lighting Adoption in Africa: Growth and Opportunities",
    excerpt: "Analyzing the rapid growth of solar lighting infrastructure across African nations and future market potential.",
    image: heroProject,
    category: "Industry News",
    author: "Market Research",
    date: "November 5, 2024",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 lg:pt-28">
          {/* Hero Section */}
          <section className="container-main py-12 lg:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
                Insights & Updates
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                TedLighting Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Industry insights, technical guides, and the latest updates from our team.
              </p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="container-main pb-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Posts */}
          {activeCategory === "All" && (
            <section className="container-main py-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                Featured
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer block"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                    <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                      <span className="text-[10px] font-medium uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-full w-fit mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-background mb-2 group-hover:underline">
                        {post.title}
                      </h3>
                      <p className="text-background/70 text-sm line-clamp-2 max-w-lg mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-background/60 text-sm">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Divider */}
          {activeCategory === "All" && (
            <div className="container-main py-4">
              <div className="border-t border-border" />
            </div>
          )}

          {/* All Posts */}
          <section className="container-main py-8 pb-16 lg:pb-24">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">
              {activeCategory === "All" ? "All Posts" : activeCategory}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-medium uppercase tracking-wider bg-background/90 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="bg-muted/30 py-16 lg:py-24">
            <div className="container-main">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter for the latest industry insights and product updates.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
