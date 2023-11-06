import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { id, urls: { full }, user: { name, profile }, location: { city, country }, similar_photos } = props.data;

  const handleClickModalSimilarPhotos = () => {
    // do nothing.
  };
  
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button">
          <img src={ closeSymbol } alt="close symbol" onClick={ props.toggleShowDetailsModal }/>
        </button>
      </div>

      <div className="photo-details-modal__images">

        <PhotoFavButton handleLikeId={ props.handleLikeId } id={ id } state={ props.state } />
        <img src={ full } alt="Enlarged version of clicked image" className='photo-details-modal__image'/>
        
        <div className='photo-details-modal__header'>
          <div className="photo-details-modal__photographer-details">
            <img src={ profile } className="photo-details-modal__photographer-profile"/>
            <div className="photo-details-modal__photographer-info">
              { name }
              <div className="photo-details-modal__photographer-location">{ city }, { country }</div>
            </div>
          </div>
        </div>
        
        <div className="photo-details-modal__header">
          Similar Photos
        </div>

        <PhotoList data={ Object.values(similar_photos) } state={ props.state } handleLikeId={ props.handleLikeId } toggleShowDetailsModal={ handleClickModalSimilarPhotos } />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
