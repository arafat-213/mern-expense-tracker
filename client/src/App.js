import React, { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import setAuthToken from './utils/setAuthToken'

const App = () => {
	const loadData = async () => {
		const res = await axios.get('/api/records')
		console.log(res.data)
	}
	useEffect(() => {
		setAuthToken('INSERT_A_TOKEN_HERE')
		loadData()
	}, [])
	return <button onClick={loadData}>Hello World</button>
}

export default App
