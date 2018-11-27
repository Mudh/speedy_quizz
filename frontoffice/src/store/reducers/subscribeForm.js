/**
 * Types
 */
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';

// initial state
const initialState = {
  lastname: '',
  firstname: '',
  nickname: '',
  email: '',
  password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_SUBSCRIBE:
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
export const onSubmitSubscribe = () => ({
  type: SUBMIT_SUBSCRIBE,
});
