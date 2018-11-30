/**
 * Types
 */
export const LOAD_HOME_VISITOR = 'LOAD_HOME_VISITOR';
export const SET_HOME_VISITOR = 'SET_HOME_VISITOR';

// initial state
const initialState = {
  homeData: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_HOME_VISITOR:
      return {
        ...state,
      };
    case SET_HOME_VISITOR:
      return {
        ...state,
        homeData: { ...action.homeData },
      };

    default:
      return state;
  }
};

// action creator
export const loadHomeVisitor = () => ({
  type: LOAD_HOME_VISITOR,
});

export const setHomeVisitor = homeData => ({
  type: SET_HOME_VISITOR,
  homeData,
});
