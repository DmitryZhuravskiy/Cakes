import { combineReducers } from 'redux'
import contactsReducer from './contacts/contactsReducers'
import specialReducer from './special/specialReducers'


const rootReducer = combineReducers({
    contacts: contactsReducer,
    special: specialReducer,
})

export default rootReducer
