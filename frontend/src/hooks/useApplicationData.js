import { useState } from "react";

export const useApplicationData = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [modalPhotoData, setModalPhotoData] = useState({});
  const [likes, setLikes] = useState([]);
  const [favorited, setFavorited] = useState(false);

  const updateToFavPhotoIds = (id) => {
    // Check if id already exists. If it does then remove it.
    if (likes.includes(id)) {
      setLikes(likes.filter(like => like !== id));
      return;
    }

    // Otherwise add the liked id.
    setLikes([...likes, id]);
  };

  const setPhotoSelected = (photoData) => {
    setModalPhotoData({ ...photoData });
    setShowDetailsModal(!showDetailsModal);
  };

  const favoritePhoto = (id) => {
    setFavorited(!favorited);
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