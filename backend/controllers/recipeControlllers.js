const recipeModal = require("../models/recipeModal")



module.exports.getrecipe = async (req, res) => {

    const activ = await recipeModal.find()
    res.send(activ)
    
    };