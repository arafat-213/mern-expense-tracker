const express = require('express')
const {
	registerValidator,
	loginValidator
} = require('../helpers/validationHelper')
const { register, login, getAuth } = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const router = express.Router()

/**
 * @route POST api/user/register
 * @desc Register user
 * @access Public
 */
router.post('/user/register', registerValidator, register)

/**
 * @route POST api/user/login
 * @desc Logs in user
 * @access Public
 */
router.post('/user/login', loginValidator, login)

/**
 * @route GET api/user/auth
 * @desc Checks authentication state of user
 * @access Publice
 */
router.get('/user/auth', auth, getAuth)
module.exports = router
