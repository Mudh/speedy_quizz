/*
 * SET AUTHORIZATION TOKEN
 */
// import
import axios from 'axios';

const updateJoker = jokerName => {
  const urlJokerUpdate = 'http://127.0.0.1:8000/quizz/joker/update';
  axios
    .post(urlJokerUpdate, {
      jokerName,
    })
    // succes
    .then(response => {
      // console.log('jokers', jokerName);
    })
    // echec
    .catch(error => {
      console.error(error);
    });
};

export default updateJoker;
