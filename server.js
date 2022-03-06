const express = require("express");
const bodyParser = require("body-parser");

//__Create Express App__//
const app = express();

//__Parse requests of content-type - application/x-ww-form-urlencoded__//
app.use(bodyParser.urlencoded({ extended: true }));

//__Parse requests of content-type - application/json__//
app.use(bodyParser.json());

//__define a simple root route__//
app.get("/", (request, response) => {
  response.json({
    message:
      "Welcome to easy note taking application. Takes note quickly. Organize and keep track af all your notes.",
  });
});

//__Setup Request Listener__//
app.listen(5000, () => {
  console.log("Server is Running on port: 5000");
});
