const express = require("express");
const path = require("path");

const productRoutes = require("./routes/products");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/products", productRoutes);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`SmartCart server running at http://localhost:${PORT}`);
    });
}

module.exports = app;