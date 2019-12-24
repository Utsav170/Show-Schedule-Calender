const express = require("express");
const fetch = require("node-fetch");

const app = express();

fetch("http://124.41.240.154:9803/api/nowshowinginfo")
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    result = data;
  })
  .catch(err => console.log(err));

app.get("/api/shows", (req, res) => {
  res.send(result);
});

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
