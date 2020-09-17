import { combineReducers } from 'redux'
import records from './records.reducer'
import auth from './auth.reducer'

export default combineReducers({ auth, records })
