const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

// GET /feed/posts
router.get('/', publicController.getFacts);
router.get('/stats', publicController.getStats);

module.exports = router;