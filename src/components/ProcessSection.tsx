"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Ruler,
  CheckCircle,
  Truck,
} from "lucide-react";

import heroSolar from "../../public/assets/hero-solar-installation.jpg";

const steps = [
  {
    step: "01",
    title: "Analysis",
    desc: "Site assessment and requirement review",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Design",
    desc: "Custom system configuration",
    icon: Ruler,
  },
  {
    step: "03",
    title: "Validation",
    desc: "Sample testing and approval",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Production and technical support",
    icon: Truck,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
            Our Process
          </span>
          <h2 className="heading-lg text-foreground">
            From concept to installation
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-border" />
          <div className="hidden lg:block absolute top-16 left-0 w-1/2 h-[2px] bg-primary" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="group relative">
                <div className="relative bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  {/* Step Badge */}
                  <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Step {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 transition-colors">
                    <item.icon
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h4 className="text-xl font-medium text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-background border border-border rounded-full items-center justify-center">
                      <ArrowRight
                        className="w-4 h-4 text-primary"
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group overflow-hidden rounded-lg h-80">
            <Image
              src={heroSolar}
              alt="Installation process"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-background text-lg font-light">
                Professional installation by certified technicians
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-light text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of experts will guide you through every step of the
              process, from consultation to installation and support.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <span>Start a project</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
