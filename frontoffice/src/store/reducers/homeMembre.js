/**
 * Types
 */
export const CHOOSE_THEME_LEVEL = 'CHOOSE_THEME_LEVEL';
export const SET_THEME_LEVEL = 'SET_THEME_LEVEL';
export const LOAD_QUIZ_THEME = 'LOAD_QUIZ_THEME';
export const SET_QUIZ_THEME = 'SET_QUIZ_THEME';

// initial state
const initialState = {
  themes: [],
  theme: '',
  level: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_QUIZ_THEME:
      return {
        ...state,
      };

    case SET_QUIZ_THEME:
      return {
        ...state,
        themes: [...action.themes],
      };

    case CHOOSE_THEME_LEVEL:
      return {
        ...state,
        theme: action.theme,
        level: action.level,
      };

    case SET_THEME_LEVEL:
      return {
        ...state,
      };

    default:
      return state;
  }
};

// action creator
export const loadQuizTheme = () => ({
  type: LOAD_QUIZ_THEME,
});

export const setQuizTheme = themes => ({
  type: SET_QUIZ_THEME,
  themes,
});

export const chooseThemeLevel = (theme, level) => ({
  type: CHOOSE_THEME_LEVEL,
  theme,
  level,
});
export const setThemeLevel = () => ({
  type: SET_THEME_LEVEL,
});
