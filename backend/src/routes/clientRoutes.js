const express = require('express');
const router = express.Router();
const { getClients, createClient, updateClient, deleteClient } = require('../controllers/clientController');
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getClients);
router.post('/', authMiddleware, upload.single('image'), createClient);
router.put('/:id', authMiddleware, upload.single('image'), updateClient);
router.delete('/:id', authMiddleware, deleteClient);

module.exports = router;
