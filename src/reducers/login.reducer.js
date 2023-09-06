import * as actions from '../actions/login.actions'

const initialState = {
    profile : {}

}


const loginReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case actions.SET_USER_PROFILE:
            return{
                ...state,
                datatoset:payload.data
            }
    }
}