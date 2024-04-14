const express = require('express');
const router = express.Router();
const {
  getactivitie,
  saveactivitie,
  updateactivitie,
  deleteactivitie,
} = require("../controllers/activityControllers")


router.post('/', (req, res) => {

  res.send('New activity created');
});

router.get('/', getactivitie);
router.post('/save', saveactivitie);
router.put('/update/:id', updateactivitie);
router.delete('/delete/:id', deleteactivitie);


module.exports = router;
