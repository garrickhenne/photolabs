import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoItems = props.data.map(photoData => {
    return <PhotoListItem key={ photoData.id } data={ photoData } addLikeId={ props.addLikeId } toggleShowDetailsModal={ props.toggleShowDetailsModal } />
  });

  return (
    <ul className="photo-list">
      { photoItems }
    </ul>
  );
};

export default PhotoList;
