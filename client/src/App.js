import React, { useEffect } from 'react'
import './App.css'
import setAuthToken from './utils/setAuthToken'
import Login from './components/auth/Login'
import RecordList from './components/records/RecordList'
// import CreateRecord from './components/records/'
import Signup from './components/auth/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
//redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth.action'
import CreateRecord from './components/records/CreateRecord'

if (localStorage.token) setAuthToken(localStorage.token)
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])
	return (
		<Provider store={store}>
			<Router>
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
					{/* <PrivateRoute component={CreateRecord} /> */}
					<CreateRecord />
				</Route>
				<Route path='/'>
					<Login />
				</Route>
			</Router>
		</Provider>
	)
}

export default App
