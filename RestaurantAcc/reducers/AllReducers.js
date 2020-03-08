import {combineReducers} from 'redux'
import { reducer as formReducer} from 'redux-form'
import AccountInfoReducer from './AccountInfoReducer'

const AllReducers = combineReducers({
    form: formReducer,
    AccountInfo: AccountInfoReducer,

})

export default AllReducers