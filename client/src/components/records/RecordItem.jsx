import React from 'react'

const RecordItem = ({ record }) => {
	return (
		<div>
			<p>{record.recordType}</p>
			<p>{record.date}</p>
			<p>{record.amount}</p>
			<p>{record.description}</p>
			<p>{record.payee}</p>
			<hr />
		</div>
	)
}

export default RecordItem
