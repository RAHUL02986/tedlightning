"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [categories, setCategories] = useState<any[]>([]);
  const [newProducts, setNewProducts] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/products')
        ]);
        const catJson = await catRes.json();
        const prodJson = await prodRes.json();
        if (!mounted) return;
        setCategories(catJson?.data || []);
        const prods = prodJson?.data || [];
        setNewProducts(prods.filter((p: any) => ['New','Hot','Premium'].includes(p.badge)));
      } catch (e) {
        // ignore
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, []);
  const slidesPerView = 4;
  const totalSlides = Math.ceil(newProducts.length / slidesPerView);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);

  return (
    <section id="products" className="bg-background">

      {/* HEADER */}
      <div className="container-main section-padding pb-12">
        <span className="section-label">Product Categories</span>
        <h2 className="heading-lg mb-4">
          Complete <span className="text-primary">Lighting Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Reliable LED solutions for outdoor, industrial, and commercial use.
        </p>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 h-[600px]">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/products?category=${cat.id}`}
            className={`group relative overflow-hidden ${
              i === 0 || i === 1 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

            {i < 2 && (
              <div className="absolute top-6 right-6 bg-primary px-3 py-1.5 rounded-full flex gap-1">
                <Star className="h-3 w-3 fill-white text-white" />
                <span className="text-xs text-white">Featured</span>
              </div>
            )}

            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl text-white mb-2">{cat.name}</h3>
              <span className="flex items-center gap-2 text-white text-sm">
                Explore More <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* MOBILE GRID */}
      <div className="lg:hidden container-main pb-12 grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/products?category=${cat.id}`} className="relative aspect-[3/4]">
            <Image src={cat.image} alt={cat.name} fill className="object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
            <div className="absolute bottom-3 left-3 text-white text-sm">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>

      {/* PRODUCT SLIDER */}
      <div className="container-main section-padding border-t">
        <div className="flex justify-between mb-6">
          <h2 className="heading-md">
            <span className="text-primary">New</span> Products
          </h2>

          <div className="flex gap-2">
            <Button size="icon" variant="outline" onClick={prevSlide}>
              <ChevronLeft />
            </Button>
            <Button size="icon" variant="outline" onClick={nextSlide}>
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newProducts.map((product) => (
              <div key={product.id} className="w-full lg:w-1/4 px-2">
                <Link href={`/products/${product.id}`} className="block bg-muted rounded-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{product.name}</h4>
                    <span className="text-primary text-sm flex gap-1 items-center">
                      View Details <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
