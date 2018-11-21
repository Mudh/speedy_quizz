import { combineReducers } from 'redux';
import modal from './modal';
import quiz from './quiz';
import sideRightLog from './sideRightLog';
import homeMembre from './homeMembre';
import loginForm from './loginForm';

export default combineReducers({
  modal,
  quiz,
  sideRightLog,
  homeMembre,
  loginForm,
});
