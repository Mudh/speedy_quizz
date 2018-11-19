/**
 * local import
 */
import data from '../../data/questions';

/**
 * Types
 */
export const OPEN_MODAL = 'OPEN_MODAL';

// initial state
const initialState = {
  data: data,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.quizName]: true,
      };

    default:
      return state;
  }
};

// action creator
export const openQuiz = quizName => ({
  type: OPEN_MODAL,
  quizName,
});
