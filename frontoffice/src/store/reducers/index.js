import { combineReducers } from 'redux';
import modal from './modal';
import quiz from './quiz';
import sideRightLog from './sideRightLog';
import homeMembre from './homeMembre';
import loginForm from './loginForm';
import subscribeForm from './subscribeForm';
import homeVisitor from './homeVisitor';
import profilForm from './profilForm';
import classement from './classement';
import loader from './loader';

export default combineReducers({
  modal,
  quiz,
  sideRightLog,
  homeMembre,
  homeVisitor,
  loginForm,
  subscribeForm,
  profilForm,
  classement,
  loader,
});
