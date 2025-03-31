const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const villes = JSON.parse(fs.readFileSync("villes.json", "utf-8"));

app.get("/villes", (req, res) => {
    res.json(villes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API en ligne sur http://localhost:${PORT}`));