// import
import axios from 'axios';
import { SUBMIT_LOGIN } from '../store/reducers/loginForm';
import { SUBMIT_SUBSCRIBE } from '../store/reducers/subscribeForm';
// Types

const url = 'http://127.0.0.1:8000/login';
const urlQuiz = 'http://127.0.0.1:8000/quizz/test/';

/**
 * Middleware de gestion ajax
 */

const ajax = store => next => action => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      {
        const state = store.getState();
        axios
          .post(url, {
            email: state.loginForm.email,
            password: state.loginForm.password,
          })
          // succes
          .then(response => {
            localStorage.setItem(
              'token',
              JSON.stringify('1dsvsdv64sdv4sd6v4ds6v46sdv4'),
            );
            console.log('success', JSON.parse(localStorage.getItem('token')));
          })
          // echec
          .catch(error => {
            localStorage.setItem(
              'token',
              JSON.stringify('1dsvsdv64sdv4sd6v4ds6v46sdv4'),
            );
            console.log('error', JSON.parse(localStorage.getItem('token')));
            console.error(error);
          });
      }
      break;

    case SUBMIT_SUBSCRIBE:
      {
        const state = store.getState();
        axios
          .post(urlQuiz, {
            theme: 'Espace',
            level: 'Facile',
            token: JSON.parse(localStorage.getItem('token')),
          })
          // succes
          .then(response => {
            console.log('subscribe', localStorage.getItem('token'));
          })
          // echec
          .catch(error => {
            console.error(JSON.parse(localStorage.getItem('token')));
          });
      }
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default ajax;
