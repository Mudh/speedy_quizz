/**
 * Types
 */
export const UPDATE_POINTS = 'UPDATE_POINTS';

// initial state
const initialState = {
  parties: 2,
  points: 100,
  skip: 2,
  revive: 3,
  timer: 4,
  fiftyFifty: 3,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return {
        ...state,
        points: state.points + action.newPoints,
      };

    default:
      return state;
  }
};

// action creator
export const updatePoints = newPoints => ({
  type: UPDATE_POINTS,
  newPoints,
});
