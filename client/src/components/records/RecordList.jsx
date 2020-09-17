import React, { useEffect } from 'react'
import RecordItem from './RecordItem'
import { connect } from 'react-redux'
import { getRecords } from '../../actions/records.action'

const RecordList = ({ getRecords, records }) => {
	useEffect(() => {
		getRecords()
	}, [])

	return (
		<div>
			{records.map(record => (
				<RecordItem key={record._id} record={record} />
			))}
			<button onClick={getRecords}>Load More</button>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		records: state.records.list
	}
}

export default connect(mapStateToProps, { getRecords })(RecordList)
