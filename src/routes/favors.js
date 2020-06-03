const express = require("express");
const router = express.Router();
const { Favors } = require('../models/favorSchema.js')

router.post("/createFavor", async (req, res) => {
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

router.get("/:id", async (req, res) => {
  try {
    const favor = await Favors.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: favor
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
    console.error(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedFavor = await Favors.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: "success",
      data: updatedFavor
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
    console.error(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Favors.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
    console.error(err);
  }
});

module.exports = router;