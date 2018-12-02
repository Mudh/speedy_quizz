/**
 * Types
 */
export const LOAD_RANKING = 'LOAD_RANKING';
export const SET_RANKING = 'SET_RANKING';

// initial state
const initialState = {
  ranking: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_RANKING:
      return {
        ...state,
      };

    case SET_RANKING:
      return {
        ...state,
        ranking: [...action.ranking],
      };

    default:
      return state;
  }
};

// action creator
export const loadRanking = () => ({
  type: LOAD_RANKING,
});

export const setRanking = ranking => ({
  type: SET_RANKING,
  ranking,
});
