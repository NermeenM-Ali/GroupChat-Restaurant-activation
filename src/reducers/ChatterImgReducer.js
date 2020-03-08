import * as types from '../actions/ActionTypes'

const initialState = {
   // img : null,
    id:'',
    allUsers:[],
    idNum:0

}


const ChatterImgReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.CHATTER_IMG:
            return {...state,id: action.payloadId, idNum: action.payloadIdNum}
        case types.CHECK_EXSTANCE:
            let item = state.allUsers.indexOf(action.payload) > -1
            if(item) {
                return {...state, allUsers: [...state.allUsers]}
            } else {
                return {...state, allUsers: [...state.allUsers, action.payload]} 
            }
               
        default: 
            return state    
    }
}

export default ChatterImgReducer
