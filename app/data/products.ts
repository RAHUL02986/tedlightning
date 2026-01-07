import { StaticImageData } from "next/image";
import productPalmTree from "../../public/assets/product-palm-tree.jpg";
import productHighPower from "../../public/assets/product-high-power.jpg";
import productSplit from "../../public/assets/product-split.jpg";
import productFlood from "../../public/assets/product-flood.jpg";
import productSolar from "../../public/assets/hero-solar-installation.jpg";
import productHero from "../../public/assets/hero-project.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  image: StaticImageData;
  badge?: string;
  specs: {
    power: string;
    lumens: string;
    autonomy?: string;
    warranty: string;
  };
  description: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: {
    id: string;
    name: string;
  }[];
}

export const categories: Category[] = [
  {
    id: "solar-lighting",
    name: "Solar Lighting",
    description: "All-in-one and split solar lighting systems for roads, infrastructure, and municipal projects.",
    subcategories: [
      { id: "all-in-one-led", name: "All-in-One LED Street Light" },
      { id: "solar-led-flood", name: "Solar LED Flood Light" },
      { id: "solar-led-street", name: "Solar LED Street Light" },
    ],
  },
  {
    id: "energy-storage",
    name: "Energy Storage Systems",
    description: "Battery storage solutions for residential and commercial applications.",
    subcategories: [
      { id: "balcony-storage", name: "Balcony Energy Storage" },
      { id: "wall-mounted", name: "Wall-Mounted LiFePO₄ Lithium Battery" },
      { id: "rack-mounted", name: "Rack-Mounted Lithium Battery Pack" },
      { id: "high-voltage-system", name: "High-Voltage Lithium Battery System" },
      { id: "commercial-industrial", name: "Commercial & Industrial Battery Storage System" },
      { id: "low-voltage-pack", name: "Low-Voltage LiFePO₄ Battery Pack" },
    ],
  },
  {
    id: "outdoor-led",
    name: "Outdoor LED Lighting",
    description: "High-efficiency LED lighting for outdoor and roadway applications.",
    subcategories: [
      { id: "led-street-light", name: "LED Street Light" },
      { id: "led-flood-light", name: "LED Flood Light" },
      { id: "gas-station-light", name: "Gas Station Light" },
    ],
  },
  {
    id: "industrial",
    name: "Industrial Lighting",
    description: "Heavy-duty lighting solutions for industrial and commercial facilities.",
    subcategories: [
      { id: "led-high-mast", name: "LED High Mast Light" },
      { id: "led-post-top", name: "LED Post Top Light" },
      { id: "modular-floodlight", name: "Modular LED Floodlight" },
      { id: "stadium-light", name: "Stadium Light" },
      { id: "ufo-high-bay", name: "UFO LED High Bay" },
    ],
  },
];

