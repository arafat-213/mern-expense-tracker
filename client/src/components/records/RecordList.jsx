import React, { useEffect } from 'react'
import RecordItem from './RecordItem'
import ListGroup from 'react-bootstrap/esm/ListGroup'
// Redux
import { connect } from 'react-redux'
import { getRecords } from '../../actions/records.action'
// CSS
import './records.css'

const RecordList = ({ records }) => {
	return (
		<ListGroup className='record-list mx-auto'>
			{records.map(record => (
				<RecordItem key={record._id} record={record} />
			))}
		</ListGroup>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		records: state.records.list
	}
}

export default connect(mapStateToProps)(RecordList)
