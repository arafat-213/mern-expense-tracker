import { CREATE_RECORD, GET_RECORDS } from './types'
import axios from 'axios'

export const getRecords = () => async dispatch => {
	try {
		const res = await axios.get('/api/records')
		dispatch({
			type: GET_RECORDS,
			payload: res.data
		})
	} catch (error) {
		console.log(error)
	}
}

export const createRecord = record => async dispatch => {
	try {
		const res = await axios.post('/api/records', record)
		dispatch({
			type: CREATE_RECORD,
			payload: res.data.record
		})
	} catch (error) {
		console.log(error)
	}
}
