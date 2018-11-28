/**
 * Types
 */
export const UPDATE_POINTS = 'UPDATE_POINTS';
export const LOOSE_ALL_POINTS = 'LOOSE_ALL_POINTS';
export const UPDATE_JOKER_COUNT = 'UPDATE_JOKER_COUNT';
export const RESET_OWNED_POINTS = 'RESET_OWNED_POINTS';
export const SET_JOKER_REVIVE = 'SET_JOKER_REVIVE';
export const SET_JOKER_FIFTY = 'SET_JOKER_FIFTY';
export const SET_START_TIMER = 'SET_START_TIMER';
export const SET_END_TIMER = 'SET_END_TIMER';
export const SET_JOKER_TIMER = 'SET_JOKER_TIMER';

// initial state
const initialState = {
  parties: 2,
  totalPoints: 100,
  ownedPoints: 0,
  totalOwnedPoints: 0,
  skip: { count: 2, used: false },
  revive: { count: 3, used: false },
  fiftyFifty: { count: 3, used: false },
  timer: { count: 4, used: false },
  filteredQuestion: undefined,
  levelTimer: 120000,
  startTimer: 0,
  endTimer: 0,
  extraTimer: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return {
        ...state,
        totalPoints: state.totalPoints + action.newPoints,
        ownedPoints: state.ownedPoints + action.newPoints,
        totalOwnedPoints: state.ownedPoints + action.newPoints,
      };

    case LOOSE_ALL_POINTS:
      return {
        ...state,
        totalPoints: state.totalPoints - state.totalOwnedPoints,
        ownedPoints: 0,
        totalOwnedPoints: 0,
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

    case SET_START_TIMER:
      return {
        ...state,
        startTimer: Math.floor(Date.now() / 1000),
      };

    case SET_END_TIMER:
      return {
        ...state,
        endTimer: Math.floor(Date.now() / 1000),
      };

    case SET_JOKER_TIMER: {
      const elapsedTime = (state.endTimer - state.startTimer) * 1000;
      const extraTime = state.levelTimer - elapsedTime + 30000;
      return {
        ...state,
        extraTimer: extraTime,
      };
    }

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

export const looseAllPoints = () => ({
  type: LOOSE_ALL_POINTS,
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

export const setJokerTimer = () => ({
  type: SET_JOKER_TIMER,
});

export const setStartTimer = () => ({
  type: SET_START_TIMER,
});

export const setEndTimer = endValue => ({
  type: SET_END_TIMER,
  endValue,
});
