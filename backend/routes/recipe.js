const express = require('express');
const router = express.Router();
const csvtojson = require('csvtojson'); // Import the csvtojson module
const cvfilepath = "./Recipe.csv";

const Post = require("../models/recipeModal");

router.post('/add', async (req, res) => {
  csvtojson()
    .fromFile(cvfilepath)
    .then((jsonObj) => {
      console.log(jsonObj);
      Post.insertMany(jsonObj)
        .then(function () {
          console.log("Data inserted");
          res.json({ success: 'success' });
        })
        .catch(function (err) {
          console.log(err);
        });
    });
});

router.get('/recipes', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 200;
    const skip = (page - 1) * limit;

    const totalRecipes = await Post.countDocuments({});
    const totalPages = Math.ceil(totalRecipes / limit);

    const recipes = await Post.find({})
      .skip(skip)
      .limit(limit);

    res.json({
      recipes,
      totalPages,
      currentPage: page,
      totalRecipes
    });
  } catch (err) {
    console.error('Error retrieving recipes:', err);
    res.status(500).json({ error: 'An error occurred while retrieving recipes' });
  }
});

// GET recipe details by ID
router.get('/recipes/:id', async (req, res) => {
  const recipeId = req.params.id;

  try {
    const recipe = await Post.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
