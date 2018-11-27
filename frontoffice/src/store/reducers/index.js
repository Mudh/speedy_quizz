import { combineReducers } from 'redux';
import modal from './modal';
import quiz from './quiz';
import sideRightLog from './sideRightLog';
import homeMembre from './homeMembre';
import loginForm from './loginForm';
import subscribeForm from './subscribeForm';

export default combineReducers({
  modal,
  quiz,
  sideRightLog,
  homeMembre,
  loginForm,
  subscribeForm,
});
