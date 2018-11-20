/**
 * Types
 */
export const SEND_REQUEST = 'SEND_REQUEST';

// initial state
const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

// action creator
export const sendRequest = () => ({
  type: SEND_REQUEST,
});
