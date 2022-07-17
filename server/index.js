const express = require("express");
const cors = require("cors");
require("./db/config/config");
const port = 4443;

// Models
const userModel = require("./db/User/user"); //UserModel
const productModel = require("./db/Product/Product");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Sign Up Api
app.post("/signUp", async (req, res) => {
  const user = new userModel(req.body);
  const data = await user.save();
  const result = data.toObject();
  delete result.password;
  console.log(result);
  res.send(result);
});

// Login Api
app.post("/logIn", async (req, res) => {
  if (req.body.email && req.body.password) {
    const data = await userModel.findOne(req.body).select(" -password");
    console.log(data);
    if (data) {
      return res.send(data);
    }
    return res.send("No User Found !!");
  } else {
    res.send("No User Found !!");
  }
});

//Add products Api
app.post("/addProduct", async (req, res) => {
  const product = new productModel(req.body);
  const data = await product.save();
  console.log(data);
  res.send(data);
});

app.listen(port);
