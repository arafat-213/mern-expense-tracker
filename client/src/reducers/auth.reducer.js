import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	LOGOUT,
	AUTH_ERROR
} from '../actions/types'

const initialState = {
	isAuthenticated: false,
	token: null,
	user: null,
	isLoading: true
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token)
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				token: payload.token
			}
		case LOGOUT:
		case LOGIN_FAIL:
		case AUTH_ERROR:
			localStorage.removeItem('token')
			return {
				...state,
				isAuthenticated: false,
				token: null,
				isLoading: false,
				user: null
			}
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: payload
			}
		default:
			return state
	}
}
