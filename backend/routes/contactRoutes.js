const express = require('express');
const {
  submitContact,
} = require('../controllers/contactController');

const router = express.Router();

router.route('/').post(submitContact);

module.exports = router;