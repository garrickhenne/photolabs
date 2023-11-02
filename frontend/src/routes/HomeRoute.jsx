import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation likes={ props.likes }/>
      <PhotoList data={ photos } handleLikeId={ props.handleLikeId } toggleShowDetailsModal={ props.toggleShowDetailsModal }/>
    </div>
  );
};

export default HomeRoute;
