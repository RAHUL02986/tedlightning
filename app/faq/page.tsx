"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Search, Mail, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    id: "general",
    name: "General",
    faqs: [
      {
        question: "Are you a manufacturer or a trading company?",
        answer: "We are a direct manufacturer with in-house production, testing, and quality control. Our factory is located in Shenzhen, China, with over 15 years of manufacturing experience.",
      },
      {
        question: "Who do you work with?",
        answer: "We supply distributors, EPC contractors, and government project buyers. Our clients range from small-scale distributors to large infrastructure companies managing national-level projects.",
      },
      {
        question: "Which markets do you serve?",
        answer: "Our products are deployed across Southeast Asia, Africa, the Middle East, and Latin America. We have completed over 50,000 installations in 160+ countries.",
      },
      {
        question: "How do I get a quotation?",
        answer: "Submit your project details or application requirements through our contact form, and our team will recommend a suitable configuration and provide a detailed quotation within one business day.",
      },
    ],
  },
  {
    id: "products",
    name: "Products & Technical",
    faqs: [
      {
        question: "How are your solar lighting systems sized?",
        answer: "Sizing is based on sun-hours, autonomy days, mounting height, and operating profile — not wattage labels. We use detailed solar irradiance data and usage patterns to design optimal systems for each location.",
      },
      {
        question: "Will the lights remain stable during rainy or cloudy seasons?",
        answer: "Yes, when correctly configured. Panel, battery, and controller logic are matched for sustained operation. We design systems with adequate autonomy days (typically 3-5 days) to handle extended periods of low sunlight.",
      },
      {
        question: "What warranty do you provide?",
        answer: "Warranty terms depend on product category and configuration. LED fixtures typically carry 5-year warranties, while premium solar systems with LiFePO4 batteries can have up to 10-year warranties. All warranties are defined by real operating conditions.",
      },
      {
        question: "Can configurations remain consistent for repeat orders?",
        answer: "Yes. Once approved, core components are locked to ensure batch consistency. This is especially important for large-scale infrastructure projects requiring uniform performance across all installations.",
      },
      {
        question: "Do you provide technical documentation?",
        answer: "Yes. Datasheets, installation guides, wiring diagrams, and project documentation are available for all products. We also provide customized documentation for OEM partners.",
      },
      {
        question: "What certifications do your products have?",
        answer: "Our products carry CB, CE, RoHS, and IP66 certifications. Specific products may have additional certifications based on target markets, including TUV, SAA, and UL listings.",
      },
    ],
  },
  {
    id: "ordering",
    name: "Ordering & Support",
    faqs: [
      {
        question: "What information should I provide for an accurate quote?",
        answer: "Project location, application type, quantity, mounting height, and expected operating hours. Additional details like local solar irradiance data and autonomy requirements help us provide more precise configurations.",
      },
      {
        question: "How quickly will I receive a response?",
        answer: "Most inquiries are reviewed and responded to within one business day. Complex project configurations may require 2-3 business days for detailed technical proposals.",
      },
      {
        question: "Do you support OEM or private labeling?",
        answer: "Yes. Branding, packaging, and documentation customization are supported. Minimum order quantities apply for OEM orders, and we can discuss specific requirements during the quotation process.",
      },
      {
        question: "Can I request samples before bulk orders?",
        answer: "Sample availability depends on the model and configuration. Standard products are typically available for sampling, while custom configurations may require a small pre-production run.",
      },
      {
        question: "What is the next step after submitting an inquiry?",
        answer: "Our team reviews your requirements and proposes a recommended system configuration. We then discuss technical details, finalize specifications, and provide commercial terms including pricing, lead time, and shipping options.",
      },
      {
        question: "What are your payment terms?",
        answer: "We typically work with T/T (telegraphic transfer) with 30% deposit and 70% before shipment. For established partners, we may offer flexible payment terms. Letters of Credit (L/C) are also accepted for larger orders.",
      },
    ],
  },
  {
    id: "shipping",
    name: "Shipping & Logistics",
    faqs: [
      {
        question: "What is the typical lead time for orders?",
        answer: "Standard products have a 15-25 day lead time depending on quantity. Custom configurations or OEM orders may require 30-45 days. We provide detailed production schedules upon order confirmation.",
      },
      {
        question: "How do you handle shipping?",
        answer: "We work with major freight forwarders and can ship via sea, air, or express courier depending on urgency and volume. FOB Shenzhen and CIF to destination port are our standard terms.",
      },
      {
        question: "Do you provide installation support?",
        answer: "We provide comprehensive installation guides and video tutorials. For large projects, we can arrange on-site technical support or training for local installation teams.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filterFaqs = (faqs: { question: string; answer: string }[]) => {
    if (!searchQuery) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const displayedCategories =
    activeCategory === "all"
      ? faqCategories
      : faqCategories.filter((c) => c.id === activeCategory);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 lg:pt-28">
          {/* Hero Section */}
          <section className="container-main py-12 lg:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
                Support
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Browse our FAQs or search for specific topics. Can't find what you're looking for? Contact us directly.
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="container-main pb-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </section>

          {/* FAQ Content */}
          <section className="container-main py-8 pb-16 lg:pb-24">
            <div className="max-w-3xl mx-auto space-y-12">
              {displayedCategories.map((category) => {
                const filteredFaqs = filterFaqs(category.faqs);
                if (filteredFaqs.length === 0) return null;

                return (
                  <div key={category.id}>
                    <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                      {category.name}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredFaqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.id}-${index}`}
                          className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
                        >
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6 text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-muted/30 py-16 lg:py-24">
            <div className="container-main">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team is here to help. Reach out via email or phone and we'll get back to you within one business day.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:horace@tedlighting.com"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                  <a
                    href="tel:+8618676107196"
                    className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-medium border border-border hover:bg-muted transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    +86 186 7610 7196
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
