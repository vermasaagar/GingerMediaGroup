const express = require("express");
const app = express();
const connection = require("./config/database");
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const userRoutes = require("./controllers/userControllers");

const PORT = process.env.PORT || 4000;

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("This is the Homepage 🏠");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connection success ✅");
  } catch (err) {
    console.log("Error while connection❌");
    console.log(err);
  }
});
