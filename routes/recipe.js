const express = require('express');

const recipeController = require('../controllers/recipe');

const router = express.Router();

router.get('/list', recipeController.getRecipe);

module.exports = router;