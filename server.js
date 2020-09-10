const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config({
	path: './config/config.env'
})
const app = express()

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.json())

connectDB()

// Config for dev env
if (process.env.NODE_ENV === 'development') {
	app.use(
		cors({
			origin: process.env.CLIENT_URL
		})
	)
	app.use(morgan('dev'))
}

// Load user routes
const userRouter = require('./routes/user.route')
app.use('/api', userRouter)

// Load record routes
const recordRouter = require('./routes/record.route')
app.use('/api', recordRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`)
})
