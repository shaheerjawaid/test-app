const express = require("express");
const app = express();

const { envConstants } = require('./common/constants/env.constants');
const mainRoutes = require('./routes/main.routes');

app.use(envConstants.API_PREFIX, [
    mainRoutes
]);

app.listen(envConstants.PORT, () => console.log(`Server ready on port ${envConstants.PORT}.`));

module.exports = app;