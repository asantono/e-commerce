const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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
    res.status(201).json({ email, password, msg: "Sent from the SERVER!!!!!" });
  } catch (err) {
    console.log("error occured");
  }
});

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
