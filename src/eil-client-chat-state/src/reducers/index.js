// @flow
import { combineReducers } from 'redux';
import chatMessagesState from './chatMessagesState';

const reducers = {
  chatMessagesState,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
