/**
 * Types
 */
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const DISCONNECT = 'DISCONNECT';
export const FAKE_AUTH = 'FAKE_AUTH';

// initial state
const initialState = {
  email: '',
  password: '',
  fakeAuth: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        ...state,
      };

    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case DISCONNECT:
      return {
        ...state,
        fakeAuth: false,
      };

    case FAKE_AUTH:
      return {
        ...state,
        fakeAuth: true,
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

export const disconnect = () => ({
  type: DISCONNECT,
});

export const fakeAuth = () => ({
  type: FAKE_AUTH,
});
