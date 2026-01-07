"use client";
import { Award, Wrench, Shield, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const badgeKeys = [
  {
    icon: Clock,
    titleKey: "trustBadges.yearsStrong",
    descKey: "trustBadges.yearsDesc"
  },
  {
    icon: Wrench,
    titleKey: "trustBadges.tailored",
    descKey: "trustBadges.tailoredDesc"
  },
  {
    icon: Award,
    titleKey: "trustBadges.components",
    descKey: "trustBadges.componentsDesc"
  },
  {
    icon: Shield,
    titleKey: "trustBadges.warranty",
    descKey: "trustBadges.warrantyDesc"
  }
];

export function TrustBadgesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badgeKeys.map((badge) => (
            <div key={badge.titleKey} className="text-center">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{t(badge.titleKey)}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {t(badge.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