export const products: Product[] = [
  // Solar Lighting
  {
    id: "evergen-pro-100",
    name: "EverGen Pro 100W",
    category: "solar-lighting",
    subcategory: "all-in-one-led",
    image: productHighPower,
    badge: "New",
    specs: {
      power: "100W",
      lumens: "15,000 lm",
      autonomy: "4-5 nights",
      warranty: "10 years",
    },
    description: "High-performance all-in-one solar street light with integrated LiFePO4 battery and smart controller.",
    features: [
      "LiFePO4 Battery - 50,000 cycles",
      "3030 LED chips - 180lm/W",
      "IP66 Waterproof Rating",
      "PIR Motion Sensor",
      "Remote App Control",
    ],
  },
  {
    id: "evergen-pro-150",
    name: "EverGen Pro 150W",
    category: "solar-lighting",
    subcategory: "all-in-one-led",
    image: productHighPower,
    specs: {
      power: "150W",
      lumens: "22,500 lm",
      autonomy: "4-5 nights",
      warranty: "10 years",
    },
    description: "Premium all-in-one solar street light for main roads and highways.",
    features: [
      "LiFePO4 Battery - 50,000 cycles",
      "3030 LED chips - 180lm/W",
      "IP66 Waterproof Rating",
      "PIR Motion Sensor",
      "Remote App Control",
    ],
  },
  {
    id: "solar-flood-200",
    name: "Solar Flood 200W",
    category: "solar-lighting",
    subcategory: "solar-led-flood",
    image: productFlood,
    badge: "Hot",
    specs: {
      power: "200W",
      lumens: "30,000 lm",
      autonomy: "3-4 nights",
      warranty: "5 years",
    },
    description: "High-lumen solar flood lighting for industrial yards, compounds, and security zones.",
    features: [
      "Wide beam angle 120°",
      "Adjustable bracket",
      "Anti-theft design",
      "Smart dimming",
    ],
  },
  {
    id: "split-solar-80",
    name: "Split Solar 80W",
    category: "solar-lighting",
    subcategory: "solar-led-street",
    image: productSplit,
    specs: {
      power: "80W",
      lumens: "12,000 lm",
      autonomy: "5-6 nights",
      warranty: "8 years",
    },
    description: "Flexible split-type solar street light with separate panel positioning.",
    features: [
      "Separate solar panel",
      "Flexible installation",
      "Extended autonomy",
      "Commercial grade",
    ],
  },
  // Energy Storage
  {
    id: "powerstore-5kwh",
    name: "PowerStore 5kWh",
    category: "energy-storage",
    subcategory: "energy-storage",
    image: productSolar,
    badge: "New",
    specs: {
      power: "5kWh",
      lumens: "-",
      warranty: "10 years",
    },
    description: "Home energy storage system with intelligent power management.",
    features: [
      "LiFePO4 cells",
      "6000+ cycles",
      "Smart BMS",
      "App monitoring",
    ],
  },
  {
    id: "balcony-800w",
    name: "Balcony System 800W",
    category: "energy-storage",
    subcategory: "balcony-storage",
    image: productHero,
    specs: {
      power: "800W",
      lumens: "-",
      warranty: "5 years",
    },
    description: "Plug-and-play balcony solar system for apartment dwellers.",
    features: [
      "No installation required",
      "Direct plug-in",
      "App monitoring",
      "Expandable",
    ],
  },
  {
    id: "hybrid-inverter-5kw",
    name: "Hybrid Inverter 5kW",
    category: "energy-storage",
    subcategory: "hybrid-inverter",
    image: productSolar,
    specs: {
      power: "5kW",
      lumens: "-",
      warranty: "10 years",
    },
    description: "Grid-tied hybrid inverter with battery backup capability.",
    features: [
      "Grid-tied + Off-grid",
      "MPPT charge controller",
      "LCD display",
      "Multiple protection",
    ],
  },
  // Outdoor LED
  {
    id: "led-street-60",
    name: "LED Street Light 60W",
    category: "outdoor-led",
    subcategory: "led-street-light",
    image: productPalmTree,
    specs: {
      power: "60W",
      lumens: "9,000 lm",
      warranty: "5 years",
    },
    description: "Energy-efficient LED street light for urban roadways.",
    features: [
      "Philips LED chips",
      "Die-cast aluminum",
      "IP66 rated",
      "Tool-free maintenance",
    ],
  },
  {
    id: "led-flood-100",
    name: "LED Flood Light 100W",
    category: "outdoor-led",
    subcategory: "led-flood-light",
    image: productFlood,
    specs: {
      power: "100W",
      lumens: "15,000 lm",
      warranty: "5 years",
    },
    description: "Compact LED flood light for area lighting applications.",
    features: [
      "Slim design",
      "Multiple mounting options",
      "Surge protection",
      "Wide voltage range",
    ],
  },
  {
    id: "gas-station-150",
    name: "Gas Station Light 150W",
    category: "outdoor-led",
    subcategory: "gas-station-light",
    image: productHero,
    badge: "Popular",
    specs: {
      power: "150W",
      lumens: "22,500 lm",
      warranty: "5 years",
    },
    description: "Explosion-proof LED canopy light for fuel stations.",
    features: [
      "ATEX certified",
      "Anti-glare design",
      "IK10 impact rating",
      "Uniform illumination",
    ],
  },
  // Industrial
  {
    id: "high-mast-400",
    name: "LED High Mast 400W",
    category: "industrial",
    subcategory: "led-high-mast",
    image: productHighPower,
    specs: {
      power: "400W",
      lumens: "60,000 lm",
      warranty: "5 years",
    },
    description: "High-power LED high mast light for large area illumination.",
    features: [
      "Modular design",
      "360° coverage",
      "Wind resistant",
      "Easy maintenance",
    ],
  },
  {
    id: "post-top-60",
    name: "LED Post Top 60W",
    category: "industrial",
    subcategory: "led-post-top",
    image: productPalmTree,
    specs: {
      power: "60W",
      lumens: "7,800 lm",
      warranty: "5 years",
    },
    description: "Decorative LED post top light for parks and pathways.",
    features: [
      "Classic design",
      "Multiple finishes",
      "Photo sensor option",
      "Easy retrofit",
    ],
  },
  {
    id: "stadium-1000",
    name: "Stadium Light 1000W",
    category: "industrial",
    subcategory: "stadium-light",
    image: productFlood,
    badge: "Premium",
    specs: {
      power: "1000W",
      lumens: "150,000 lm",
      warranty: "5 years",
    },
    description: "Professional stadium lighting for sports facilities.",
    features: [
      "Anti-glare optics",
      "DMX dimmable",
      "High CRI > 90",
      "Instant start",
    ],
  },
  {
    id: "ufo-highbay-200",
    name: "UFO High Bay 200W",
    category: "industrial",
    subcategory: "ufo-high-bay",
    image: productHighPower,
    specs: {
      power: "200W",
      lumens: "30,000 lm",
      warranty: "5 years",
    },
    description: "Compact UFO high bay for warehouses and factories.",
    features: [
      "UFO compact design",
      "Heat dissipation fins",
      "Hook + bracket mount",
      "0-10V dimmable",
    ],
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return products.filter((p) => p.subcategory === subcategoryId);
}

export function getProductById(productId: string): Product | undefined {
  return products.find((p) => p.id === productId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}
