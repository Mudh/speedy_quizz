/**
 * Types
 */
export const UPDATE_POINTS = 'UPDATE_POINTS';
export const UPDATE_JOKER_COUNT = 'UPDATE_JOKER_COUNT';

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

    case UPDATE_JOKER_COUNT:
      return {
        ...state,
        [action.id]: state[action.id] - 1,
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

export const updateJokerCount = id => ({
  type: UPDATE_JOKER_COUNT,
  id,
});
