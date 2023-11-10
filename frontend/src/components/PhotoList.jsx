import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoItems = props.photos.map(photoData => {
    const photoListItemProps = {
      data: photoData,
      handleLikeId: props.handleLikeId,
      toggleShowDetailsModal: props.toggleShowDetailsModal,
      likes: props.likes,
      isFavorited: props.isFavorited
    };

    return <PhotoListItem key={ photoData.id } { ...photoListItemProps } />;
  });

  return (
    <ul className="photo-list">
      { photoItems }
    </ul>
  );
};

export default PhotoList;
