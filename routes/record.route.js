const router = require('express').Router()
const {
	create,
	list,
	show,
	remove,
	update
} = require('../controllers/record.controller')
const auth = require('../middleware/auth.middleware')

/**
 * @route POST api/records
 * @desc Create a record
 * @access Private
 */
router.post('/records', auth, create)

/**
 * @route GET api/records
 * @desc List records for logged in users
 * @access Private
 */
router.get('/records', auth, list)

/**
 * @route GET api/records/:id
 * @desc Show details of a single record
 * @access Private
 */
router.get('/records/:id', auth, show)

/**
 * @route DELETE api/records/:id
 * @desc Delete a single record
 * @access Private
 */
router.delete('/records/:id', auth, remove)

/**
 * @route PUT api/records/:id
 * @desc Update a single record
 * @access Private
 */
router.put('/records/:id', auth, update)
module.exports = router
