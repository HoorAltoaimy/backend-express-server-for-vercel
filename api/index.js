const express = require("express");
require('dotenv').config()

const productsRouter = require("./routes/productsRoutes");

const app = express();
const PORT = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.status(200).send("API is working fine");
});

app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server is runing at ${PORT}`);
  });
