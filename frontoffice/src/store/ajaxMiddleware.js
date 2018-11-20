// import
import axios from 'axios';
import { SEND_REQUEST } from '../store/reducers/homeMembre';
// Types

const url = 'http://127.0.0.8000';

/**
 * Middleware de gestion ajax
 */

const ajax = store => next => action => {
  switch (action.type) {
    case SEND_REQUEST:
      {
        const state = store.getState();
        // ...
        axios
          .post(url, {
            firstName: 'Fred',
            lastName: 'Flintstone',
          })
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
