const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Recipe = sequelize.define('recipe',{
    idx: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    recipeCode: {
        type: Sequelize.INTEGER
    },
    recipeName: {
        type: Sequelize.STRING
    },
    recipeSummary: {
        type: Sequelize.TEXT
    },
    recipeCategoryCode: {
        type: Sequelize.INTEGER
    },
    recipeCategory: {
        type: Sequelize.STRING
    },
    foodCategoryCode: {
        type: Sequelize.INTEGER
    },
    foodCategory: {
        type: Sequelize.STRING
    },
    cookTime: {
        type: Sequelize.INTEGER
    },
    Kcal: {
        type: Sequelize.INTEGER
    },
    person: {
        type: Sequelize.INTEGER
    },
    grade: {
        type: Sequelize.ENUM('보통', '초보환영','어려움')
    },
    itemCategory: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    detailUrl: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
  });

module.exports = Recipe;