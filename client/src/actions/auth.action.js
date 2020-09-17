import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT
} from './types'

export const loadUser = () => async dispatch => {
	if (localStorage.token) setAuthToken(localStorage.token)
	try {
		const res = await axios.get('/api/user/auth')
		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
	} catch (error) {
		dispatch({
			type: AUTH_ERROR
		})
	}
}
export const login = (email, password) => async dispatch => {
	try {
		const res = await axios.post('/api/user/login', { email, password })
		setAuthToken(res.data.token)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
		dispatch(loadUser())
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL
		})
	}
}

export const signup = (name, email, password) => dispatch => {}

export const logout = () => async dispatch => {
	dispatch({
		type: LOGOUT
	})
}
