const express = require('express');
const teacherController = require('../controllers/teacherController');
const router = express.Router();
const { getAllTeachers, create, getById } = teacherController;
router.route('/teachers').get(getAllTeachers).post(create);
router.route('/teachers/:id').get(getById);
router.route('/teachers/:id/:name').get(getById);

module.exports = router;
