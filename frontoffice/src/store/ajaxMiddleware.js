// import
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

// local imports
import { setPlayerInfos } from '../store/reducers/sideRightLog';
import { SUBMIT_LOGIN, setCurrentUser } from '../store/reducers/loginForm';
import { SEND_REQUEST } from '../store/reducers/homeMembre';

const url = 'http://127.0.0.1:8000/login';
const urlQuiz = 'http://127.0.0.1:8000/quizz';

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
            const token = response.data.token;
            const userInfos = response.data.user;

            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);

            store.dispatch(setCurrentUser(jwt.decode(token)));
            store.dispatch(setPlayerInfos(userInfos));

            console.log(response.data.user);
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case SEND_REQUEST:
      {
        const state = store.getState();
        axios
          .post(urlQuiz, {
            theme: 'Espace',
            level: 'Facile',
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
