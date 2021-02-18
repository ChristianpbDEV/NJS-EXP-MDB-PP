const express = require("express");
const barbersRouter = express.Router();

// barbers

barbersRouter.route("/").get((req, res) => {
    res.render("barbers", { title: "Barbers" });
});

//book appointment

barbersRouter.route("/book").get((req, res) => {
    res.render("book", { title: "Book" });
});

module.exports = barbersRouter;
