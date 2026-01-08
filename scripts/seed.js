// Script to seed MongoDB with existing products and users
// Run: node scripts/seed.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
  price: { type: Number, required: true, min: 0 },
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

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Sample products data (converted from TypeScript)
const sampleProducts = [
  {
    id: "evergen-pro-100",
    name: "EverGen Pro 100W",
    category: "solar-lighting",
    subcategory: "all-in-one-led",
    image: "/assets/product-high-power.jpg",
    badge: "New",
    specs: {
      power: "100W",
      lumens: "15,000 lm",
      autonomy: "4-5 nights",
      warranty: "10 years",
    },
    description: "High-performance all-in-one solar street light with integrated LiFePO4 battery and smart controller.",
    price: 299,
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
    image: "/assets/product-high-power.jpg",
    specs: {
      power: "150W",
      lumens: "22,500 lm",
      autonomy: "4-5 nights",
      warranty: "10 years",
    },
    description: "Premium all-in-one solar street light for main roads and highways.",
    price: 399,
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
    image: "/assets/product-flood.jpg",
    badge: "Hot",
    specs: {
      power: "200W",
      lumens: "30,000 lm",
      autonomy: "3-4 nights",
      warranty: "5 years",
    },
    description: "High-lumen solar flood lighting for industrial yards, compounds, and security zones.",
    price: 499,
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
    image: "/assets/product-split.jpg",
    specs: {
      power: "80W",
      lumens: "12,000 lm",
      autonomy: "5-6 nights",
      warranty: "8 years",
    },
    description: "Flexible split-type solar street light with separate panel positioning.",
    price: 249,
    features: [
      "Separate solar panel",
      "Flexible installation",
      "Extended autonomy",
      "Commercial grade",
    ],
  },
  {
    id: "powerstore-5kwh",
    name: "PowerStore 5kWh",
    category: "energy-storage",
    subcategory: "energy-storage",
    image: "/assets/hero-solar-installation.jpg",
    badge: "New",
    specs: {
      power: "5kWh",
      lumens: "-",
      warranty: "10 years",
    },
    description: "Home energy storage system with intelligent power management.",
    price: 1999,
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
    image: "/assets/hero-project.jpg",
    specs: {
      power: "800W",
      lumens: "-",
      warranty: "5 years",
    },
    description: "Plug-and-play balcony solar system for apartment dwellers.",
    price: 799,
    features: [
      "No installation required",
      "Direct plug-in",
      "App monitoring",
      "Expandable",
    ],
  },
  {
    id: "led-street-60",
    name: "LED Street Light 60W",
    category: "outdoor-led",
    subcategory: "led-street-light",
    image: "/assets/product-palm-tree.jpg",
    specs: {
      power: "60W",
      lumens: "9,000 lm",
      warranty: "5 years",
    },
    description: "Energy-efficient LED street light for urban roadways.",
    price: 149,
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
    image: "/assets/product-flood.jpg",
    specs: {
      power: "100W",
      lumens: "15,000 lm",
      warranty: "5 years",
    },
    description: "Compact LED flood light for area lighting applications.",
    price: 199,
    features: [
      "Slim design",
      "Multiple mounting options",
      "Surge protection",
      "Wide voltage range",
    ],
  },
  {
    id: "high-mast-400",
    name: "LED High Mast 400W",
    category: "industrial",
    subcategory: "led-high-mast",
    image: "/assets/product-high-power.jpg",
    specs: {
      power: "400W",
      lumens: "60,000 lm",
      warranty: "5 years",
    },
    description: "High-power LED high mast light for large area illumination.",
    price: 899,
    features: [
      "Modular design",
      "360° coverage",
      "Wind resistant",
      "Easy maintenance",
    ],
  },
];

// Sample categories data
const categories = [
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

    // Clear existing categories and insert
    await Category.deleteMany({});
    await Category.insertMany(categories);
    console.log(`Inserted ${categories.length} categories`);

    // Create super admin user
    const adminEmail = 'admin@tedlighting.com';
    const adminPassword = 'Admin123!';

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminEmail.toLowerCase() });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 12);
      const adminUser = new User({
        email: adminEmail.toLowerCase(),
        password: hashedPassword,
        role: 'admin',
      });
      await adminUser.save();
      console.log('Super admin user created successfully');
      console.log(`Email: ${adminEmail}`);
      console.log(`Password: ${adminPassword}`);
    } else {
      console.log('Super admin user already exists');
    }

    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
