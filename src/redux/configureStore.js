import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidDataReducer from './covidData/covidData';
const store = createStore(covidDataReducer, applyMiddleware(thunk, logger));

export default store;
