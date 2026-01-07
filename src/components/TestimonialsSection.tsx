import { Quote, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    quote: "The Palm Tree solar street lights have been operating perfectly for 3 years now. Zero maintenance required. Best investment for our highway project.",
    author: "Ahmed Al-Rashid",
    role: "Project Manager",
    location: "Saudi Arabia",
    project: "Highway Lighting - 500 units",
  },
  {
    quote: "We tested many manufacturers before choosing TedLighting. Their quality control and after-sales support are unmatched. Highly recommended for government projects.",
    author: "James Okonkwo",
    role: "Procurement Director",
    location: "Nigeria",
    project: "Municipal Streets - 1,200 units",
  },
  {
    quote: "The 3-day aging test before shipping gives us confidence. We've had zero returns in 2 years of partnership. Real quality, not just marketing.",
    author: "Carlos Rivera",
    role: "Technical Director",
    location: "Philippines",
    project: "Industrial Park - 300 units",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-8 md:py-10 bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">Client Testimonials</span>
          <h2 className="heading-lg mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Real feedback from government projects and commercial installations worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="h-12 w-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-muted-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-heading font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
