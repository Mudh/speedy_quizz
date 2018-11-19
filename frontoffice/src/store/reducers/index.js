import { combineReducers } from 'redux';
import modal from './modal';
import quiz from './quiz';
import sideRightLog from './sideRightLog';

export default combineReducers({
  modal,
  quiz,
  sideRightLog,
});
