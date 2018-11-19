/**
 * Types
 */
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SWITCH_MODAL = 'SWITCH_MODAL';

// initial state
const initialState = {
  login: false,
  subscribe: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.quizName]: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        [action.quizName]: false,
      };

    case SWITCH_MODAL:
      return {
        ...state,
        [action.quizToClose]: false,
        [action.quizToOpen]: true,
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

export const closeQuiz = quizName => ({
  type: CLOSE_MODAL,
  quizName,
});

export const switchQuiz = (quizToClose, quizToOpen) => ({
  type: SWITCH_MODAL,
  quizToClose,
  quizToOpen,
});
