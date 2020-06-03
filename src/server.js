const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const favors = require("./routes/favors");
const { connectionString } = require("./config/localconfig");
const app = express();
const port = process.env.PORT || 5000;

// const connectionString = 'mongodb+srv://wilfredo:789654123@cluster0-6i2yb.gcp.mongodb.net/favors?retryWrites=true&w=majority'

mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/favors", favors);

app.listen(port, () => console.log(`Listening on port ${port}`));