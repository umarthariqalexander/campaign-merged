import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './styles/styles.scss';


if (typeof window !== 'undefined') {

    const store = configureStore();
    // store.dispatch(getCourseList());

    let app = (
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
    );

     render(app, document.getElementById('mount'));

} else {
    // When running in Nashorn, the process object doesn't exist. Define it
    // so that when the React code tests for production mode, it succeeds.
    /* eslint-disable no-native-reassign*/
    process = {
        env: {
            NODE_ENV: 'production'
        }
    };
}
