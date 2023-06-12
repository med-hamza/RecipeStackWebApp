const mongoose = require("mongoose")

const recipeShema = new mongoose.Schema({

    Title: {
        type: String
    },
    Ingredients: {
        type: String
    },
    Instructions: {
        type: String
    },
    Image_Name: {
        type: String
    },
    Cleaned_Ingredients: {
        type: String
    },
}, {timestamps : true} )

module.exports = mongoose.model("recipe",recipeShema );