const express = require('express');
const router = express.Router();
const { getSubscribers, createSubscriber } = require('../controllers/subscriberController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getSubscribers);
router.post('/', createSubscriber);

module.exports = router;
