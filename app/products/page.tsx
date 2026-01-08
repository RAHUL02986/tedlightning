"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Filter, Grid3X3, List, Download, Sun, Zap, Battery, Lightbulb, Factory } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// Use public asset paths
// categories now come from API
// Removed static categories import

const catalogSolarStreet = "/assets/catalog-solar-street.jpg";
const catalogFloodLight = "/assets/catalog-flood-light.jpg";
const catalogEnergyStorage = "/assets/catalog-energy-storage.jpg";
const catalogSolutions = "/assets/catalog-solutions.jpg";
const downloadButtons = [{
  id: "solar-lighting",
  title: "Solar Lighting",
  description: "Complete catalog of all-in-one & split solar lighting systems",
  image: catalogSolarStreet,
  icon: Sun,
  downloadUrl: "#",
  color: "from-amber-500/80 to-orange-600/80"
}, {
  title: "Industrial Flood Lights",
  description: "High-power LED flood lighting for commercial & industrial applications",
  image: catalogFloodLight,
  icon: Zap,
  downloadUrl: "#",
  color: "from-blue-500/80 to-cyan-600/80"
}, {
  id: "energy-storage",
  title: "Energy Storage Systems",
  description: "Battery solutions and power storage systems for off-grid installations",
  image: catalogEnergyStorage,
  icon: Battery,
  downloadUrl: "#",
  color: "from-emerald-500/80 to-teal-600/80"
}, {
  id: "full-catalog",
  title: "Complete Catalog",
  description: "Full product range including all lighting solutions and accessories",
  image: catalogSolutions,
  icon: Lightbulb,
  downloadUrl: "#",
  color: "from-purple-500/80 to-indigo-600/80"
}];
export default function Products() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const subcategoryParam = searchParams.get("subcategory");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(subcategoryParam);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams();
        if (selectedCategory) query.append('category', selectedCategory);
        if (selectedSubcategory) query.append('subcategory', selectedSubcategory);
        
        const response = await fetch(`/api/products?${query.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        setProducts(data.data || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedSubcategory]);

  // Fetch categories
  useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) return;
        const json = await res.json();
        if (mounted) setCategories(json.data || []);
      } catch (e) {
        // ignore
      }
    };
    fetchCategories();
    return () => { mounted = false; };
  }, []);
  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedSubcategory(null);
    }
  };
  const handleSubcategoryClick = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
  };
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };
  return <>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 lg:pt-32">
          {/* Breadcrumb */}
          <div className="container-main py-4 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground">Products</span>
              {selectedCategory && <>
                  <span>/</span>
                  <span className="text-foreground">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                </>}
            </div>
          </div>


          {/* Product Lines Section - Full Width */}
          <section className="container-main py-10 lg:py-14 border-b border-border">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Our Core Product Lines
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tedlighting supplies solar lighting and energy storage solutions designed to reduce project risk and after-sales issues.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground">Solar Lighting</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Solar street lights and solar flood lights engineered for roads, infrastructure, and industrial projects where grid power is unavailable or unreliable.
                </p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Battery className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground">Energy Storage Systems</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Commercial and industrial energy storage solutions supporting backup power, load shifting, and hybrid solar systems.
                </p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground">Outdoor LED Lighting</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Grid-powered outdoor LED lighting for sites where solar is restricted, shaded, or partially grid-dependent.
                </p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-purple-500" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground">Industrial Lighting</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High-performance lighting solutions for factories, warehouses, and heavy industrial environments requiring maximum durability.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              
            </div>
          </section>

          <div className="container-main py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="sticky top-28">

                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Categories
                    </h3>
                    {(selectedCategory || selectedSubcategory) && <button onClick={clearFilters} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        Clear all
                      </button>}
                  </div>

                  <nav className="space-y-2">
                    {categories.map(category => <div key={category.id}>
                        <button onClick={() => handleCategoryClick(category.id)} className={`w-full text-left py-4 px-5 rounded-xl transition-colors flex items-center justify-between group ${selectedCategory === category.id ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                          <span className="text-base font-semibold">{category.name}</span>
                        </button>
                        
                        {/* Subcategories */}
                        {selectedCategory === category.id && <div className="ml-4 mt-2 space-y-1 border-l-2 border-border pl-4">
                            {category.subcategories.map(sub => <button key={sub.id} onClick={() => handleSubcategoryClick(sub.id)} className={`w-full text-left py-3 px-4 rounded-lg text-base transition-colors ${selectedSubcategory === sub.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                                {sub.name}
                              </button>)}
                          </div>}
                      </div>)}
                  </nav>

                  {/* Product Catalogs */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-heading font-semibold text-base text-foreground mb-4">Product Catalogs</h4>
                    <div className="space-y-3">
                      {downloadButtons.map(item => {
                      const IconComponent = item.icon;
                      return <a key={item.id} href={item.downloadUrl} className="group relative overflow-hidden rounded-xl block">
                            {/* Background Image */}
                            <div className="relative aspect-[16/9]">
                              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                              
                              {/* Gradient Overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-85 group-hover:opacity-90 transition-opacity duration-300`} />
                              
                              {/* Shine Effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                              </div>
                              
                              {/* Content */}
                              <div className="absolute inset-0 p-3 flex items-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-heading font-semibold text-sm leading-tight drop-shadow-lg">
                                    {item.title}
                                  </h5>
                                  <p className="text-xs text-white/80 truncate mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                                <Download className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                          </a>;
                    })}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h1 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                      {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : "All Products"}
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      {loading ? 'Loading...' : `${products.length} product${products.length !== 1 ? "s" : ""} found`}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      <p className="mt-2 text-muted-foreground">Loading products...</p>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-destructive">
                    <p className="font-semibold">Error Loading Products</p>
                    <p className="text-sm mt-1">{error}</p>
                  </div>
                )}

                {/* Products Grid */}
                {!loading && !error && (
                  <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                    {products.map(product => <Link key={product.id} href={`/products/${product.id}`} className={`group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${viewMode === "list" ? "flex" : ""}`}>
                        {/* Image */}
                        <div className={`relative overflow-hidden bg-muted ${viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"}`}>
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          {product.badge && <span className="absolute top-3 left-3 text-[10px] font-medium tracking-wider uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                              {product.badge}
                          </span>}
                      </div>

                      {/* Content */}
                      <div className={`p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                        <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground block mb-1">
                          {categories.find(c => c.id === product.category)?.name}
                        </span>
                        <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        {viewMode === "list" && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {product.description}
                          </p>}

                        <div className="flex items-center justify-between">
                          <div className="flex gap-3 text-xs text-muted-foreground">
                            <span>{product.specs.power}</span>
                            {product.specs.lumens !== "-" && <>
                                <span>•</span>
                                <span>{product.specs.lumens}</span>
                              </>}
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>)}
                  </div>
                )}

                {products.length === 0 && !loading && !error && <div className="text-center py-20">
                    <p className="text-muted-foreground">No products found in this category.</p>
                    <button onClick={clearFilters} className="mt-4 text-primary hover:underline">
                      View all products
                    </button>
                  </div>}
              </div>
            </div>
          </div>

          {/* Products FAQ */}
          <section className="border-t border-border py-16 lg:py-24">
            <div className="container-main">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Technical FAQs
                </h2>
                <p className="text-muted-foreground">
                  Common questions about our solar lighting systems.
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <ProductsFAQAccordion />
              </div>
            </div>
          </section>

          {/* Newsletter Subscription - Compact Style */}
          <section className="bg-muted/50 border-t border-border py-12">
            <div className="container-main">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="lg:max-w-md">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get product updates, industry insights, and exclusive offers.
                  </p>
                </div>
                <SubscriptionForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
}
function SubscriptionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (name.trim().length > 100) {
      setError("Name must be less than 100 characters");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
    }, 1000);
  };
  if (isSubmitted) {
    return <div className="flex items-center gap-3 text-primary">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium">Thank you for subscribing!</span>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 flex-1 lg:max-w-xl">
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="px-4 py-2.5 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" maxLength={100} />
      <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-2.5 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm flex-1" maxLength={255} />
      <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 text-sm whitespace-nowrap">
        {isSubmitting ? "..." : "Subscribe"}
      </button>
      {error && <p className="text-destructive text-xs sm:absolute sm:bottom-0 sm:left-0">{error}</p>}
    </form>;
}
function ProductsFAQAccordion() {
  const faqs = [{
    question: "How are your solar lighting systems sized?",
    answer: "Sizing is based on sun-hours, autonomy days, mounting height, and operating profile — not wattage labels."
  }, {
    question: "Will the lights remain stable during rainy or cloudy seasons?",
    answer: "Yes, when correctly configured. Panel, battery, and controller logic are matched for sustained operation."
  }, {
    question: "What warranty do you provide?",
    answer: "Warranty terms depend on product category and configuration and are defined by real operating conditions."
  }, {
    question: "Can configurations remain consistent for repeat orders?",
    answer: "Yes. Once approved, core components are locked to ensure batch consistency."
  }, {
    question: "Do you provide technical documentation?",
    answer: "Yes. Datasheets, installation guides, wiring diagrams, and project documentation are available."
  }];
  return <div className="space-y-3">
      {faqs.map((faq, i) => <details key={i} className="group border border-border rounded-lg">
          <summary className="px-6 py-5 cursor-pointer font-medium text-foreground list-none flex justify-between items-center">
            {faq.question}
            <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="px-6 pb-5 text-muted-foreground">{faq.answer}</div>
        </details>)}
    </div>;
}