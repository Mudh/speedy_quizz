/**
 * Types
 */
export const UPDATE_POINTS = 'UPDATE_POINTS';
export const UPDATE_JOKER_COUNT = 'UPDATE_JOKER_COUNT';
export const RESET_OWNED_POINTS = 'RESET_OWNED_POINTS';
export const SET_JOKER_REVIVE = 'SET_JOKER_REVIVE';
export const SET_JOKER_FIFTY = 'SET_JOKER_FIFTY';
export const SET_CURRENT_TIMER = 'SET_CURRENT_TIMER';

// initial state
const initialState = {
  parties: 2,
  totalPoints: 100,
  ownedPoints: 0,
  skip: { count: 2, used: false },
  revive: { count: 3, used: false },
  fiftyFifty: { count: 3, used: false },
  timer: { count: 4, used: false },
  filteredQuestion: undefined,
  currentTimer: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return {
        ...state,
        totalPoints: state.totalPoints + action.newPoints,
        ownedPoints: state.ownedPoints + action.newPoints,
      };

    case RESET_OWNED_POINTS:
      return {
        ...state,
        ownedPoints: 0,
      };

    case SET_JOKER_REVIVE:
      return {
        ...state,
        totalPoints: state.totalPoints - state.ownedPoints,
        filteredQuestion: undefined,
      };

    case SET_JOKER_FIFTY:
      return {
        ...state,
        filteredQuestion: action.question,
      };

    case SET_CURRENT_TIMER:
      return {
        ...state,
        currentTimer: state.currentTimer + action.currentTimer,
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

export const resetOwnedPoints = () => ({
  type: RESET_OWNED_POINTS,
});

export const setJokerRevive = () => ({
  type: SET_JOKER_REVIVE,
});

export const setJokerFifty = question => ({
  type: SET_JOKER_FIFTY,
  question,
});

export const setCurrentTimer = count => ({
  type: SET_CURRENT_TIMER,
  count,
});
