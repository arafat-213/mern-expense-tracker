import React, { useEffect } from 'react'
import './App.css'
import setAuthToken from './utils/setAuthToken'
import Login from './components/auth/Login'
import RecordList from './components/records/RecordList'
import CreateRecord from './components/records/CreateRecord'
import Signup from './components/auth/Signup'
import IncomeExpenseBar from './components/charts/IncomeExpenseBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import MyNavbar from './components/navigation/MyNavbar'
import Logout from './components/auth/Logout'

//redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth.action'

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
					<PrivateRoute component={RecordList} />
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
