const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send({ message: "This is still in development" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
