// // Mongoose Started 

const mongoose = require("mongoose");

main()
.then(() => console.log("Connection Successful.."))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const ProductSchema = new mongoose.Schema( {
  name : String,
  age : Number,
  city: String,
  job : String
})

const Product = mongoose.model("Products", ProductSchema)

Product.insertMany([
  {
    name : "yash",
    age : 20,
    city : "uran",
    job : "Mastery in Chatting Developer"
  },
  {
    name : "Mayur",
    age : 30,
    city : "Neral",
    job : "Developer"
  },
  {
    name : "Mouse",
    age : 10,
    city : "room",
    job :  "z"
  }
]).then((res) => console.log(res)).catch((err) => console.log(err))





// 👉 Insert data in DB 

// const product2 = new Product({
//   name : "Ajay",
//   age : 18,
//   city : "raigad",
//   job : "a"
// })

// product2.save()
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err);
// })




























// const mongoose = require("mongoose");

// mongoose.set("strictQuery", false); // Fix Deprecation Warning

// const saveInBD = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-com", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ Connected to MongoDB");

//     // Define Schema
//     const ProductSchema = new mongoose.Schema({
//       name: String,
//       price : Number,
//       brand : String,
//       category : String,
//     });

//     // Define Model
//     const ProductsModel = mongoose.model("products", ProductSchema);

//     // Insert Data
//     let data = new ProductsModel({ name: "b8" , price : 1000, brand: "redmi", category: "mobile"});
//     let result = await data.save();

//     console.log("Data Saved:", result);
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//   } finally {
//     // Close Connection
//     mongoose.connection.close();
//     console.log("🔌 MongoDB Connection Closed");
//   }
// };


// const updateInData = async () => {
//     const Product = mongoose.model("products", ProductsModel)

//     let data = await Product.updateOne(
//       {name : "b8"},
//        {
//         $set : { price : 3500}
//        }
//     )
//     console.log(data)
// }


// const deleteInDb = async () => {
// const ProductsModel = mongoose.model("products", ProductSchema);
// let data = await ProductsModel.deleteOne({name : "Laptop"});
// console.log(data)
// }

// // deleteInDb()
// const findInDb = async () => {
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = await ProductsModel.find();
//   console.log(data);
// };
// findInDb();