const express = require("express");
const cors = require("cors");
require("./db/config/config");
const port = 4443;

// UserModel
const userModel = require("./db/User/user");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.post("/signUp", async (req, res) => {
  const user = new userModel(req.body);
  const data = await user.save();
  console.log(data);
  res.send(data);
});

app.listen(port);
