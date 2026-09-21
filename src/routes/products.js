const express = require("express");

const router = express.Router();

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1499
    }
];

router.get("/", (req, res) => {
    res.json(products);
});

module.exports = router;