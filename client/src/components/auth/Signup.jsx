import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { signup } from '../../actions/auth.action'

const Signup = ({ isAuthenticated, signup }) => {
	const [formData, setFormData] = useState({
		email: '',
		password1: '',
		password2: '',
		name: ''
	})

	const { name, email, password1, password2 } = formData
	const changeHandler = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitHandler = e => {
		e.preventDefault()
		signup(name, email, password1)
	}

	if (isAuthenticated) return <Redirect to='/dashboard' />
	return (
		<div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
			<Form className='login-container p-4 border shadow'>
				<Form.Group controlId='formEmail'>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='name'
							name='name'
							value={name}
							onChange={changeHandler}
						/>
					</Form.Group>
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
						name='password1'
						value={password1}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='confirm password'
						name='password2'
						value={password2}
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
	return { isAuthenticated: state.auth.isAuthenticated }
}
export default connect(mapStateToProps, { signup })(Signup)
