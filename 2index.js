const express  = require("express");
require("./config")
const Product = require("./product")

const app = express()
app.use(express.json())
// Post Method
app.post("/create", async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(req.body)
    res.send(result)
})

// get data list 
app.get("/list", async (req, res) => {
    let data = await Product.find()
    res.send(data)
})

// delete data 
app.delete("/delete/:_id", async(req,res) => {
    console.log(req.params)
     let data = await Product.deleteOne(req.params);
res.send(data)
})

// Update Data
app.put("/update/:_id", async (req, res) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params, 
        {
            $set: req.body
        }
    )
    res.send(data)
})

app.listen(5000)