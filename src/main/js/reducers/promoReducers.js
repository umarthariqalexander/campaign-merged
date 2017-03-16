import * as types from '../actions/actionTypes';

export default function promoReducers(state={},action){
    switch(action.type){
        case types.SET_PROMO_DATA:
            return Object.assign({}, action.response);
        case types.SET_PROMO_ERROR:
            return Object.assign({}, action.response);
        // case types.SET_API_DATA:
        //     return Object.assign({}, action.response);
        // case types.LIST_COURSES:
        //     return action.listCourses;
        default:
            return state;
    }
}
