import React, { useEffect } from 'react'
import setAuthToken from './utils/setAuthToken'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Components
import Login from './components/auth/Login'
import IncomeExpenseBar from './components/charts/IncomeExpenseBar'
import RecordList from './components/records/RecordList'
import CreateRecord from './components/records/CreateRecord'
import Signup from './components/auth/Signup'
import PrivateRoute from './components/routing/PrivateRoute'
import MyNavbar from './components/navigation/MyNavbar'
import Logout from './components/auth/Logout'
import Dashboard from './components/dashboard/Dashboard'
//redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth.action'
// css
import './App.css'

if (localStorage.token) setAuthToken(localStorage.token)
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])
	return (
		<Provider store={store}>
			<Router>
				<MyNavbar />
				<Route extact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Signup />
				</Route>
				<Route exact path='/dashboard'>
					<PrivateRoute component={Dashboard} />
				</Route>
				<Route exact path='/create'>
					<PrivateRoute component={CreateRecord} />
				</Route>
				<Route exact path='/charts'>
					<PrivateRoute component={IncomeExpenseBar} />
				</Route>
				<Route exact path='/logout'>
					<PrivateRoute component={Logout} />
				</Route>
				<Route path='/'>
					<Login />
				</Route>
			</Router>
		</Provider>
	)
}

export default App
