import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  badge?: string;
}

export const ProductImageGallery = ({ images, productName, badge }: ProductImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative group">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Main Image */}
        <div className="aspect-square rounded-xl overflow-hidden bg-muted relative">
          <img
            src={images[currentIndex]}
            alt={`${productName} - View ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
            draggable={false}
          />

          {/* Badge */}
          {badge && (
            <span className="absolute top-4 left-4 text-xs font-medium uppercase bg-primary text-primary-foreground px-3 py-1.5 rounded-full z-10">
              {badge}
            </span>
          )}
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-xs text-muted-foreground">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`aspect-square rounded-lg overflow-hidden bg-muted transition-all duration-200 ${
              index === currentIndex
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "hover:ring-2 ring-muted-foreground/30"
            }`}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
