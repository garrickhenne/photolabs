import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoItems = props.data.map(photoData => {
    const photoListItemProps = {
      data: photoData,
      handleLikeId: props.handleLikeId,
      toggleShowDetailsModal: props.toggleShowDetailsModal,
      state: props.state
    };

    return <PhotoListItem key={ photoData.id } { ...photoListItemProps } />
  });

  return (
    <ul className="photo-list">
      { photoItems }
    </ul>
  );
};

export default PhotoList;
