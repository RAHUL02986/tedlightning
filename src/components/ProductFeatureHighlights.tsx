import { Zap, Cpu, AlertTriangle } from "lucide-react";
import { StaticImageData } from "next/image";
import featureUltraPowerful from "../../public/assets/hero-solar-installation.jpg";
import featureBespokeLed from "../../public/assets/factory-interior.jpg";
import featureEmergency from "../../public/assets/rd-team.jpg";

interface FeatureHighlight {
  icon: typeof Zap;
  title: string;
  description: string;
  backgroundImage: StaticImageData | string;
}

const defaultFeatures: FeatureHighlight[] = [
  {
    icon: Zap,
    title: "Ultra Powerful",
    description: "Delivers industry-leading power and performance with an efficacy of up to 180 lumens per watt on standard variants.",
    backgroundImage: featureUltraPowerful,
  },
  {
    icon: Cpu,
    title: "Bespoke LED",
    description: "Designed around premium LEDs with a bespoke housing for optimum performance, thermal management, and reliability.",
    backgroundImage: featureBespokeLed,
  },
  {
    icon: AlertTriangle,
    title: "Intelligent Emergency",
    description: "Emergency variants provide 3+ hours of battery back-up. The intelligent system self-tests and communicates via LED indicators.",
    backgroundImage: featureEmergency,
  },
];

interface ProductFeatureHighlightsProps {
  features?: FeatureHighlight[];
}

export const ProductFeatureHighlights = ({ features = defaultFeatures }: ProductFeatureHighlightsProps) => {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-3">
        {features.map((feature) => (
          <div 
            key={feature.title} 
            className="relative h-[400px] lg:h-[500px] overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${typeof feature.backgroundImage === 'string' ? feature.backgroundImage : feature.backgroundImage.src})` 
              }}
            />
            
            {/* Dark Overlay - gets darker on hover */}
            <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/70 transition-colors duration-500" />
            
            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center p-8 z-10">
              {/* Icon - always visible */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background/10 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-primary/90 transition-all duration-500">
                <feature.icon className="h-8 w-8 text-background group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              
              {/* Title - always visible */}
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-background mb-4">
                {feature.title}
              </h3>
              
              {/* Description - hidden by default, visible on hover */}
              <p className="text-background/0 group-hover:text-background/90 leading-relaxed max-w-xs transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
