const express = require("express")
const router = express.Router()
const {
  getCount,
  getUsersData,
  updateUserData,
  insertUserData,
  deleteUserData,
} = require('../controllers/userController')

router.get('/count', getCount)
router.get('/', getUsersData)
router.patch('/:id', updateUserData)
router.post('/', insertUserData)
router.delete('/:id', deleteUserData)

module.exports = router