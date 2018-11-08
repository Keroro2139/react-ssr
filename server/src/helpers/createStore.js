import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {

    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    });

    var middlewares = [];
    middlewares.push(thunk.withExtraArgument(axiosInstance));

    const store = createStore(
        reducers,
        {},
        applyMiddleware(...middlewares)
    );

    return store;
};
