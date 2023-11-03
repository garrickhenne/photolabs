export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_FAV: 'SET_FAV',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

export const reducer = (state, action) => {
  if (action.type === ACTIONS.FAV_PHOTO_ADDED) {
    return {
      ...state,
      likes: [...state.likes, action.value]
    };
  }

  if (action.type === ACTIONS.FAV_PHOTO_REMOVED) {
    return {
      ...state,
      likes: state.likes.filter(like => like !== action.value)
    };
  }

  if (action.type === ACTIONS.DISPLAY_PHOTO_DETAILS) {
    return {
      ...state,
      showDetailsModal: !state.showDetailsModal
    };
  }

  if (action.type === ACTIONS.SELECT_PHOTO) {
    return {
      ...state,
      modalPhotoData: { ...action.value }
    };
  }

  if (action.type === ACTIONS.SET_FAV) {
    return {
      ...state,
      favorited: !state.favorited
    };
  }

  throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
};