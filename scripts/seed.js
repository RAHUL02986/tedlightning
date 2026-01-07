// Script to seed MongoDB with existing products
// Run: node scripts/seed.js

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

// Product schema
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  image: { type: String, required: true },
  badge: String,
  specs: {
    power: String,
    lumens: String,
    autonomy: String,
    warranty: String,
  },
  description: { type: String, required: true },
  features: [String],
});

const Product = mongoose.model('Product', productSchema);

// Category schema and model
const categorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  image: String,
  subcategories: [{ id: String, name: String }],
});

const Category = mongoose.model('Category', categorySchema);

// Sample products from your static data
const sampleProducts = [
  {
    id: "solar-street-light-100w",
    name: "Solar Street Light 100W",
    category: "solar-lighting",
    subcategory: "solar-led-street",
    image: "/assets/product-palm-tree.jpg",
    badge: "Popular",
    specs: {
      power: "100W",
      lumens: "8000 lm",
      autonomy: "3 nights",
      warranty: "5 years"
    },
    description: "Professional solar street lighting solution for roads and infrastructure",
    features: [
      "High efficiency monocrystalline solar panel",
      "Advanced MPPT charge controller",
      "Lithium battery with 5000+ cycles",
      "Motion sensor capability",
      "Smart scheduling system"
    ]
  },
  {
    id: "solar-flood-light-200w",
    name: "Solar Flood Light 200W",
    category: "solar-lighting",
    subcategory: "solar-led-flood",
    image: "/assets/product-flood.jpg",
    badge: "Best Seller",
    specs: {
      power: "200W",
      lumens: "16000 lm",
      autonomy: "4 nights",
      warranty: "5 years"
    },
    description: "Powerful solar flood lighting for large areas",
    features: [
      "Wide beam angle 120°",
      "IP67 waterproof rating",
      "Dimming functionality",
      "Remote control optional",
      "Easy installation"
    ]
  },
  {
    id: "high-power-led-300w",
    name: "High Power LED 300W",
    category: "solar-lighting",
    subcategory: "solar-led-street",
    image: "/assets/product-high-power.jpg",
    specs: {
      power: "300W",
      lumens: "24000 lm",
      autonomy: "5 nights",
      warranty: "10 years"
    },
    description: "High performance industrial grade solar lighting",
    features: [
      "Premium quality components",
      "Extended warranty",
      "Heavy duty construction",
      "Temperature resistant",
      "Long lifespan"
    ]
  },
  {
    id: "split-solar-system",
    name: "Split Solar System",
    category: "energy-storage",
    subcategory: "split-solar",
    image: "/assets/product-split.jpg",
    specs: {
      power: "150W",
      lumens: "12000 lm",
      autonomy: "6 nights",
      warranty: "7 years"
    },
    description: "Modular split solar lighting system for flexibility",
    features: [
      "Separate panel and light",
      "Flexible installation",
      "Scalable capacity",
      "Easy maintenance",
      "Cost effective"
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const result = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${result.length} products`);

    // Categories to seed
    const categories = [
      {
        id: 'solar-lighting',
        name: 'Solar Lighting',
        description: 'All-in-one and split solar lighting systems for roads, infrastructure, and municipal projects.',
        image: '/assets/category-solar-lighting.jpg',
        subcategories: [
          { id: 'all-in-one-led', name: 'All-in-One LED Street Light' },
          { id: 'solar-led-flood', name: 'Solar LED Flood Light' },
          { id: 'solar-led-street', name: 'Solar LED Street Light' },
        ],
      },
      {
        id: 'energy-storage',
        name: 'Energy Storage Systems',
        description: 'Battery storage solutions for residential and commercial applications.',
        image: '/assets/category-energy-storage.jpg',
        subcategories: [
          { id: 'balcony-storage', name: 'Balcony Energy Storage' },
          { id: 'wall-mounted', name: 'Wall-Mounted LiFePO₄ Lithium Battery' },
          { id: 'rack-mounted', name: 'Rack-Mounted Lithium Battery Pack' },
          { id: 'high-voltage-system', name: 'High-Voltage Lithium Battery System' },
          { id: 'commercial-industrial', name: 'Commercial & Industrial Battery Storage System' },
          { id: 'low-voltage-pack', name: 'Low-Voltage LiFePO₄ Battery Pack' },
        ],
      },
      {
        id: 'outdoor-led',
        name: 'Outdoor LED Lighting',
        description: 'High-efficiency LED lighting for outdoor and roadway applications.',
        image: '/assets/category-outdoor-led.jpg',
        subcategories: [
          { id: 'led-street-light', name: 'LED Street Light' },
          { id: 'led-flood-light', name: 'LED Flood Light' },
          { id: 'gas-station-light', name: 'Gas Station Light' },
        ],
      },
      {
        id: 'industrial',
        name: 'Industrial Lighting',
        description: 'Heavy-duty lighting solutions for industrial and commercial facilities.',
        image: '/assets/category-industrial.jpg',
        subcategories: [
          { id: 'led-high-mast', name: 'LED High Mast Light' },
          { id: 'led-post-top', name: 'LED Post Top Light' },
          { id: 'modular-floodlight', name: 'Modular LED Floodlight' },
          { id: 'stadium-light', name: 'Stadium Light' },
          { id: 'ufo-high-bay', name: 'UFO LED High Bay' },
        ],
      },
    ];

    // Clear existing categories and insert
    await Category.deleteMany({});
    await Category.insertMany(categories);
    console.log(`Inserted ${categories.length} categories`);

    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
