import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
// CSS
import './records.css'
const RecordItem = ({ record }) => {
	const textColor =
		record.recordType === 'income' ? 'text-success' : 'text-danger'
	return (
		<ListGroup.Item className='record-list-item border shadow'>
			<p className='d-flex mb-0 w-100 justify-content-between'>
				<span className='font-weight-bold'>{record.payee}</span>
				<span className='text-secondary'>
					{new Date(record.date).toLocaleDateString()}
				</span>
			</p>
			<p className='d-flex mb-0 w-100 justify-content-between'>
				<span>{record.description}</span>
				<span className={textColor}>
					{Number.parseInt(record.amount).toLocaleString('en-IN')}{' '}
					&#x20B9;
				</span>
			</p>
		</ListGroup.Item>
	)
}

export default RecordItem
