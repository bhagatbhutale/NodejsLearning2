// Mongoose Started 
const mongoose = require("mongoose");

mongoose.set("strictQuery", false); // Fix Deprecation Warning

const main = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Define Schema
    const ProductSchema = new mongoose.Schema({
      name: String,
      price : Number
    });

    // Define Model
    const ProductsModel = mongoose.model("products", ProductSchema);

    // Insert Data
    let data = new ProductsModel({ name: "b8" , price : 1000});
    let result = await data.save();

    console.log("Data Saved:", result);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  } finally {
    // Close Connection
    mongoose.connection.close();
    console.log("🔌 MongoDB Connection Closed");
  }
};

main();
