import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: {
      likes,
      topics,
      photos,
      modalPhotoData,
      showDetailsModal
    },
    onPhotoSelect,
    updateToFavPhotoIds,
    fetchPhotosByTopicId,
    isFavorited
  } = useApplicationData();

  const homeRouteProps = {
    likes,
    topics,
    photos,
    showDetailsModal,
    isFavorited,
    handleLikeId: updateToFavPhotoIds,
    toggleShowDetailsModal: onPhotoSelect,
    handleTopicClick: fetchPhotosByTopicId,
  };

  const photoDetailsModalProps = {
    likes,
    photos,
    data: modalPhotoData,
    showDetailsModal,
    isFavorited,
    toggleShowDetailsModal: onPhotoSelect,
    handleLikeId: updateToFavPhotoIds,
  };

  return (
    <div className="App">
      <HomeRoute { ...homeRouteProps } />
      { showDetailsModal && modalPhotoData && <PhotoDetailsModal { ...photoDetailsModalProps } /> }
    </div>
  );
};

export default App;
