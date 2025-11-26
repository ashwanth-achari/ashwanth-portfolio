const express = require('express');
const {
  getProjects,
  getProject,
} = require('../controllers/projectController');

const router = express.Router();

router.route('/').get(getProjects);
router.route('/:slug').get(getProject);

module.exports = router;