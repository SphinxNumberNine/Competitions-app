const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const session = require('express-session');

const app = express();
require("./models/User");
const keys = require('./config/keys');

app.use(session({
    secret: 'YHURD',
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.json());
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true });

require("./routes/testRoutes")(app);
require("./routes/loginRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
