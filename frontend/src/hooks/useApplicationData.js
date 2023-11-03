import { useReducer } from "react";
import { reducer } from "./reducer";
import { ACTIONS } from "./reducer";

const initialState = {
  showDetailsModal: false,
  modalPhotoData: {},
  likes: [],
  favorited: false
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (id) => {
    // Check if id already exists. If it does then remove it.
    if (state.likes.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id });
      return;
    }

    // Otherwise add the liked id.
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: id });
  };

  const setPhotoSelected = (photoData) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, value: photoData });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const favoritePhoto = (id) => {
    dispatch({ type: ACTIONS.SET_FAV });
    updateToFavPhotoIds(id);
  };

  return {
    state: state,
    onPhotoSelect: setPhotoSelected,
    updateToFavPhotoIds,
    favoritePhoto
  };
};