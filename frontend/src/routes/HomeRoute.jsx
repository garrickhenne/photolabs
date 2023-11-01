import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = (props) => {
  const [likes, setLikes] = useState([]);

  const addLikeId = (id) => {
    setLikes([...likes, id]);
  };

  return (
    <div className="home-route">
      <TopNavigation likes={ likes }/>
      <PhotoList data={ photos } addLikeId={ addLikeId } toggleShowDetailsModal={ props.toggleShowDetailsModal }/>
    </div>
  );
};

export default HomeRoute;
