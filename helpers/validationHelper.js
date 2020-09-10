const { check } = require('express-validator')

// User registration
module.exports = {
	registerValidator: [
		check('name', 'Name is required').notEmpty(),
		check('email', 'Invalid email address').isEmail(),
		check('password', 'Password is required').notEmpty(),
		check('password')
			.isLength({ min: 6 })
			.withMessage('Password must contain at least 6 characters')
			.matches(/\d/)
			.withMessage('Password must contain a number')
	],
	loginValidator: [
		check('email', 'Invalid email address').isEmail(),
		check('password', 'Password is required').exists()
	]
}
