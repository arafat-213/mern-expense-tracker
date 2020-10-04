import { CREATE_RECORD, GET_RECORDS } from '../actions/types'

const initialState = {
	isLoading: true,
	list: [],
	currentRecord: {}
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GET_RECORDS:
			return {
				...state,
				isLoading: false,
				list: payload.records,
				cashFlow: payload.cashFlow
			}
		case CREATE_RECORD:
			return {
				...state,
				isLoading: false,
				currentRecord: payload
			}
		default:
			return state
	}
}
