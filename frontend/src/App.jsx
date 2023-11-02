import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [modalPhotoData, setModalPhotoData] = useState({});
  const [likes, setLikes] = useState([]);

  const addLikeId = (id) => {
    setLikes([...likes, id]);
  };

  const toggleShowDetailsModal = (photoData) => {
    setModalPhotoData({ ...photoData});
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <div className="App">
      <HomeRoute toggleShowDetailsModal={ toggleShowDetailsModal } likes={ likes } addLikeId={ addLikeId } />
      {showDetailsModal && modalPhotoData && <PhotoDetailsModal toggleShowDetailsModal={ toggleShowDetailsModal } data={ modalPhotoData } addLikeId={ addLikeId } /> }
    </div>
  );
};

export default App;
