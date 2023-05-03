const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080;

app.use(cors())

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
