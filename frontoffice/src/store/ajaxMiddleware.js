// import
import axios from 'axios';

// Types

const url = 'http://127.0.0.8000';

/**
 * Middleware de gestion ajax
 */

const ajax = store => next => action => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      {
        const state = store.getState();
        // ...
        axios
          .get(url)
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
