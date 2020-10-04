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
			required: true
		},
		description: {
			type: String,
			trim: true,
			required: true
		},
		date: {
			type: Date,
			default: Date.now(),
			max: Date.now()
		},
		payee: {
			type: String,
			trim: true,
			required: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		}
	},
	{ timestamps: true }
)

module.exports = Record = mongoose.model('Record', recordSchema)
