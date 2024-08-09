const express = require("express");
const app = express();

app.get("/", (request, response) => response.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;