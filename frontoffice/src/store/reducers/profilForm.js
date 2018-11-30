/**
 * Types
 */
export const CHANGE_PROFIL_INPUT = 'CHANGE_PROFIL_INPUT';
export const SUBMIT_PROFIL = 'SUBMIT_PROFIL';
export const SET_PROFIL_INFOS = 'SET_PROFIL_INFOS';

// initial state
const initialState = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  description: '',
  password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PROFIL_INFOS:
      return {
        ...state,
        firstname: action.profil.firstname,
        lastname: action.profil.lastname,
        username: action.profil.username,
        email: action.profil.email,
        description: action.profil.description,
      };
    case SUBMIT_PROFIL:
      return {
        ...state,
      };

    case CHANGE_PROFIL_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

// action creator
export const onChangeProfil = (name, value) => ({
  type: CHANGE_PROFIL_INPUT,
  name,
  value,
});

export const onSubmitProfil = () => ({
  type: SUBMIT_PROFIL,
});

export const setProfilInfos = profil => ({
  type: SET_PROFIL_INFOS,
  profil,
});
