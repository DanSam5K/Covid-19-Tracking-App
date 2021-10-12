import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidDataReducer from './covidData/covidDatas';
const store = createStore(covidDataReducer, applyMiddleware(thunk, logger));

export default store;
