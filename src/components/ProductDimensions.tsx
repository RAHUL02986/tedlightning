import { useState } from "react";
import { Ruler, ChevronLeft, ChevronRight } from "lucide-react";

interface DimensionVariant {
  model: string;
  length: string;
  width: string;
  height: string;
}

interface ProductDimensionsProps {
  dimensions?: DimensionVariant[];
  productName: string;
}

const defaultDimensions: DimensionVariant[] = [
  { model: "Standard 90W", length: "1011mm", width: "439mm", height: "75mm" },
  { model: "Standard 120W", length: "1283mm", width: "439mm", height: "75mm" },
  { model: "Standard 150W", length: "1560mm", width: "439mm", height: "75mm" },
];

export const ProductDimensions = ({ dimensions = defaultDimensions, productName }: ProductDimensionsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const displayDimensions = dimensions.slice(0, 3);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? displayDimensions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === displayDimensions.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16">
      <div className="container-main">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Ruler className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
            Product Dimensions
          </h2>
        </div>

        <div className="bg-muted/30 rounded-2xl overflow-hidden mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-muted/50 border-b border-border">
            <div className="font-heading font-semibold text-foreground text-sm">Model</div>
            <div className="font-heading font-semibold text-foreground text-sm text-center">Length</div>
            <div className="font-heading font-semibold text-foreground text-sm text-center">Width</div>
            <div className="font-heading font-semibold text-foreground text-sm text-center">Height</div>
          </div>

          {/* Table Rows */}
          {dimensions.map((dim, index) => (
            <div
              key={dim.model}
              className={`grid grid-cols-4 gap-4 px-6 py-4 ${
                index !== dimensions.length - 1 ? "border-b border-border" : ""
              } hover:bg-muted/50 transition-colors`}
            >
              <div className="font-medium text-foreground">{dim.model}</div>
              <div className="text-muted-foreground text-center">{dim.length}</div>
              <div className="text-muted-foreground text-center">{dim.width}</div>
              <div className="text-muted-foreground text-center">{dim.height}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Slidable Dimension Diagrams */}
      <div className="relative group">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 shadow-lg"
          aria-label="Previous dimension"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 shadow-lg"
          aria-label="Next dimension"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Slides Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {displayDimensions.map((dim) => (
              <div key={dim.model} className="w-full flex-shrink-0">
                <div className="bg-muted/30 w-full">
                  <div className="aspect-[21/9] lg:aspect-[3/1] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                    {/* Model Name Overlay */}
                    <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
                      <h4 className="font-heading font-bold text-xl lg:text-2xl text-foreground">{dim.model}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {dim.length} × {dim.width} × {dim.height}
                      </p>
                    </div>

                    {/* Large Stylized Dimension Diagram */}
                    <div className="relative scale-150 lg:scale-[2]">
                      <div className="w-40 h-10 bg-primary/20 rounded-sm border-2 border-primary/40 shadow-lg" />
                      
                      {/* Length Arrow */}
                      <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-3 bg-foreground/60" />
                          <div className="flex-1 h-0.5 bg-foreground/60" style={{ width: '140px' }} />
                          <div className="w-1.5 h-3 bg-foreground/60" />
                        </div>
                      </div>
                      <span className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-sm font-medium text-foreground">
                        {dim.length}
                      </span>

                      {/* Height Arrow */}
                      <div className="absolute -right-10 top-0 bottom-0 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-3 h-1.5 bg-foreground/60" />
                          <div className="w-0.5 flex-1 bg-foreground/60" style={{ height: '32px' }} />
                          <div className="w-3 h-1.5 bg-foreground/60" />
                        </div>
                      </div>
                      <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-sm font-medium text-foreground">
                        {dim.height}
                      </span>

                      {/* Width Arrow (perspective) */}
                      <div className="absolute -left-10 top-1/2 -translate-y-1/2">
                        <span className="text-sm font-medium text-muted-foreground">W: {dim.width}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {displayDimensions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-6 bg-primary" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
