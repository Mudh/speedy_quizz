/**
 * local import
 */
import data from '../../data/questions';

/**
 * Types
 */
export const NEW_QUESTION = 'NEW_QUESTION';

// initial state
const initialState = {
  data: data,
  step: 1,
  questionNumber: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_QUESTION:
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };

    default:
      return state;
  }
};

// action creator
export const nextQuestion = () => ({
  type: NEW_QUESTION,
});
