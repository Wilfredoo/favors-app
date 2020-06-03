const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const favors = require("./routes/favors");
const users = require("./routes/users");
const { connectionString } = require("./config/localconfig");
const app = express();
const port = process.env.PORT || 5000;

const passport = require("passport");

app.use(passport.initialize());
require("./config/passport")(passport);


mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/favors", favors);
app.use("/api/users", users);


app.listen(port, () => console.log(`Listening on port ${port}`));