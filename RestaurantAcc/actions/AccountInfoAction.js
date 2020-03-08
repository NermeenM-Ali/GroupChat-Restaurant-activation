import * as types from './ActionTypes'

export const AccountInfoAction = (name, phone, location, email)=>{
    return (dispatch)=>{
        dispatch({
            type: types.ACCOUNT_INFO,
            payloadName: name,
            payloadPhone: phone,
            payloadLocation:location,
            payloadEmail: email  ,
            activated: false   
        })
    }
}

export const UpdateInfoAction =  (id,name, phone, location, email)=>{
    return (dispatch)=>{
        dispatch({
            type: types.UPDATE_ACCOUNT_INFO,
            payloadId: id,
            payloadName: name,
            payloadPhone: phone,
            payloadLocation:location,
            payloadEmail: email,
            activated: false 
        })
    }
}