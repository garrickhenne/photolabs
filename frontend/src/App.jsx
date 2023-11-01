import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const toggleShowDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <div className="App">
      <HomeRoute toggleShowDetailsModal={ toggleShowDetailsModal } />
      {showDetailsModal && <PhotoDetailsModal toggleShowDetailsModal={ toggleShowDetailsModal }/> }
    </div>
  );
};

export default App;
