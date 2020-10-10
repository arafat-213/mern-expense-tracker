import React, { useState } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

// Redux
import { connect } from 'react-redux'

const IncomeExpenseBar = ({ cashFlow: { income, expenses } }) => {
	const [data, setData] = useState({
		labels: ['Expense', 'Income'],
		datasets: [
			{
				label: 'Transactions',
				backgroundColor: ['#d9534f', '#5cb85c'],
				borderColor: '#292b2c',
				borderWidth: 1,
				// barThickness: 60,
				// maxBarThickness: 8,
				// minBarLength: 2,
				data: [expenses, income]
			}
		]
	})
	return (
		<div>
			<HorizontalBar
				data={data}
				type='horizontalBar'
				options={{
					title: {
						display: true,
						text: 'Income vs Expenses',
						fontSize: 20
					},
					legend: {
						display: true,
						position: 'right'
					}
				}}
			/>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		cashFlow: state.records.cashFlow
	}
}
export default connect(mapStateToProps)(IncomeExpenseBar)
