let router = require("express").Router();
let burger = require("../models/burger");

router.get("/", async function(req, res) {
  //get all burgers and display them in their respective containers
  burger.getAll(function(err, data) {
    if (err) return res.status(500).json(err);
    res.render("index", { burgers: data });
  });
});

router.post("/", function(req, res) {
  //insert new burger OR
  let newBurger = req.body.burger;
  console.log("Creating: " + newBurger);
  burger.createBurger(newBurger, function(err, data) {
    if (err) return res.status(500).json(err);
    res.status(200).json("Success!");
  });
  //reroute to "/";
});

router.put("/", function(req, res) {
  //update burger
  let burgerID = req.body.burger;
  burger.eatBurger(burgerID, function(err, data) {
    if (err) return res.status(500).json(err);
    res.status(200).json("Success!");
  });
});

module.exports = router;
