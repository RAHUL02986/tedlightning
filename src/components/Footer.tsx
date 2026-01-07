"use client";

import { Linkedin, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const productLinksData = [
  { labelKey: "products.solarLighting", href: "/products?category=solar-lighting" },
  { label: "Solar LED Flood Light", href: "/products?category=solar-lighting&subcategory=solar-flood-light" },
  { labelKey: "products.energyStorage", href: "/products?category=energy-storage" },
  { labelKey: "products.outdoorLed", href: "/products?category=outdoor-led" },
  { labelKey: "products.industrial", href: "/products?category=industrial-lighting" },
];

const companyLinksData = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.aboutUs", href: "/about" },
  { labelKey: "nav.projects", href: "/projects" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.qa", href: "/faq" },
  { labelKey: "nav.contactUs", href: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.facebook.com/TedlightingSolarOutdoorLEDLightingManufacturerCN", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC000XVbTx5ZmUZtN8ZnYkTA", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/tedlightfactory/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/TedlightingSolarOutdoorLEDLightingManufacturerCN", label: "Facebook" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-main py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/assets/logo.png"
                alt="TedLighting"
               width={200}
               height={150}
                className="brightness-0 invert rounded-none"
              />
              <span className="text-[11px] tracking-[0.1em] text-background/50 font-light border-l border-background/20 pl-4">
                {t("tagline")}
              </span>
            </div>
            <p className="text-background/50 font-light text-sm leading-relaxed max-w-sm mb-10">
              {t("footer.description")}
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="tel:+8618676107196"
                className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors font-light"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                +86 186 7610 7196
              </a>
              <a
                href="mailto:horace@tedlighting.com"
                className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors font-light"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                horace@tedlighting.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/50 font-light">
                <MapPin className="h-4 w-4 mt-0.5" strokeWidth={1.5} />
                4th Floor, Bld. C, No.24 of Fuqing Road 1, Yongxing Industry Zone, Henglan Town, Zhongshan City, Guangdong Province, China
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Products */}
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.15em] text-background/40 mb-6">
                  {t("footer.products")}
                </h4>
                <ul className="space-y-3">
                  {productLinksData.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors font-light"
                      >
                        {link.labelKey ? t(link.labelKey) : link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.15em] text-background/40 mb-6">
                  {t("footer.company")}
                </h4>
                <ul className="space-y-3">
                  {companyLinksData.map((link) => (
                    <li key={link.labelKey}>
                      <Link
                        href={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors font-light"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.15em] text-background/40 mb-6">
                  {t("footer.followUs")}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-background/50 hover:text-background transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-background/30 font-light">
            <p>
              © {new Date().getFullYear()} TedLighting. {t("footer.allRightsReserved")}.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-background/60 transition-colors">
                {t("footer.privacyPolicy")}
              </a>
              <a href="#" className="hover:text-background/60 transition-colors">
                {t("footer.termsConditions")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
