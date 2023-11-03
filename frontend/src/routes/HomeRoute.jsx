import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = (props) => {
  const photoListProps = {
    data: photos,
    handleLikeId: props.handleLikeId,
    toggleShowDetailsModal: props.toggleShowDetailsModal,
    state: props.state
  };

  return (
    <div className="home-route">
      <TopNavigation likes={ props.likes }/>
      <PhotoList { ...photoListProps } />
    </div>
  );
};

export default HomeRoute;
