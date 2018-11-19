/**
 * Types
 */
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SWITCH_MODAL = 'SWITCH_MODAL';

// initial state
const initialState = {
  login: false,
  subscribe: false,
  score: false,
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
