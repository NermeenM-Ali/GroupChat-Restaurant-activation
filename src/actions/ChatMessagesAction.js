import * as types from './ActionTypes'

export const chatMessagesAction = (id,Utype, messages)=>{
    return (dispatch)=>{
        dispatch({type: types.CHAT_MESSAGES,payloadId: id, payloadType: Utype, payloadMessage: messages})
    }
}