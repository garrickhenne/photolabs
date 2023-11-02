import { useState, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_FAV: 'SET_FAV',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const likesReducer = (state, action) => {
  if (action.type === ACTIONS.FAV_PHOTO_ADDED) {
    return [...state, action.value];
  }

  if (action.type === ACTIONS.FAV_PHOTO_REMOVED) {
    return state.filter(like => like !== action.value);
  }

  throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
};

const showDetailsModalReducer = (state, action) => {
  if (action.type === ACTIONS.DISPLAY_PHOTO_DETAILS) {
    return !state;
  }

  throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
};

const modalPhotoDataReducer = (state, action) => {
  if (action.type === ACTIONS.SELECT_PHOTO) {
    return { ...action.value };
  }

  throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
};

const favoritedReducer = (state, action) => {
  if (action.type === ACTIONS.SET_FAV) {
    return !state;
  }

  throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
};

export const useApplicationData = () => {
  const [showDetailsModal, dispatchShowDetailsModal] = useReducer(showDetailsModalReducer, false);
  const [modalPhotoData, dispatchModalPhotoData] = useReducer(modalPhotoDataReducer, {});
  const [likes, dispatchLikes] = useReducer(likesReducer, []);
  const [favorited, dispatchFavorited] = useReducer(favoritedReducer, false);

  const updateToFavPhotoIds = (id) => {
    // Check if id already exists. If it does then remove it.
    if (likes.includes(id)) {
      dispatchLikes({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id });
      return;
    }

    // Otherwise add the liked id.
    dispatchLikes({ type: ACTIONS.FAV_PHOTO_ADDED, value: id });
  };

  const setPhotoSelected = (photoData) => {
    dispatchModalPhotoData({ type: ACTIONS.SELECT_PHOTO, value: photoData });
    dispatchShowDetailsModal({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const favoritePhoto = (id) => {
    dispatchFavorited({ type: ACTIONS.SET_FAV });
    updateToFavPhotoIds(id);
  };

  return {
    state: {
      showDetailsModal,
      modalPhotoData,
      likes
    },
    onPhotoSelect: setPhotoSelected,
    updateToFavPhotoIds,
    favoritePhoto
  };
};