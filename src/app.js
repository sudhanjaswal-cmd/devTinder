const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Sudhanshu jaswal");
});

app.listen(3000, () => {
  console.log("Server running successfully");
});
