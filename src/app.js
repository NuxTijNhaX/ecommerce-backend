const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// db
require('./dbs/init.mongodb.lv0');

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "Hellp world"
    })
})
 
module.exports = app;