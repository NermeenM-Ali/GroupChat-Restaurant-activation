import * as types from './ActionTypes'

export const checkChatUser=(admin, user1, user2, user3)=>{
    return (dispatch)=>{
        dispatch({ type: types.CHECK_CHAT_USER, payloadAdmin: admin, payloadUser1: user1, payloadUser2: user2, payloadUser3:user3})
    }
}