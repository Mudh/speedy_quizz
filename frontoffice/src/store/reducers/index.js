import { combineReducers } from 'redux';
import modal from './modal';
import quiz from './quiz';
import sideRightLog from './sideRightLog';
import homeMembre from './homeMembre';
import loginForm from './loginForm';
import subscribeForm from './subscribeForm';
import homeVisitor from './homeVisitor';

export default combineReducers({
  modal,
  quiz,
  sideRightLog,
  homeMembre,
  homeVisitor,
  loginForm,
  subscribeForm,
});
