import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { urls : { regular } , user: { name, profile }, location : { city, country } } = props.data;

  return (
    <article className="photo-list__item">
      <img src={ regular } className="photo-list__image" />
      <div className=".photo-list__user-info photo-list__user-details">
        <img src={ profile } className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          { name }
          <div className="photo-list__user-location">{ city }, { country }</div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
