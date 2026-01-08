import { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadgesSection } from "@/components/TrustBadgesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { CompanySection } from "@/components/CompanySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection, homepageFAQs } from "@/components/FAQSection";
import { B2BValuePropsSection } from "@/components/B2BValuePropsSection";
import { PartnersSection } from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: "TedLighting | B2B Solar Street Light Manufacturer & OEM Supplier",
  description: "Professional B2B solar street light manufacturer. OEM/ODM services, bulk pricing, government project expertise. Trusted by distributors & contractors in 160+ countries.",
  keywords: "B2B solar street light, solar light manufacturer, OEM solar lights, wholesale solar street lights, government solar projects",
  openGraph: {
    title: "TedLighting | B2B Solar Street Light Manufacturer & OEM Supplier",
    description: "Professional solar lighting solutions for distributors, contractors & government projects. Factory-direct pricing.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero - B2B focused messaging */}
        <HeroSection />

        {/* Company Strength - About TedLighting */}
        <CompanySection />

        {/* Products - Core offerings */}
        <ProductsSection />

        {/* B2B Value Props - Why partner with us */}
        <B2BValuePropsSection />

        {/* Partners/Clients - Social proof */}
        <PartnersSection />

        {/* Trust Indicators - Certifications & credentials */}
        <TrustBadgesSection />

        {/* Who We Serve - Industry targeting */}
        <WhoWeServeSection />

       
       {/* <ProcessSection /> */}

        <TestimonialsSection />

        {/* <ContactSection /> */}

        {/* <FAQSection
          faqs={homepageFAQs}
          subtitle="Common questions from distributors, contractors, and project managers."
          showViewAll
        />  */}
      </main>
      <Footer />
    </div>
  );
}
