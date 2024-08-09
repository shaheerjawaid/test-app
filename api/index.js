const express = require("express");
const app = express();

const mainRoutes = require('./routes/main.routes');

app.use('/', mainRoutes);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;