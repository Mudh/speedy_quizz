/**
 * Types
 */
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';
export const TOGGLE_SUBSCRIBE_SUCCESS = 'TOGGLE_SUBSCRIBE_SUCCESS';
export const EMPTY_PASSWORD = 'EMPTY_PASSWORD';
export const EMPTY_SUBSCRIBE = 'EMPTY_SUBSCRIBE';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';

// initial state
const initialState = {
  lastname: '',
  firstname: '',
  username: '',
  email: '',
  password: '',
  success: false,
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

    case EMPTY_PASSWORD:
      return {
        ...state,
        password: '',
      };

    case EMPTY_SUBSCRIBE:
      return {
        ...state,
        lastname: '',
        firstname: '',
        username: '',
        email: '',
        password: '',
      };

    case TOGGLE_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        success: !state.success,
      };

    case REMOVE_SUCCESS:
      return {
        ...state,
        success: false,
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

export const emptyPassword = () => ({
  type: EMPTY_PASSWORD,
});

export const emptySubscribe = () => ({
  type: EMPTY_SUBSCRIBE,
});

export const toggleSubscribeSuccess = () => ({
  type: TOGGLE_SUBSCRIBE_SUCCESS,
});

export const removeSuccess = () => ({
  type: REMOVE_SUCCESS,
});
