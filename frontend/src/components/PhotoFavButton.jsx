import React, { useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const handleClick = (id) => {
    // setFavorited((prev) => !prev);
    props.handleLikeId(id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={ () => handleClick(props.id) }>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={ props.isFavorited(props.id) } />
      </div>
    </div>
  );
}

export default PhotoFavButton;