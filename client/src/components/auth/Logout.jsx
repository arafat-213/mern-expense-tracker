import React, { useEffect } from 'react'

// Redux
import { logout } from '../../actions/auth.action'
import { connect } from 'react-redux'

const Logout = ({ logout }) => {
	useEffect(() => {
		logout()
	}, [])
	return <div>You're logged out!</div>
}

export default connect(null, { logout })(Logout)
