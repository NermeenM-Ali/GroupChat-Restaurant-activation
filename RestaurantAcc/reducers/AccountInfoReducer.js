import * as types from '../actions/ActionTypes'

const initialState = {
    data: [],
    id:0,
    isActive: false
}

const AccountInfoReducer = (state = initialState, action) =>{
    switch(action.type) {
        case types.ACCOUNT_INFO:
            return {
                    ...state, 
                    data: [...state.data, {id:state.id++, name: action.payloadName,
                                           phone: action.payloadPhone,
                                           location: action.payloadLocation,
                                           email: action.payloadEmail,
                                           activated: false
                                        }]
                }
        case types.UPDATE_ACCOUNT_INFO:
            return {
                ...state,
                data: state.data.map(item => {
                    return item.id === action.payloadId? 
                    {id: action.payloadId, name: action.payloadName,
                        phone: action.payloadPhone,
                        location: action.payloadLocation,
                        email: action.payloadEmail,
                        activated: true
                     }
                     : item
                })
            }    
            
        default:
            return state        
    }
}

export default AccountInfoReducer