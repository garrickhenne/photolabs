import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const CloseModalViewButton = (props) => {
  return (
    <div className="photo-details-modal__top-bar">
      <button className="photo-details-modal__close-button">
        <img src={ closeSymbol } alt="close symbol" onClick={ props.toggleShowDetailsModal } />
      </button>
    </div>
  );
};

export default CloseModalViewButton;