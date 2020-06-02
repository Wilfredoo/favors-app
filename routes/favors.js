const express = require("express");
const router = express.Router();
const { Favors } = require('../models/favorSchema.js')


// create favor
router.post("/createFavor", async (req, res) => {
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

module.exports = router;