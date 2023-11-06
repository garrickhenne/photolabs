import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import CloseModalViewButton from 'components/CloseModalViewButton';

const PhotoDetailsModal = (props) => {
  const { id, urls: { full }, user: { name, profile }, location: { city, country }, similar_photos } = props.data;

  return (
    <div className="photo-details-modal">
      <CloseModalViewButton toggleShowDetailsModal={ props.toggleShowDetailsModal } />
      
      <div className="photo-details-modal__images">

        <PhotoFavButton handleLikeId={ props.handleLikeId } id={ id } />
        <img src={ full } alt="Enlarged version of clicked image" className='photo-details-modal__image' />

        <div className='photo-details-modal__header'>
          <div className="photo-details-modal__photographer-details">
            <img src={ profile } className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-info">
              { name }
              <div className="photo-details-modal__photographer-location">{ city }, { country }</div>
            </div>
          </div>
        </div>

        <div className="photo-details-modal__header">
          Similar Photos
        </div>

        <PhotoList photos={ Object.values(similar_photos) } handleLikeId={ props.handleLikeId } toggleShowDetailsModal={ () => { } } />
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
