const express = require('express')
const teacherController = require('../controllers/teacherController')
const router = express.Router()
router
  .route('/')
  .get(teacherController.getAllTeachers)
  .post(teacherController.create)
router.route('/:id').get(teacherController.getById)

module.exports = router
