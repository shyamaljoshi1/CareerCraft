/**
 * Seed Script for Complete Domain Data
 * Seeds all 8 domains with complete topics, resources, projects, and organizations to MongoDB
 * 
 * Usage: 
 *   npm run seed
 *   node scripts/seedDomains.js
 * 
 * Note: MongoDB must be running before executing this script
 */

const mongoose = require('mongoose');
const Domain = require('../models/Domain');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Load complete domain data from JSON file
const domainsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'domains-data.json'), 'utf-8')
).domains;

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/careercraft';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Seed domains to database
const seedDomains = async () => {
  try {
    console.log('\n Starting domain seeding...\n');

    // Clear existing domains (optional - comment out if you want to keep existing data)
    const deletedCount = await Domain.deleteMany({});
    console.log(`Deleted ${deletedCount.deletedCount} existing domains`);

    // Insert all domains
    const result = await Domain.insertMany(domainsData);
    console.log(`Successfully seeded ${result.length} domains`);

    // Log seeded domains
    console.log('\n Seeded Domains:');
    result.forEach(domain => {
      console.log(`   - ${domain.title} (${domain.id})`);
    });

    console.log('\n Seeding completed successfully!\n');
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

// Run the seeding
const runSeed = async () => {
  await connectDB();
  await seedDomains();
  await mongoose.connection.close();
  console.log('🔌 Database connection closed');
};

runSeed();
