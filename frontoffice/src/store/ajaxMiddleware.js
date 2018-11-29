// import
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

// local imports
import {
  RELOAD_PLAYER_INFOS,
  setPlayerInfos,
} from '../store/reducers/sideRightLog';
import { setQuizDatas } from '../store/reducers/quiz';
import { SUBMIT_LOGIN, setCurrentUser } from '../store/reducers/loginForm';
import {
  CHOOSE_THEME_LEVEL,
  SET_THEME_LEVEL,
  LOAD_QUIZ_THEME,
  setQuizTheme,
} from '../store/reducers/homeMembre';

const url = 'http://127.0.0.1:8000/home';
const urlUserInfos = 'http://127.0.0.1:8000/user/show';
const urlLogin = 'http://127.0.0.1:8000/login';
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
          .post(urlLogin, {
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
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case RELOAD_PLAYER_INFOS:
      {
        axios
          .get(urlUserInfos)
          // succes
          .then(response => {
            const userInfos = response.data;
            store.dispatch(setPlayerInfos(userInfos));
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case LOAD_QUIZ_THEME:
      {
        axios
          .get(url)
          // succes
          .then(response => {
            store.dispatch(setQuizTheme(response.data));
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case SET_THEME_LEVEL:
      {
        const state = store.getState();
        axios
          .post(urlQuiz, {
            theme: state.homeMembre.theme,
            level: state.homeMembre.level,
          })
          // succes
          .then(response => {
            store.dispatch(setQuizDatas(response.data));
            console.log(
              'level',
              state.homeMembre.theme,
              state.homeMembre.level,
              response,
            );
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
