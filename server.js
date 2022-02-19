const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const db = require("./app/models");

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

db.sequelize.sync(
  // //drop the table if it already exists
//   { force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// }
);

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to the API."});
});

require("./app/routes/index")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
