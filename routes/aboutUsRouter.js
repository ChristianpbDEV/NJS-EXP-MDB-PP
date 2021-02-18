const express = require("express");
const aboutUsRouter = express.Router();

// About Us

aboutUsRouter.route("/").get((req, res) => {
    res.render("about", { title: "About Us" });
    res.statusCode = 200;
});

module.exports = aboutUsRouter;
