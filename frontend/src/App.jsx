import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [modalPhotoData, setModalPhotoData] = useState({});
  const [likes, setLikes] = useState([]);

  const handleLikeId = (id) => {
    // Check if id already exists. If it does then remove it.
    if (likes.includes(id)) {
      setLikes(likes.filter(like => like !== id));
      return;
    }

    // Otherwise add the liked id.
    setLikes([...likes, id]);
  };

  const toggleShowDetailsModal = (photoData) => {
    setModalPhotoData({ ...photoData});
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <div className="App">
      <HomeRoute toggleShowDetailsModal={ toggleShowDetailsModal } likes={ likes } handleLikeId={ handleLikeId } />
      {showDetailsModal && modalPhotoData && <PhotoDetailsModal toggleShowDetailsModal={ toggleShowDetailsModal } data={ modalPhotoData } handleLikeId={ handleLikeId } /> }
    </div>
  );
};

export default App;
