// import
import axios from 'axios';
import { SUBMIT_LOGIN } from '../store/reducers/loginForm';
// Types

const url = 'http://127.0.0.1:8000';

/**
 * Middleware de gestion ajax
 */

const ajax = store => next => action => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      {
        const state = store.getState();

        axios
          .post(
            url,
            {},
            {
              auth: {
                email: state.loginForm.email,
                password: state.loginForm.password,
              },
            },
          )
          // succes
          .then(response => {
            console.log(response);
          })
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
