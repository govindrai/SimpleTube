const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, function() {
  console.log("SimpleTube is now listening for connections!");
});
