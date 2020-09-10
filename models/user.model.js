const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// creating mongoose schema for model 'user'
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			trim: true
		}
	},
	{
		timestamps: true
	}
)

// Custom function to find user by credentials
userSchema.statics.findByCredentials = async (email, password) => {
	// Finding user by email
	const user = await User.findOne({ email })

	if (!user) throw new Error('Bad credentials')

	const isMatch = bcrypt.compareSync(password, user.password)

	if (!isMatch) throw new Error('Bad credentials')

	return user
}

// Encrypting password before saving it
userSchema.pre('save', async function () {
	const user = this
	if (user.isModified('password'))
		user.password = bcrypt.hashSync(user.password, 8)
})

// Generating auth token
userSchema.methods.generateAuthToken = async function () {
	const user = this
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
	return token
}

// remove password before returning user document
userSchema.method.toJSON = function () {
	var user = this.toObject()
	delete user.password
	return user
}
module.exports = User = mongoose.model('user', userSchema)
