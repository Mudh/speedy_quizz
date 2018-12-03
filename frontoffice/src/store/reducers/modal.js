/**
 * Types
 */
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SWITCH_MODAL = 'SWITCH_MODAL';
export const ANIMATE_MODAL = 'ANIMATE_MODAL';
export const RESET_ANIMATE_MODAL = 'RESET_ANIMATE_MODAL';

// initial state
const initialState = {
  login: false,
  subscribe: false,
  profil: false,
  addQuestion: false,
  score: false,
  expired: false,
  launch: false,
  gameover: false,
  opacity: false,
  bounce: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.modalName]: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        [action.modalName]: false,
      };

    case SWITCH_MODAL:
      return {
        ...state,
        [action.modalToClose]: false,
        [action.modalToOpen]: true,
      };

    case ANIMATE_MODAL:
      return {
        ...state,
        [action.animation]: true,
      };

    case RESET_ANIMATE_MODAL:
      return {
        ...state,
        opacity: false,
        bounce: false,
      };

    default:
      return state;
  }
};

// action creator
export const openModal = modalName => ({
  type: OPEN_MODAL,
  modalName,
});

export const closeModal = modalName => ({
  type: CLOSE_MODAL,
  modalName,
});

export const switchModal = (modalToClose, modalToOpen) => ({
  type: SWITCH_MODAL,
  modalToClose,
  modalToOpen,
});

export const animateModal = animation => ({
  type: ANIMATE_MODAL,
  animation,
});

export const resetAnimateModal = () => ({
  type: RESET_ANIMATE_MODAL,
});
