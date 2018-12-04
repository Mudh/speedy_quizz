// import
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

// local imports
import { SUBMIT_PROFIL, setProfilInfos } from '../store/reducers/profilForm';
import { setQuizDatas } from '../store/reducers/quiz';
import { SUBMIT_LOGIN, setCurrentUser } from '../store/reducers/loginForm';

import {
  RELOAD_PLAYER_INFOS,
  USER_UPDATE_ENDGAME,
  setPlayerInfos,
  reloadPlayerInfos,
} from '../store/reducers/sideRightLog';

import {
  SET_THEME_LEVEL,
  LOAD_QUIZ_THEME,
  setQuizTheme,
} from '../store/reducers/homeMembre';

import { LOAD_RANKING, setRanking } from '../store/reducers/classement';

import {
  SUBMIT_SUBSCRIBE,
  toggleSubscribeSuccess,
} from '../store/reducers/subscribeForm';

import {
  LOAD_HOME_VISITOR,
  setHomeVisitor,
} from '../store/reducers/homeVisitor';

import { isLoading } from '../store/reducers/loader';

const urlVisitor = 'http://127.0.0.1:8000/';
const urlLoggued = 'http://127.0.0.1:8000/home';
const urlUserInfos = 'http://127.0.0.1:8000/user/show';
const urlRanking = 'http://127.0.0.1:8000/user/ranking';
const urlLogin = 'http://127.0.0.1:8000/login';
const urlRegister = 'http://127.0.0.1:8000/register';
const urlQuiz = 'http://127.0.0.1:8000/quizz';
const urlUpdatePoints = 'http://127.0.0.1:8000/user/update/endgame';
const urlUpdateProfil = 'http://127.0.0.1:8000/user/update/profil';

/**
 * Middleware de gestion ajax
 */

const ajax = store => next => action => {
  switch (action.type) {
    case LOAD_HOME_VISITOR:
      {
        store.dispatch(isLoading(true));

        axios
          .get(urlVisitor)
          // succes
          .then(response => {
            const homeInfos = response.data;
            store.dispatch(setHomeVisitor(homeInfos));
            store.dispatch(isLoading(false));
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case LOAD_QUIZ_THEME:
      {
        store.dispatch(isLoading(true));

        axios
          .get(urlLoggued)
          // succes
          .then(response => {
            store.dispatch(setQuizTheme(response.data));
            store.dispatch(isLoading(false));
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case SUBMIT_LOGIN:
      {
        const state = store.getState();
        store.dispatch(isLoading(true));

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
            store.dispatch(isLoading(false));
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case SUBMIT_SUBSCRIBE:
      {
        const state = store.getState();

        store.dispatch(isLoading(true));
        axios
          .post(urlRegister, {
            email: state.subscribeForm.email,
            password: state.subscribeForm.password,
            lastname: state.subscribeForm.lastname,
            firstname: state.subscribeForm.firstname,
            username: state.subscribeForm.username,
          })
          // succes
          .then(response => {
            if (response.data.success_message === 'Thank you for registering') {
              store.dispatch(toggleSubscribeSuccess());
              store.dispatch(isLoading(false));
            }
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case SUBMIT_PROFIL:
      {
        const state = store.getState();
        store.dispatch(isLoading(true));

        axios
          .post(urlUpdateProfil, {
            email: state.profilForm.email,
            //password: state.profilForm.password,
            lastname: state.profilForm.lastname,
            firstname: state.profilForm.firstname,
            username: state.profilForm.username,
            description: state.profilForm.description,
          })
          // succes
          .then(response => {
            store.dispatch(reloadPlayerInfos());
            store.dispatch(isLoading(false));
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case RELOAD_PLAYER_INFOS:
      {
        const state = store.getState();
        store.dispatch(isLoading(true));

        axios
          .get(urlUserInfos)
          // succes
          .then(response => {
            const userInfos = response.data;
            if (state.sideRightLog.totalPoints <= userInfos.nb_points) {
              store.dispatch(setPlayerInfos(userInfos));
              store.dispatch(setProfilInfos(userInfos));
              store.dispatch(isLoading(false));
            } else {
              store.dispatch(setProfilInfos(userInfos));
              store.dispatch(isLoading(false));
            }
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case LOAD_RANKING:
      {
        store.dispatch(isLoading(true));

        axios
          .get(urlRanking)
          // succes
          .then(response => {
            store.dispatch(setRanking(response.data));
            store.dispatch(isLoading(false));
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
          })
          // echec
          .catch(error => {
            console.error(error);
          });
      }
      break;

    case USER_UPDATE_ENDGAME:
      {
        const state = store.getState();
        axios
          .post(urlUpdatePoints, {
            points: state.sideRightLog.totalPoints,
          })
          // succes
          .then(() => {})
          // echec
          .catch(error => {
            console.error(error);
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
