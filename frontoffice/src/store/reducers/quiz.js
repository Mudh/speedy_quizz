/**
 * local import
 */
import data from '../../data/questions';

/**
 * Types
 */
export const SET_QUIZ_START = 'SET_QUIZ_START';
export const SET_QUIZ_STOP = 'SET_QUIZ_STOP';
export const SET_QUIZ_DATAS = 'SET_QUIZ_DATAS';
export const NEXT_STEP = 'NEXT_STEP';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const ANSWER_VALUE = 'ANSWER_VALUE';
export const RESET_QUESTION = 'RESET_QUESTION';

// initial state
const initialState = {
  data: {},
  step: 1,
  questionNumber: 0,
  answerValue: '',
  isQuizStart: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUIZ_START:
      return {
        ...state,
        isQuizStart: true,
      };

    case SET_QUIZ_STOP:
      return {
        ...state,
        step: 1,
        questionNumber: 0,
        isQuizStart: false,
      };

    case SET_QUIZ_DATAS:
      return {
        ...state,
        data: { ...action.quizDatas },
      };

    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
        questionNumber: 0,
      };

    case NEXT_QUESTION:
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };

    case RESET_QUESTION:
      return {
        ...state,
        questionNumber: 0,
      };

    case ANSWER_VALUE:
      return {
        ...state,
        answerValue: action.answer,
      };

    default:
      return state;
  }
};

// action creator
export const setQuizStart = () => ({
  type: SET_QUIZ_START,
});

export const setQuizStop = () => ({
  type: SET_QUIZ_STOP,
});
export const setQuizDatas = quizDatas => ({
  type: SET_QUIZ_DATAS,
  quizDatas,
});

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const answerValue = answer => ({
  type: ANSWER_VALUE,
  answer,
});

export const resetQuestion = answer => ({
  type: RESET_QUESTION,
  answer,
});
