const express = require("express");
const pricingRouter = express.Router();

// pricing

pricingRouter.route("/").get((req, res) => {
    res.render("pricing", { title: "Pricing" });
    res.statusCode = 200;
});

module.exports = pricingRouter;
