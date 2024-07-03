const { string, number } = require("joi");
const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      preptime: {
        type: Number,
        required: true
      },
        cooktime: {
            type: Number,
            required: true
        },
        servings: {
            type: Number,
            required: true
        },
        ingredients: {
            type: String,
            required: true
        },
        directions: {
            type: String,
            required: true
        }
});

const RecipeModel = mongoose.model('recipes', RecipeSchema);
module.exports = RecipeModel;