import {ACTION_TYPES} from './postActionTypes'

export const INITIAL_STATE = {
    post: {},
    loading:false,
    error:false
}

export const postReducer = (state, action)=> {
    switch (action.type){
        case ACTION_TYPES.FETCH_START:
            return {
                loading: true,
                error: false,
                post:{}
            }
        case ACTION_TYPES.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload
            }
        case ACTION_TYPES.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state
    }
}