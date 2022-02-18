"use strict";

/********************************
 **** Managing all the routes ***
 ********* independently ********
 ********************************/
module.exports = (app) => {
  require("../routes/tutorial.routes")(app);
};
