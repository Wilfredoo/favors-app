const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { Favors } = require('./models/favorSchema.js')


async function createUser(username) {
  return new User({
    username,
    created: Date.now()
  }).save()
}


const app = express();
const port = process.env.PORT || 5000;

const connectionString = 'mongodb+srv://wilfredo:789654123@cluster0-6i2yb.gcp.mongodb.net/favors?retryWrites=true&w=majority'


mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/createFavor", async (req, res) => {
  console.log("let's create a favor", req.body)
  try {
    const newFavor = await Favors.create(req.body);
    res.status(200).json({
      status: "success",
      data: newFavor
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err
    });
    console.error(err);
  }
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));