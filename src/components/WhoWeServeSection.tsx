"use client";

import { Building2, Shield, Zap, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const markets = [
  {
    icon: Building2,
    title: "Municipalities",
    description:
      "City governments and public works departments looking for sustainable lighting solutions that reduce energy costs and maintenance burden.",
    benefits: [
      "Budget-friendly financing options",
      "Grant & incentive assistance",
      "Long-term maintenance programs",
    ],
  },
  {
    icon: Shield,
    title: "Federal & Military",
    description:
      "Government agencies and defense installations requiring secure, reliable lighting for critical infrastructure and remote locations.",
    benefits: [
      "GSA Schedule available",
      "NDAA compliant components",
      "Enhanced security features",
    ],
  },
  {
    icon: Zap,
    title: "Utilities & Energy",
    description:
      "Power companies and energy providers expanding renewable infrastructure or lighting underserved areas without grid extension.",
    benefits: [
      "Grid-independent operation",
      "Remote monitoring systems",
      "Scalable deployment",
    ],
  },
  {
    icon: HardHat,
    title: "Developers & EPCs",
    description:
      "Real estate developers and engineering contractors seeking reliable solar lighting partners for commercial and infrastructure projects.",
    benefits: [
      "Project consultation support",
      "Custom engineering services",
      "Turnkey solutions",
    ],
  },
];

export function WhoWeServeSection() {
  return (
    <section className="py-20">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Who We Serve</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Built for Organizations That Can&apos;t Afford{" "}
            <span className="text-primary">Failure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in serving clients where lighting reliability isn&apos;t optional—it's
            critical to safety, security, and operational continuity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {markets.map((market) => (
            <div
              key={market.title}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <market.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {market.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {market.description}
                  </p>

                  <ul className="space-y-2">
                    {market.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="btn-primary">
              Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
