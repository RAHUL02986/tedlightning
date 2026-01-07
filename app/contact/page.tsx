'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { PersonalContactsSection } from "@/components/PersonalContactsSection";
import { contactFAQs } from "@/components/FAQSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <PersonalContactsSection />
        <ContactSection />
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <h2 className="text-lg lg:text-xl text-muted-foreground">
                Quick answers to help you prepare your inquiry and understand our process.
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
              {contactFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
