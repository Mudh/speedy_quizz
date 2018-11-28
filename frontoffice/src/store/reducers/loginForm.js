/**
 * Import
 */
import isEmpty from 'lodash/isEmpty';
/**
 * Types
 */
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DISCONNECT = 'DISCONNECT';
export const FAKE_AUTH = 'FAKE_AUTH';

// initial state
const initialState = {
  email: '',
  password: '',
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        ...state,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };

    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case DISCONNECT:
      return {
        ...state,
        isAuthenticated: false,
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

export const onSubmitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const disconnect = () => ({
  type: DISCONNECT,
});
