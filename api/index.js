require("dotenv").config();

const express = require("express");
const app = express();

const mainRoutes = require('./routes/main.routes');

app.use(process.env.API_PREFIX, [
    mainRoutes
]);


app.listen(process.env.PORT, () => console.log(`Server ready on port ${process.env.PORT}.`));

module.exports = app;