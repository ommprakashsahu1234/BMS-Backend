const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 20000
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stop the server if DB fails
  }
};

module.exports = connectToDB;
