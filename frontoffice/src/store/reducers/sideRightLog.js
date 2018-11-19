/**
 * Types
 */
export const UPDATE_POINTS = 'UPDATE_POINTS';

// initial state
const initialState = {
  points: 100,
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
