const express = require('express');
const router = express.Router();
const noteController = require('./noteController');

router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getNotes);

module.exports = router;
