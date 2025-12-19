const express = require('express');
const router = express.Router();
const { getContacts, createContact } = require('../controllers/contactController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getContacts);
router.post('/', createContact);

module.exports = router;
