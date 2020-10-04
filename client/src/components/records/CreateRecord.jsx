import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
// Redux
import { connect } from 'react-redux'
import { createRecord } from '../../actions/records.action'

const CreateRecord = ({ createRecord }) => {
	const [formData, setFormData] = useState({
		recordType: 'expense',
		date: new Date().toLocaleString(),
		amount: 0,
		description: '',
		payee: ''
	})

	const { recordType, date, amount, payee, description } = formData
	const changeHandler = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const submitHandler = e => {
		e.preventDefault()
		// signup(name, email, password1)
		createRecord({ recordType, date, amount, payee, description })
	}
	return (
		<div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
			<Form className='login-container p-4 border shadow'>
				<Form.Group>
					{/* <Form.Label inline>Record type </Form.Label> */}
					<label className='pr-2'>
						<Form.Check
							inline
							checked={recordType === 'expense'}
							value='expense'
							name='recordType'
							onChange={changeHandler}
							type='radio'
							className='mr-0'
						/>
						Expense
					</label>
					<label className='pr-2'>
						<Form.Check
							inline
							checked={recordType === 'income'}
							name='recordType'
							onChange={changeHandler}
							type='radio'
							value='income'
							className='mr-0'
						/>
						Income
					</label>
				</Form.Group>
				<InputGroup className='mb-3'>
					<Form.Control
						type='number'
						placeholder='amount'
						id='amountInput'
						name='amount'
						value={amount}
						onChange={changeHandler}
					/>
					<InputGroup.Append>
						<InputGroup.Text>&#x20B9;</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>
				<Form.Group>
					<Form.Control
						type='date'
						placeholder='date'
						name='date'
						max={new Date().toISOString().split('T')[0]}
						value={date}
						onChange={changeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='text'
						placeholder='payee'
						name='payee'
						value={payee}
						onChange={changeHandler}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Control
						type='text'
						placeholder='description'
						name='description'
						value={description}
						onChange={changeHandler}
					/>
				</Form.Group>

				<Button variant='success w-100' onClick={submitHandler}>
					Create a Record
				</Button>
			</Form>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentRecord: state.records.currentRecord
	}
}

export default connect(mapStateToProps, { createRecord })(CreateRecord)
