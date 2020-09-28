const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const authController = require("./controllers/authController");
const { sendError } = require("./utils/ErrorHandler");
const User = require("./schemas/user");

const app = express();

// proxy support
app.enable("trust proxy");

// cross origin request support for development
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Parse req.body and req.cookies
app.use(bodyParser.json());
app.use(cookieParser());

// Remove any instance the word 'clearance' as a key in req.body
app.use(authController.blackList("clearance"));

// Routes
app.use("/api/v1/auth", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    res.status(201).json({ email, password, msg: "Sent from the server!!!" });
  } catch (err) {
    console.log("error occured");
  }
});

//   try {
//     const { email, password } = req.body;
//     const newUser = await User.create({
//       email,
//       password,
//     });
//     newUser.password = null;
//     res.status(201).json({ user: newUser });
//   } catch (err) {
//     res.status(400).json("error occured");
//   }
// });

// app.use("/api/v1/auth", authRoutes);

// Middleware
app.use((err, req, res, next) => {
  console.log("send error");
  sendError(err, res);
});

// MongoDb database connection
// connection string should be put
// in the .env file DATABASE=connectionstring
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the database!"));

// port for the server should be put
// in the .env file PORT=5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
