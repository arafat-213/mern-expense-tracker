import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
const MyNavbar = ({ isAuthenticated }) => {
	return (
		<Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>Expense-Tracker</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				{isAuthenticated && (
					<React.Fragment>
						<Nav className='mr-auto'>
							<NavLink to='/dashboard' className='nav-link'>
								Dashboard
							</NavLink>
							<NavLink to='/charts' className='nav-link'>
								Charts
							</NavLink>
							<NavLink to='/create' className='nav-link'>
								Create
							</NavLink>
						</Nav>
					</React.Fragment>
				)}
				<Nav className='ml-auto'>
					{' '}
					{isAuthenticated ? (
						<NavLink to='/logout' className='nav-link'>
							Log out
						</NavLink>
					) : (
						<React.Fragment>
							<NavLink to='/login' className='nav-link'>
								Log in
							</NavLink>
							<NavLink to='/register' className='nav-link'>
								Sign up
							</NavLink>
						</React.Fragment>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}
export default connect(mapStateToProps)(MyNavbar)
