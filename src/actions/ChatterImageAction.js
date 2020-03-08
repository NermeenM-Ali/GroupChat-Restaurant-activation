import * as types from './ActionTypes'

export const ChatterImageAction = ( id, idNum)=>{
    return (dispatch)=>{
        dispatch({ type: types.CHATTER_IMG, payloadId: id, payloadIdNum: idNum})
    }
}

export const ChatterExist = ( id)=>{
    return (dispatch)=>{
        dispatch({ type: types.CHECK_EXSTANCE, payload: id})
    }
}