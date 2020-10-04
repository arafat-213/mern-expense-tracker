import { GET_RECORDS } from '../actions/types'

const initialState = {
	isLoading: true,
	list: []
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
		default:
			return state
	}
}
