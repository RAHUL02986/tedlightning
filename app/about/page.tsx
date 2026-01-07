import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Users, Globe, Factory, CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CertificationShowcase } from "@/components/CertificationShowcase";

export const metadata = {
  title: "About TedLighting | Solar Lighting Manufacturer",
  description:
    "Learn about TedLighting's 15+ years of solar lighting manufacturing experience, our engineering-first approach, and commitment to post-installation reliability.",
};

// Use public assets directly (referenced from /public/assets)
const factoryInterior = "/assets/factory-interior.jpg";
const factoryProduction = "/assets/factory-production.jpg";
const factoryQuality = "/assets/factory-quality.jpg";
const factoryWarehouse = "/assets/factory-warehouse.jpg";
const factoryRd = "/assets/factory-rd.jpg";
const rdTeamImage = "/assets/rd-team.jpg";
const founderImage = "/assets/founder.jpg";
const stats = [{
  number: 15,
  suffix: "+",
  label: "Years Experience"
}, {
  number: 160,
  suffix: "+",
  label: "Countries Served"
}, {
  number: 50000,
  suffix: "+",
  label: "Installations"
}, {
  number: 200,
  suffix: "+",
  label: "Team Members"
}];
const factoryImages = [{
  src: factoryInterior,
  title: "20,000 m² Factory",
  subtitle: "Modern Production Base"
}, {
  src: factoryProduction,
  title: "Production Line",
  subtitle: "Precision Manufacturing"
}, {
  src: factoryQuality,
  title: "Quality Control",
  subtitle: "100% Testing Standards"
}, {
  src: factoryWarehouse,
  title: "Global Logistics",
  subtitle: "Worldwide Distribution"
}, {
  src: factoryRd,
  title: "R&D Center",
  subtitle: "Innovation Hub"
}];
const values = [{
  icon: Award,
  title: "Engineering Excellence",
  description: "Every system is designed by engineers who understand that specifications on paper must survive real-world conditions."
}, {
  icon: CheckCircle,
  title: "Post-Installation Accountability",
  description: "We design for what happens after handover—because that's when most lighting failures occur."
}, {
  icon: Globe,
  title: "Global Experience",
  description: "Projects across 160+ countries have taught us how climate, culture, and infrastructure affect system performance."
}, {
  icon: Factory,
  title: "Manufacturing Control",
  description: "In-house production means we control quality, traceability, and can answer when systems underperform."
}];
const certifications = ["CB Certification (Global)", "ISO 9001:2015", "ISO 14001:2015", "CE Marking", "RoHS Compliant", "IEC 62560", "FCC Certified", "TUV Certified"];
export default function About() {
  return (
    <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32">
          {/* Hero - matching homepage CompanySection style */}
          <section className="section-padding bg-muted/30">
            <div className="container-main">
              {/* About Header */}
              <div className="text-center mb-12">
                <span className="section-label">About Us</span>
                <h1 className="heading-md mb-4">
                  Manufacturer, Not a Trading Company
                </h1>
                <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                  For over 15 years, TedLighting has been designing and manufacturing solar lighting 
                  systems for projects that cannot afford to fail after installation. We're not a trading 
                  company reselling generic products. We control the design, manufacturing, and quality 
                  assurance of every system that leaves our facility.
                </p>
              </div>

              {/* Factory Gallery - Bento Grid Layout */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {/* Large featured image */}
                <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl">
                  <img src={factoryImages[0].src} alt={factoryImages[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-medium text-background mb-1">{factoryImages[0].title}</h3>
                    <p className="text-background/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{factoryImages[0].subtitle}</p>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16 group-hover:h-16" />
                </div>

                {/* Smaller images */}
                {factoryImages.slice(1).map((image, index) => <div key={index} className="group relative aspect-square overflow-hidden rounded-xl">
                    <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {/* Blur backdrop on hover */}
                    <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                      <h4 className="text-lg font-medium text-background text-center px-4">{image.title}</h4>
                      <p className="text-background/70 text-sm text-center mt-1">{image.subtitle}</p>
                    </div>
                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
                    {/* Animated corner lines */}
                    <div className="absolute top-2 left-2 w-0 h-0 border-l-2 border-t-2 border-primary group-hover:w-6 group-hover:h-6 transition-all duration-500 delay-100" />
                    <div className="absolute bottom-2 right-2 w-0 h-0 border-r-2 border-b-2 border-primary group-hover:w-6 group-hover:h-6 transition-all duration-500 delay-100" />
                  </div>)}
              </div>

              {/* Stats Row - below gallery */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                {stats.map(stat => <AnimatedCounter key={stat.label} end={stat.number} suffix={stat.suffix} label={stat.label} duration={2500} />)}
              </div>
            </div>
          </section>

          {/* Founder's Vision */}
          <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            </div>
            
            <div className="container-main relative">
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                
                {/* Left - Square Picture with Frame */}
                <div className="lg:col-span-2 relative">
                  {/* Decorative frame offset */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-primary/30 rounded-lg -z-10" />
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-lg" />
                  
                  {/* Main image */}
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                    <img src={founderImage} alt="Ted Chen - TedLighting Founder" className="w-full h-full object-cover" />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/80 to-transparent" />
                    
                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <p className="font-heading font-bold text-xl text-background">Ted Chen</p>
                      <p className="text-sm text-background/70">Founder & CEO</p>
                    </div>
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute -right-4 top-1/4 bg-primary text-primary-foreground py-3 px-5 rounded-lg shadow-xl transform rotate-3">
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-xs uppercase tracking-wider">Years</p>
                  </div>
                </div>
                
                {/* Right - Content */}
                <div className="lg:col-span-3">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                    Founder's Vision
                  </span>
                  
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
                    Building Light<br />That Lasts
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-primary/20 rounded-full" />
                      <blockquote className="text-lg text-muted-foreground leading-relaxed">
                        "When I started TedLighting, I saw too many solar lights fail within months of installation. 
                        My goal was simple: build systems that work reliably for years, not just pass factory tests."
                      </blockquote>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary/20 to-transparent rounded-full" />
                      <blockquote className="text-lg text-muted-foreground leading-relaxed">
                        "Every product we make reflects that commitment to real-world performance."
                      </blockquote>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex flex-wrap gap-6">
                    <div className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">160+ Countries</span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl">
                      <Factory className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Own Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">CB Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20">
            <div className="container-main">
              <div className="text-center mb-12">
                <span className="section-label">Our Approach</span>
                <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
                  What Drives Our Engineering
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map(value => <div key={value.title} className="p-6 bg-card border border-border rounded-xl">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>)}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-muted/50">
            <div className="container-main">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={rdTeamImage} alt="TedLighting R&D Team" className="rounded-xl w-full h-[350px] object-cover shadow-lg" />
                </div>
                <div>
                  <span className="section-label">Our Team</span>
                  <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
                    Engineers Who Understand Failure
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our R&D team includes electrical engineers, photometric specialists, and 
                    battery experts who have analyzed thousands of field failures—not just from 
                    our products, but from across the industry.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    This experience shapes every design decision. We know what fails and why. 
                    More importantly, we know how to prevent it.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Users className="h-5 w-5" />
                    <span>30+ dedicated R&D engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Assurance Section */}
          

          {/* Factory Certification Showcase - B2B Trust Section */}
          <CertificationShowcase />


          {/* Spacer before footer */}
          <div className="h-16 bg-background"></div>
        </main>
        <Footer />
      </div>
    );
}