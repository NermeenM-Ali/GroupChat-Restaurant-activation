import {combineReducers} from 'redux'
import { reducer as formReducer} from 'redux-form'
import ChatterImgReducer from './ChatterImgReducer'
import CheckChatUserReducer from './CheckChatUserReducer'
import ChatMessages from './ChatMessages'

const AllReducers = combineReducers({
    form: formReducer,
    chatterImg: ChatterImgReducer,
    CheckChatUser: CheckChatUserReducer,
    ChatMessages: ChatMessages
})

export default AllReducers