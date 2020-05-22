import * as actionTypes from '../Actions/actionTypes'

const initialState = {
    userId:null,
    loading: false,
    token:null,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_INIT:
            return {
                ...state,
                loading: true,
                error:null
            }
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                token:action.token,
                error:null,
                userId:action.userId
            }
        case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error,
            }
        default:
            return state            
        }
}

export default reducer;