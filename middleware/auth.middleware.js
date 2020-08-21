// This middleware ensures the user is authenticated, each time a protected endpoint of api is hit
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
	try {
		// Get the token from req header
		const token = req.header('x-auth-token')

		if (!token) {
			return res.status(401).json({
				errors: [{ message: 'Authentication failed' }]
			})
		}

		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		// Valid token
		req.user = decoded.user

		next()
	} catch (error) {
		res.status(401).json({
			errors: [{ message: 'Authentication failed' }]
		})
	}
}
