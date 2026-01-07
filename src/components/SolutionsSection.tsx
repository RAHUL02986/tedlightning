import { Sun, Battery, Lightbulb, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Sun,
    label: "Primary",
    title: "Solar Lighting Systems",
    description: "Solar street lights and solar flood lights designed for roads, infrastructure, and industrial projects where grid power is unavailable or unreliable.",
    cue: "Used when grid access is impossible and failure after installation is unacceptable.",
    primary: true,
  },
  {
    icon: Battery,
    label: "Primary",
    title: "Energy Storage Systems",
    description: "Commercial and industrial energy storage for backup power, load shifting, and hybrid solar systems.",
    cue: "Designed to absorb unstable grids, not just store energy.",
    primary: true,
  },
  {
    icon: Lightbulb,
    label: "Secondary",
    title: "Outdoor LED Lighting",
    subtitle: "Grid & Hybrid",
    description: "Grid-powered outdoor LED lighting for sites where solar is restricted, shaded, or politically forced but technically unsafe.",
    cue: "Solar where it makes sense. Grid where it doesn't. One engineering standard.",
    primary: false,
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="industrial-section">
      <div className="industrial-container">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="industrial-label text-primary">Core Solutions</span>
          </div>
          <h2 className="industrial-heading text-2xl md:text-3xl">
            <span className="text-primary">Decision-Guided</span>, Not Brochure
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`industrial-card group cursor-pointer ${
                solution.primary ? "border-l-2 border-l-primary" : "border-l-2 border-l-muted"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon & Label */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-48 flex-shrink-0">
                  <div className={`p-3 rounded ${solution.primary ? "bg-primary/10" : "bg-muted"}`}>
                    <solution.icon className={`h-6 w-6 ${solution.primary ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <span className={`industrial-label ${solution.primary ? "text-primary" : "text-muted-foreground"}`}>
                    {solution.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-mono text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {solution.title}
                    {solution.subtitle && (
                      <span className="text-muted-foreground font-normal ml-2">({solution.subtitle})</span>
                    )}
                  </h3>
                  <p className="industrial-text mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-muted/50 border border-border">
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-mono text-sm text-foreground">
                      {solution.cue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
