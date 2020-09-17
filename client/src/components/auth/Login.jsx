import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './auth.css'
// Redux
import { connect } from 'react-redux'
import { login } from '../../actions/auth.action'
const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({ email: '', password: '' })
	const { email, password } = formData
	const changeHandler = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	const submitHandler = e => {
		e.preventDefault()
		login(email, password)
	}
	if (isAuthenticated) return <Redirect to='/dashboard' />
	return (
		<div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
			<Form className='login-container p-4 border shadow'>
				<Form.Group controlId='formEmail'>
					<Form.Control
						type='text'
						placeholder='email'
						name='email'
						value={email}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='password'
						name='password'
						value={password}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Button variant='primary w-100' onClick={submitHandler}>
					Login
				</Button>
			</Form>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}
export default connect(mapStateToProps, { login })(Login)
