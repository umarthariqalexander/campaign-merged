import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore (initialState){
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                reduxImmutableStateInvariant(),
                thunk,
                logger()
            ),
            (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : fn => fn
        )
    );
}
