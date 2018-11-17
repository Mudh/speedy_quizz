/**
 * Types
 */
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// initial state
const initialState = {
  login: false,
  subscribe: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.modalType]: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        [action.modalType]: false,
      };

    default:
      return state;
  }
};

// action creator
export const openModal = modalType => ({
  type: OPEN_MODAL,
  modalType,
});
export const closeModal = modalType => ({
  type: CLOSE_MODAL,
  modalType,
});
