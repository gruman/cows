const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const fact = await publicController.getFacts();
    res.render('index', { fact });
    next(); // Move to the next middleware
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});
// GET /feed/posts
router.get('/fact', publicController.getFacts);
router.get('/getFact', publicController.getFact);
router.get('/all', publicController.getAll);

module.exports = router;