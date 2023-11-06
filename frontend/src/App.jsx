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
    updateToFavPhotoIds,
    fetchPhotosByTopicId
  } = useApplicationData();

  const homeRouteProps = {
    likes: state.likes,
    topics: state.topics,
    photos: state.photos,
    handleLikeId: updateToFavPhotoIds,
    toggleShowDetailsModal: onPhotoSelect,
    handleTopicClick: fetchPhotosByTopicId,
  };

  const photoDetailsModalProps = {
    data: state.modalPhotoData,
    photos: state.photos,
    toggleShowDetailsModal: onPhotoSelect,
    handleLikeId: updateToFavPhotoIds,
  };

  return (
    <div className="App">
      <HomeRoute { ...homeRouteProps } />
      {state.showDetailsModal && state.modalPhotoData && <PhotoDetailsModal { ...photoDetailsModalProps } /> }
    </div>
  );
};

export default App;
