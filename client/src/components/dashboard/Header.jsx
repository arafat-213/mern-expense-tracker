import React from 'react'
//Redux
import { connect } from 'react-redux'
const Header = ({ user }) => {
	return (
		<h1 className='text-center'>
			Hello,
			{user && <span>{user.name}</span>}
		</h1>
	)
}
const mapStateToProps = (state, ownProps) => {
	return {
		user: state.auth.user
	}
}
export default connect(mapStateToProps)(Header)
