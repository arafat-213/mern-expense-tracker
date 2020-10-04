const { validationResult } = require('express-validator')
const Record = require('../models/record.model')
const User = require('../models/user.model')

module.exports = {
	create: async (req, res) => {
		try {
			// Create a record from properties received form req
			const record = new Record({
				...req.body,
				owner: req.user
			})
			await record.save()
			return res.status(201).json({ record })
		} catch (error) {
			return res.status(400).json({ error: error.message })
		}
	},
	list: async (req, res) => {
		try {
			const records = await Record.find({ owner: req.user })
			let income = 0,
				expenses = 0
			records.forEach(record => {
				if (record.recordType === 'income') income += record.amount
				else if (record.recordType === 'expense')
					expenses += record.amount
			})
			return res.status(200).json({
				records,
				cashFlow: {
					income,
					expenses
				}
			})
		} catch (error) {
			return res.status(400).json({ erorr: error.message })
		}
	},
	show: async (req, res) => {
		try {
			const _id = req.params.id
			const record = await Record.findOne({ _id, owner: req.user })
			if (!record)
				return res.status(404).json({ error: 'Record not found' })
			return res.status(200).json({ record })
		} catch (error) {
			console.log(error)
			return res.status(400).json({
				error: error.message
			})
		}
	},
	remove: async (req, res) => {
		try {
			const _id = req.params.id
			const record = await Record.findOneAndDelete({
				_id,
				owner: req.user
			})
			if (!record)
				return res.status(404).json({ error: 'Record not found' })
			return res.status(203).json({ record })
		} catch (error) {
			console.log(error)
			return res.status(400).json({ error: error.message })
		}
	},
	update: async (req, res) => {
		try {
			// Fields from req to be updated
			const filedsToBeUpdated = Object.keys(req.body)

			// Fields allowed to be updated
			const allowedUpdates = [
				'recordType',
				'amount',
				'description',
				'date',
				'payee'
			]

			// checks wether req has only fields that allow update
			const isValidUpdate = filedsToBeUpdated.every(field =>
				allowedUpdates.includes(field)
			)

			if (!isValidUpdate)
				return res.status(400).json({ error: 'Invalid updates' })

			const _id = req.params.id
			const record = await Record.findOne({ _id, owner: req.user })

			if (!record)
				return res.status(400).json({ error: 'Record not found' })

			const updates = req.body
			filedsToBeUpdated.forEach(field => (record[field] = updates[field]))

			await record.save()
			return res.status(200).json({ record })
		} catch (error) {
			console.log(error)
			return res.status(400).json({ error: error.message })
		}
	},
	cashFlow: async (req, res) => {
		try {
			const query = {}
			const records = await Record.find({ owner: req.user })
			let income = 0,
				expenses = 0
			records.forEach(record => {
				if (record.recordType === 'income') income += record.amount
				else if (record.recordType === 'expense')
					expenses += record.amount
			})
		} catch (error) {
			console.log(error)
			return res.status(400).json({
				error: error.message
			})
		}
	}
}
