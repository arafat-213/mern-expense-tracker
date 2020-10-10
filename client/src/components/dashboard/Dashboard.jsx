import React, { useEffect } from 'react'
// Components
import IncomeExpenseBar from '../charts/IncomeExpenseBar'
import RecordList from '../records/RecordList'
import Header from './Header'
// Redux
import { connect } from 'react-redux'
import { getRecords } from '../../actions/records.action'
// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'
// CSS
import './dashboard.css'
const Dashboard = ({ getRecords, isLoading }) => {
	useEffect(() => {
		getRecords()
	}, [])
	return (
		!isLoading && (
			<Container>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col
						md={6}
						className='dashboard-card record-list shadow border'>
						<RecordList />
					</Col>
					<Col md={6} className='dashboard-card shadow border'>
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
