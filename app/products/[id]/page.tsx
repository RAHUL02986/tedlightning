"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Download, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductImageGallery } from "@/components/ProductImageGallery";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  badge?: string;
  specs: {
    power: string;
    lumens: string;
    autonomy: string;
    warranty: string;
  };
  description: string;
  features: string[];
}

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) throw new Error('Product not found');

        const data = await response.json();
        setProduct(data.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching product');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // Fetch categories for breadcrumb
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

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-28 lg:pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2 text-muted-foreground">Loading product...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-28 lg:pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const category = categories.find(c => c.id === product.category);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 lg:pt-32">
          {/* Breadcrumb */}
          <div className="container-main py-4 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
              {category && (
                <>
                  <span>/</span>
                  <Link href={`/products?category=${category.id}`} className="hover:text-foreground transition-colors">
                    {category.name}
                  </Link>
                </>
              )}
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>

          {/* Product Details */}
          <section className="container-main py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Images */}
              <div className="space-y-6">
                <ProductImageGallery images={[product.image]} productName={product.name} badge={product.badge} />
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">
                      {category?.name}
                    </span>
                    {product.badge && (
                      <span className="text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Power</div>
                      <div className="font-semibold text-foreground">{product.specs.power}</div>
                    </div>
                    {product.specs.lumens !== "-" && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Lumens</div>
                        <div className="font-semibold text-foreground">{product.specs.lumens}</div>
                      </div>
                    )}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Autonomy</div>
                      <div className="font-semibold text-foreground">{product.specs.autonomy}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Warranty</div>
                      <div className="font-semibold text-foreground">{product.specs.warranty}</div>
                    </div>
                  </div>
                </div>

                {/* Contact/Inquiry Section */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Interested in this product?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our sales team for pricing, availability, and custom configurations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Get Quote
                    </Link>
                    <a
                      href="tel:+1234567890"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <section className="py-16">
              <div className="container-main">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Back to Products */}
          <section className="border-t border-border py-12">
            <div className="container-main text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Products
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
