// 👉 Multer use
const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file")

app.post("/upload", upload, (req, res) => {
  res.send("File is Uploaded");
});

app.listen(7000);

// const express  = require("express");
// require("./config")
// const Product = require("./product")

// const app = express()
// app.use(express.json())

// // 👉 Search data using Nodejs Mongodb

// app.get("/search/:key", async (req,res) => {
//     console.log(req.params.key)
//     let data = await Product.find(
//         {
//             "$or": [
//                 { "name" : {$regex:req.params.key}},
//                  { "city" : {$regex:req.params.key}}
//             ]
//         }
//     )
//     res.send(data)
// })

// Post Method
// app.post("/create", async (req, res) => {
//     let data = new Product(req.body)
//     let result = await data.save()
//     console.log(req.body)
//     res.send(result)
// })

// // get data list
// app.get("/list", async (req, res) => {
//     let data = await Product.find()
//     res.send(data)
// })

// // delete data
// app.delete("/delete/:_id", async(req,res) => {
//     console.log(req.params)
//      let data = await Product.deleteOne(req.params);
// res.send(data)
// })

// // Update Data
// app.put("/update/:_id", async (req, res) => {
//     console.log(req.params)
//     let data = await Product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }
//     )
//     res.send(data)
// })

app.listen(5000);
