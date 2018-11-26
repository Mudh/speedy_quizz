/**
 * Types
 */
export const UPDATE_POINTS = 'UPDATE_POINTS';
export const UPDATE_JOKER_COUNT = 'UPDATE_JOKER_COUNT';

// initial state
const initialState = {
  parties: 2,
  points: 100,
  skip: { count: 2, used: false },
  revive: { count: 3, used: false },
  fiftyFifty: { count: 3, used: false },
  timer: { count: 4, used: false },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return {
        ...state,
        points: state.points + action.newPoints,
      };

    case UPDATE_JOKER_COUNT: {
      const isPositive =
        state[action.id].count === 0
          ? { count: state[action.id].count, used: true }
          : { count: state[action.id].count - 1, used: true };
      return {
        ...state,
        [action.id]: isPositive,
      };
    }

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
