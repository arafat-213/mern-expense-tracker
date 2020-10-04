import React, { useEffect } from 'react'
import RecordItem from './RecordItem'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import { Link } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { getRecords } from '../../actions/records.action'
// CSS
import './records.css'

const RecordList = ({ getRecords, records, isLoading }) => {
	useEffect(() => {
		getRecords()
	}, [])
	console.log('records', records)
	return (
		<ListGroup className='record-list mx-auto'>
			{!isLoading &&
				records.map(record => (
					<RecordItem key={record._id} record={record} />
				))}
		</ListGroup>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		records: state.records.list,
		isLoading: state.records.isLoading
	}
}

export default connect(mapStateToProps, { getRecords })(RecordList)
