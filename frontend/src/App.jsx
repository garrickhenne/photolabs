import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds
  } = useApplicationData();

  const homeRouteProps = {
    likes: state.likes,
    handleLikeId: updateToFavPhotoIds,
    toggleShowDetailsModal: onPhotoSelect,
    state
  };

  const photoDetailsModalProps = {
    toggleShowDetailsModal: onPhotoSelect,
    data: state.modalPhotoData,
    handleLikeId: updateToFavPhotoIds,
    state: state
  };

  return (
    <div className="App">
      <HomeRoute { ...homeRouteProps } />
      {state.showDetailsModal && state.modalPhotoData && <PhotoDetailsModal { ...photoDetailsModalProps } /> }
    </div>
  );
};

export default App;
