/**
 * Types
 */
export const IS_LOADING = 'IS_LOADING';

// initial state
const initialState = {
  isLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      };

    default:
      return state;
  }
};

// action creator

export const isLoading = loading => ({
  type: IS_LOADING,
  loading,
});
