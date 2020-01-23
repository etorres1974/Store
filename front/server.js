const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const compression = require ("compression")

const app = express();
app.use(compression())
app.use(history());
app.use(serveStatic(__dirname + '/dist'));
const port = process.env.PORT || 8080;
app.listen(port);
console.log('server started ' + port);