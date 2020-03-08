import * as types from '../actions/ActionTypes'

const initialState={
    isAdmin: false,
    isUser1: false,
    isUser2: false,
    isUser3: false
}

const  CheckChatUserReducer=(state= initialState, action)=>{
    switch(action.type) {
        case types.CHECK_CHAT_USER:
            return {...state, isAdmin: action.payloadAdmin,
                     isUser1: action.payloadUser1, isUser2:action.payloadUser2, isUser3:action.payloadUser3}
        default:
            return state             
    }
}

export default CheckChatUserReducer