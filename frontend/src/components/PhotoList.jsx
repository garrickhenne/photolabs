import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoItems = props.data.map(photoData => {
    return <li key={ photoData.id }><PhotoListItem data={ photoData }/></li>
  })

  return (
    <ul className="photo-list">
      { photoItems }
    </ul>
  );
};

export default PhotoList;
