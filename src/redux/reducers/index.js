import { combineReducers } from 'redux';
import * as reducers from './reducers';

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
