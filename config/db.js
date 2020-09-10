const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
		console.log('Database connected')
	} catch (error) {
		console.log('Could not connect to the database ', error)
		process.exit(1)
	}
}

module.exports = connectDB
