import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, X } from "lucide-react";
// Local Product interface matching DB shape
interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  badge?: string;
  specs: { power: string; lumens?: string; autonomy?: string; warranty?: string };
  description: string;
  features: string[];
}
import { Button } from "@/components/ui/button";

interface RelatedProductsSectionProps {
  products: Product[];
  currentCategory: string;
}

type FilterType = "all" | "power" | "lumens" | "warranty";

interface FilterOption {
  id: FilterType;
  label: string;
}

const filterOptions: FilterOption[] = [
  { id: "all", label: "All" },
  { id: "power", label: "Power" },
  { id: "lumens", label: "Brightness" },
  { id: "warranty", label: "Warranty" },
];

// Extract numeric value from spec string (e.g., "100W" -> 100)
const extractNumeric = (value: string): number => {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

// Get power range label
const getPowerRange = (power: string): string => {
  const value = extractNumeric(power);
  if (value <= 50) return "≤50W";
  if (value <= 100) return "51-100W";
  if (value <= 200) return "101-200W";
  return ">200W";
};

// Get lumens range label
const getLumensRange = (lumens: string): string => {
  const value = extractNumeric(lumens);
  if (value <= 5000) return "≤5,000lm";
  if (value <= 15000) return "5,001-15,000lm";
  if (value <= 30000) return "15,001-30,000lm";
  return ">30,000lm";
};

export const RelatedProductsSection = ({ products, currentCategory }: RelatedProductsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique filter values based on active filter
  const filterValues = useMemo(() => {
    if (activeFilter === "all") return [];
    
    const values = new Set<string>();
    products.forEach((product) => {
      if (activeFilter === "power") {
        values.add(getPowerRange(product.specs.power));
      } else if (activeFilter === "lumens") {
        values.add(getLumensRange(product.specs.lumens));
      } else if (activeFilter === "warranty") {
        values.add(product.specs.warranty);
      }
    });
    
    return Array.from(values).sort();
  }, [products, activeFilter]);

  // Filter products based on selection
  const filteredProducts = useMemo(() => {
    if (activeFilter === "all" || !selectedValue) return products;

    return products.filter((product) => {
      if (activeFilter === "power") {
        return getPowerRange(product.specs.power) === selectedValue;
      } else if (activeFilter === "lumens") {
        return getLumensRange(product.specs.lumens) === selectedValue;
      } else if (activeFilter === "warranty") {
        return product.specs.warranty === selectedValue;
      }
      return true;
    });
  }, [products, activeFilter, selectedValue]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setSelectedValue(null);
  };

  const clearFilters = () => {
    setActiveFilter("all");
    setSelectedValue(null);
  };

  if (products.length === 0) return null;

  return (
    <section className="bg-muted/30 py-16">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">Related Products</h2>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={`rounded-full ${showFilters ? "bg-primary text-primary-foreground" : ""}`}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter by Specs
            </Button>
            <Link 
              href={`/products?category=${currentCategory}`}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Filter Controls */}
        {showFilters && (
          <div className="mb-8 p-4 bg-background rounded-xl border border-border animate-fade-in">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm font-medium text-muted-foreground mr-2">Filter by:</span>
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleFilterChange(option.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === option.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {option.label}
                </button>
              ))}
              {(activeFilter !== "all" || selectedValue) && (
                <button
                  onClick={clearFilters}
                  className="ml-auto flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>

            {/* Filter Values */}
            {activeFilter !== "all" && filterValues.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground mr-2">
                  {activeFilter === "power" && "Power range:"}
                  {activeFilter === "lumens" && "Brightness range:"}
                  {activeFilter === "warranty" && "Warranty period:"}
                </span>
                {filterValues.map((value) => (
                  <button
                    key={value}
                    onClick={() => setSelectedValue(selectedValue === value ? null : value)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedValue === value
                        ? "bg-primary/20 text-primary border border-primary"
                        : "bg-muted/50 text-foreground border border-border hover:border-primary/50"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            )}

            {/* Results count */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> of{" "}
                <span className="font-medium text-foreground">{products.length}</span> products
              </p>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((related) => (
            <Link
              key={related.id}
              href={`/products/${related.id}`}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-muted/50">
                <Image
                  src={related.image}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {related.name}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {related.description}
                </p>
                {/* Quick Specs */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">
                    {related.specs.power}
                  </span>
                  <span className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">
                    {related.specs.lumens}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products match your filter criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="rounded-full">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
