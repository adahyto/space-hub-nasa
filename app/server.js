const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/spacehub"));
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/dist/spacehub/ngsw-worker.js"));
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/spacehub/index.html"));
});

app.listen(3003);
