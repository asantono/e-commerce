const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./schemas/user");
const authRoutes = require("./routes/authRoutes");
const { sendError } = require("./utils/ErrorHandler");
const cookieParser = require("cookie-parser");
const stripeRoutes = require("./routes/stripeRoutes");

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
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/stripe", stripeRoutes);

app.use((err, req, res, next) => {
  sendError(err, res);
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
