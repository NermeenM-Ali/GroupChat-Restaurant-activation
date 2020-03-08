import * as types from '../actions/ActionTypes'

const initialState = {
    allMessages:[]
}

const ChatMessages = (state = initialState, action)=>{
    switch(action.type) {
        case types.CHAT_MESSAGES:
           
            return {...state, allMessages:[...state.allMessages,{id:action.payloadId,type: action.payloadType, newMessage:action.payloadMessage }] }
        default:
            return state    
    }
}

export default ChatMessages
