const { validationResult } = require('express-validator')
const User = require('../models/user.model')
module.exports = {
	getAuth: async (req, res) => {
		try {
			const user = await User.findById(req.user)
			res.json(user)
		} catch (error) {
			res.status(500).json({ error: 'Server error' })
		}
	},
	login: async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty())
				return res
					.status(400)
					.json({ error: errors.array().map(error => error.msg)[0] })
			const { email, password } = req.body
			let user = await User.findByCredentials(email, password)
			if (!user) return res.status(400).json({ error: 'Bad credentials' })
			const token = await user.generateAuthToken()
			return res.json({ token })
		} catch (error) {
			return res.status(400).json({ error: error.message })
		}
	},
	register: async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty())
				return res
					.status(400)
					.json({ error: errors.array().map(error => error.msg)[0] })

			const { name, email, password } = req.body
			// check if user already exists
			let user = await User.findOne({ email })
			if (user)
				return res.status(400).json({ error: 'Email is already taken' })
			// user does not exist
			user = new User({ name, email, password })
			await user.save()
			const token = await user.generateAuthToken()
			return res.status(201).json({ token, user })
		} catch (error) {
			return res.status(500).json({ error: error.message })
		}
	}
}
