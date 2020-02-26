const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database')

const app = express();

app.use(express.static('public'))

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4444);

module.exports = app