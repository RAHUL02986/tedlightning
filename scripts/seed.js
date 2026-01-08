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

    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
