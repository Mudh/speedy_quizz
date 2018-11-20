/**
 * Types
 */
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

// initial state
const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

// action creator
export const onChangeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});
export const onSubmitLogin = (name, value) => ({
  type: SUBMIT_LOGIN,
});
