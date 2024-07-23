const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dataBase");
const blogRoutes = require("./routes/blogRoutes");
const app = express();

// Middleware
app.use(express.json());

// app mount

app.use("/posts", blogRoutes);

// default Routes

app.get("/", (req, res) => {
  res.send("Welcome to the blog Website ");
});

dbConnect();
app.listen(4000, () => {
  console.log(`App is listning on ${process.env.PORT}`);
});
