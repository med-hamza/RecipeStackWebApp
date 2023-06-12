const express = require('express');
const router = express.Router();
const {
   getactivitie,
    saveactivitie,
    updateactivitie,
      deleteactivitie, 
    } = require("../controllers/activityControllers")

// Create a new activity
router.post('/', (req, res) => {
    // Logic to create a new activity
    res.send('New activity created');
  });
  
  // Get all activities
  router.get('/', getactivitie);
  router.post('/save', saveactivitie);
  router.put('/update/:id', updateactivitie);
  router.delete('/delete/:id',deleteactivitie);
  

  module.exports = router;
