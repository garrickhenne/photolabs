import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const photoListProps = {
    handleLikeId: props.handleLikeId,
    toggleShowDetailsModal: props.toggleShowDetailsModal,
    photos: props.photos
  };

  const topNavigationProps = {
    likes: props.likes,
    topics: props.topics,
    handleTopicClick: props.handleTopicClick,
    filterPhotos: props.filterPhotos
  };

  return (
    <div className="home-route">
      <TopNavigation { ...topNavigationProps } />
      <PhotoList { ...photoListProps } />
    </div>
  );
};

export default HomeRoute;
