import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  showViewAll?: boolean;
  variant?: "default" | "compact";
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  showViewAll = false,
  variant = "default",
}: FAQSectionProps) {
  if (variant === "compact") {
    return (
      <div className="space-y-3">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-lg px-5 data-[state=open]:bg-muted/30"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4 text-sm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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

          {/* View All Link */}
          {showViewAll && (
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View all FAQs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Pre-defined FAQ sets for different pages
export const homepageFAQs: FAQItem[] = [
  {
    question: "Are you a manufacturer or a trading company?",
    answer: "We are a direct manufacturer with in-house production, testing, and quality control.",
  },
  {
    question: "Who do you work with?",
    answer: "We supply distributors, EPC contractors, and government project buyers.",
  },
  {
    question: "Which markets do you serve?",
    answer: "Our products are deployed across Southeast Asia, Africa, the Middle East, and Latin America.",
  },
  {
    question: "Do you support project-based configurations?",
    answer: "Yes. System configurations are adjusted based on location, usage profile, and project requirements.",
  },
  {
    question: "How do I get a quotation?",
    answer: "Submit your project details or application requirements, and our team will recommend a suitable configuration.",
  },
];

export const productsFAQs: FAQItem[] = [
  {
    question: "How are your solar lighting systems sized?",
    answer: "Sizing is based on sun-hours, autonomy days, mounting height, and operating profile — not wattage labels.",
  },
  {
    question: "Will the lights remain stable during rainy or cloudy seasons?",
    answer: "Yes, when correctly configured. Panel, battery, and controller logic are matched for sustained operation.",
  },
  {
    question: "What warranty do you provide?",
    answer: "Warranty terms depend on product category and configuration and are defined by real operating conditions.",
  },
  {
    question: "Can configurations remain consistent for repeat orders?",
    answer: "Yes. Once approved, core components are locked to ensure batch consistency.",
  },
  {
    question: "Do you provide technical documentation?",
    answer: "Yes. Datasheets, installation guides, wiring diagrams, and project documentation are available.",
  },
];

export const contactFAQs: FAQItem[] = [
  {
    question: "What information should I provide for an accurate quote?",
    answer: "Project location, application type, quantity, mounting height, and expected operating hours.",
  },
  {
    question: "How quickly will I receive a response?",
    answer: "Most inquiries are reviewed and responded to within one business day.",
  },
  {
    question: "Do you support OEM or private labeling?",
    answer: "Yes. Branding, packaging, and documentation customization are supported.",
  },
  {
    question: "Can I request samples before bulk orders?",
    answer: "Sample availability depends on the model and configuration.",
  },
  {
    question: "What is the next step after submitting an inquiry?",
    answer: "Our team reviews your requirements and proposes a recommended system configuration.",
  },
];
