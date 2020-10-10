import React, { useEffect } from 'react'
// Components
import IncomeExpenseBar from '../charts/IncomeExpenseBar'
import RecordList from '../records/RecordList'
// Redux
import { connect } from 'react-redux'
import { getRecords } from '../../actions/records.action'
// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'
const Dashboard = ({ getRecords, isLoading }) => {
	useEffect(() => {
		getRecords()
	}, [])
	return (
		!isLoading && (
			<Container>
				<Row>
					<Col>
						<h1>Welcome user</h1>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<RecordList />
					</Col>
					<Col md={6}>
						<IncomeExpenseBar />
					</Col>
				</Row>
			</Container>
		)
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		records: state.records.list,
		isLoading: state.records.isLoading
	}
}

export default connect(mapStateToProps, { getRecords })(Dashboard)
