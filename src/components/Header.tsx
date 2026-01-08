"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown, ShoppingCart } from "lucide-react";
import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import SearchDialog from "../components/SearchDialog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCart } from "@/contexts/CartContext";
const socialLinks = [{
  icon: Linkedin,
  href: "https://www.facebook.com/TedlightingSolarOutdoorLEDLightingManufacturerCN",
  label: "LinkedIn"
}, {
  icon: Youtube,
  href: "https://www.youtube.com/channel/UC000XVbTx5ZmUZtN8ZnYkTA",
  label: "YouTube"
}, {
  icon: Instagram,
  href: "https://www.instagram.com/tedlightfactory/",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "https://www.facebook.com/TedlightingSolarOutdoorLEDLightingManufacturerCN",
  label: "Facebook"
}];
const navLinksData = [
  { key: "nav.home", href: "/" },
  { key: "nav.products", href: "/products", hasDropdown: true },
  { key: "nav.aboutUs", href: "/about" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.qa", href: "/faq" },
  { key: "nav.contactUs", href: "/contact" },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const { state: cartState } = useCart();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) return;
        const json = await res.json();
        if (mounted && json?.data) setCategories(json.data);
      } catch (e) {
        // ignore
      }
    };
    fetchCategories();
    return () => { mounted = false; };
  }, []);
  const isActive = (path: string) => pathname === path;

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
    {/* Top Bar with Social Icons */}
    <div className="hidden lg:block border-b border-border/50">
      <div className="container-main">
        <div className="flex justify-end items-center h-10">
          <div className="flex items-center gap-4">
            {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.label}>
              <social.icon className="h-5 w-5" strokeWidth={1.5} />
            </a>)}
          </div>
        </div>
      </div>
    </div>

    <div className="container-main">
      <div className="flex items-center justify-between h-20 lg:h-24">
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="TedLighting" className="h-7 lg:h-8 rounded-none " />
          <span className="hidden md:block text-[11px] tracking-[0.1em] text-muted-foreground font-light border-l border-border pl-4">
            {t('tagline')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinksData.map(link => <div key={link.key} className="relative" onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}>
            <Link href={link.href} className={`text-[15px] tracking-[0.05em] transition-colors duration-300 flex items-center gap-1 ${isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t(link.key)}
              {link.hasDropdown && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />}
            </Link>
          </div>)}
        </nav>

        {/* Full-Width Mega Menu for Products - Positioned outside nav items */}
        {isProductsOpen && <div className="fixed left-0 right-0 top-[calc(var(--header-height,124px))] z-50" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
          <div className="bg-background border-b border-border shadow-xl">
            <div className="container-main py-10">
              <div className="grid grid-cols-4 gap-10">
                {categories.map(category => <div key={category.id}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="font-heading font-semibold text-foreground hover:text-primary transition-colors text-lg block mb-4"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {category.name}
                  </Link>
                  <div className="space-y-3">
                    {category.subcategories.map(sub => <Link key={sub.id} href={`/products?category=${category.id}&subcategory=${sub.id}`} className="text-base text-muted-foreground hover:text-foreground transition-colors block py-1" onClick={() => setIsProductsOpen(false)}>
                      {sub.name}
                    </Link>)}
                  </div>
                </div>)}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link href="/products" onClick={() => setIsProductsOpen(false)} className="text-primary font-medium hover:underline text-lg">
                  {t('nav.viewAllProducts')} →
                </Link>
              </div>
            </div>
          </div>
        </div>}

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <button onClick={() => setIsSearchOpen(true)} className="p-2 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <Link href="/cart" className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {cartState.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartState.items.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-3 z-50 relative flex items-center justify-center cursor-pointer hover:bg-muted rounded-md transition-colors" 
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu - Outside container for full width */}
    {isMenuOpen && (
      <div className="lg:hidden fixed left-0 right-0 top-20 z-40 bg-background overflow-y-auto min-h-screen">
        <div className="w-full">
          <nav className="container-main py-8 flex flex-col gap-6 pb-20">
          {navLinksData.map(link => <div key={link.key}>
            <Link href={link.href} className="text-2xl font-light text-foreground block py-2" onClick={() => setIsMenuOpen(false)}>
              {t(link.key)}
            </Link>

            {/* Products with categories */}
            {link.hasDropdown && <div className="pl-4 border-l-2 border-border space-y-4 mt-4">
              {categories.map(category => <div key={category.id}>
                <Link
                  href={`/products?category=${category.id}`}
                  className="text-lg text-muted-foreground hover:text-foreground block mb-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>

                <div className="pl-4 space-y-1">
                  {category.subcategories.map(sub => <Link key={sub.id} href={`/products?category=${category.id}&subcategory=${sub.id}`} className="text-base text-muted-foreground hover:text-foreground block py-2" onClick={() => setIsMenuOpen(false)}>
                    {sub.name}
                  </Link>)}
                </div>
              </div>)}
            </div>}
          </div>)}

          {/* Mobile Language Switcher */}
          <div className="pt-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Social Links */}
          <div className="pt-6 border-t border-border">
            <div className="flex items-center gap-6">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.label}>
                <social.icon className="h-6 w-6" strokeWidth={1.5} />
              </a>)}
            </div>
          </div>
        </nav>
      </div>
    </div>
    )}

    {/* Search Dialog */}
    <SearchDialog
      isOpen={isSearchOpen}
      onClose={() => setIsSearchOpen(false)}
    />
  </header>;
}