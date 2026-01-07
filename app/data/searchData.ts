import { products } from "./products";

// Projects data for search
export const projectsData = [
  {
    id: "highway-lighting-nigeria",
    title: "Lagos-Ibadan Expressway",
    location: "Nigeria",
    category: "Infrastructure",
    type: "project" as const,
  },
  {
    id: "industrial-park-vietnam",
    title: "Binh Duong Industrial Park",
    location: "Vietnam",
    category: "Industrial",
    type: "project" as const,
  },
  {
    id: "municipal-project-philippines",
    title: "Cebu City Streets",
    location: "Philippines",
    category: "Infrastructure",
    type: "project" as const,
  },
  {
    id: "commercial-complex-uae",
    title: "Dubai Business Park",
    location: "UAE",
    category: "Commercial",
    type: "project" as const,
  },
  {
    id: "residential-community-indonesia",
    title: "Jakarta Smart Village",
    location: "Indonesia",
    category: "Residential",
    type: "project" as const,
  },
  {
    id: "highway-project-kenya",
    title: "Nairobi-Mombasa Highway",
    location: "Kenya",
    category: "Infrastructure",
    type: "project" as const,
  },
  {
    id: "port-lighting-bangladesh",
    title: "Chittagong Port Area",
    location: "Bangladesh",
    category: "Industrial",
    type: "project" as const,
  },
  {
    id: "shopping-center-thailand",
    title: "Pattaya Mall Complex",
    location: "Thailand",
    category: "Commercial",
    type: "project" as const,
  },
];

// Blog posts data for search
export const blogPostsData = [
  {
    id: "solar-lighting-future-2024",
    title: "The Future of Solar Street Lighting: 2024 Trends and Innovations",
    category: "Industry News",
    type: "blog" as const,
  },
  {
    id: "choosing-right-solar-light",
    title: "How to Choose the Right Solar Street Light for Your Project",
    category: "Technical",
    type: "blog" as const,
  },
  {
    id: "nigeria-highway-case-study",
    title: "Case Study: Lagos-Ibadan Expressway Solar Lighting Project",
    category: "Case Studies",
    type: "blog" as const,
  },
  {
    id: "lifepo4-battery-advantages",
    title: "Why LiFePO4 Batteries Are the Gold Standard for Solar Lighting",
    category: "Technical",
    type: "blog" as const,
  },
  {
    id: "smart-city-integration",
    title: "Integrating Solar Lighting into Smart City Infrastructure",
    category: "Industry News",
    type: "blog" as const,
  },
  {
    id: "manufacturing-excellence",
    title: "Inside TedLighting: Our Manufacturing Process Explained",
    category: "Company",
    type: "blog" as const,
  },
  {
    id: "solar-vs-grid-lighting",
    title: "Solar vs Grid-Powered Street Lights: A Cost-Benefit Analysis",
    category: "Technical",
    type: "blog" as const,
  },
  {
    id: "africa-solar-growth",
    title: "Solar Lighting Adoption in Africa: Growth and Opportunities",
    category: "Industry News",
    type: "blog" as const,
  },
];

export interface SearchResult {
  id: string;
  title: string;
  type: "product" | "project" | "blog";
  category?: string;
  location?: string;
  url: string;
}

export function searchAll(query: string): SearchResult[] {
  if (!query || query.length < 2) return [];

  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search products
  products.forEach((product) => {
    if (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: product.id,
        title: product.name,
        type: "product",
        category: product.category,
        url: `/products/${product.id}`,
      });
    }
  });

  // Search projects
  projectsData.forEach((project) => {
    if (
      project.title.toLowerCase().includes(lowerQuery) ||
      project.location.toLowerCase().includes(lowerQuery) ||
      project.category.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: project.id,
        title: project.title,
        type: "project",
        category: project.category,
        location: project.location,
        url: `/projects/${project.id}`,
      });
    }
  });

  // Search blog posts
  blogPostsData.forEach((post) => {
    if (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: post.id,
        title: post.title,
        type: "blog",
        category: post.category,
        url: `/blog/${post.id}`,
      });
    }
  });

  return results.slice(0, 8);
}
