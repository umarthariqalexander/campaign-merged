import * as types from './actionTypes';
import { makeApiRequest } from '../utils/apiRequest';



export function getPromotions(){
    return (dispatch) => {
        let apiData = {
            method:'GET',
            url:'/api/getPromoDetails',
            successCallBack:(result)=>{
                dispatch(setPromoData(result));
            },
            failureCallback: (err)=>{
                dispatch(setPromoError(err.errorMessage || err.message));
            }
        };
        makeApiRequest(apiData, dispatch);
    };
}

export function setPromoData(response) {
	return {
		type: types.SET_PROMO_DATA,
		response
	};
}
export function setPromoError(response) {
	return {
		type: types.SET_PROMO_ERROR,
		response
	};
}
