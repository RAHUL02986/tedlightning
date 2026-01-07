import { Factory, Truck, Shield, Headphones, FileCheck, DollarSign, ArrowRight } from "lucide-react";

const valueProps = [
  {
    icon: Factory,
    title: "Direct Factory Pricing",
    description: "Eliminate middlemen. Work directly with our manufacturing facility for competitive wholesale rates.",
    highlight: "Up to 40% savings"
  },
  {
    icon: FileCheck,
    title: "OEM/ODM Services",
    description: "Custom branding, specifications, and product modifications to meet your market requirements.",
    highlight: "Your brand, our quality"
  },
  {
    icon: Truck,
    title: "Global Logistics Support",
    description: "Experienced in shipping to 160+ countries. FOB, CIF, DDP terms available with full documentation.",
    highlight: "Door-to-door delivery"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "CB, CE, RoHS certified. Every batch tested with full QC reports and traceability documentation.",
    highlight: "100% inspection"
  },
  {
    icon: DollarSign,
    title: "Flexible Payment Terms",
    description: "T/T, L/C, and trade assurance options. Competitive MOQ and sample policies for new partners.",
    highlight: "Partner-friendly terms"
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description: "Single point of contact for your account. Technical support, order tracking, and after-sales service.",
    highlight: "24/7 support"
  }
];

export function B2BValuePropsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Why Partner With Us</span>
          <h2 className="heading-lg mb-4">
            Built for <span className="text-primary">Business Partners</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            We understand the needs of distributors, contractors, and procurement teams. 
            Our B2B services are designed to make your projects successful.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={prop.title}
              className="group relative p-8 bg-muted/30 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                <prop.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-foreground mb-2">
                {prop.title}
              </h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                {prop.description}
              </p>

              {/* Highlight Badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                {prop.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-muted/50 border border-border/50 rounded-lg">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-medium">Ready to discuss your project?</p>
              <p className="text-muted-foreground text-sm">Get a customized quotation within 24 hours</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
