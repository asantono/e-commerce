const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./schemas/user");

require("dotenv").config();

const app = express();

app.enable("trust proxy");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/api/v1/auth/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const newUser = await User.create({
      email,
      password,
    });
    console.log(newUser);
    res.status(201).json({ user: newUser });
  } catch (err) {
    console.log("error occured");
  }
});

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database!!!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
