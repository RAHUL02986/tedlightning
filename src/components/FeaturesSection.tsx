import { CheckCircle, FileText, Palette, Settings } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Free 3D DIALux Photometric Simulation",
    description: "Professional lighting simulation to ensure optimal coverage and performance before installation.",
  },
  {
    icon: Palette,
    title: "Support Customization",
    description: "Custom colors, logos, power configurations, and special requirements for your project.",
  },
  {
    icon: Settings,
    title: "CAD Installation Drawings",
    description: "Complete technical drawings and installation guides provided for every project.",
  },
];

const certifications = [
  "CB IECEE", "ISO 9001:2015", "CE", "RoHS", "IP67", "IK10", "COC", "SABER"
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-primary-foreground/20">
            Technical Support
          </span>
          <h2 className="heading-lg mb-4">
            We Support <span className="text-accent-gold">Your Success</span>
          </h2>
          <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Beyond products, we provide comprehensive technical support to ensure your project's success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="text-center p-8 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold text-accent-gold-foreground mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">
            Certifications & Compliance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div 
                key={cert}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
              >
                <CheckCircle className="h-4 w-4 text-accent-gold" />
                <span className="font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
