import { Building2, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Globe, value: "160+", label: "Countries Served" },
  { icon: Building2, value: "500+", label: "Active Partners" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "2M+", label: "Units Deployed" }
];

const partnerLogos = [
  "Government Projects",
  "Municipal Authorities", 
  "Solar Distributors",
  "EPC Contractors",
  "Lighting Wholesalers",
  "Development Agencies"
];

export function PartnersSection() {
  return (
    <section className="py-16 lg:py-20 bg-foreground text-background">
      <div className="container-main">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-background/10 mb-4">
                <stat.icon className="h-5 w-5 text-background/80" strokeWidth={1.5} />
              </div>
              <div className="text-3xl lg:text-4xl font-light text-background mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-background/60 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mb-16" />

        {/* Partner Types */}
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.2em] text-background/50 uppercase">
            Trusted By
          </span>
        </div>

        {/* Partner Logos Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-6">
            {partnerLogos.map((partner) => (
              <div 
                key={partner}
                className="px-6 py-3 border border-background/20 rounded-lg text-background/60 text-sm font-light hover:border-background/40 hover:text-background/80 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Certification Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          {["CB Certified", "CE Certified", "RoHS Compliant", "ISO 9001", "IEC 62560"].map((cert) => (
            <div 
              key={cert}
              className="flex items-center gap-2 text-background/50 text-xs tracking-wider"
            >
              <div className="w-1.5 h-1.5 bg-background/40 rounded-full" />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
