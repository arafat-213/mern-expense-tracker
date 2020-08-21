const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema(
	{
		recordType: {
			type: String,
			enum: ['income', 'transfer', 'expense'],
			default: 'expense',
			trim: true
		},
		amount: {
			type: Number,
			default: 0
		},
		description: {
			type: String,
			trim: true,
			required: true
		},
		date: {
			type: Date,
			default: Date.now()
		},
		payee: {
			type: String,
			trim: true,
			required: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'user'
		}
	},
	{ timestamps: true }
)

module.exports = Record = mongoose.Model('record', recordSchema)
