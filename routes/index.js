const express = require("express");
const router = express.Router();
const hbs = require("hbs");

router.get("/", function (req, res, next) {
  res.render("template", { name: "Hello world!" });
});

module.exports = router;