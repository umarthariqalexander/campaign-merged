import {combineReducers} from 'redux';
import courses from './courseReducers';
import promos from './promoReducers';

const rootReducer = combineReducers({courses,promos});

export default rootReducer;
