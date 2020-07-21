const express =  require('express');
const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipe');

const app = express();

app.use(bodyParser.json());

app.use('/recipe', recipeRoutes);

app.listen(8080);