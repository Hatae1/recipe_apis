const Recipe = require('../models/recipe');

exports.getRecipe = async (req, res, next) => {

    let result = await Recipe.findAll();

    res.json(result);
};

